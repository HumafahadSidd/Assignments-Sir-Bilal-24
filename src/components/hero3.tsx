import React from 'react'
import Image from 'next/image'
const Hero3 = () => {
  return (
    <div>
      <h1 className='text-5xl font-inter font-bold text-center justify-center mt-5 text-blue-800'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur  Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className='justify-between ml-10 text-3xl text-gray-600 mt-4 mb-4'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by  providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.

</p>
      <div className='card mt-5 ml-10 rounded-sm shadow-md flex space-x-5'>
        <Image src='/images/imageWebsite.jpg' alt='pic1' height={400} width={500}/> 
        <Image src='/images/imageWebsite2.jpg' alt='pic2' height={400} width={500}/> 
        <Image src='/images/imageWebsite3.jpg' alt='pic3' height={400} width={500}/> 
      </div>
    </div>
  )
}

export default Hero3
