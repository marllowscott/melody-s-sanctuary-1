import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the community!",
      description: "You'll receive communication tips and insights directly in your inbox.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elevate Your Voice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Join my newsletter for weekly insights on communication mastery, 
            confidence building, and authentic leadership. No spam — just strategies 
            that work.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12 px-4"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8 group"
            >
              {isSubmitting ? "Joining..." : "Subscribe"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            Join 5,000+ professionals who are mastering the art of communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
