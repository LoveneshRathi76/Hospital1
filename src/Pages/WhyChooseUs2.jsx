import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import doctor1 from "../assets/hispitalimage/doctor.jpeg";
import emergency from "../assets/hispitalimage/247.jpeg";
import technology from "../assets/hispitalimage/nicu.jpeg";
import care from "../assets/hispitalimage/Pasent.jpeg";
import affordable from "../assets/hispitalimage/picu.jpeg";
import Ambulance2 from "../assets/hispitalimage/2478.jpeg";
const WhyChooseUs2 = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    {
      title: "Experienced Doctors",
      desc: "Highly qualified doctors with years of experience in patient care.",
      img: doctor1,
    },
    {
      title: "24/7 Emergency",
      desc: "Emergency services available anytime for critical situations.",
      img: emergency,
    },
    {
      title: "Advanced Technology",
      desc: "Modern medical equipment for accurate diagnosis and treatment.",
      img: technology,
    },
    {
      title: "Best Patient Care",
      desc: "We prioritize comfort, safety, and personalized healthcare.",
      img: care,
    },
    {
      title: "Affordable Treatment",
      desc: "Quality healthcare services at budget-friendly prices.",
      img: affordable,
    },
    {
      title: "24*7 Ambulance",
      desc: "Ambulance service available 24*7.",
      img: Ambulance2,
    }
    
  ];

  return (
    <section className="w-full py-16 bg-[#0F2A44]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            data-aos="fade-up"
          >
            Why Choose Our Hospital
          </h2>
          <p
            className="text-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted healthcare with modern facilities and expert doctors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs2;
