import React from 'react'

const Result = () => {
  return (
    <div className='h-screen mt-5'>
      <div>
        <h1 className='text-5xl mt-10 text-center font-bold text-blue-700'>Grand Entrance Exam Result</h1>
      <div className='border shadow-sm w-1/2 h-[500px] mx-auto mt-20 p-10 text-2xl space-y-6 text-black'>
<label htmlFor="reg.no">Registration Number*</label>
<input type="text" placeholder="Regitration number" className='border-2 require border-gray-200 bg-slate-100 rounded text-black w-full p-2' />
<label htmlFor="reg.no">CNIC Number</label>
<input type="text" placeholder="CNIC number" className='border-2 require border-gray-200 bg-slate-100 rounded text-black w-full p-2' />
      </div>
      </div>
    </div>
  )
}

export default Result
