import { Image, Video, CheckCircle2, Wrench, Eye, Clock, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Image,
      title: "Image Annotation",
      description: "Expert in object labeling, bounding boxes, segmentation, and classification",
      color: "text-secondary"
    },
    {
      icon: Video,
      title: "Video Annotation",
      description: "Specialized in object tracking, frame-by-frame labeling, and activity recognition",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Tool Proficiency",
      description: "Advanced skills in GT Studio, Kognic, and various annotation platforms",
      color: "text-primary"
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Meticulous review and correction of annotations to ensure dataset accuracy",
      color: "text-secondary"
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Exceptional precision in identifying and labeling complex data patterns",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient workflow management to meet project deadlines consistently",
      color: "text-primary"
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "Strong team collaboration and communication skills in diverse projects",
      color: "text-secondary"
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">
              My expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              Skills & Capabilities
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-poppins">
              A comprehensive skill set combining technical proficiency with analytical thinking
              to deliver exceptional data annotation results
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/50 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`bg-muted p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={skill.color} size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-poppins">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-poppins">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
