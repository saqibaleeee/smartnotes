// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     // main
//    <section className='bg-[#080808]'>
//        <main className='md:flex md:items-center md:justify-between md:mx-[100px] '>

//            {/* logodiv */}
//             <div className='flex items-center gap-2 py-[24px] pl-[20px] md:py-[33px] '>
//               <img src="/notes.png" alt=""  className='w-[28px] h-[28px]'/>
//               <h1 className='font-bold  text-[18px] leading-[] md:text-[24px] text-white'>SmartNotes</h1>
//             </div>

//              {/* navigationbar */}
//               <ul className='md:flex md:items-center md:justify-center hidden gap-[56px]  '>
//               <li className='text-white md:font-normal md:text-[16px]' >
//               <Link to="/">Home</Link>
//               </li>

//                 <li className='text-white md:font-normal md:text-[16px]' >
//                   <Link to="/discover">Discover</Link>
//                 </li>
//                 <li className='text-white md:font-normal md:text-[16px]' >
//                   <Link to="/pricing">Pricing</Link>
//                 </li>
//                 <li className='text-white md:font-normal md:text-[16px]' >
//                   <Link to="/faqs">Faqs</Link>
//                 </li>
//                 <li className='text-white md:font-normal md:text-[16px]' >
//                   <Link to="/footer">Footer</Link>
//                 </li>
//               </ul>  

//               {/* get start buttondiv */}
               
//                <div className='md:flex items-center gap-2 bg-gradient-to-r from-blue-400 to-green-200 py-[10px] px-[24px] hidden rounded-[8px] '>
//                  <button className='md:font-normal md:text-[18px] text-white'>
//                  Get Start
//            </button>
//            <img src="/Arrow.png" alt="" className='w-[24px] h-[24px]' />
//            </div>
     


//        </main>
               
//        <hr  className='border-blue-400'/>

//    </section>
//   )
// }

// export default Navbar


// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleGetStarted = () => {
    navigate('/pricing'); // Navigate to the Pricing page on button click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <section className='bg-[#080808]'>
      <main className='md:flex md:items-center md:justify-between md:mx-[100px] relative flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2 py-[24px] pl-[20px] md:py-[33px]'>
          <img src="/notes.png" alt="SmartNotes logo" className='w-[28px] h-[28px]' />
          <h1 className='font-bold text-[18px] md:text-[24px] text-white'>SmartNotes</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center pr-[20px]'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {/* Hamburger Icon */}
            <svg
              className='w-6 h-6 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:justify-center gap-[56px] md:static absolute bg-[#080808] md:bg-transparent top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out`}
        >
          <li className='text-white md:font-normal md:text-[16px] text-[14px] px-6 py-2  hover:text-[#6cb4af] duration-700'>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className='text-white md:font-normal md:text-[16px]  text-[14px] px-6  hover:text-[#6cb4af] duration-700'>
            <Link to="/discover" onClick={() => setIsMenuOpen(false)}>Discover</Link>
          </li>
          <li className='text-white md:font-normal md:text-[16px]  text-[14px] px-6 py-2 hover:text-[#6cb4af] duration-700'>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          </li>
          <li className='text-white md:font-normal md:text-[16px]  text-[14px] px-6 hover:text-[#6cb4af] duration-700'>
            <Link to="/faqs" onClick={() => setIsMenuOpen(false)}>FAQs</Link>
          </li>
          <li className='text-white md:font-normal md:text-[16px]  text-[14px] px-6 p-2 hover:text-[#6cb4af] duration-700'>
            <Link to="/footer" onClick={() => setIsMenuOpen(false)}>Footer</Link>
          </li>
        </ul>

        {/* Get Started Button with Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex items-center gap-2 bg-gradient-to-r from-blue-400 to-green-200 py-[10px] px-[24px] hidden rounded-[8px] md:static absolute top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out md:mt-0 mt-2`}
        >
          <button onClick={handleGetStarted} className='md:font-normal md:text-[18px] text-white'>
            Get Start
          </button>
          <img src="/Arrow.png" alt="Arrow" className='w-[24px] h-[24px]' />
        </div>
      </main>
<button className='text-white' id='mode'>L/D</button>
      <hr className='border-blue-400' />

    </section>
  );
};

export default Navbar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   // State to toggle the menu visibility
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-[#080808] md:flex md:items-center md:justify-between px-5 md:px-[100px] items-center relative">
//       {/* Logo */}
//       <div className="flex items-center gap-[6px] py-6">
//         <img src="/notes.png" alt="SmartNotes logo" className="h-[28px]" />
//         <h1 className="text-white font-bold text-[16px]">SmartNotes</h1>
//       </div>

//       {/* Hamburger Icon for Mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-white focus:outline-none">
//           {/* Hamburger Icon */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`${
//           isMenuOpen ? 'block' : 'hidden'
//         } md:flex md:items-center md:gap-[40px] bg-[#080808] md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out z-10`}
//       >
//         <li className="text-white font-normal text-[16px] leading-[24px] py-4 px-5 md:py-0 md:px-0">
//           <Link to="/">Feature</Link>
//         </li>
//         <li className="text-white font-normal text-[16px] leading-[24px] py-4 px-5 md:py-0 md:px-0">
//           <Link to="/pricing">Pricing</Link>
//         </li>
//         <li className="text-white font-normal text-[16px] leading-[24px] py-4 px-5 md:py-0 md:px-0">
//           <Link to="/faqs">FAQs</Link>
//         </li>
//         <li className="text-black font-normal text-[16px] leading-[24px] py-4 px-5 md:py-0 md:px-0 cursor-pointer">
//           <Link to="/support">Support</Link>
//         </li>
//       </ul>

//       {/* Get Started Button */}
//       <div
//         className={`${
//           isMenuOpen ? 'block' : 'hidden'
//         } md:flex bg-gradient-to-r from-green-400 to-lime-200 py-[16px] px-[24px] md:h-[54px] items-center gap-2 rounded-[4px] md:static absolute top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out md:mt-0 mt-2`}
//       >
//         <button className="font-normal text-[14px] leading-[24px]">
//           Get Start
//         </button>
//         <img src="/Arrow.png" alt="Arrow" className="w-[24px] h-[24px]" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


