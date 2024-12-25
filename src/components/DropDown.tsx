import React from 'react'

export default function DropDown() {
  return (
    <div>
      <select name="courses" id="coursedetail"  className='bg-blue-800 p-1border-hidden'>
        <option value="">Courses</option>
        <option value="">Core courses</option>
        <option value="">Programming fundamentals</option>
        <option value="">Earn as You Learn</option>
      </select>
    </div>
  )
}
