import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/roll-1.svg');

  useEffect(() => {
    const images = ['/roll-1.svg', '/roll-2.svg', '/roll-3.svg'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 3;
      setCurrentImage(images[index]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 -mt-[150px] md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl">
          <div className="max-w-4xl lg:mr-12">
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
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300 mb-[10px]">
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

          {/* Desktop Inline Illustration */}
          <div className="hidden lg:flex relative w-[500px] h-auto mt-8 lg:mt-0 justify-center items-center">
            <img src={currentImage} className="w-full h-auto transition-subtle" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
