import { useState } from "react";
import appointmentImg from "../assets/slideimg/slide1.jpeg";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "7302913211"; // 🔴 Hospital WhatsApp Number

    const whatsappMessage = `
📋 *New Appointment Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🩺 Doctor: ${form.doctor}
📅 Date: ${form.date}

📝 Problem:
${form.message}
    `;

    const whatsappURL = `https://wa.me/${7302913211}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    // reset form
    setForm({
      name: "",
      phone: "",
      doctor: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Book an Appointment
          </h1>
          <p className="text-gray-600 text-lg">
            Book your appointment easily via WhatsApp
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={appointmentImg}
              alt="Hospital Appointment"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <select
                name="doctor"
                value={form.doctor}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              >
                <option value="">Select Doctor</option>
                <option>Dr. Anil Chauhan</option>
                <option>Dr. Alka Chauhan</option>
                <option>Dr. Narendra Kumar</option>
                <option>Dr. Vijay Sharma</option>
                <option>Dr. Hoshiyar Singh</option>
                <option>Dr. Pragya Agarwal</option>
                <option>Dr. Lalit Singh</option>
                <option>Dr. Vivek Garg</option>
                <option>Dr. Ashish Acharya</option>
                <option>Dr. Dilip Singh</option>
                <option>Dr. Rahul Gupta</option>
                <option>Dr. Arif Kamal</option>
              </select>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <textarea
                name="message"
                placeholder="Describe health issue"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition"
              >
                📲 Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
