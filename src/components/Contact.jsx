import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";



const Contact = () => {
  return (
   <>
   <div className="container contact" id='contact'
   data-aos="zoom-in-up"
   data-aos-duration = "1000"
   >
    <h1 className='text-3xl md:text-4xl text-white p-5'>CONTACT ME</h1>
    <div className="contact-items  flex flex-wrap justify-center items-center gap-5 mb-5 ">
        <a href='https://www.google.com' target='_blank' className="items cursor-pointer bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <FaInstagram className='size-8'/>
        </a>
        <a href='https://www.google.com' target='_blank'className="items bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <FaFacebook className='size-8'/>
        </a>
        <a href='https://www.linkedin.com/in/muqadas-bibi-front-end-web-developer-a093b32a6/' target='_blank'className="items bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <CiLinkedin className='size-8'/>
        </a>
        <a href='https://www.google.com' target='_blank'className="items bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <FaXTwitter className='size-8'/>
        </a>
        <a href='https://www.github.com' target='_blank'className="items bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <FaGithub className='size-8'/>
        </a>
        <a href='mailto:alihassan8sep@gmail.com' target='_blank'className="items bg-[#0b0b0b] hover:bg-[#1d1d1d] h-[70px] w-[70px] flex justify-center items-center rounded-full border-2 border-[#f6cd19] shadow-xl hover:shadow-[#534f24]">
        <MdMailOutline className='size-8'/>
        </a>
    </div>
   </div>
   </>
  )
}

export default Contact
