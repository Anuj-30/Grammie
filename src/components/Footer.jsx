import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer  flex flex-col w-full mt-20 justify-center text-center h-56 bg-teal-100'>
      <h1 className='font-semibold font-mono pt-7 text-4xl'>Anuj Bhardwaj</h1>
      <p className='w-[500px] mt-2 mx-auto '>This website is created by me for project showcase and all the rights are reserved to me. This project is created for showcasing skills feel free to contact if you want to discuss something about project. Code of the website is also included in my GitHub page feel free to check </p>
      <div className='flex justify-center gap-7 mt-3'><FaGithub className='text-4xl text-teal-500 hover:text-emerald-700' />
        <a href='https://www.linkedin.com/in/anuj-bhardwaj-513589314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
          <FaLinkedin className='text-4xl text-teal-500 hover:text-emerald-700' /></a></div>
    </div>
  )
}

export default Footer