import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold tracking-tight">
              <span className="text-foreground">MELODY</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Empowering professionals to communicate with confidence, clarity, and impact. 
              Transform how you connect with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground mb-4">
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">Book Me</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground mb-4">
              GET IN TOUCH
            </h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <p>hello@melodycoach.com</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Melody. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
