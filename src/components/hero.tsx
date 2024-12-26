import React from 'react';
import Button from './button';
import Image from 'next/image';
import Apply from './apply';


export default function Hero() {
  return (
    <div className='h-auto flex justify-between items-center px-10 py-6  '>
      {/* Left Section */}
      <div className='w-1/2'>
        <h1 className='text-blue-900 text-6xl font-extrabold mt-14'>Governor Sindh</h1>
        <h2 className='text-blue-900 text-5xl leading-8 font-semibold mt-4'>Kamran Khan Tessori</h2>
        <h3 className='text-sky-500 text-5xl mt-5'>Certified Cloud <br />Applied Generative <br />Engineer (GenEng)</h3>
        <p className='text-5xl font-bold text-blue-700 mt-4'>
          Earn up to $5,000 / month <br /><br />
          Now admissions are open in <br /> Hyderabad
        </p>
        <div className='mt-5 flex space-x-8'>
          <Button label={'Apply Now'} />
            <Apply label={'562,143'} />
        </div>
      </div>
      
      {/* Right Section */}
      <div className='w-1/2 flex mt-2 justify-end'>
        <Image src="/images/cover.png" alt="governor" height={800} width={800} />
      </div>
      
    </div>
  );
}
