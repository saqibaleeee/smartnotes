import React from 'react'

const Pricing = () => {
  return (
  <section className='bg-[#080808]'>

    <main>

    <div className='  '>

<h1 className='font-bold text-[30px]  mx-1 leading-[39px] text-center text-white md:font-bold md:text-[48px] md:leading-[57px] md:text-center'> <br /> <span  class="bg-gradient-to-r from-[#017373] to-[#017373] bg-clip-text text-transparent">Pricing</span> & Plans</h1>

<p className='font-normal text-[14px] md:text-[16px] md:leading-[24px] md:w-[500px] md:ml-[500px]  md:text-center leading-[21px] text-center mt-6 text-white mx-5 '>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
</div>

{/* barbutton */}
 <div className='flex items-center justify-center gap-[14px] mx-5 py-[40px]'>
    {/* first */}
    <div className='flex items-center gap-[14px]'>
        <h6 className='text-white font-normal text-[14px] leading-[21px]'>Monthly</h6>
        <div className='w-[64px] h-[33px] md:w-[70px] md:h-[35px] rounded-full bg-[#BABABA] border border-blue-400 '>
            <div className='w-[18px] h-[18px] bg-white rounded-[100%] my-[6px] ml-[6px]'>

            </div>

        </div>
    </div>

       {/* second */}
       <div className='flex items-center gap-[14px]'>
        <h6 className='text-white font-normal text-[14px] leading-[21px]'>Yearly</h6>
        <div className='w-[94px] md:w-[100px] md:h-[30px] h-[26px] rounded-full bg-gradient-to-r from-blue-400 to-green-200'>
        <div className='text-center font-normal'>Save 25%</div>

        </div>
    </div>
 </div>


{/* cardsdiv  */}
<div className=' md:flex md:items-center md:justify-center'>
    {/* firstcard */}
    <div className='border border-blue-500 md:w-[357px] bg-white rounded-[12px]  flex flex-col gap-3 mx-5 mt-10 px-8 p-5 hover:bg-black  hover:text-white'>
        <div className='flex items-center gap-2'>
        <img src="/layer1.png" alt="" />
  <h6 className='text-[#048c80] '>Individual Plan</h6>
        </div>

        <div className='flex  gap-1 py-[32px]'>
            <h6 className='font-bold text-[40px] leading-[48px] '>$9.99</h6>
            <span className='mt-5'>/ month</span>
        </div>

        <div>

            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px]'>Real-time collaboration</h6>
            </div>
            <div className='flex items-center gap-2 pt-[8px]'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] '>AI-powered organization</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>Customizable templates</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>5GB cloud storage</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px] '>Basic integrations</h6>
            </div>
        </div>


   {/* butoon */}
<div>
<div className='w-[200px] h-[59px] bg-[#efece6]  border bg-custom-gradient border-[#048c80] rounded-[8px] flex items-center gap-2 justify-center my-5'>
      <h3 className='font-bold text-[16px] leading-[24px]'>Start Free Trial</h3>
      <img src="/Arrow.png" alt="" />
        </div>
        <span className='font-normal text-[12px] leading-[18px] text-[#9b9b9b] mx-8'>No credit card required</span>
</div>
       

 </div>


{/* secondcard */}
<div>  <div className='border border-blue-500 md:w-[357px] bg-white rounded-[12px]  flex flex-col gap-3 mx-5 mt-10 px-8 p-5 hover:bg-black  hover:text-white'>
        <div className='flex items-center gap-2'>
        <img src="/layer1.png" alt="" />
  <h6 className='text-[#048c80] '>Team Plan</h6>
        </div>

        <div className='flex  gap-1 py-[32px]'>
            <h6 className='font-bold text-[40px] leading-[48px] '>$19.99</h6>
            <span className='mt-5'>/ month</span>
        </div>

        <div>

            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px]'>Everything in the Individual Plan</h6>
            </div>
            <div className='flex items-center gap-2 pt-[8px]'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] '>Unlimited cloud storage</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>Advanced integrations</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>Team management and permissions</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px] '>Shared templates and note libraries</h6>
            </div>
        </div>


   {/* butoon */}
<div>
<div className='w-[200px] h-[59px] bg-[#efece6]  border bg-custom-gradient border-[#048c80] rounded-[8px] flex items-center gap-2 justify-center my-5'>
      <h3 className='font-bold text-[16px] leading-[24px]'>Start Free Trial</h3>
      <img src="/Arrow.png" alt="" />
        </div>
        <span className='font-normal text-[12px] leading-[18px] text-[#9b9b9b] mx-8'>No credit card required</span>
</div>
       

 </div>
</div>

{/* thirdtcard */}
<div>  <div className='border border-blue-500 md:w-[357px] bg-white rounded-[12px]   flex flex-col gap-3 mx-5 mt-10 px-8 p-5 hover:bg-black  hover:text-white'>
        <div className='flex items-center gap-2'>
        <img src="/layer1.png" alt="" />
  <h6 className='text-[#048c80] '>Enterprise Plan</h6>
        </div>

        <div className='flex  gap-1 py-[32px]'>
            <h6 className='font-bold text-[40px] leading-[48px] '>Custom</h6>
            
        </div>

        <div>

            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px]'>Everything in the Team Plan</h6>
            </div>
            <div className='flex items-center gap-2 pt-[8px]'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] '>Dedicated account manager</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>Enterprise-grade security</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px]'>Customized onboarding</h6>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/path.png" alt="" />
                <h6 className='font-normal text-[14px] leading-[21px] pt-[8px] '>Advanced analytics</h6>
            </div>
        </div>


   {/* butoon */}
<div >
<div className='w-[200px] h-[59px] bg-[#efece6]  border bg-custom-gradient border-[#048c80] rounded-[8px] flex items-center gap-2 justify-center my-5'>
      <h3 className='font-bold text-[16px] leading-[24px]'>Start Free Trial</h3>
      <img src="/Arrow.png" alt="" />
        </div>
        <span className='font-normal text-[12px] leading-[18px] text-[#9b9b9b] mx-8'>No credit card required</span>
</div>
       

 </div>
</div>

</div>

<div className='py-[64px] mx-3   md:px-[480px]'>
<img src="/row.png" alt=""  className=''/>
<h2 className='text-white  text-[20px] leading-[30px] text-center  md:w-[470px] md:text-[24px] md:leading-[34px]  w-[300px]'>The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. </h2>

<div className='flex items-center justify-center gap-2'>
  <h5 className='font-normal text-[14px] leading-[21px] text-white pt-[24px] md:text-[16px] md:leading-[24px]'>Sarah Johnson</h5>
  <span className='font-normal text-[14px] leading-[21px] text-gray-400 pt-[24px] md:text-[16px] md:leading-[24px]'>TechSavvy Solutions</span>
</div>

    </div> 

    </main>
  </section>
  )
}

export default Pricing
