import { Button } from "@/components/ui/button";
import { Check, X, Users, FileText, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const pricingPackages = [
  {
    title: "Basic Plan",
    price: "₹2500",
    unit: "/month",
    features: [
      // { name: "8 sessions per month (1 hour each)", included: true },
      { name: "Comprehensive assessment and planning", included: true },
      { name: "Email support between sessions", included: true },
      { name: "Access to learning resources", included: true },
      { name: "Homework review and feedback", included: true },
      { name: "Customized study materials", included: false },
    ],
    popular: false,
    color: "#7895CB",
    icon: Clock,
  },
  {
    title: "Advanced Plan",
    price: "₹3000",
    unit: "/month",
    features: [
      // { name: "12 sessions per month (1 hour each)", included: true },
      { name: "Advanced assessment and detailed planning", included: true },
      { name: "Priority email and phone support", included: true },
      { name: "Access to premium learning resources", included: true },
      { name: "Homework review and detailed feedback", included: true },
      { name: "Customized study materials", included: true },
    ],
    popular: true,
    color: "#4A55A2",
    icon: Sparkles,
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Tutoring Packages & Pricing
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Flexible options to meet your educational needs and budget
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl overflow-hidden flex-1 max-w-md mx-auto ${
                pkg.popular
                  ? "shadow-xl border-2 border-primary z-10 relative"
                  : "shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              }`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={pkg.popular ? {} : { y: -10, scale: 1.02 }}
            >
              {pkg.popular && (
                <motion.div 
                  className="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-['Poppins'] text-sm font-semibold"
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}
              <motion.div
                className={`py-8 px-6`}
                style={{ backgroundColor: pkg.popular ? pkg.color : `${pkg.color}30` }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white bg-white/20`}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <pkg.icon size={32} />
                  </motion.div>
                </div>
                <h3
                  className={`font-['Poppins'] font-bold text-2xl ${
                    pkg.popular ? "text-white" : "text-primary"
                  } text-center`}
                >
                  {pkg.title}
                </h3>
                <div className="text-center mt-4">
                  <span
                    className={`text-5xl font-['Poppins'] font-bold ${
                      pkg.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className={`${pkg.popular ? "text-white" : "text-foreground"} text-xl`}>
                    {pkg.unit}
                  </span>
                </div>
              </motion.div>
              <div className="p-8">
                <ul className="mb-8 space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (fIndex * 0.1) }}
                    >
                      {feature.included ? (
                        <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      ) : (
                        <X className="text-gray-400 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold py-6"
                    asChild
                  >
                    <a href="tel:+919335122788">Get Started</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6 text-center">
            Additional Services
          </h3>
          <motion.div 
            className="h-1 w-20 bg-[#A0BFE0] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="flex items-start p-4 rounded-lg hover:bg-gray-50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0"
                  whileHover={{ rotate: 10, backgroundColor: "rgba(160, 191, 224, 0.5)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h4 className="font-['Poppins'] font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-foreground mb-2">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
