import { Button } from "@/components/ui/button";
import { Check, X, Users, FileText } from "lucide-react";

const pricingPackages = [
  {
    title: "Basic Plan",
    price: "₹2500",
    unit: "/month",
    features: [
      // { name: "8 live sessions per month (1 hour each)", included: true },
      { name: "Personalized progress tracking", included: true },
      { name: "WhatsApp and email support", included: true },
      { name: "Access to recorded sessions", included: true },
      { name: "Homework review and feedback", included: false },
      { name: "Customized study materials", included: false },
    ],
    popular: false,
  },
  {
    title: "Advanced Plan",
    price: "₹3000",
    unit: "/month",
    features: [
      // { name: "12 live sessions per month (1 hour each)", included: true },
      { name: "Detailed assessment and study plan", included: true },
      { name: "WhatsApp, email, and phone support", included: true },
      { name: "Access to recorded sessions and extra practice tests", included: true },
      { name: "Homework review and personalized feedback", included: true },
      { name: "Customized study materials", included: false },
    ],
    popular: true,
  },
  {
    title: "Premium Plan",
    price: "₹3500",
    unit: "/month",
    features: [
      // { name: "16 live sessions per month (1 hour each)", included: true },
      { name: "Comprehensive assessment and customized study plan", included: true },
      { name: "Priority support via WhatsApp, email, and phone", included: true },
      { name: "Access to all recorded sessions and premium resources", included: true },
      { name: "Homework review and in-depth feedback", included: true },
      { name: "Personalized, customized study materials", included: true },
    ],
    popular: false,
  },
];

const additionalServices = [
  {
    icon: Users,
    title: "Group Sessions",
    description: "Small group tutoring (2-3 students) at discounted rates",
    // price: "$20/hour per student",
  },
  {
    icon: FileText,
    title: "Test Preparation",
    description: "Focused preparation for standardized tests (SAT, ACT, AP)",
    // price: "$40/hour",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Tutoring Packages & Pricing
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Flexible options to meet your educational needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden ${
                pkg.popular
                  ? "shadow-xl border-2 border-primary transform scale-105 md:scale-105 z-10 relative"
                  : "shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-['Poppins'] text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div
                className={`${
                  pkg.popular ? "bg-primary py-6 px-6" : "bg-[#7895CB]/20 py-6 px-6"
                }`}
              >
                <h3
                  className={`font-['Poppins'] font-bold text-2xl ${
                    pkg.popular ? "text-white" : "text-primary"
                  } text-center`}
                >
                  {pkg.title}
                </h3>
                <div className="text-center mt-4">
                  <span
                    className={`text-4xl font-['Poppins'] font-bold ${
                      pkg.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className={pkg.popular ? "text-white" : "text-foreground"}>
                    {pkg.unit}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="mb-8 space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      ) : (
                        <X className="text-gray-400 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                  asChild
                >
                  <a href="tel:+919335122788">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-foreground mb-2">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
