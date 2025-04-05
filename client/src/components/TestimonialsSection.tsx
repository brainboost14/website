import { Star, StarHalf, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "My understanding of physics has improved tremendously after just one month of tutoring with Ritvik Sir. Now I can solve problems with confidence and enjoys the subject! He has his own amazing way of teaching style.",
    author: "Priya Mehta",
    role: "Class 10 student",
    // avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    content:
      "Pratima Ma'am's  psychology classes were a game-changer for me. Also her way of explaining the concepts of biology is just so engaging! Her insights and explanations made the subject so interesting, and I scored exceptionally well in my exams!",
    author: "Amit Verma",
    role: "College student",
    // avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
  },
  {
    content:
      "Shreya ma'am made chemistry easy to grasp with her practical approach and engaging teaching style. Thanks to her, I gained a deeper understanding of maths as well and improved my grades significantly!",
    author: "Riya Patel",
    role: "Class 12 student",
    // avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 4.5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            What Our Students Say
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Don't just take our word for it — hear from our successful students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div 
                className="text-[#A0BFE0] absolute top-4 left-4 opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Quote size={48} />
              </motion.div>
              <div className="relative z-10">
                <motion.p 
                  className="text-foreground mb-6 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  "{testimonial.content}"
                </motion.p>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  {/* <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#A0BFE0]/50"
                    whileHover={{ scale: 1.1, borderColor: "#4A55A2" }}
                    transition={{ duration: 0.3 }}
                  /> */}
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-primary">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#7895CB] text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="mt-4 flex text-yellow-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                >
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + (i * 0.1) }}
                    >
                      <Star className="fill-current mr-1" size={18} />
                    </motion.div>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + (Math.floor(testimonial.rating) * 0.1) }}
                    >
                      <StarHalf className="fill-current" size={18} />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#A0BFE0]/10 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
