import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, Sparkles, Target } from "lucide-react";

const ServicesPage = () => {
  const benefits = [
    "Personalized assessment of your current communication style",
    "Tailored strategies for your specific goals and challenges",
    "Real-time feedback and practice sessions",
    "Techniques for managing anxiety and building confidence",
    "Tools for structuring compelling narratives",
    "Ongoing support and accountability",
  ];

  const outcomes = [
    {
      icon: MessageCircle,
      title: "Clarity",
      description: "Communicate complex ideas with precision and impact.",
    },
    {
      icon: Sparkles,
      title: "Confidence",
      description: "Speak with authentic authority in any situation.",
    },
    {
      icon: Target,
      title: "Connection",
      description: "Build genuine rapport and influence with your audience.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
              SERVICES
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              1:1 Communication
              <br />
              <span className="text-primary">Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Intensive, personalized coaching designed to transform how you communicate, 
              influence, and lead. Your goals. Your pace. Your breakthrough.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
                THE EXPERIENCE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What You Get
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every coaching engagement is fully customized to your unique situation, 
                goals, and communication challenges. Whether you're preparing for a 
                high-stakes presentation, developing executive presence, or building 
                overall communication confidence — I meet you where you are.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Coaching session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
              OUTCOMES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What You'll Achieve
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond techniques — we build lasting transformation in how you show up 
              and communicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-8 border border-primary text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <outcome.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
              THE PROCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Discovery Call
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We start with a complimentary call to understand your goals, 
                  challenges, and whether we're a good fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Custom Plan
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I create a personalized coaching roadmap based on your specific 
                  situation and objectives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Transform
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through regular sessions and practice, we build the skills and 
                  confidence that create lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Investment in coaching varies based on your goals and engagement length. 
              Let's discuss what's right for you.
            </p>
            <Button 
              asChild 
              size="lg"
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-6 group"
            >
              <Link to="/book">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
