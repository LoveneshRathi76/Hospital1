import React from "react";
import img1 from "../assets/Ratingimg/img1.jpeg";
import img2 from "../assets/Ratingimg/img2.jpeg";
import img3 from "../assets/Ratingimg/img3.jpeg";
import img4 from "../assets/Ratingimg/img4.jpeg";
import img5 from "../assets/Ratingimg/img5.jpeg";
function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      rating: 5,
      comment: "Doctors are very professional and supportive.",
      image: img1,
    },
    {
      name: "Yash Verma",
      rating: 4,
      comment: "Clean hospital and polite staff. Good experience overall.",
      image: img2,
    },
    {
      name: "Amit Singh",
      rating: 5,
      comment: "Emergency services are excellent and fast.",
      image: img3,
    },
    {
      name: "Rahul Agarwal",
      rating: 4,
      comment: "Doctors explained everything very clearly.",
      image: img4,
    },
    {
      name: "Sanjay Kumar",
      rating: 5,
      comment: "Best hospital in this area. Highly recommended.",
      image: img5,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-3">
            Patient Reviews
          </h2>
          <p className="text-gray-600">
            What our patients say about our hospital
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />

                <div>
                  <h3 className="font-semibold text-sm">{r.name}</h3>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {r.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
