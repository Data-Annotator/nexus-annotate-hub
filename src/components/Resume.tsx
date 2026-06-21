import { Download, Briefcase, GraduationCap, Wrench, Award, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experiences = [
    {
      company: "Indium Software",
      role: "Senior Quality Analyst",
      period: "Nov 2025 – Present",
      points: [
        "Lead quality validation for LiDAR and 2D datasets used in AI/ML model training.",
        "Review 1800–1850 frames daily while maintaining strict quality benchmarks.",
        "Perform final dataset approval before client submission.",
        "Handle client escalations using structured root cause analysis.",
        "Supervise 10 annotators, improving team productivity by 10%.",
        "Reduced annotation error recurrence by 5% through corrective feedback.",
        "Maintain 95%+ client acceptance rate across delivered datasets.",
      ],
    },
    {
      company: "Apexon",
      role: "Quality Analyst",
      period: "Jul 2025 – Nov 2025",
      points: [
        "Managed quality control for autonomous AI dataset annotation projects.",
        "Trained and onboarded 7 new annotators.",
        "Led a team of 10 labelers ensuring project accuracy standards.",
        "Performed cuboid validation and object classification checks.",
        "Executed final dataset validation before client submission.",
      ],
    },
    {
      company: "Vista Engineering Solutions Pvt Ltd",
      role: "Quality Analyst",
      period: "Nov 2024 – Jun 2025",
      points: [
        "Audited AI training datasets for accuracy and annotation compliance.",
        "Ensured precision in bounding boxes and segmentation tasks.",
      ],
    },
    {
      company: "Desicrew Solutions Pvt Ltd",
      role: "Data Annotator",
      period: "Jan 2024 – Nov 2024",
      points: [
        "Delivered high-volume 2D and LiDAR annotation tasks.",
        "Consistently achieved productivity targets while maintaining quality thresholds.",
      ],
    },
  ];

  const competencies = [
    "3D LiDAR Cuboid Validation",
    "2D Bounding Box & Polygon QC",
    "Final Dataset Approval",
    "Root Cause Analysis (RCA)",
    "Team Supervision & Training",
    "Escalation Handling",
    "GIS Data Visualization (QGIS, ArcGIS)",
    "Productivity & Quality Reporting",
  ];

  const tools = [
    "Deepen.ai",
    "Segments.ai",
    "V7",
    "CVAT",
    "GT Studio",
    "Kognic",
    "QGIS",
    "ArcGIS",
    "Microsoft Excel",
  ];

  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-secondary font-semibold text-lg font-poppins">My background</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-poppins">
              Resume
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-poppins">
              A snapshot of my professional journey, expertise, and the tools I work with.
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins"
              >
                <a href="/Sivananthan_S_Resume.pdf" download>
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Summary Card */}
          <Card className="p-6 sm:p-8 mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground font-poppins mb-3">
              Sivananthan S
            </h3>
            <p className="text-secondary font-semibold font-poppins mb-4">
              Senior Quality Analyst – LiDAR & 2D Annotation
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-poppins mb-4">
              <span className="flex items-center gap-2"><MapPin size={16} /> Tamil Nadu, India</span>
              <span className="flex items-center gap-2"><Phone size={16} /> 9709883785</span>
              <a href="mailto:sivananthansubbramaniam@gmail.com" className="flex items-center gap-2 hover:text-secondary break-all">
                <Mail size={16} /> sivananthansubbramaniam@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sivananthan-s-490160213"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <p className="text-muted-foreground leading-relaxed font-poppins">
              Senior Quality Analyst with nearly 2 years of experience in LiDAR and 2D dataset
              validation for AI/ML training projects. Experienced in team supervision, escalation
              handling, and final dataset approvals. Consistently reviews 1800–1850 frames per day
              while maintaining strict quality benchmarks. Improved team productivity by 10% and
              reduced recurring annotation errors by 5%. Maintains 95%+ client acceptance rate.
              Additionally experienced with GIS tools including QGIS and ArcGIS for geospatial data
              visualization and analysis.
            </p>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-secondary" size={28} />
                <h3 className="text-2xl font-bold text-foreground font-poppins">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <Card
                    key={i}
                    className="p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground font-poppins">
                          {exp.role}
                        </h4>
                        <p className="text-secondary font-medium font-poppins">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-poppins whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground font-poppins list-disc list-inside">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-secondary" size={28} />
                  <h3 className="text-2xl font-bold text-foreground font-poppins">Core Skills</h3>
                </div>
                <Card className="p-6">
                  <ul className="space-y-2">
                    {competencies.map((c, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground font-poppins flex items-start gap-2"
                      >
                        <span className="text-secondary mt-1">▸</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="text-secondary" size={28} />
                  <h3 className="text-2xl font-bold text-foreground font-poppins">Tools</h3>
                </div>
                <Card className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full font-poppins"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-secondary" size={28} />
                  <h3 className="text-2xl font-bold text-foreground font-poppins">Education</h3>
                </div>
                <Card className="p-6">
                  <h4 className="font-bold text-foreground font-poppins">
                    BSc Costume Design & Fashion
                  </h4>
                  <p className="text-sm text-muted-foreground font-poppins mt-1">
                    Kaamadhenu Arts and Science College
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
