import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-b from-[#A0BFE0]/30 to-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-primary mb-6 leading-tight">
              Expert Home Tutoring<br />For Academic Excellence
            </h1>
            <p className="text-lg mb-8 text-foreground leading-relaxed">
            ज्ञान का WiFi ऑन करो, दिमाग़ की स्पीड बढ़ाओ!"           </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Student learning online with a tutor"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
