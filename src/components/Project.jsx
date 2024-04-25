import React from "react";
import project from "./Data/projects.json";

const Project = () => {
  return (
    <>
      <div className="container projects my-10  md:w-[900px]" id="project">
        <h1 className="text-4xl text-white my-4">PROJECTS</h1>
        <div className="row flex justify-center items-center">
          {project.map((data) => (
            <>
              <div key={data.id} className="w-[300px] my-3" data-aos="flip-right"
                  data-aos-duration = "1000">
                <div>
                  <div className="cart p-7  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black text-center "
                  
                  >
                    
                    <div className="img flex justify-center items-center  ">
                      <img className="h-[170px] w-full  border-solid border-2 border-yellow-600 rounded " src={data.imageSrc} alt="" />
                   </div>
                   <div className="text-white p-3 text-xl">
                    {data.title}
                   </div>
                   <div className="text-[15px]">
                    {data.description}
                   </div>
                   <a href={data.Link } className="btn btn-outline-warning mt-3 mx-3 px-3" >
                    Link</a>
                    <a href={data.source} className="btn btn-outline-warning mt-3 px-3">
                    Code</a>
                    

                  </div>
                </div>
               
              </div>
            </>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Project;
