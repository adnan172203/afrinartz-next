'use client';
import React, { useState, useEffect } from 'react';
import DrawerNavbar from './DrawerNavbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className='bg-black mt-2.5 mx-2.5 rounded-t-[10px]'>
        <nav className='flex items-center justify-between px-10 py-5'>
          <div>
            <img src='./images/logo.png' alt='' />
          </div>
          {/* <div className='px-10 lg:hidden'>
            <div className='border border-white/20 rounded-[60px] lg:bottom-0 lg:z-20'>
              <ul className='font-inter  text-xs flex  gap-x-[90px] xxl:gap-x-[60px] xl:px-24 text-white/70 py-7 px-44 uppercase'>
                <li>
                  <a href=''>About</a>
                </li>
                <li>
                  <a href=''>Works</a>
                </li>
                <li>
                  <a href=''>Case Studies</a>
                </li>
                <li>
                  <a href=''>Experiments</a>
                </li>
                <li>
                  <a href=''>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg:hidden'>
            <ul className='flex gap-x-[25px] items-center'>
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
          </div> */}
          <div
            className='hidden cursor-pointer lg:block'
            onClick={handleDrawer}
          >
            <img src='../../../images/nav-icons/hamburger.svg' alt='' />
          </div>
        </nav>
      </header>

      <DrawerNavbar
        isScrolled={isScrolled}
        isOpen={isOpen}
        handleDrawer={handleDrawer}
      />
    </>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <>
//       <header className='bg-black mt-2.5 mx-2.5 rounded-t-[10px]'>
//         <nav className='flex items-center justify-between px-10 py-5'>
//           <div>
//             <img src='./images/logo.png' alt='' />
//           </div>
//           <div className='z-20 bg-black lg:flex lg:justify-center lg:items-center lg:fixed lg:bottom-0 lg:left-0 lg:right-0'>
//             <ul className='font-inter text-xs flex gap-x-[90px] xxl:gap-x-[60px] xl:px-24 text-white/70 py-7 px-44 uppercase'>
//               <li>
//                 <a href=''>About</a>
//               </li>
//               <li>
//                 <a href=''>Works</a>
//               </li>
//               <li>
//                 <a href=''>Case Studies</a>
//               </li>
//               <li>
//                 <a href=''>Experiments</a>
//               </li>
//               <li>
//                 <a href=''>Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <ul className='flex gap-x-[25px] items-center'>
//               <li>
//                 <img src='./images/nav-icons/facebook.svg' alt='' />
//               </li>
//               <li>
//                 <img src='./images/nav-icons/instagram.svg' alt='' />
//               </li>
//               <li>
//                 <img src='./images/nav-icons/linkedin.svg' alt='' />
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
