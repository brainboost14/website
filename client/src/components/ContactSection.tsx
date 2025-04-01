import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, CheckCircle, HelpCircle, Calendar } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqs = [
  {
    question: "How do online sessions work?",
    answer: "YOU CAN ACCESS IT ON LAPTOP , COMPUTER, TABLET AND EVEN MOBILE PHONE TOO",
    icon: HelpCircle,
  },
  {
    question: "Can I change tutors if needed?",
    answer: "Yes, we want to ensure the best fit for your learning style. If you'd like to switch tutors, simply contact us and we'll arrange it.",
    icon: CheckCircle,
  },
  {
    question: "What if I need to cancel a session?",
    answer: "We understand that schedules change. Please provide at least 24 hours notice for cancellations to avoid any charges.",
    icon: Calendar,
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const { mutate: submitContactForm, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContactForm(data);
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["brainboostacad@gmail.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+919335122788", "Mon-Fri: 9am-7pm IST"],
    },
    {
      icon: Clock,
      title: "Tutoring Hours",
      details: ["Mon-Sat: 4pm-8pm IST"],
    },
  ];

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#A0BFE0]/20 to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Get Started Today
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#7895CB] mx-auto mb-6"
          />
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Have questions or ready to enroll? Contact us and we'll help you find the perfect tutor
            for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={formAnimation}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">
                Contact Form
              </h3>
              {isSubmitted ? (
                <motion.div 
                  className="text-center p-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-green-100 text-green-800 p-6 rounded-xl mb-6 border border-green-200"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mx-auto mb-4 flex justify-center"
                    >
                      <CheckCircle size={50} className="text-green-500" />
                    </motion.div>
                    <h4 className="font-['Poppins'] font-semibold text-lg mb-2">
                      Thank you for your inquiry!
                    </h4>
                    <p>We've received your message and will get back to you shortly.</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} className="focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email address" {...field} className="focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              Phone Number 
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} className="focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              Class
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus:ring-primary">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                              <SelectItem value="9">9th</SelectItem>
                              <SelectItem value="10">10th</SelectItem>
                              <SelectItem value="other">Others</SelectItem>
                                {/* <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="english">English & Literature</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="test-prep">Test Preparation</SelectItem>
                                <SelectItem value="other">Other (Please specify)</SelectItem> */}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              Additional Information
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your tutoring needs, student grade level, goals, etc."
                                rows={4}
                                {...field}
                                className="focus:border-primary resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold py-6 text-lg"
                      >
                        {isPending ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              )}
            </motion.div>
          </motion.div>

          <div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">
                Contact Information
              </h3>
              <motion.div 
                className="h-1 w-0 bg-[#A0BFE0] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <motion.div 
                      className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0"
                      whileHover={{ 
                        rotate: 10, 
                        scale: 1.1, 
                        backgroundColor: "rgba(160, 191, 224, 0.5)" 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h4 className="font-['Poppins'] font-semibold text-lg mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">FAQ</h3>
              <motion.div 
                className="h-1 w-0 bg-[#A0BFE0] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div 
                        className="text-primary mr-2"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <faq.icon size={20} />
                      </motion.div>
                      <h4 className="font-['Poppins'] font-semibold text-lg">
                        {faq.question}
                      </h4>
                    </div>
                    <p className="text-foreground pl-7">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
