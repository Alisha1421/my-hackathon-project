import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <div className="px-8 py-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[70%] h-auto md:h-[480px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left">
                  The furniture brand for the future with <br /> the timeless
                  designs
                </h1>
                <div className="flex  md:justify-start">
                  <button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12">
                    View collection
                  </button>
                </div>
              </div>

              <div className="my-4 md:my-0">
                <p className="text-lg md:text-base md:text-left">
                  A new era in eco-friendly furniture with Avion, the French
                  luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to
                  display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[30%] h-auto md:h-[480px] bg-white flex single_chair_image">
              <img
                src={"/images/chair.png"}
                width={400}
                // height={400}
                alt="right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
