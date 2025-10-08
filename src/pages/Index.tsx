import { useEffect, useRef } from "react";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  GitBranch,
  Shield,
  Network,
  Container,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-swipe-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".observe-fade");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const skills = {
    "Cloud & Infrastructure": [
      { name: "AWS (EC2, S3, IAM, VPC, CloudWatch)", icon: Cloud },
      { name: "Docker & Kubernetes", icon: Container },
    ],
    "System Administration": [
      { name: "Linux/Unix", icon: Terminal },
      { name: "Shell Scripting", icon: Code2 },
    ],
    "Networking": [
      { name: "TCP/IP, DNS, VPN, Firewalls", icon: Network },
      { name: "Load Balancing", icon: Network },
    ],
    "Automation & DevOps": [
      { name: "Docker, Kubernetes, Terraform", icon: Container },
      { name: "CI/CD (GitHub Actions, Jenkins)", icon: GitBranch },
    ],
    "Monitoring & Security": [
      { name: "Prometheus, Grafana", icon: Database },
      { name: "Backup & Disaster Recovery", icon: Shield },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-fade-in" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-scale-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Ranadheer Pothula
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                QA Analyst & Cloud Solutions Engineer
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:ranadheerpothula13@gmail.com" className="hover:text-primary transition-colors">
                  ranadheerpothula13@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
              <Button asChild size="lg" className="shadow-material-lg hover:shadow-material-xl transition-all hover:scale-105 active:scale-95">
                <a href="https://www.linkedin.com/in/ranadheerpothula" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-material-md hover:shadow-material-lg transition-all hover:scale-105 active:scale-95">
                <a href="mailto:ranadheerpothula13@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                QA Analyst with around 1 year of hands-on experience ensuring data quality and testing reliability for AI-related projects. 
                Skilled in validating large datasets, prioritizing reusability, identifying critical workflows using tools like Excel, SQL, and Python (Pandas), 
                to ensure data accuracy and consistency. I also specialize in functional and data quality testing, developing and executing functional test cases, 
                coordinating with Dev/Ops and maintaining clear, well-documented test processes. Additionally, I have practical exposure to DevOps as a freelancer, 
                working with Docker, CI/CD pipelines, and basic AWS database management, which helps me understand deployment workflows and collaborate effectively 
                with development and operations teams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center observe-fade opacity-0">Experience</h2>
            
            <Card className="p-8 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">QA Analyst</h3>
                  <p className="text-lg text-primary font-medium">Ignite Digital Solutions</p>
                </div>
                <Badge variant="secondary" className="self-start">
                  August 2024 - July 2025
                </Badge>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Validated AI-generated and structured datasets using tools like Excel, SQL, and Python (Pandas) to ensure data accuracy and consistency.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Performed functional and data quality testing in cloud-based environments (AWS S3, EC2) under team guidance.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Logged and tracked bugs using tools like Jira, collaborated with developers to verify fixes.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Wrote simple automation scripts using Python and Shell scripting to reduce manual QA tasks.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Followed data security and access protocols using AWS IAM and basic encryption standards to maintain compliance during QA testing.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center observe-fade opacity-0">Featured Project</h2>
            
            <Card className="p-8 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  OpenTelemetry Astronomy Shop
                </h3>
                <a 
                  href="https://github.com/open-telemetry/opentelemetry-demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>
              
              <Badge variant="outline" className="mb-4">Open Source Contribution</Badge>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Full-stack OpenTelemetry Project - Part of OpenTelemetry Project at CNCF
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Contributed to a cloud-native e-commerce demo project demonstrating the implementation of distributed tracing and observability using OpenTelemetry.</p>
                  </div>
                  <div className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Set up and managed container deployments using Docker and Kubernetes for a realistic, cloud-native environment.</p>
                  </div>
                  <div className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Integrated OpenTelemetry instrumentation to enable distributed tracing and monitoring across multiple languages (TypeScript, Python, Go, Java).</p>
                  </div>
                  <div className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Improved CI/CD automation via GitHub Actions, enhanced system diagnostics, and contributed to project documentation and developer onboarding.</p>
                  </div>
                  <div className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Supported troubleshooting, monitoring performance metrics, and participated in active issue resolution and project community discussions.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center observe-fade opacity-0">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <Card 
                  key={category} 
                  className="p-6 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                  <div className="space-y-3">
                    {items.map((skill) => (
                      <div key={skill.name} className="flex items-start gap-3 group">
                        <skill.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 shadow-material-lg mt-6 observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-primary">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Troubleshooting",
                  "Backup & Disaster Recovery",
                  "Collaboration & Version Control",
                  "Git/GitHub",
                  "Jira"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center observe-fade opacity-0">Education</h2>
              <Card className="p-8 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">BTech Computer Science</h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      Annamacharya Institute of Technology and Science (JNTUH)
                    </p>
                    <p className="text-muted-foreground">Hyderabad, Telangana • 2024</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center observe-fade opacity-0">Certifications</h2>
              <div className="space-y-4">
                <Card className="p-6 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">AWS Certified Solutions Architect</h3>
                      <Badge variant="outline">Associate (In Progress)</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-material-lg observe-fade opacity-0 hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">ChatGPT Prompt Engineering for Developers</h3>
                      <p className="text-sm text-muted-foreground">Deeplearning.ai</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 observe-fade opacity-0">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-8 observe-fade opacity-0">
              I'm always open to discussing new opportunities, projects, or collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 observe-fade opacity-0">
              <Button asChild size="lg" className="shadow-material-lg hover:shadow-material-xl transition-all duration-300 hover:scale-105 active:scale-95">
                <a href="mailto:ranadheerpothula13@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-material-md hover:shadow-material-lg transition-all duration-300 hover:scale-105 active:scale-95">
                <a href="https://www.linkedin.com/in/ranadheerpothula" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © 2025 Ranadheer Pothula. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
