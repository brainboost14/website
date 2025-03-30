import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";
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

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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

  return (
    <section id="contact" className="py-16 bg-[#A0BFE0]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Have questions or ready to enroll? Contact us and we'll help you find the perfect tutor
            for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">
                Contact Form
              </h3>
              {isSubmitted ? (
                <div className="text-center p-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                    <h4 className="font-['Poppins'] font-semibold text-lg mb-2">
                      Thank you for your inquiry!
                    </h4>
                    <p>We've received your message and will get back to you shortly.</p>
                  </div>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Phone Number (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Subject Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="physics">Physics</SelectItem>
                              <SelectItem value="english">English & Literature</SelectItem>
                              <SelectItem value="biology">Biology</SelectItem>
                              <SelectItem value="chemistry">Chemistry</SelectItem>
                              <SelectItem value="test-prep">Test Preparation</SelectItem>
                              <SelectItem value="other">Other (Please specify)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                    >
                      {isPending ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-lg mb-1">Email</h4>
                    <p className="text-foreground">admin.brainboost@gmail.com</p>
                    {/* <p className="text-foreground">support@exceltutor.com</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-foreground">+919335122788</p>
                    <p className="text-foreground">+918887514336</p>
                    <p className="text-foreground">Mon-Fri: 9am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#A0BFE0]/30 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-lg mb-1">Tutoring Hours</h4>
                    <p className="text-foreground">Mon-Fri: 8am-9pm</p>
                    <p className="text-foreground">Sat-Sun: 10am-6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-6">FAQ</h3>

              <div className="mb-6">
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2">
                  How do online sessions work?
                </h4>
                <p className="text-foreground">
                  Our virtual classroom uses video conferencing and interactive tools. You'll need a
                  computer with internet access, a webcam, and a microphone.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2">
                  Can I change tutors if needed?
                </h4>
                <p className="text-foreground">
                  Yes, we want to ensure the best fit for your learning style. If you'd like to
                  switch tutors, simply contact us and we'll arrange it.
                </p>
              </div>

              <div>
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2">
                  What if I need to cancel a session?
                </h4>
                <p className="text-foreground">
                  We understand that schedules change. Please provide at least 24 hours notice for
                  cancellations to avoid any charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
