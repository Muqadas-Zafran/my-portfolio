import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex  md:w-[900px] mt-14 " id="experience">
        <h1 className="text-4xl text-white">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items md:flex justify-around items-center text-center mx-2 my-5 md:m-5 md:w-[700px] border-solid border-2 border-[#f6cd19] rounded-xl shadow-2xl shadow-[#7b7535] md:bg-black p-[30px]"
                data-aos="zoom-in"
    data-aos-   duration = "1000"
              >
                <div className="left flex justify-center items-center pb-3">
                  <img className="" src={`/src/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2 className="text-[20px] md:text-[28px]">{data.role}</h2>
                  <h4 className="text-[18px] md:text-2xl">
                    <span className="text-white">{data.startDate}</span> {data.endDate}
                  </h4>
                  <h2 className="text-[20px] md:text-[28px]">{data.organisation}</h2>
                  <h2 className="text-[20px] md:text-[28px]">{data.location}</h2>
                  <h5 className="text-[12px] md:text-xl">{data.experiences[0]}</h5>
                  <h5 className="text-[12px] md:text-xl">{data.experiences[1]}</h5>
                </div>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
