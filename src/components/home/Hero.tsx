import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-6 opacity-0 animate-fade-up">
            COMMUNICATION COACH
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up delay-100">
            <span className="text-foreground">Own Your</span>
            <br />
            <span className="text-primary">Voice</span>
            <span className="text-foreground">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-200">
            Master the art of powerful communication. Command any room. 
            Deliver your message with confidence and conviction.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
            <Button 
              asChild 
              size="lg" 
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 group"
            >
              <Link to="/book">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-lg border-border text-foreground hover:bg-secondary hover:text-foreground font-semibold text-lg px-8 py-6"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
