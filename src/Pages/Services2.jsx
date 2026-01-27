import React from "react";

const services = [
  {
    icon: "🫀",
    title: "Cardiology",
    desc: "Advanced heart care with expert cardiologists, modern equipment, and 24×7 cardiac emergency services."
  },
  {
    icon: "🧠",
    title: "Neurology",
    desc: "Comprehensive treatment for brain and nervous system disorders using latest diagnostic technology."
  },
  {
    icon: "🦴",
    title: "Orthopedics",
    desc: "Complete bone, joint, and spine care including fracture treatment, surgery, and rehabilitation."
  },
  {
    icon: "👶",
    title: "Pediatrics",
    desc: "Specialized healthcare for infants and children with compassionate and child-friendly care."
  },
  {
    icon: "🧪",
    title: "Laboratory Tests",
    desc: "Fully equipped pathology lab providing accurate and fast diagnostic reports under one roof."
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    desc: "24×7 emergency services with ICU, ambulance, and immediate medical response facilities."
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Medical Services
          </h2>
          <p className="text-gray-600 mt-3">
            We provide world-class healthcare services with experienced doctors and modern technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
