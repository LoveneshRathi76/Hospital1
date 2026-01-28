import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function MapSection() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT : MAP */}
          <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d889.9247612191177!2d77.85029!3d28.406167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca6b2d3762f9f%3A0xb765812f63846582!2sSanskar%20Multispeciality%20Hospital!5e1!3m2!1sen!2sin!4v1769150326154!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT : ADDRESS */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Sanskar Multispecialisy Hospital
            </h2>

            <p className="text-gray-600 mb-6">
              Providing trusted medical care with experienced doctors,
              modern facilities, and 24×7 emergency services.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                <p>
                  Near City Center, Bulandshahr,  
                  Uttar Pradesh – 203001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <p>contact@healthycarehospital.com</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/H3KeNBxjQXzWqDUz7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#1D7A74] text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              📍 Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MapSection;
