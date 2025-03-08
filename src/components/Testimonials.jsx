// import React, { useEffect, useState } from "react";
// import testimonial from "../assets/Testinomial.svg";
// import Ellipse from "../assets/Ellipse1097.svg";
// import DoctorImage1 from "../assets/DoctorImage1.svg";


// const testimonials = [
//   {
//     name: "Aarav Mehta",
//     quote:
//       "The service was outstanding! Everything was handled professionally, and the results were beyond my expectations. Highly recommend!",
//     image: `${DoctorImage1}`,
//   },
//   {
//     name: "Shilpa Rodrigues",
//     quote:
//       "Great experience working with this team! Their creativity and attention to detail truly made a difference. Would love to collaborate again.",
//     image: `${DoctorImage1}`,
//   },
//   {
//     name: "Rohan Desai",
//     quote:
//       "Impressed with the quality and efficiency! The team delivered exactly what I needed, and the process was smooth from start to finish.",
//     image: `${DoctorImage1}`,
//   },
// ];

// const TestimonialsSlider = () => {
//   // Track which testimonial is active
//   const [currentIndex, setCurrentIndex] = useState(0);


    
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.image.length); 
//       }, 5000); 
  
//       return () => clearInterval(interval); 
//     }, []);

 
  

//   return (
//     <section
//       className="flex flex-col items-center justify-center h-[772px]  mt-4    "
//       style={{
//         backgroundImage: `url(${testimonial})`,
//         backgroundSize: "cover",
//         backgroundPosition: "",
//       }}
//     >
//       {/* Section Title */}
//       <h2 className="text-[42px]  font-semibold text-[#011632] mb-2 z-50">
//         Testimonials
//       </h2>
//       <p className="text-[#3C4959] w-[450px] text-[18px] font-normal mb-8 text-center">
//         Hear from our happy clients! Real experiences that inspire trust and
//         confidence.
//       </p>

//       {/* Slider Container */}
//       <div className="relative w-full max-w-5xl mx-auto mt-[70px]">
//         {/* Button - Previous */}
//         {/* <button
//           onClick={prevTestimonial}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-l hover:bg-blue-700 transition"
//         >
//           Prev
//         </button> */}

//         {/* Testimonial Card Wrapper */}
//         <div className="overflow-hidden relative h-64 sm:h-72 md:h-80 ">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`
//                 absolute inset-0 flex justify-between   w-full h-full bg-[#011632]
//                 transition-all duration-700 ease-in-out  rounded-[10px]
//                 ${index === currentIndex ? "opacity-100" : "opacity-0"}
//               `}
//             >
//               {/* Testimonial Card */}
//               <div className="flex justify-between  w-full p-5 flex-col md:flex-row  font-semibold  text-[#FFFFFF] rounded-lg  ">
//                 <div className="flex flex-col">
//                   <h3 className=" font-semibold  text-[42px] mb-2">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-[24px] w-[558px] font-[500] text-[#FFFFFF] italic mb-4">
//                     “{testimonial.quote}”
//                   </p>
//                   <button className="bg-[#0190CA]  items-center w-[150px] h-[55px]  text-[#FFFFFF]  rounded-[5px] transition mb-2">
//                     Learn More
//                   </button>
//                   <div className="flex ml-[30px] space-x-3 ">
//                   {[0, 1, 2].map((index) => (
//                     <span
//                       key={index}
//                       // bg-[#25b4f8]
//                       className={`bg-[#CFCFCF] mt-3 h-3 w-3 rounded-full transition-colors duration-[3000ms] ${
//                         currentIndex === index ? "bg-blue-500" : ""
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 </div>
//                 <div className="w-[351px] h-[336px] flex-shrink-0  relative">
//                   <div>
//                     {" "}
//                     <img
//                       src={Ellipse}
//                       alt="Ellipse"
//                       className="w-full  object-cover rounded-full"
//                     />
//                   </div>
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full   rounded-full absolute z-50 h-[311px] top-[-15px] mb-2"
//                   />
//                 </div>
             
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button - Next */}
//         {/* <button
//           onClick={nextTestimonial}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
//         >
//           Next
//         </button> */}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSlider;


import React, { useEffect, useState } from "react";
import testimonial from "../assets/Testinomial.svg";
import Ellipse from "../assets/Ellipse1097.svg";
import DoctorImage1 from "../assets/DoctorImage1.svg";

const testimonials = [
  {
    name: "Aarav Mehta",
    quote:
      "The service was outstanding! Everything was handled professionally, and the results were beyond my expectations. Highly recommend!",
    image:   `${DoctorImage1}`,
  },
  {
    name: "Shilpa Rodrigues",
    quote:
      "Great experience working with this team! Their creativity and attention to detail truly made a difference. Would love to collaborate again.",
    image:  `${DoctorImage1}`,
  },
  {
    name: "Rohan Desai",
    quote:
      "Impressed with the quality and efficiency! The team delivered exactly what I needed, and the process was smooth from start to finish.",
    image:  `${DoctorImage1}`,
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center h-[772px] mt-4"
      style={{
        backgroundImage: `url(${testimonial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <h2 className="text-[42px] font-semibold text-[#011632] mb-2 z-50">
        Testimonials
      </h2>
      <p className="text-[#3C4959] w-[450px] text-[18px] font-normal mb-8 text-center">
        Hear from our happy clients! Real experiences that inspire trust and
        confidence.
      </p>

      {/* Slider Container */}
      <div className="relative w-full max-w-5xl mx-auto mt-[70px]">
        {/* Testimonial Card Wrapper */}
        <div className="overflow-hidden relative h-64 sm:h-72 md:h-80">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 flex justify-between w-full h-full bg-[#011632]
                transition-opacity duration-700 ease-in-out rounded-[10px]
                ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            >
              {/* Testimonial Card */}
              <div className="flex justify-between w-full p-5 flex-col md:flex-row font-semibold text-[#FFFFFF] rounded-lg">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[42px] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[24px] w-[558px] font-[500] text-[#FFFFFF] italic mb-4">
                    “{item.quote}”
                  </p>
                  <button className="bg-[#0190CA] items-center w-[150px] h-[55px] text-[#FFFFFF] rounded-[5px] transition mb-2">
                    Learn More
                  </button>
                  {/* Dot Indicators */}
                  <div className="flex ml-[30px] space-x-3">
                    {testimonials.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        onClick={() => setCurrentIndex(dotIndex)}
                        className={`cursor-pointer bg-[#CFCFCF] mt-3 h-3 w-3 rounded-full transition-colors duration-300 
                          ${currentIndex === dotIndex ? "bg-blue-500" : ""}
                        `}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-[351px] h-[336px] flex-shrink-0 relative">
                  <img
                    src={Ellipse}
                    alt="Ellipse"
                    className="w-full object-cover rounded-full"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-full absolute z-50 h-[311px] top-[-15px] mb-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
