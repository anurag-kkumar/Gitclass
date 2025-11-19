import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
        >
          {/* Image */}
          <img
            src={item.image}
            alt="news"
            className="w-full h-52 object-cover"
          />

          {/* Content */}
          <div className="p-4 flex flex-col gap-3">
            {/* Title */}
            <h2
              onClick={() => window.open(item.link)}
              className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-600"
            >
              {item.headline}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600">
              {item.description?.slice(0, 120)}...
            </p>

            {/* Location */}
            <p className="text-xs font-medium text-gray-500">
              📍 {item.city} — {item.incident_type}
            </p>

            {/* Read More */}
            <button
              onClick={() => window.open(item.link)}
              className="mt-auto bg-[#E0FF00] text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
