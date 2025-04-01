import { Video, Presentation, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function MethodologySection() {
  const steps = [
    {
      number: "1",
      title: "Assessment & Planning",
      description:
        "We begin by assessing each student's strengths, weaknesses, learning style, and goals to create a customized learning plan.",
    },
    {
      number: "2",
      title: "Interactive Learning",
      description:
        "Our sessions combine instruction with interactive exercises, ensuring students actively engage with the material.",
    },
    {
      number: "3",
      title: "Regular Progress Reviews",
      description:
        "We continuously monitor student progress, adjusting teaching approaches as needed to ensure steady improvement.",
    },
    {
      number: "4",
      title: "Practical Application",
      description:
        "We emphasize real-world applications of knowledge, helping students understand the relevance of what they're learning.",
    },
  ];

  const classroomFeatures = [
    {
      icon: Video,
      title: "HD Video Conferencing",
      description: "Clear face-to-face communication for better engagement",
    },
    {
      icon: Presentation,
      title: "Interactive Whiteboard",
      description: "Collaborative workspace for problem-solving and explanations",
    },
    {
      icon: FileText,
      title: "Resource Sharing",
      description: "Easy access to learning materials and homework assignments",
    },
  ];

  return (
    <section id="methodology" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Teaching Methodology
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            We combine proven teaching techniques with innovative approaches for effective learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Our virtual classroom environment"
              className="rounded-lg shadow-lg w-full h-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div>
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="mb-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start mb-4">
                  <motion.div 
                    className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1 shadow-md"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-bold text-lg">{step.number}</span>
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-['Poppins'] font-semibold text-xl text-primary mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 bg-[#A0BFE0]/20 p-8 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-4 text-center">
            Our Virtual Classroom Features
          </h3>
          <motion.div 
            className="h-1 w-0 bg-[#4A55A2] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classroomFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-md"
                  whileHover={{ 
                    rotate: 10, 
                    scale: 1.1, 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-foreground text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
