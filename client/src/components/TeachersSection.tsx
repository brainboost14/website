import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const teachers = [
  {
    id: 1,
    name: "Shreya Singh",
    role: "Mathematics, Computer and Chemistry",
    // image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    skills: ["7+ years Experience", "Counselling", ],
    bio: "B.Sc. in Computer Science , B.A & M.A in Psychology and Passionate about student Growth & holistic learning.",
  },
  {
    id: 2,
    name: "Ritvik Srivastava ",
    role: "Physics and Social Science Expert",
    // image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    skills: ["3+ years of Experience", "UPSC Exams Expert"],
    bio: "Specialized in competitive Exam Stratergies and Structured Preparation, First-hand Experience with UPSC & Defense Exams.",
  },
  {
    id: 3,
    name: "Pratima Singh",
    role: "Biology and Psychology",
    // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    skills: ["5+ years of Experience", "Psychology (Gold Medalist)"],
    bio: "Molecular Biologist with classroom teaching experience. Specializes in science education and preparing students for research projects.",
  },
];

export default function TeachersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const teacherVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="teachers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Meet Our Expert Teachers
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Our educators bring years of experience and passion to help students excel
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:border-[#A0BFE0] max-w-md transition-all duration-300"
              variants={teacherVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* <motion.div 
                className="h-80 overflow-hidden"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div> */}
              <div className="p-6">
                <motion.h3 
                  className="font-['Poppins'] font-bold text-2xl text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {teacher.name}
                </motion.h3>
                <motion.p 
                  className="text-[#7895CB] font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {teacher.role}
                </motion.p>
                <motion.div 
                  className="mb-4 flex flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {teacher.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        className="bg-[#A0BFE0]/20 text-primary hover:bg-[#A0BFE0]/40 mr-2 mb-2"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {teacher.bio}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                    asChild
                  >
                    <a href="#contact">Book a Session</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
