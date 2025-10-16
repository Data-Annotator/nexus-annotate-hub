import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-lg font-poppins">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-poppins leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sivanantha Subbramaniam
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-poppins">
              Dedicated Data Annotator contributing to AI/ML model development through
              precise data labeling and quality dataset preparation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins group"
              >
                Let's Connect
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-poppins"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent rounded-full opacity-60 animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                
                {/* Profile Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <img
                    src={profileImage}
                    alt="Sivanantha Subbramaniam - Data Annotator"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
