import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#teachers", label: "Our Teachers" },
    { href: "#methodology", label: "Methodology" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-['Poppins'] font-bold text-2xl">
              Brain Boost Academy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-['Poppins'] text-foreground hover:text-primary transition-colors duration-300"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 font-['Poppins'] text-foreground hover:text-primary transition-colors duration-300"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
