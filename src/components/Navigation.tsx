import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  const navLinks = [{
    label: "Home",
    id: "home"
  }, {
    label: "About",
    id: "about"
  }, {
    label: "Skills",
    id: "skills"
  }, {
    label: "Services",
    id: "services"
  }, {
    label: "Portfolio",
    id: "portfolio"
  }, {
    label: "Contact",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary font-poppins">Sivananthan S</h2>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-foreground hover:text-secondary font-medium transition-colors font-poppins">
                {link.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-foreground hover:text-secondary font-medium transition-colors text-left font-poppins">
                  {link.label}
                </button>)}
              <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full font-poppins">
                Get in Touch
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navigation;