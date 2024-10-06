// import React from 'react';

// const DrawerNavbar = ({ isScrolled, isOpen }) => {
//   return (
//     <>
//       <div
//         className={`fixed transform ease-in-out delay-400 duration-500  transition-all ${
//           isOpen
//             ? 'block transition-opacity opacity-100 duration-500 translate-x-0'
//             : 'hidden transition-all opacity-0 translate-x-full'
//         } right-2 z-20  w-[300px]  ${
//           isScrolled ? 'top-0' : 'top-2.5'
//         } h-screen bg-black border-2 border-slate-300`}
//       >
//         <div className='border border-white/20'>
//           <ul className='flex flex-col items-center justify-center w-full gap-8 text-xs text-black uppercase font-inter xl:px-24 py-7 text-white/70'>
//             <li>
//               <a href=''>About</a>
//             </li>
//             <li>
//               <a href=''>Works</a>
//             </li>
//             <li>
//               <a href=''>Case Studies</a>
//             </li>
//             <li>
//               <a href=''>Experiments</a>
//             </li>
//             <li>
//               <a href=''>Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div className='pt-5'>
//           <ul className='flex justify-center gap-x-[25px] items-center w-full'>
//             <li>
//               <img src='./images/nav-icons/facebook.svg' alt='' />
//             </li>
//             <li>
//               <img src='./images/nav-icons/instagram.svg' alt='' />
//             </li>
//             <li>
//               <img src='./images/nav-icons/linkedin.svg' alt='' />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DrawerNavbar;

import React from 'react';

const DrawerNavbar = ({ isScrolled, isOpen, handleDrawer }) => {
  return (
    <div
      className={`fixed right-0 z-20 w-[300px] h-screen bg-black border-2 border-slate-300 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isScrolled ? 'top-0' : 'top-2.5'}`}
    >
      <div
        onClick={handleDrawer}
        className='text-white text-[40px] p-4 cursor-pointer'
      >
        <img src='../../../images/nav-icons/close.svg' alt='' />
      </div>
      <div className='border border-t-0 border-b-white/20'>
        <ul className='flex flex-col items-center justify-center w-full gap-8 text-xs uppercase font-inter xl:px-24 py-7 text-white/70'>
          <li>
            <a href='#' className='transition-colors hover:text-white'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='transition-colors hover:text-white'>
              Works
            </a>
          </li>
          <li>
            <a href='#' className='transition-colors hover:text-white'>
              Case Studies
            </a>
          </li>
          <li>
            <a href='#' className='transition-colors hover:text-white'>
              Experiments
            </a>
          </li>
          <li>
            <a href='#' className='transition-colors hover:text-white'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='pt-5'>
        <ul className='flex justify-center gap-x-[25px] items-center w-full'>
          <li>
            <img src='./images/nav-icons/facebook.svg' alt='' />
          </li>
          <li>
            <img src='./images/nav-icons/instagram.svg' alt='' />
          </li>
          <li>
            <img src='./images/nav-icons/linkedin.svg' alt='' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerNavbar;
