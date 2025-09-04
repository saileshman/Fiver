
import React from "react";
import Slider from "infinite-react-carousel"; 
import { Link } from "react-router-dom";
import services from "../assets/data";


const Popularservice = ({title,}) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Popular Services
        </h2>

        <Slider dots arrows autoplay autoplaySpeed={3000} slidesToShow={3} slidesToScroll={1} responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}>
          
          {/* Card  */}
         {services.map((service) => (
            <div key={service.id} className="px-4">
              <Link to={`/services/${service.id}`}>
                <div className="bg-white h-72 flex flex-col items-center justify-center rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Popularservice;
