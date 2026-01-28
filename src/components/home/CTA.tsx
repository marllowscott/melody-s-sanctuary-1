import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  console.log('CTA component rendering');
  return (
    <section className="py-32 bg-none md:bg-[url('/pre-footer.png')] bg-cover bg-center relative overflow-hidden">

      <div className="mx-auto px-6 relative z-10 w-full max-w-full">
        <div className="max-w-4xl lg:mr-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Elevate Your
            <br />
            <span className="text-primary">Leadership Impact?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-full md:max-w-2xl mx-auto">
            Let's explore how we can support your leadership development and communication goals.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 group"
          >
            <Link to="/contact">
              Request a Conversation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
