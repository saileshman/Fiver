import React from "react";
import { FaCheck } from "react-icons/fa";
//import proImage from "../assets/fiverr-pro.png"; // use your image path
import { Link } from "react-router-dom";

const PremiumSection = () => {
  const features = [
    {
      title: "Dedicated hiring experts",
      desc: "Count on an account manager to find you the right talent and see to your project’s every need.",
    },
    {
      title: "Satisfaction guarantee",
      desc: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.",
    },
    {
      title: "Advanced management tools",
      desc: "Seamlessly integrate freelancers into your team and projects.",
    },
    {
      title: "Flexible payment models",
      desc: "Pay per project or opt for hourly rates to facilitate longer-term collaboration.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            The <span className="text-green-600 italic">premium</span> freelance solution for businesses
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-700 w-5 h-5" />
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link>
          <div className="mt-8">
            <p className="inline-block bg-green-600 hover:bg-green-700
             text-white font-semibold px-8 py-3 rounded-full transition">
              Try Now
            </p>
            </div>
            </Link>
          
        </div>

        {/* Right: Image
        <div className="flex-1">
          <img src={proImage} alt="Fiverr Pro" className="w-full max-w-md mx-auto" />
        </div> */}
      </div>
    </section>
  );
};

export default PremiumSection;
