import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from './DropDown';

export default function Navbar() {
  return (
    <div className="bg-blue-800 w-full h-28  ">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:px-10 md:py-6">
        {/* Logo */} 
        <div className="flex items-center mb-2 md:mb-0">
          <Image src={'/images/logo.png'} alt="logo" width={100} height={100} />
          <h1 className="font-Poppins text-slate-300 font-semibold text-2xl md:text-3xl ml-4 md:ml-20">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-lg text-slate-100">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li><Link href={"/About"}>About</Link></li> */}
          <li>
            <Link href={"/Apply"}>Apply</Link>
          </li>
          <li>
            <Link href={"/Jobs"}>Jobs</Link>
          </li>
          <li>
            <Link href={"/Result"}>Result</Link>
          </li>
          <li><DropDown />
            {/* <Link href={"/Courses"}></Link> */}
          </li>
          {/* <li><Link href={"/Services"}>Services</Link></li> */}
        </ul>
      </div>
    </div>
  );
}
