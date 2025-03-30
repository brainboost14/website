import {
  UserGraduate,
  ChalkboardTeacher,
  LaptopHouse,
  LineChart,
} from "./icons";

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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            Why Choose ExcelTutor?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Our tutoring service offers unique benefits that set us apart from traditional education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#A0BFE0]/30 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
