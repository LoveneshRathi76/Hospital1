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
            loading="lazy"
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
              to the community since <span className="font-semibold">2015</span>.
            </p>

            <p className="text-gray-600 mb-4">
              With over <span className="font-semibold">10+ years of experience</span>,
              we are committed to delivering advanced medical care with compassion,
              integrity, and excellence.
            </p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-gray-600">
                To become a truly professional healthcare organization in super-specialty & tertiary care leading in new generation technology & best standard quality of medical services to strata of society which is deprived either because of poverty or non-availability of such facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🌟 Our Vision
              </h3>
              <p className="text-gray-600">
                To build first class patient focused services on high quality & evidence based medical practice throughout the organisation of highly trained & qualified staff with zeal of continuously improving & up-gradation of knowledge level by regular training program to Accumen the skill. At present we started our hospital with 47 beds and we will fulfill 100 shortly.
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🌟 Our Quality
              </h3>
              <p className="text-gray-600">
                A dedicated highly trained team of doctors & co-workers working in state of Art infrastructure in amalgamation with latest Gazettes in health care technology
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
