import React from "react";
import aboutImg from "../assets/Aboutimage/about.jpeg"; // apni image yaha rakho
import WhyChooseUs from "../Pages/WhyChooseUs";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="About Hospital"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              About Our Hospital
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              Sanskar Hospital has been providing quality healthcare services
              to the community since <span className="font-semibold">2008</span>.
            </p>

            <p className="text-gray-600 mb-4">
              With over <span className="font-semibold">15+ years of experience</span>,
              we are committed to delivering advanced medical care with compassion,
              integrity, and excellence.
            </p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-gray-600">
                To provide affordable, accessible, and high-quality healthcare
                while treating every patient with dignity and care.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🌟 Our Vision
              </h3>
              <p className="text-gray-600">
                To become a trusted healthcare leader by continuously improving
                medical services and patient satisfaction.
              </p>
            </div>

          </div>
        </div>

      </div>
      <WhyChooseUs/>
    </section>
    
  );
};

export default About;
