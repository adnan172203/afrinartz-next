import React from 'react';

const Footer = () => {
  return (
    <>
      <section>
        <div className='max-w-[1296px] mx-auto border-t border-[#F2F1F9] mt-[120px] relative pb-[240px] px-5'>
          <div className='mx-auto text-center relative mt-[120px]'>
            <h2 className='font-gallient text-[80px] sm:text-[70px] xs:text-[50px] font-normal z-20 relative tracking-wide'>
              Let
              <span className='relative top-[-51px] xs:top-[-30px] left-0'>
                ,
              </span>
              s Connect
            </h2>
            {/* <span className='bg-[#F3D333] w-[137px] h-[73px] absolute right-[480px] top-[20px] rounded-lg z-[10] transform -rotate-12'></span> */}
          </div>

          <div>
            <p className='text-center text-[#656565] font-inter text-base z-20 relative'>
              Got a cool project or just want to swap cat memes? Let's chat and
              make something <br className='sm:hidden' />
              awesome together!
            </p>
          </div>

          <div className='absolute bottom-0 px-5 top-64'>
            <img src='./images/contact/zigzag.png' alt='' />
          </div>

          <div className='relative flex xxs:flex-wrap justify-center items-center top-10 gap-[25px] sm:mt-2'>
            <div className='bg-white w-[100px] h-[100px] sm:w-16 sm:h-16 flex justify-center items-center rounded-full shadow-[0px_38px_30px_rgba(213,213,226,0.30)]'>
              <img src='./images/contact/facebook.svg' alt='' />
            </div>

            <div className='bg-white w-[100px] h-[100px] sm:w-16 sm:h-16 flex justify-center items-center rounded-full shadow-[0px_38px_30px_rgba(213,213,226,0.30)]'>
              <img src='./images/contact/instagram.svg' alt='' />
            </div>

            <div className='bg-white w-[100px] h-[100px] sm:w-16 sm:h-16 flex justify-center items-center rounded-full shadow-[0px_38px_30px_rgba(213,213,226,0.30)]'>
              <img src='./images/contact/behance.svg' alt='' />
            </div>

            <div className='bg-white w-[100px] h-[100px] sm:w-16 sm:h-16 flex justify-center items-center rounded-full shadow-[0px_38px_30px_rgba(213,213,226,0.30)]'>
              <img src='./images/contact/dribble.svg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
