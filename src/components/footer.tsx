// 
import React from 'react'
// import { FaFacebook } from "react-icons/fa"
// import { FiInstagram } from "react-icons/fi";
// import { FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube ,FaTiktok,FaEnvelope  } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";



export default function footer() {
  return (
    <div className='flex gap-20 h-[500px] w-full bg-gray-200 text-gray-800 text-2xl '>
      <div className='mt-12 ml-10 space-y-4'>
      <h1 className='font-bold text-3xl mb-2'> Core Courses</h1>
      
<p>Programming Fundamentals</p>
<p>Web2 Using NextJS</p>
<p>Earn as You Learn</p>
      </div>
      <div className='mt-12 ml-10 space-y-6'>
      <h3 className='text-3xl font-bold'>Advanced Courses</h3>
<p>Web 3 and Metaverse</p>
<p>Cloud-Native Computing</p>
<p>Artificial Intelligence (AI) and Deep Learning</p>
<p>Ambient Computing and IoT</p>
<p>Genomics and Bioinformatics</p>
<p>Network Programmability and Automation</p>
      </div>
      <div className='mt-12 ml-10 space-y-6 font-bold'>
        <h3>Social Links</h3>
        
          <div className='flex gap-4'>     
  <FaFacebook  className=''/>
  <FiInstagram className=''/>
  <FaYoutube className=''/>
  <FaTwitter className=''/>
<FaTiktok  className=''/>
        </div>
        <div className='mt-4'>
        <FaEnvelope className=''/><span className='underline'>education@governorsindh.com</span>
              
      </div>
    </div>
    </div>
  )
}
