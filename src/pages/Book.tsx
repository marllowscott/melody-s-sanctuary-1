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

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mreeargb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: "Your inquiry has been sent. I'll be in touch soon to schedule our call.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: "Flexible Scheduling",
      description: "Book sessions that fit your busy calendar",
    },
    {
      title: "30-Minute Consult",
      description: "Free initial consultation to discuss your needs",
    },
    {
      title: "Quick Response",
      description: "Hear back within 24 hours",
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
              <div
                key={index}
                className="group bg-card rounded-lg p-8 border border-primary hover:border-primary/80 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-6">
                  <img
                    src={`/card-${index + 1}-icon.svg`}
                    alt=""
                    className="w-7 h-7 text-foreground"
                    width={28}
                    height={28}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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

              <form
                action="https://formspree.io/f/mreeargb"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
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
