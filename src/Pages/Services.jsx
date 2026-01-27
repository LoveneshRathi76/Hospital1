import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaProcedures,        // ICU
  FaHeartbeat,         // CCU / ECG
  FaHospitalAlt,       // HDU
  FaBaby,              // NICU / Delivery
  FaLungs,             // Ventilator
  FaWind,              // BiPAP
  FaWaveSquare,        // ECG / Ultrasound
  FaVial,              // ABG
  FaStethoscope,       // PFT
  FaMicroscope,        // Echo / Bronchoscope
  FaXRay,              // Digital X-Ray
  FaRunning,           // TMT
  FaClock,             // Holter Monitoring
  FaFlask,             // Dialysis
  FaHandHoldingMedical,// 24×7 Care
  FaBed,               // 24×7 Admission
  FaPills,             // Pharmacy
  FaAmbulance          // Ambulance
} from "react-icons/fa";

const services = [
  { id: 1, name: "ICU", icon: <FaProcedures />, desc: "Intensive Care Unit with 24×7 monitoring." },
  { id: 2, name: "CCU", icon: <FaHeartbeat />, desc: "Critical Cardiac Care Unit for heart patients." },
  { id: 3, name: "HDU", icon: <FaHospitalAlt />, desc: "High Dependency Unit with advanced medical care." },
  { id: 4, name: "NICU / PICU", icon: <FaBaby />, desc: "Special care unit for newborns and children." },
  { id: 5, name: "Ventilator", icon: <FaLungs />, desc: "Advanced ventilator support system." },
  { id: 6, name: "BiPAP", icon: <FaWind />, desc: "Non-invasive respiratory ventilation support." },
  { id: 7, name: "ECG", icon: <FaHeartbeat />, desc: "Electrocardiography heart monitoring." },
  { id: 8, name: "ABG", icon: <FaVial />, desc: "Arterial Blood Gas testing facility." },
  { id: 9, name: "PFT", icon: <FaStethoscope />, desc: "Pulmonary Function Test for lungs." },
  { id: 10, name: "Echo", icon: <FaMicroscope />, desc: "Echocardiography imaging service." },
  { id: 11, name: "Bronchoscopy", icon: <FaMicroscope />, desc: "Airway and lung examination." },
  { id: 12, name: "Digital X-Ray", icon: <FaXRay />, desc: "High quality digital radiology imaging." },
  { id: 13, name: "TMT", icon: <FaRunning />, desc: "Treadmill stress test for heart checkup." },
  { id: 14, name: "Holter Monitoring", icon: <FaClock />, desc: "24×7 heart rhythm monitoring." },
  { id: 15, name: "Dialysis", icon: <FaFlask />, desc: "Advanced kidney dialysis facility." },
  { id: 16, name: "24×7 Delivery", icon: <FaBaby />, desc: "Round-the-clock maternity services." },
  { id: 17, name: "24×7 Admission", icon: <FaBed />, desc: "Emergency and planned patient admission." },
  { id: 18, name: "24×7 Pathology Lab", icon: <FaVial />, desc: "Continuous laboratory diagnostic services." },
  { id: 19, name: "24×7 Pharmacy", icon: <FaPills />, desc: "Medicines available day & night." },
  { id: 20, name: "24×7 Ambulance", icon: <FaAmbulance />, desc: "Emergency ambulance service anytime." },
];

function Services() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-3">
            Our Medical Services
          </h1>
          <p className="text-gray-600">
            Complete healthcare facilities under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-right"
              data-aos-delay={index * 70}
              className="bg-white rounded-2xl shadow-md p-6 text-center 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.name}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;