import React from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

const Skills = () => {
  return (
    <>
    <div className="container skills  md:w-[900px] mt-9" id='skills'>
      <h1 className='text-4xl text-white'>SKILLS</h1>
      <div className="items  md:flex justify-center items-center flex-wrap m-auto w-[290%] md:w-[800px]">
      
          
          
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><ImHtmlFive2 className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>HTML</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><IoLogoCss3 className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>CSS</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><TbBrandJavascript className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>JAVASCRIPT</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><RiReactjsFill className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>REACT JS</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><FaFigma className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>FIGMA</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><FaBootstrap className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>BOOTSTRAP</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><SiTailwindcss className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>TAILWINDCSS</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><TbBrandRedux className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>REDUX</h3>
            </div>
            <div className=" item flex flex-col justify-center items-center p-[20px] m-[10px] my-3 md:m-[20px]  border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black" 
            data-aos="flip-left"
            data-aos-duration = "1000"
            ><FaGithub className='text-8xl'/>
              
              
              <h3 className='font-bold p-1 m-1'>GITHUB</h3>
            </div>
            

          
         
       
      </div>
    </div>
    </>
  )
}

export default Skills
