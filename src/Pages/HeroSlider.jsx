import { useEffect, useState } from "react";
import img1 from "../assets/slideimg/slide1.jpeg";
import img2 from "../assets/slideimg/slide2.jpeg";
import img5 from "../assets/slideimg/CCU2.jpeg";
import img3 from "../assets/slideimg/OT 1.jpeg";
import img4 from "../assets/slideimg/NICU.jpeg";

import { Link } from "react-router-dom";
const slides = [
  {
    image: img1,
    title: "Sanskar Multispeciality Hospital",
    subtitle: "Trusted Sanskar Multispeciality Hospital for Your Family",
  },
  {
    image: img2,
    title: "24×7 Emergency Services",
    subtitle: "We Care When You Need It Most",
  },
  {
    image: img3,
    title: "Expert Doctors & Modern Care",
    subtitle: "Your Health Is Our Priority",
  },
   {
    image: img4,
    title: "Expert Doctors & Modern Care",
    subtitle: "Your Health Is Our Priority",
  },
   {
    image: img5,
    title: "Expert Doctors & Modern Care",
    subtitle: "Your Health Is Our Priority",
  },
   
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <img
          loading="lazy"
            src={slide.image}
            alt="Hospital"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              {slide.subtitle}
            </p>

            <div className="flex gap-4">
              <Link to="/Appointment" >
                <button className="bg-[#1D7A74] px-6 py-3 rounded hover:bg-[#1D7A74] transition cursor-pointer">
                  Book Appointment
                </button>
              </Link>
              <a href="tel:+919536216777">
                <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition cursor-pointer">
                  Emergency Call
                </button>
              </a>

            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${current === idx ? "bg-blue-600 scale-125" : "bg-white/50"
              }`}
          ></span>
        ))}
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default HeroSlider;
