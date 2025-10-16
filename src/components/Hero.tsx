import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5"></div>
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary font-semibold text-sm font-poppins">
                Available for Projects
              </span>
            </div>

            {/* Heading with enhanced gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-poppins leading-tight">
              Hello, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-scale">
                  Sivanantha Subbramaniam
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10"></div>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground font-poppins leading-relaxed max-w-lg">
              Dedicated Data Annotator contributing to AI/ML model development through
              precise data labeling and quality dataset preparation.
            </p>

            {/* Enhanced Stats */}
            <div className="flex gap-8 py-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground font-poppins">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border"></div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground font-poppins">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px bg-border"></div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground font-poppins">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-poppins group shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary backdrop-blur-sm font-poppins transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="relative animate-fade-in-scale">
            {/* Floating decorative elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }}></div>
            
            {/* Profile Image Container with glassmorphism */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-primary/20 to-accent/30 rounded-[2.5rem] blur-2xl"></div>
              
              {/* Main card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm border border-secondary/20">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[slide-in-right_3s_ease-in-out_infinite]"></div>
                
                {/* Image */}
                <img
                  src={profileImage}
                  alt="Sivanantha Subbramaniam - Data Annotator"
                  className="w-full h-auto relative z-10"
                />
                
                {/* Bottom info card with glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md rounded-2xl border border-border/50 p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-semibold text-foreground font-poppins">Ready to collaborate</div>
                      <div className="text-xs text-muted-foreground">Specialized in AI/ML datasets</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-background/90 backdrop-blur-md rounded-2xl border border-border/50 p-3 shadow-xl animate-float">
                <div className="text-2xl">🎯</div>
              </div>
              <div className="absolute -right-4 top-2/3 bg-background/90 backdrop-blur-md rounded-2xl border border-border/50 p-3 shadow-xl animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/20">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
