import { Video, Presentation, FileText } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Teaching Methodology
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            We combine proven teaching techniques with innovative approaches for effective learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Our virtual classroom environment"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div>
            {steps.map((step, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                    <span className="font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-xl text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#A0BFE0]/20 p-8 rounded-lg">
          <h3 className="font-['Poppins'] font-semibold text-2xl text-primary mb-4 text-center">
            Our Virtual Classroom Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classroomFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
