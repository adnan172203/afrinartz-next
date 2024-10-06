import React from 'react';

const AboutBanner = () => {
  return (
    <>
      <section className='bg-black text-white mx-2.5 rounded-b-[10px]'>
        <div className='relative pt-[164px] pb-[194px] flex items-center justify-center overflow-hidden px-4 width-1296px'>
          <div className='relative z-10 text-center'>
            <h1 className='font-gallient text-[100px] sm:text-[70px] xs:text-[46px]'>
              About Myself
            </h1>
            <p className='text-lg xs:text-base text-white/70 sm:text-[17px] w-8/12 mx-auto'>
              <span className='font-semibold text-white'>I'm Afrina</span>, a
              creative enthusiast with a passion for crafting user interfaces
              that not only look good but feel great to use!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
