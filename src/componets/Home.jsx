import React from 'react'
import Discover from './Discover'
import Pricing from './Pricing'
import Faqs from './Faqs'
import Footer from './Footer'

const Home = () => {
  return (
    
  <section className='bg-[#080808]'>
    
     {/* main div is here */}
    <main className='pt-[64px] px-[20px] md:flex md:items-center md:justify-center md:gap-[100px]'>
      {/* first div  */}
   <div>
    <h1 className='text-white font-bold text-[30px] leading-[39px] md:font-bold md:text-[60px] md:leading-[62px] md:w-[590px]'><span class="bg-gradient-to-r from-[#017373] to-[#017373] bg-clip-text text-transparent">Intelligent</span>
     cloud-based 
   <span class="bg-gradient-to-r from-[#017373] to-[#017373] bg-clip-text text-transparent"> note-taking</span>
    and collaboration tool</h1>

    <p className='font-normal text-[16px] text-[#BABA] mt-[16px]'>Experience the power of smart note-taking and transform the way you work today.</p>
   
    {/* inputdiv */}
    <div className='flex h-[50px] md:gap-36  bg-white justify-center md:w-[430px]  items-center rounded-[8px]  my-[50px]  '>
    <input type="email" placeholder='Enter Your Email' className='border-none md:w-[150px]  ' />

    <div className='flex items-center w-[90px] gap-2 bg-gradient-to-r from-blue-400 to-green-200 h-[40px]  rounded-[8px] '>
                 <button className=' text-[px] text-white'>
                 Get Start
           </button>
           <img src="/Arrow.png" alt="" className='w-[16px] h-[16px]' />
           </div>
     

    </div>

   </div>

   <div className='hidden md:block'>
    <img src="/home.png" alt="" className='md:h-[483px]' />
   </div>




    </main>
    <img src="/basepics.png" alt=""  className='py-[14px] md:w-full md:p-10'/>

    {/* lastdiv */}

    <div className='py-[64px] mx-3   md:px-[480px]'>
<img src="/row.png" alt=""  className=''/>
<h2 className='text-white font-bold text-[20px] leading-[30px] text-center  md:w-[470px] md:text-[24px] md:leading-[34px] '>The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. </h2>

<div className='flex items-center justify-center gap-2'>
  <h5 className='font-normal text-[14px] leading-[21px] text-white pt-[24px] md:text-[16px] md:leading-[24px]'>Sarah Johnson</h5>
  <span className='font-normal text-[14px] leading-[21px] text-gray-400 pt-[24px] md:text-[16px] md:leading-[24px]'>TechSavvy Solutions</span>
</div>

    </div>
    <Discover/>
    <Pricing/>
    <Faqs/>
    <Footer/>
  </section>
  )
}

export default Home
