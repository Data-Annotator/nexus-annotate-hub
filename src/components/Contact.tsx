import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
                      <a
                        href="mailto:sivanantha@example.com"
                        className="text-muted-foreground hover:text-secondary transition-colors font-poppins"
                      >
                        sivanantha@example.com
                      </a>
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
                      <a
                        href="https://www.linkedin.com/in/sivanantha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors font-poppins"
                      >
                        linkedin.com/in/sivanantha
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 animate-fade-in-scale border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
