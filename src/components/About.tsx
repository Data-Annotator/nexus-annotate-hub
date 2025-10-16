import { GraduationCap, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Precision Focused",
      description: "Delivering high-quality annotations with meticulous attention to detail"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always staying updated with the latest AI/ML annotation techniques"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Story */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground font-poppins">
                My Journey in Data Annotation
              </h3>
              <p className="text-muted-foreground leading-relaxed font-poppins">
                I am a dedicated Data Annotator with a passion for contributing to the advancement
                of artificial intelligence and machine learning technologies. My role involves
                meticulously labeling and preparing datasets that serve as the foundation for
                training AI models.
              </p>
              <p className="text-muted-foreground leading-relaxed font-poppins">
                With a strong foundation in computer science and hands-on experience with
                industry-leading annotation tools, I bring precision, consistency, and efficiency
                to every project. My work directly impacts the accuracy and performance of AI
                systems across various domains.
              </p>

              {/* Education */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <GraduationCap className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-poppins">
                      B.Sc. Computer Science
                    </h4>
                    <p className="text-muted-foreground text-sm font-poppins">
                      Kaamadhenu Arts And Science College
                    </p>
                    <p className="text-muted-foreground text-sm font-poppins">
                      Bharathiyar University, 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                      <item.icon className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 font-poppins">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm font-poppins">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
