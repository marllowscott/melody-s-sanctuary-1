import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Schema.org JSON-LD for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Melody",
  "jobTitle": "Communication Coach",
  "description": "Professional communication coach helping executives and entrepreneurs enhance their communication skills.",
  "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  "url": window.location.href,
  "sameAs": [
    "https://www.linkedin.com/in/yourprofile",
    "https://twitter.com/yourhandle"
  ]
};

const About = () => {
  // Add JSON-LD to document head
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(personSchema);
    document.head.appendChild(script);
  }

  return (
    <section
      className="py-24 bg-secondary"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Melody, professional communication coach, helping professionals enhance their speaking skills"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="1000"
                itemProp="contentUrl"
              />
            </div>
            {/* Accent Block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4" itemProp="jobTitle">
              MEET MELODY | Communication Coach
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" itemProp="headline">
              Your Partner in <span className="text-primary">Communication Excellence</span>
            </h1>
            <div itemProp="description">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over a decade, I've helped <strong>executives, entrepreneurs, and emerging leaders</strong>
                transform their communication skills. My approach combines <strong>proven techniques</strong> with
                <strong>personalized coaching</strong> to unlock your authentic voice and boost your professional presence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're preparing for a <strong>keynote speech, high-stakes negotiation, or leadership presentation</strong>,
                or simply want to communicate with more impact in daily interactions — I provide tailored coaching
                to help you achieve your communication goals and drive meaningful results.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-border text-foreground hover:bg-background hover:text-foreground font-semibold px-8 mx-auto"
              aria-label="Learn more about Melody's coaching journey and methodology"
            >
              <Link to="/about" itemProp="url">
                My Full Story <span className="sr-only">about Melody's communication coaching</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
