import React from 'react';

const MyexperimentBanner = () => {
  return (
    <>
      <section>
        <div className='bg-black text-white mx-2.5  rounded-b-[10px] relative'>
          <div className='relative pt-[164px] pb-[194px] flex items-center justify-center overflow-hidden px-4 width-1296px '>
            <div className='relative z-10'>
              <h1 className='font-gallient text-[100px] text-center  sm:text-[90px] xs:text-[46px]'>
                My Experients
              </h1>
              <p className='flex justify-center text-center text-white/70'>
                {/* I'm driven to create meaningful interactions that{' '}
                <br className='md:hidden' />
                resonate itself. */}
                I really like to experiment new things, whether it is
                prototyping or creating <br className='xs:hidden' /> video
                animation for presenting my works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyexperimentBanner;
