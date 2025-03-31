import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    content:
      "My son's understanding of physics has improved tremendously after just one month of tutoring with Mr. Ritvik . He now solves problems with confidence and enjoys the subject!",
    author: "Priya Mehta",
    role: "Parent of Class 10 student",
    // avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    content:
      "Ms. Pratima's psychology classes were a game-changer for me. Her insights and explanations made the subject so interesting, and I scored exceptionally well in my exams!",
    author: "Amit Verma",
    role: "College student",
    // avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
  },
  {
    content:
      "Ms. Shreya made chemistry easy to grasp with her practical approach and engaging teaching style. Thanks to her, I gained a deeper understanding and improved my grades significantly!",
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
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Don't just take our word for it — hear from our successful students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
              <div className="text-[#A0BFE0] text-5xl absolute top-4 left-4 opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M11.9991 14.8822C11.9991 15.9992 11.3551 16.9632 10.3701 17.4892C10.1691 17.5922 9.94311 17.6522 9.71111 17.6522C9.15811 17.6522 8.64811 17.3792 8.33811 16.9062C7.84811 16.1262 8.06511 15.1022 8.83511 14.6082C10.0081 13.8442 9.56311 12.0502 9.56111 12.0442C9.42711 11.6222 9.63911 11.1662 10.0611 11.0322C10.4841 10.8992 10.9391 11.1102 11.0731 11.5332C11.0941 11.6002 11.9991 14.3202 11.9991 14.8822Z" />
                  <path d="M16.9982 17.4892C16.7972 17.5922 16.5712 17.6522 16.3392 17.6522C15.7862 17.6522 15.2762 17.3792 14.9662 16.9062C14.4762 16.1262 14.6932 15.1022 15.4632 14.6082C16.6362 13.8442 16.1912 12.0502 16.1892 12.0442C16.0552 11.6222 16.2672 11.1662 16.6892 11.0322C17.1132 10.8992 17.5672 11.1102 17.7012 11.5332C17.7222 11.6002 18.6272 14.3202 18.6272 14.8822C18.6282 15.9992 17.9842 16.9632 16.9982 17.4892Z" />
                  <path d="M14.9381 8.79189C15.1431 9.22789 14.9851 9.75889 14.5481 9.96389C14.4261 10.0259 14.2961 10.0549 14.1681 10.0549C13.8461 10.0549 13.5371 9.89089 13.3881 9.59789C13.1401 9.13289 13.2991 8.55189 13.7641 8.30389C14.2291 8.05489 14.8101 8.21389 15.0581 8.67889L14.9371 8.79089L14.9381 8.79189Z" />
                  <path d="M10.6112 9.96391C10.4892 10.0259 10.3592 10.0549 10.2312 10.0549C9.90918 10.0549 9.60018 9.89091 9.45118 9.59791C9.20318 9.13291 9.36218 8.55191 9.82718 8.30391C10.2912 8.05591 10.8722 8.21491 11.1202 8.67891C11.3252 9.11491 11.1672 9.64591 10.7312 9.85091L10.6102 9.96991L10.6112 9.96391Z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-foreground mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-primary">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#7895CB] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <Star key={i} className="fill-current" size={18} />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarHalf className="fill-current" size={18} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
