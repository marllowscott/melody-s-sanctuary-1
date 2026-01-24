import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Overview" },
    { path: "/services", label: "Our Work" },
    { path: "/about", label: "Who We Serve" },
    { path: "/book", label: "Speaking & Coaching" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-foreground">MELODY</span>
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={link.path === "/" ? () => window.scrollTo(0, 0) : undefined}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
              <Link to="/contact">Request a Conversation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.path === "/") window.scrollTo(0, 0);
                  }}
                  className={`text-lg font-medium tracking-wide transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Request a Conversation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
