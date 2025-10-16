import { Tag, PlaySquare, CheckSquare, Database, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Tag,
      title: "Image Annotation",
      description: "Comprehensive image labeling services including object detection, bounding boxes, polygon segmentation, and image classification. Every annotation is performed with pixel-perfect precision to ensure the highest quality training data for your AI models.",
      features: ["Object Labeling", "Bounding Boxes", "Segmentation", "Classification"]
    },
    {
      icon: PlaySquare,
      title: "Video Annotation",
      description: "Advanced video annotation services featuring object tracking across frames, temporal event labeling, and activity recognition. Ideal for autonomous vehicles, surveillance systems, and action recognition applications.",
      features: ["Object Tracking", "Frame-by-Frame Labeling", "Activity Recognition", "Temporal Annotations"]
    },
    {
      icon: CheckSquare,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to review, validate, and correct annotations. Multiple verification rounds ensure your datasets meet the highest standards for model training and achieve optimal performance.",
      features: ["Annotation Review", "Error Correction", "Consistency Checks", "Validation Reports"]
    },
    {
      icon: Database,
      title: "Dataset Preparation",
      description: "End-to-end dataset preparation services including data organization, formatting, splitting into training/validation sets, and comprehensive documentation. Delivered ready-to-use for immediate model training.",
      features: ["Data Organization", "Format Conversion", "Train/Test Split", "Documentation"]
    },
    {
      icon: Settings,
      title: "Tool Expertise",
      description: "Proficient in industry-leading annotation platforms including GT Studio, Kognic, and various custom annotation tools. Adaptable to any annotation workflow and quick to learn new tools as needed.",
      features: ["GT Studio", "Kognic", "Custom Tools", "Workflow Optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">
              What I offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              Professional Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-poppins">
              Comprehensive data annotation services to power your AI and machine learning projects
              with precision and reliability
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-8 hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-4 rounded-xl group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="text-secondary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-poppins">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="text-sm text-muted-foreground font-poppins">
                          {feature}
                        </span>
                      </div>
                    ))}
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

export default Services;
