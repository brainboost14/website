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
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#A0BFE0] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A0BFE0] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A0BFE0] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A0BFE0] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
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
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Mathematics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Physics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  English & Literature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Biology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Chemistry
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                <span>+91 9335122788</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3" />
                <span>Mon-Fri: 9am-7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Brain Boost Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
