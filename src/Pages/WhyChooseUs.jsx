const WhyChooseUs = () => {
  const features = [
    {
      icon: "🏥",
      title: "Advanced Infrastructure",
      desc: "State-of-the-art medical equipment and modern facilities ensuring accurate diagnosis."
    },
    {
      icon: "👨‍⚕️",
      title: "Experienced Doctors",
      desc: "Highly qualified doctors with years of experience across multiple specialties."
    },
    {
      icon: "🧪",
      title: "Modern Lab Facilities",
      desc: "Fully equipped labs providing fast, accurate, and reliable test results."
    },
    {
      icon: "🚑",
      title: "24×7 Emergency Care",
      desc: "Round-the-clock emergency services with rapid response and critical care support."
    },
    {
      icon: "💊",
      title: "Affordable Treatment",
      desc: "High-quality healthcare services at affordable prices without compromise."
    },
  ];

  return (
    <section className="bg-[#F4FAF9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Why Choose Our Hospital
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted healthcare with modern technology, expert doctors,
            and compassionate care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 shadow-lg 
                         transition-all duration-500 hover:-translate-y-3 
                         hover:shadow-2xl"
            >
              <div className="w-20 h-20 flex items-center justify-center 
                              rounded-full bg-[#1D7A74]/10 mb-6 
                              group-hover:scale-110 transition">
                <span className="text-5xl">{item.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
