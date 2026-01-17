import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Mic } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "1:1 Coaching",
      description: "Personalized sessions tailored to your specific goals, challenges, and communication style.",
    },
    {
      icon: Users,
      title: "Executive Presence",
      description: "Develop the gravitas and authority that commands attention and inspires confidence.",
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Master the stage. From TED talks to boardroom presentations, own every moment.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
            WHAT I OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform Your Communication
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Focused, results-driven coaching designed to elevate how you communicate, 
            influence, and lead.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 group"
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
