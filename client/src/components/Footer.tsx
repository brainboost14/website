import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-['Poppins'] font-bold text-xl mb-4">Brain Boost Academy</h3>
            <p className="text-white/80 mb-4">
              Providing quality tutoring services to help students achieve academic excellence.
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#teachers"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Our Teachers
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-xl mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Mathematics
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Physics
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                    Computer
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Psychology
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Biology
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Social Science
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Chemistry
                </a>
              </li>
              <li>
                <a
                  href="tel:+919335122788"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Test Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3" />
                <span>brainboostacad@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3" />
                <span>+919335122788</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3" />
                <span>Mon-Fri: 9am-7pm EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} BrainBoostAcademy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
