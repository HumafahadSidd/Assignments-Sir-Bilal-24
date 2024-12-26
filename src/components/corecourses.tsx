import React from 'react'
import Image from 'next/image'
const CoreCourses = () => {
  return (
    <div>
      <h1 className='text-5xl text-blue-700 ml-10 mt-4 font-bold px-5 py-4 leading-7'>Core Courses Sequences</h1>
      <div className='flex space-x-2 ml-10 mt-4'>
        <div className='box-border p-8 shadow-md border'><Image src={"/images/programming_fundamentals.jpg"} alt={"pic4"} height={500} width={250} /><span className='text-2xl text-center font-semibold mt-12 ml-4 text-gray-600 '>Programming <br />&nbsp;Fundamentals</span></div>
        <div className='box-border p-8 shadow-md border'><Image src={"/images/nextjs.jpg"} alt={"pic5"} height={500} width={250} /><span className='text-2xl text-center font-semibold mt-8 ml-4 text-gray-600 '>Web2 Using NextJs</span></div>
        <div className='box-border p-8 shadow-md border'><Image src={"/images/earn_as_you_learn.jpg"} alt={"pic6"} height={500} width={250} /><span className='text-2xl text-center font-semibold mt-8 ml-4 text-gray-600 '>Earn As You Learn</span></div>
      </div>
    </div>
  )
}

export default CoreCourses
