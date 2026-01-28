import React from "react";

// yahan apni images laga dena
import infraImg from "../assets/hispitalimage/hr.jpeg";
import doctorImg from "../assets/hispitalimage/doctor.jpeg";
import labImg from "../assets/hispitalimage/nicu.jpeg";
import emergencyImg from "../assets/hispitalimage/247.jpeg";
import affordableImg from "../assets/hispitalimage/picu.jpeg";

const features = [
  {
    icon: "🏥",
    title: "Advanced Infrastructure",
    desc: "State-of-the-art medical equipment and modern facilities ensuring accurate diagnosis and world-class treatment experience.",
    image: infraImg,
  },
  {
    icon: "👨‍⚕️",
    title: "Experienced Doctors",
    desc: "Highly qualified and experienced doctors across multiple specialties delivering compassionate and reliable care.",
    image: doctorImg,
  },
  {
    icon: "🧪",
    title: "Modern Lab Facilities",
    desc: "Fully automated pathology and diagnostic labs delivering fast, accurate and reliable test reports.",
    image: labImg,
  },
  {
    icon: "🚑",
    title: "24×7 Emergency Care",
    desc: "Round-the-clock emergency services with ICU, ambulance support and rapid medical response.",
    image: emergencyImg,
  },
  {
    icon: "💊",
    title: "Affordable Treatment",
    desc: "High-quality healthcare services offered at affordable prices without compromising treatment quality.",
    image: affordableImg,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F4FAF9] py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Why Choose Our Hospital
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine advanced technology, expert doctors and compassionate care
            to deliver trusted healthcare services.
          </p>
        </div>

        {/* Alternate Sections */}
        {features.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-3xl font-bold text-[#0F2A44]">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                {item.desc}
              </p>

              {/* small trust card */}
              <div className="mt-8 bg-white rounded-xl shadow-md p-5 w-fit">
                <p className="text-[#1D7A74] font-semibold">
                  ✔ Trusted by Thousands of Patients
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
