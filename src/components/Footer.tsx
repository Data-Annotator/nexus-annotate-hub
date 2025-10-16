import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 font-poppins">Sivanantha</h3>
              <p className="text-primary-foreground/80 font-poppins">
                Professional Data Annotator specializing in AI/ML dataset preparation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 font-poppins">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 font-poppins">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:sivanantha@example.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins"
                >
                  <Mail size={18} />
                  <span>sivanantha@example.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sivanantha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/70 font-poppins">
              © {currentYear} Sivanantha Subbramaniam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
