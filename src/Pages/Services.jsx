import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ccu from "../assets/Services/CCU.jpeg";
import icu from "../assets/Services/ICU.jpeg";
import HDU from "../assets/Services/HDU.jpeg";
import NICU from "../assets/Services/NICU.jpeg";
import Dialysis from "../assets/Services/Dialysis.jpeg";
import Pharmacy from "../assets/Services/Pharmacy.jpeg";
import  Pathology from "../assets/Services/Pathology.jpeg";
import Delivery from "../assets/Services/Delivery.jpeg";
import  Admission from "../assets/Services/Admission.jpeg";
import Ambuance from "../assets/hispitalimage/2478.jpeg";
import Echo from "../assets/hispitalimage/doctor.jpeg"
import  Ventilator from "../assets/Services/Ventilator.jpg";
import  BiPAP from "../assets/Services/BiPAP.jpg";
import  ECG from "../assets/Services/ECG.jpg";
import  ABG from "../assets/Services/ABG.jpg";
import  PFT from "../assets/Services/PFT.jpg";
import  Bronchoscopy from "../assets/Services/Bronchoscopy.jpg";
import  Digital from "../assets/Services/Digital Xray.jpg";
import  TMT from "../assets/Services/TMT.jpg";
import  Holter from "../assets/Services/Holter.jpg";
import  Canteen from "../assets/Services/Canteen.jpeg";
import {
  FaProcedures,
  FaHeartbeat,
  FaHospitalAlt,
  FaBaby,
  FaLungs,
  FaWind,
  FaVial,
  FaStethoscope,
  FaXRay,
  FaRunning,
  FaClock,
  FaFlask,
  FaPills,
  FaAmbulance,
   FaTimes
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "ICU",
    icon: <FaProcedures />,
    shortDesc: "24×7 critical care monitoring.",
    image: icu,
    fullDesc:
      "Our ICU is equipped with advanced life-support systems, experienced doctors, and continuous monitoring to handle critical patients safely."
  },
  {
    id: 2,
    name: "CCU",
    icon: <FaHeartbeat />,
    shortDesc: "Cardiac critical care unit.",
    image: ccu,
    fullDesc:
      "Cardiac critical care unit from industrial processes or the atmosphere into valuable products like chemicals, fuels, and construction materials. This approach reduces net emissions, supports a circular carbon economy, and provides a sustainable alternative to fossil resources."
  },
  {
    id: 3,
    name: "HDU",
    icon: <FaHospitalAlt />,
    shortDesc: "High dependency care unit.",
    image: HDU,
    fullDesc:
      "HDU provides advanced care for patients who need close monitoring but not full ICU support."
  },
  {
    id: 4,
    name: "NICU / PICU",
    icon: <FaBaby />,
    shortDesc: "Newborn & child intensive care.",
    image: NICU,
    fullDesc:
      "Specialized care for newborn babies and children with trained pediatric specialists."
  },
  {
    id: 5,
    name: "Ventilator",
    icon: <FaLungs />,
    shortDesc: "Advanced ventilator support.",
    image: Ventilator,
    fullDesc:
      "Modern ventilator machines with expert supervision for critical respiratory patients."
  },
  {
    id: 6,
    name: "BiPAP",
    icon: <FaWind />,
    shortDesc: "Non-invasive ventilation support.",
    image: BiPAP,
    fullDesc:
      "BiPAP therapy for patients with breathing difficulties without invasive procedures."
  },
  {
    id: 7,
    name: "ECG",
    icon: <FaHeartbeat />,
    shortDesc: "Heart rhythm monitoring.",
    image: ECG,
    fullDesc:
      "Accurate ECG tests for heart condition diagnosis by experienced technicians."
  },
  {
    id: 8,
    name: "ABG",
    icon: <FaVial />,
    shortDesc: "Arterial blood gas testing.",
    image: ABG,
    fullDesc:
      "ABG testing for precise assessment of oxygen and carbon dioxide levels."
  },
  {
    id: 9,
    name: "PFT",
    icon: <FaStethoscope />,
    shortDesc: "Pulmonary function testing.",
    image: PFT,
    fullDesc:
      "Pulmonary tests to evaluate lung capacity and respiratory health."
  },
  {
    id: 10,
    name: "Echo",
    icon: <FaHeartbeat />,
    shortDesc: "2D Echocardiography.",
    image: Echo,
    fullDesc:
      "Echocardiography imaging to examine heart structure and function."
  },
  {
    id: 11,
    name: "Bronchoscopy",
    icon: <FaStethoscope />,
    shortDesc: "Lung airway examination.",
    image: Bronchoscopy,
    fullDesc:
      "Bronchoscopy for diagnosing lung and airway-related issues."
  },
  {
    id: 12,
    name: "Digital X-Ray",
    icon: <FaXRay />,
    shortDesc: "High quality X-ray imaging.",
    image: Digital,
    fullDesc:
      "Digital X-ray facility with fast, accurate and safe imaging."
  },
  {
    id: 13,
    name: "TMT",
    icon: <FaRunning />,
    shortDesc: "Treadmill stress test.",
    image: TMT,
    fullDesc:
      "TMT for heart performance evaluation under physical stress."
  },
  {
    id: 14,
    name: "Holter Monitoring",
    icon: <FaClock />,
    shortDesc: "24-hour heart monitoring.",
    image: Holter,
    fullDesc:
      "Continuous ECG monitoring for detecting irregular heart rhythms."
  },
  {
    id: 15,
    name: "Dialysis",
    icon: <FaFlask />,
    shortDesc: "Kidney dialysis treatment.",
    image: Dialysis,
    fullDesc:
      "Modern dialysis unit with high safety and hygiene standards."
  },
  {
    id: 16,
    name: "24×7 Delivery",
    icon: <FaBaby />,
    shortDesc: "Round-the-clock maternity care.",
    image: Delivery,
    fullDesc:
      "Safe maternity services with gynecologists and nursing staff."
  },
  {
    id: 17,
    name: "24×7 Admission",
    icon: <FaHospitalAlt />,
    shortDesc: "Emergency admission services.",
    image: Admission,
    fullDesc:
      "Immediate admission facilities for emergency and critical cases."
  },
  {
    id: 18,
    name: "24×7 Pathology Lab",
    icon: <FaVial />,
    shortDesc: "All diagnostic tests available.",
    image: Pathology,
    fullDesc:
      "Fully automated pathology lab for quick and accurate reports."
  },
  {
    id: 19,
    name: "24×7 Pharmacy",
    icon: <FaPills />,
    shortDesc: "Medicine available anytime.",
    image: Pharmacy,
    fullDesc:
      "In-house pharmacy with all essential and emergency medicines."
  },
  {
    id: 20,
    name: "24×7 Ambulance",
    icon: <FaAmbulance />,
    shortDesc: "Emergency ambulance service.",
    image: Ambuance,
    fullDesc:
      "Fully equipped ambulance with trained staff available anytime."
  },
  {
    id: 20,
    name: "24×7 Canteen",
   
    shortDesc: "Canteen Service",
    image: Canteen,
    fullDesc:
      "Canteen used for purchasing subsidezed goods digital point of sale service."
  }
];



function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-600 mb-3">
            Our Medical Services
          </h1>
          <p className="text-gray-600">
            Complete healthcare facilities under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.name}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            data-aos="zoom-in"
            className="bg-white max-w-lg w-full mx-4 rounded-2xl overflow-hidden relative"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-black text-xl hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
            loading="lazy"
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-76 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {selectedService.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
