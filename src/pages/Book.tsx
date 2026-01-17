import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Calendar, Clock, Video } from "lucide-react";

const Book = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request received!",
      description: "I'll review your inquiry and get back to you within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Sessions are scheduled around your availability.",
    },
    {
      icon: Clock,
      title: "60-90 Minute Sessions",
      description: "Deep, focused work on your communication goals.",
    },
    {
      icon: Video,
      title: "Virtual or In-Person",
      description: "Meet online or at my LA studio — your choice.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
              BOOK ME
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Work
              <br />
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to transform your communication? Fill out the form below and 
              I'll be in touch to discuss how we can work together.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Booking Inquiry
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell me a bit about yourself and what you're looking to achieve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="rounded-lg bg-secondary border-border text-foreground"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="rounded-lg bg-secondary border-border text-foreground"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-lg bg-secondary border-border text-foreground"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Company / Role
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    className="rounded-lg bg-secondary border-border text-foreground"
                    placeholder="Your company and title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-foreground">
                    What are your communication goals? *
                  </Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    className="rounded-lg bg-secondary border-border text-foreground resize-none"
                    placeholder="Tell me about your goals, challenges, or what prompted you to reach out..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-foreground">
                    Timeline
                  </Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    className="rounded-lg bg-secondary border-border text-foreground"
                    placeholder="Any upcoming events or deadlines I should know about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral" className="text-foreground">
                    How did you hear about me?
                  </Label>
                  <Input
                    id="referral"
                    name="referral"
                    className="rounded-lg bg-secondary border-border text-foreground"
                    placeholder="Referral, social media, search, etc."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-lg group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  I typically respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
