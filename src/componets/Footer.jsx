import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black'> 


        <main className='bg-black md:flex md:items-center md:justify-center md:gap-[100px] md:py-[80px] '>
          
            {/* firstdiv */}
            <div className='py-[50px]'>
            <div className='flex items-center gap-2 py-[24px] pl-[20px] md:py-[33px] '>
              <img src="/notes.png" alt=""  className='w-[28px] h-[28px] md:w-[38px] md:h-[38px]'/>
              <h1 className='font-bold  text-[18px] leading-[] md:text-[30px] md:leading-6 text-white'>SmartNotes</h1>
            </div>
           {/* inputdiv */}

            <div className='flex gap-3 h-[50px] w-[290px] mt-[35px] mx-5 md:gap-36  bg-white justify-center md:w-[430px]  items-center rounded-[8px]   '>
    <input type="email" placeholder='Enter Your Email' className='border-none md:w-[150px]  ' />

    <div>  
         <img src="/Arrow.png" alt="" className='w-[32px] h-[32px]' /> </div>
     

    </div>
            </div>
      {/* secondmain */}
      <main className='flex items-center justify-between mx-5  md:gap-[200px]'>
            {/* seconddiv */}
            <div>
                <h1 className='font-bold text-[16px] leading-[24px] text-white'>Product</h1>
                <ul>
                    <li className='font-normal text-[14px] md:text-[18px] md:leading-[27px] leading-[21px] hover:text-[#6cb4af] text-white duration-700 my-[16px] '>About</li>
                    <li className='font-normal text-[14px] md:text-[18px] md:leading-[27px] leading-[21px] hover:text-[#6cb4af] text-white duration-700 '>Features</li>
                    <li className='font-normal text-[14px] md:text-[18px] md:leading-[27px] leading-[21px] hover:text-[#6cb4af] text-white duration-700 my-[16px]'>Pricing</li>
                    <li className='font-normal text-[14px] md:text-[18px] md:leading-[27px] leading-[21px] hover:text-[#6cb4af] text-white duration-700 '>Integration</li>
                    <li className='font-normal text-[14px] md:text-[18px] md:leading-[27px] leading-[21px] hover:text-[#6cb4af] text-white duration-700 mt-[16px]'>FAQs</li>
                    </ul>
            </div>
             {/* thirddiv */}
             <div>
                <h1 className='font-bold text-[16px] leading-[24px] text-white'>Company</h1>
                <ul>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 my-[16px] '>Our Story</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 '>Team</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 my-[16px]'>Careers</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 '>Press</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 mt-[16px]'>Contact Us</li>
                    </ul>
            </div>
             {/* forthdiv */}
             <div>
                <h1 className='font-bold text-[16px] leading-[24px] text-white'>Resources</h1>
                <ul>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 my-[16px] '>Blog</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 '>Webinars</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 my-[16px]'>Case Studies</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 '>Templates</li>
                    <li className='font-normal text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] hover:text-[#6cb4af] text-white duration-700 mt-[16px]'>Help Center</li>
                    </ul>
            </div>

            </main>
          
        </main>
          {/* linksdiv */}

          <div className='h-[136px] bg-[#048c80] py-2 px-5 mt-[50px] md:flex md:flex-row-reverse md:items-center md:justify-between'>
            <img src="/Social Icon.png" alt=""  className='md:py-[20px] md:h-[120px]'/>
            <h6 className='text-white md:py-[20px]'>@2024 SmartNotesI. All Rights Reserved
                . @saqibaali</h6>
            </div>
    </section>
  )
}

export default Footer
