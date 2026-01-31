import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Doctor Images
import anil from "../assets/doctors/anil.png";
import alka from "../assets/doctors/alka.png";
import narendra from "../assets/doctors/narendra.png";
import vijay from "../assets/doctors/vijay.png";
import hoshiyar from "../assets/doctors/hosiyar.png";
import pragya from "../assets/doctors/parag.png";
import lakshit from "../assets/doctors/lakshit.png";
import vivek from "../assets/doctors/vivek.png";
import ashish from "../assets/doctors/ashish.png";
import tp from "../assets/doctors/tp.png";
import rahul from "../assets/doctors/rahul.png";
import arif from "../assets/doctors/arif.png";

// Doctors Data
const doctors = [
  {
    name: "Dr. Anil Kumar",
    qualification: "MBBS, MD, DCC, (Cardiology)",
    speciality: "Managing Director",
    image: anil,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Alka",
    qualification: "MBBS, DGO ",
    speciality: "Medical Director",
    image: alka,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Arif Kamal",
    qualification: "MBBS, MS (OrthopedicSurgeon) ",
    speciality: "Orthopedic Specialist",
    image: arif,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
   {
    name: "Dr. Parag Agarwal",
    qualification: "MBBS, MS ,(General Surgeon)",
    speciality: "General & Laparoscopic Surgeon",
    image: pragya,
    about: "More than 10+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
 
  {
    name: "Dr. Vijay Swarup Gautam",
    qualification: "MBBS, MD, DCH",
    speciality: "Pediatrician",
    image: vijay,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Hoshiyar Singh",
    qualification: "MBBS, MD ,(Physician)",
    speciality: "General Physician",
    image: hoshiyar,
    about: "More than 25+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
 
  {
    name: "Dr. Lakshit Kumar",
    qualification: "MBBS, MS (Rhino)",
    speciality: "ENT Surgeon",
    image: lakshit,
    about: "More than 12+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Vivek Garg",
    qualification: "MBBS, MS, DNB (Urology)",
    speciality: "Urologist",
    image: vivek,
    about: "More than 15+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Ashish Acharya",
    qualification: "MBBS, MS, MCH (NeuroSurgeon)",
    speciality: "Neuro Surgeon",
    image: ashish,
    about: "More than 10+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
   {
    name: "Dr. Narendra Kumar",
    qualification: "MBBS, DMRD",
    speciality: "Radiologist",
    image: narendra,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. T.V. Singh",
    qualification: "MBBS, MD",
    speciality: "Critical Care Specialist",
    image: tp,
    about: "More than 15+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Rahul Gupta",
    qualification: "MD, DNB",
    speciality: "Pulmonologist",
    image: rahul,
    about: "More than 18+ years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  
];

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-600">
            Our Expert Doctors
          </h1>
          <p className="text-gray-600 mt-2">
            Click on doctor to view full profile
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              onClick={() => setSelectedDoctor(doc)}
              className="cursor-pointer bg-white rounded-2xl shadow-md 
                         hover:shadow-2xl hover:-translate-y-3
                         transition-all duration-300 overflow-hidden"
            >
              <div className="h-70 bg-[#1d7a74] flex items-center justify-center">
                <img
                loading="lazy"
                  src={doc.image}
                  alt={doc.name}
                  className="h-full object-contain scale-95 hover:scale-100 transition duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.qualification}</p>
                <span className="inline-block mt-3 bg-[#1d7a74] text-white px-5 py-2 rounded-xl text-xs">
                  {doc.speciality}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          data-aos="zoom-in"
        >
          <div className="bg-white w-[90%] md:w-[65%] rounded-xl shadow-xl relative p-6 animate-scaleIn">

            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src={selectedDoctor.image}
                className="w-full h-72 object-contain bg-gray-100 rounded"
                alt=""
              />

              <div>
                <h2 className="text-3xl font-bold text-[#1D7A74]">
                  {selectedDoctor.name}
                </h2>

                <p className="mt-2">
                  <b>Qualification:</b> {selectedDoctor.qualification}
                </p>

                <p className="mt-2">
                  <b>Speciality:</b> {selectedDoctor.speciality}
                </p>

                <p className="text-gray-600 mt-4">
                  {selectedDoctor.about}
                </p>

                <Link to="/appointment">
                  <button className="mt-6 bg-[#1D7A74] text-white px-6 py-2 rounded hover:bg-[#155d58]">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Doctors;
