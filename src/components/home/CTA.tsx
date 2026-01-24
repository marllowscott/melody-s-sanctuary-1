import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-[url('/pre-footer.png')] bg-cover bg-center relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Elevate Your
            <br />
            <span className="text-primary">Leadership Impact?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's explore how we can support your leadership development and communication goals.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-6 group"
          >
            <Link to="/contact">
              Request a Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
