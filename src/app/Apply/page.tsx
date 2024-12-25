import Button from '@/components/button'
import React from 'react'
import { FaFacebook } from 'react-icons/fa6'

import Link from 'next/link'
const Apply = () => {
  return (
    <div className='h-screen '>
      <div className=' border-spacing-1 box-border shadow-md w-1/2 mx-auto mt-20 p-10 text-black '>
      <div className='justify-between h-[500px]  mx-auto text-3xl leading-10'>
        <h1 className='justify-between text-center'>Before continuing to the application <br />
       please subscribe on these social <br />
        media platforms.</h1>
        <div className='text-center mt-6 ml-[350px]'>
        <FaFacebook className=''/>
        </div>
        <div className='ml-[250px] mt-6 blur-0'>
        <Button label='Continue' />
        </div>
        <div className='mt-20 ml-[150px] flex'>
        <p>Already Applied?</p>
        <Link href={'/'} className='underline'>Get Admit Card</Link> 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Apply