import { useState } from "react";
import { Mail, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "" // Spam prevention
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      return;
    }

    // Rate limiting - prevent spam (30 second cooldown)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      toast({
        title: "Please Wait",
        description: "Please wait 30 seconds before sending another message.",
        variant: "destructive"
      });
      return;
    }

    // Trim inputs
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Enhanced validation
    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Name must be between 2 and 100 characters.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
      toast({
        title: "Invalid Message",
        description: "Message must be between 10 and 1000 characters.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: trimmedName,
        reply_to: trimmedEmail,
        message: trimmedMessage
      };

      await emailjs.send(
        "service_k0xhwnx", // Service ID
        "template_vyahqnu", // Template ID
        templateParams,
        "vd_fe7hoP2OxyJLEb" // Public Key
      );

      // Success
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: ""
      });

      // Update last submit time
      setLastSubmitTime(now);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              Contact Me
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-poppins">
              Let's discuss how I can help with your data annotation needs. Feel free to reach out
              through the form or connect directly via email or LinkedIn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 font-poppins">
                  I'm always open to discussing new projects, collaboration opportunities, or
                  answering any questions about data annotation services.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-poppins">Email</p>
                      <a href="mailto:sivananthansubbramaniam@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors font-poppins">sivananthansubbramaniam@gmail.com</a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <Linkedin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-poppins">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/sivanantha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors font-poppins">www.linkedin.com/in/sivananthan-s-490160213</a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 animate-fade-in-scale border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-poppins">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    className="font-poppins" 
                    disabled={isSubmitting}
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-poppins">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    className="font-poppins" 
                    disabled={isSubmitting}
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-poppins">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    className="font-poppins" 
                    disabled={isSubmitting}
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins group" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;