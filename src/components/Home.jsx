import React, { useEffect, useRef } from "react";
import Experience from "./Experience"
import Project from "./Project"
import Skills from "./Skills"
import Contact from "./Contact"
import pdf from "../pdf/resume.pdf"; 
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings:["Welcome to my profile","My name is Muqadas Zafran" , "I am Front-End-Developer" , "Web Developer (React js)"],
      typeSpeed:50,
      backSpeed:50,
      loop:true

    }
    const typed = new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home md:flex justify-around gap-20 items-center  h-[75vh]" id="home">
        <div className="left mt-10   md:w-[450px] text-center p-4 border-solid border-2 rounded border-[#f6cd19] md:bg-black shadow-xl shadow-[#574f26]" 
        data-aos="fade-up-right"
        data-aos-duration = "1000"
        >
          <h1 className="text-xl md:text-3xl" ref={typedRef}>
           
          </h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-4  "
          >
            Download Resume
          </a>
        </div>
        <div className="right mt-10 z-0">
          <div className="img flex justify-center items-center z-0"
           data-aos="fade-up-left"
           data-aos-duration = "1000">
            <img
              className="w-[200px] h-[200px]  md:w-[250px] md:h-[250px] rounded-full  border-5 border-[#f6cd19] "
              src={"https://img.freepik.com/free-photo/young-pretty-modern-muslim-woman-hijab-working-laptop-office-room-education-online_285396-9447.jpg"}
              alt="domypic"
            />
          </div>
        </div>
      </div>
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
    </>
  );
};

export default Home;
