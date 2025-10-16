import { Car, ShoppingBag, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      icon: Car,
      title: "Autonomous Vehicle Dataset Annotation",
      description: "Comprehensive annotation project for self-driving car systems involving precise object labeling and tracking across thousands of video frames. Labeled pedestrians, vehicles, traffic signs, and road infrastructure with bounding boxes and semantic segmentation.",
      achievements: [
        "Annotated 50,000+ frames with 99.2% accuracy",
        "Multi-class object detection and tracking",
        "Contributed to improved model performance by 15%"
      ],
      tags: ["Computer Vision", "Object Detection", "Video Annotation"]
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce Image Classification",
      description: "Large-scale image classification project for an e-commerce platform. Categorized product images across multiple hierarchical categories and tagged attributes like color, style, and material to enhance search and recommendation algorithms.",
      achievements: [
        "Classified 100,000+ product images",
        "Multi-label attribute tagging",
        "Improved product discovery by 25%"
      ],
      tags: ["Image Classification", "E-commerce", "Multi-label"]
    },
    {
      icon: Shield,
      title: "Video Surveillance Activity Recognition",
      description: "Security-focused video annotation project for activity recognition systems. Frame-by-frame labeling of human activities, interactions, and anomalous behaviors to train AI models for intelligent surveillance applications.",
      achievements: [
        "Labeled 30+ activity types across 20,000+ video clips",
        "Temporal event annotation with precise timestamps",
        "Enhanced security detection accuracy to 94%"
      ],
      tags: ["Activity Recognition", "Video Analysis", "Security AI"]
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">
              My work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-poppins">
              Showcase of notable data annotation projects demonstrating precision, scale, and
              impact on AI model performance
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="text-primary-foreground" size={40} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground font-poppins">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-poppins">
                        {project.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 pt-2">
                        {project.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-foreground font-poppins">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full font-poppins"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
