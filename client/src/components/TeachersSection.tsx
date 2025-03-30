import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics & Physics Specialist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    skills: ["Advanced Mathematics", "Physics", "SAT/ACT Prep"],
    bio: "Ph.D. in Mathematics with 10+ years of teaching experience. Specializes in making complex concepts accessible to students of all levels.",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Languages & Literature Expert",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    skills: ["English Literature", "Creative Writing", "ESL"],
    bio: "Master's in English Literature and certified TEFL instructor. Passionate about fostering critical thinking through literature and language.",
  },
  {
    id: 3,
    name: "Ms. Emily Rodriguez",
    role: "Science & Research Mentor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    skills: ["Biology", "Chemistry", "Research Methods"],
    bio: "Molecular Biologist with classroom teaching experience. Specializes in science education and preparing students for research projects.",
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Our educators bring years of experience and passion to help students excel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Poppins'] font-bold text-2xl text-primary mb-2">
                  {teacher.name}
                </h3>
                <p className="text-[#7895CB] font-semibold mb-4">{teacher.role}</p>
                <div className="mb-4 flex flex-wrap">
                  {teacher.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-[#A0BFE0]/20 text-primary hover:bg-[#A0BFE0]/30 mr-2 mb-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-foreground mb-4">{teacher.bio}</p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-['Poppins'] font-semibold"
                  asChild
                >
                  <a href="#contact">Book a Session</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
