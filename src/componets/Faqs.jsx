import React from 'react'

const Faqs = () => {
  return (
    <section className='max-w-1240px px-[] bg-black'>
         <div className=' py-[63px] '>

<h1 className='font-bold text-[30px] mx-1 leading-[39px] text-center text-white md:font-bold md:text-[48px] md:leading-[57px] md:text-center'>Frequently Asked <br /> <span  class="bg-gradient-to-r from-[#017373] to-[#017373] bg-clip-text text-transparent"> Questions</span></h1>

<p className='font-normal text-[14px] md:text-[16px]  md:mx-[400px]    md:text-center leading-[21px] text-center mt-6 text-white  '>We've compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team..</p>
</div> 
{/* question */}
<div className='md:flex md:flex-col md:items-center'>

    {/* q1 */}
    <div className=' w-[300px] h-[60px] md:w-[800px]  border border-[#017373] rounded-[12px]   flex items-center justify-between px-4 md:px-8  mx-3 mt-10'>
<h2 className='text-white font-bold text-[18px]'>What is SmartNotes?</h2>
<img src="/Arrow.png" alt="" />

 
   </div>

    {/* q2 */}
    <div className=' w-[300px] h-[60px] md:w-[800px]  border border-[#017373] rounded-[12px] gap-5  flex items-center justify-between px-4 md:px-8  mx-3 mt-10'>
<h2 className='text-white font-bold text-[18px]'>What are the key features of SmartNotes?</h2>
<img src="/Arrow.png" alt="" />

 
   </div>

    {/* q3 */}
    <div className=' w-[300px] h-[60px] md:w-[800px]  border border-[#017373] rounded-[12px]   flex items-center justify-between px-4 md:px-8  mx-3 mt-10'>
<h2 className='text-white font-bold text-[18px]'>How much does SmartNotes cost?</h2>
<img src="/Arrow.png" alt="" />

 
   </div>

    {/* q4 */}
    <div className=' w-[300px] h-[60px] md:w-[800px]   border border-[#017373] rounded-[12px]   flex items-center justify-between px-4 md:px-8 mx-3 mt-10'>
<h2 className='text-white font-bold text-[18px]'>Who is SmartNotes for?</h2>
<img src="/Arrow.png" alt="" />

 
   </div>

    {/* q5 */}
    <div className=' w-[300px] h-[60px] md:w-[800px]   border border-[#017373] rounded-[12px]   flex items-center justify-between px-4  md:px-8 mx-3  mt-10'>
<h2 className='text-white font-bold text-[18px]'>What is SmartNotes?</h2>
<img src="/Arrow.png" alt="" />

 
   </div>
</div>
<div className='py-[64px] mx-3   md:px-[480px]'>
<img src="/row.png" alt=""  className=''/>
<h2 className='text-white text-[20px] leading-[30px] text-center  md:w-[470px] md:text-[24px] md:leading-[34px]  w-[300px]'>The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. </h2>

<div className='flex items-center justify-center gap-2 '>
  <h5 className='font-normal text-[14px] leading-[21px] text-white pt-[24px] md:text-[16px] md:leading-[24px]'>Sarah Johnson</h5>
  <span className='font-normal text-[14px] leading-[21px] text-gray-400 pt-[24px] md:text-[16px] md:leading-[24px]'>TechSavvy Solutions</span>
</div>

    </div>

{/* unlocksection */}
<div className=' md:flex md:justify-center md:gap-[48px] md:py-[80px]'>

    {/* div1 */}
    <div className='mx-5 py-[40px]'>
        <h1 className='text-white font-bold md:text-[48px] md:w-[497px] md:leading-[50px] leading-[39px] text-[30px]'>Unlock the Full Potential of <span className='text-[#017373]'>SmartNotes</span></h1>
        <p className='text-[#BABABA] md:w-[497px] md:py-[24px] py-4'>Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking.</p>
        <div className='md:flex flex  h-[64px] items-center gap-5 bg-gradient-to-r from-blue-400 to-green-200 py-[10px] px-[24px]  rounded-[8px] w-[266px] '>
                 <button className='md:font-bold md:text-[18px] text-black'>
           Sign up for free
           </button>
           <img src="/Arrow.png" alt="" className='w-[24px] h-[24px]' />
           </div>

    </div>
        
  
    {/* div2 IMG */}
    <div>
        <img src="/CTA shapes.png" alt="" className='hidden md:block' />
    </div>
</div>
    </section>
  )
}

export default Faqs
