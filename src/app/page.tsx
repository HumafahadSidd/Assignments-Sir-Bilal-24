
import CoreCourses from '@/components/corecourses'

import Hero from '@/components/hero'
import Hero3 from '@/components/hero3'
import Hero4 from '@/components/hero4'
import React from 'react'

export default function Home() {
  return (
    <div className=' text-black bg-white'>
      
      <Hero />
      <Hero3 />
      <Hero4 />
  
      <CoreCourses />

    </div>
  )
}
