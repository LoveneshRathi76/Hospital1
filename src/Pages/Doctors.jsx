import React, { useState } from "react";
import { Link } from "react-router-dom";
// Doctor Images
import anil from "../assets/doctors/anil.JPG";
import alka from "../assets/doctors/alka.JPG";
import narendra from "../assets/doctors/narendra.JPG";
import vijay from "../assets/doctors/vijay.JPG";
import hoshiyar from "../assets/doctors/hosiyar.JPG";
import pragya from "../assets/doctors/parag.JPG";
import lalit from "../assets/doctors/lakshit.JPG";
import vivek from "../assets/doctors/vivek.JPG";
import ashish from "../assets/doctors/ashish.JPG";
import dilip from "../assets/doctors/tp.JPG";
import rahul from "../assets/doctors/rahul.JPG";
import arif from "../assets/doctors/arif.JPG";

// Doctors Data
const doctors = [
  {
    name: "Dr. Anil Chauhan",
    qualification: "MBBS, MD, PGDCC, FEAC",
    speciality: "General Medicine",
    image: anil,
    about:
      "More than 20 years of experience in treating acute and chronic medical diseases with patient-centered care.",
  },
  {
    name: "Dr. Alka Chauhan",
    qualification: "MBBS, DGO, DMCH",
    speciality: "Gynecologist",
    image: alka,
    about:
      "Specialist in women's health, pregnancy care, infertility treatment and safe deliveries.",
  },
  {
    name: "Dr. Narendra Kumar",
    qualification: "MBBS, DMRD",
    speciality: "Radiologist",
    image: narendra,
    about:
      "Expert in advanced imaging including X-ray, ultrasound, CT and accurate diagnostics.",
  },
  {
    name: "Dr. Vijay Sharma",
    qualification: "MD, DCH",
    speciality: "Child Specialist",
    image: vijay,
    about:
      "Caring pediatrician with expertise in newborn and child healthcare.",
  },
  {
    name: "Dr. Hoshiyar Singh",
    qualification: "MBBS, MD",
    speciality: "General Physician",
    image: hoshiyar,
    about:
      "Focused on preventive care, diabetes, BP and lifestyle diseases.",
  },
  {
    name: "Dr. Pragya Agarwal",
    qualification: "MBBS, MS",
    speciality: "Laparoscopic Surgeon",
    image: pragya,
    about:
      "Highly skilled in minimally invasive surgeries with faster recovery.",
  },
  {
    name: "Dr. Lalit Singh",
    qualification: "MBBS, MS",
    speciality: "ENT Specialist",
    image: lalit,
    about:
      "Treats ear, nose and throat disorders using modern techniques.",
  },
  {
    name: "Dr. Vivek Garg",
    qualification: "MBBS, MS, DNB",
    speciality: "Urologist",
    image: vivek,
    about:
      "Specialist in kidney stone, prostate and urinary problems.",
  },
  {
    name: "Dr. Ashish Acharya",
    qualification: "MBBS, MS, MCh",
    speciality: "Neuro Surgeon",
    image: ashish,
    about:
      "Expert neurosurgeon handling brain and spine surgeries.",
  },
  {
    name: "Dr. Dilip Singh",
    qualification: "MBBS, MD",
    speciality: "Critical Care Specialist",
    image: dilip,
    about:
      "Manages ICU patients with advanced life-support care.",
  },
  {
    name: "Dr. Rahul Gupta",
    qualification: "MD, DNB",
    speciality: "TB & Chest Specialist",
    image: rahul,
    about:
      "Specialist in lung diseases, TB and respiratory care.",
  },
  {
    name: "Dr. Arif Kamal",
    qualification: "MBBS, MS",
    speciality: "Orthopedic Specialist",
    image: arif,
    about:
      "Expert in bone, joint replacement and fracture management.",
  },
];

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
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
              onClick={() => setSelectedDoctor(doc)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.qualification}</p>
                <span className="inline-block mt-3 bg-blue-600 text-white px-5 py-3 rounded-xl  text-xs">
                  {doc.speciality}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[65%] rounded-xl shadow-xl relative p-6">

            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-2xl font-bold cursor-pointer"
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
                <h2 className="text-3xl font-bold text-blue-600">
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
                  <button className="mt-6 bg-[#1D7A74] text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer">
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
