import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Your voice is unique. I help you discover and amplify it, not replace it.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "Every technique I teach is backed by research in psychology and communication science.",
    },
    {
      icon: Users,
      title: "Personalized",
      description: "No cookie-cutter approaches. Every coaching journey is tailored to your goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "I hold myself and my clients to the highest standards of communication mastery.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
                ABOUT ME
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                The Story Behind
                <br />
                <span className="text-primary">The Voice</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I wasn't born a confident communicator. In fact, I spent years terrified of
                speaking up in meetings, avoiding presentations at all costs, and feeling
                invisible in rooms full of louder voices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                That changed when I decided to face my fears head-on. Through years of
                study, practice, and coaching, I transformed not just how I communicate —
                but how I show up in the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Now, I help others make that same transformation. Because I know firsthand
                that powerful communication isn't a gift you're born with — it's a skill
                anyone can learn.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                  alt="Melody - Communication Coach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From corporate executive to dedicated coach — here's how I got here.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <p className="text-primary font-semibold mb-2">The Beginning</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Overcoming Fear
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started my career in marketing, where I quickly realized that technical
                  skills weren't enough. The people who advanced were the ones who could
                  communicate their ideas with confidence and clarity.
                </p>
              </div>

              <div>
                <p className="text-primary font-semibold mb-2">The Transformation</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Finding My Voice
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Invested in my own development — hiring coaches, studying communication
                  science, practicing relentlessly. Within two years, I went from avoiding
                  the spotlight to seeking it out.
                </p>
              </div>

              <div>
                <p className="text-primary font-semibold mb-2">The Calling</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Becoming a Coach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Colleagues started asking for help with their own communication challenges.
                  That's when I realized my true calling wasn't climbing the corporate ladder —
                  it was helping others find their voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
              MY VALUES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What I Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Write Your Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Your communication transformation starts with a single conversation.
              I'd love to hear about your goals and how I can help you achieve them.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-6 group"
            >
              <Link to="/book">
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
