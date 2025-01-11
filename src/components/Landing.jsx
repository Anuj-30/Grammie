import React from 'react'
import img from '/src/assets/img.png'
const landing = () => {
  return (
    <div className='md:flex justify-between    p-10 pb-30 bg-green-100 bg-gradient-to-t'>
      <div className=" hidden md:block absolute left-0 top-1/2 md:transform translate-x-[-22vh] translate-y-[-30vh] w-80 h-80 z-0 bg-teal-500 rounded-full"></div>

      <div className='z-10 md:mt-28'>
    <h1 className='text-4xl font-semibold md:text-white -mx-10'>Grammie:</h1>
    <h2 className='text-2xl'> Perfecting your words, one sentence at a time.</h2>
    </div>
      <div className=''>
        <img src={img} className=''></img>
      </div>
     
    </div>
  )
}

export default landing