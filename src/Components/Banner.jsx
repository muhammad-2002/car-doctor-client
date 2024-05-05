import React from "react";
import image1 from "../assets/images/banner/1.jpg";
import image2 from "../assets/images/banner/2.jpg";
import image3 from "../assets/images/banner/3.jpg";
import image4 from "../assets/images/banner/4.jpg";
import image5 from "../assets/images/banner/5.jpg";
import image6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel -z-30 w-full h-[380px] md:h-[490px]  rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image5} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            <span>Affordable </span> <br></br>Price For Car Servicing
          </h1>
          <p className=" pr-2 md:w-[550px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            Trusted Car Servicing Professionals
          </h1>
          <p className=" pr-2 md:w-[550px]">
            Rely on our team of skilled professionals for quality car servicing.
            We prioritize your vehicle's performance and safety
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            Comprehensive Car Care Packages
          </h1>
          <p className=" pr-2 md:w-[550px]">
            Explore our comprehensive care packages for all your car servicing
            needs. We offer tailored solutions for every vehicle
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            Efficient Car Maintenance Services
          </h1>
          <p className=" pr-2 md:w-[550px]">
            Maximize your car's performance with our efficient maintenance
            services. Keep your vehicle in prime condition with our expert care.
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image1} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            Reliable Car Servicing Solutions
          </h1>
          <p className=" pr-2 md:w-[550px]">
            Experience hassle-free car maintenance with our trusted servicing
            solutions. Drive confidently knowing your car is in good hands
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full" />

        <div className="absolute flex z-10  justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start pt-6 md:justify-center md:pt-0 rounded-md text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  border-2 h-full w-full gap-5 transform top-0 right-0 flex-col pl-5 md:pl-10">
          <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold w-[90%] md:w-[40%]">
            Expert Car Care for Peak Performance
          </h1>
          <p className=" pr-2 md:w-[550px]">
            Our car servicing ensures top-notch maintenance for your vehicle.
            Trust us to keep your car running smoothly.
          </p>
          <div className=" flex gap-5 font bold">
            <button className="bg-[#FF3811] px-4 py-2 rounded-md outline-none ">
              Discover More
            </button>
            <button className="rounded md px-4 py-2 outline-none border-2 border-white hover:bg-[#FF3811] hover:border-transparent">
              Lates Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
