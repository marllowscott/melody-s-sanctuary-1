import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Melody transformed my career. I went from dreading presentations to actively seeking speaking opportunities.",
      name: "Sarah Chen",
      title: "VP of Marketing, TechCorp",
    },
    {
      quote: "Melody has a rare gift for identifying exactly what's holding you back and giving you the tools to break through.",
      name: "Marcus Johnson",
      title: "Startup Founder",
    },
    {
      quote: "After just three sessions, I secured my biggest contract ever. The confidence I gained was immediately visible to my clients.",
      name: "Elena Rodriguez",
      title: "Senior Consultant",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
            CLIENT STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices of Transformation
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              <p className="text-lg text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
