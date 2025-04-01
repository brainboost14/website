import {
  UserGraduate,
  ChalkboardTeacher,
  LaptopHouse,
  LineChart,
} from "./icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: UserGraduate,
    title: "Experienced Teachers",
    description: "Our tutors are certified professionals with years of teaching experience",
  },
  {
    icon: ChalkboardTeacher,
    title: "Personalized Learning",
    description: "Customized curriculum designed to meet individual student needs",
  },
  {
    icon: LaptopHouse,
    title: "Convenient Online Sessions",
    description: "Learn from anywhere with our interactive online classroom environment",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Regular assessments and detailed feedback on student improvement",
  },
];

export default function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Why Choose Brain Boost Academy?
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Our tutoring service offers unique benefits that set us apart from traditional education
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A0BFE0]"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#A0BFE0]/30 rounded-full flex items-center justify-center text-primary mb-4 mx-auto"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(160, 191, 224, 0.5)",
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="text-2xl" />
              </motion.div>
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-foreground text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
