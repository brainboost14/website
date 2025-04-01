import { Button } from "@/components/ui/button";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [sloganVisible, setSloganVisible] = useState(false);
  const slogan = "ज्ञान का WiFi ऑन करो, दिमाग़ की स्पीड बढ़ाओ!";
  const [displayText, setDisplayText] = useState("");
  const [scope, animate] = useAnimate();
  
  // Typewriter effect with timeout
  useEffect(() => {
    // Wait 1.5 seconds before starting the animation
    const timer = setTimeout(() => {
      setSloganVisible(true);
      
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= slogan.length) {
          setDisplayText(slogan.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Speed of typing
      
      return () => clearInterval(typingInterval);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [slogan]);
  
  // Animated cursor effect
  useEffect(() => {
    if (sloganVisible && displayText.length < slogan.length) {
      const cursorAnimation = async () => {
        await animate(scope.current, { opacity: 1 }, { duration: 0.3 });
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
      };
      
      const cursorInterval = setInterval(cursorAnimation, 600);
      return () => clearInterval(cursorInterval);
    }
  }, [scope, animate, sloganVisible, displayText, slogan]);

  return (
    <section id="home" className="bg-gradient-to-b from-[#A0BFE0]/30 to-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="font-['Poppins'] font-bold text-4xl md:text-5xl text-primary mb-4 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Expert Home Tutoring<br />For Academic Excellence
            </motion.h1>
            
            <motion.div
              className="relative mb-6 h-10" // Fixed height to prevent layout shifts
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {sloganVisible && (
                <h2 className="font-['Poppins'] text-2xl text-[#7895CB] font-semibold italic">
                  "{displayText}
                  <motion.span 
                    ref={scope}
                    className="inline-block w-[3px] h-[1.2em] bg-[#7895CB] ml-1"
                    initial={{ opacity: 1 }}
                  ></motion.span>"
                </h2>
              )}
              {displayText === slogan && (
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-[#A0BFE0]" 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              )}
            </motion.div>
            
            <motion.p 
              className="text-lg mb-8 text-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Personalized tutoring sessions with experienced educators to help students reach their full potential. Our expert teachers provide customized learning plans for all academic levels.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
              >
                <a href="tel:+919335122788">Book a Session</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white border-2 border-primary text-primary hover:bg-primary/10 font-['Poppins'] font-semibold"
              >
                <a href="#teachers">Meet Our Teachers</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Student learning online with a tutor"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
