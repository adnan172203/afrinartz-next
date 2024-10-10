import React from 'react';

const Experiment = () => {
  return (
    <section className='pt-[106px]'>
      <div className='max-w-[1296px] mx-auto xxl:px-[100px] md:px-[70px] xs:px-[40px] xxxs:px-[25px]'>
        <div className='relative'>
          <div className='relative pb-[106px]'>
            <h2 className='relative font-gallient text-[80px] z-20 lg:text-[60px]  md:text-[50px] xs:text-[9vw]'>
              I find joy in translating{' '}
              <br className='hidden md:block xxs:hidden' /> concepts{' '}
              <br className='lg:hidden ' />
              into tangible <br className='hidden md:block xxs:hidden' />{' '}
              experiences
            </h2>
            <span className='bg-[#F3D333] w-[137px] h-[73px] absolute left-[780px] top-[20px] lg:top-0 lg:left-[546px] rounded-lg z-[10] transform -rotate-12 xxl:right-[184px] md:top-[81px] md:left-[32px] xs:top-[64px] xs:left-[21px] xs:w-[108px] xs:h-[50px] xs:hidden'></span>
          </div>
          <div className='absolute inset-0 flex items-center justify-end right-0 top-[-85px] sm:top-[28px] xs:hidden'>
            <div className='flex items-center justify-center w-16 h-16 bg-black rounded-full'>
              <span className='text-2xl text-white'>+</span>
            </div>
          </div>
        </div>

        <div className='flex gap-6 justify-center items-stretch h-[500px] md:h-auto md:flex-col'>
          <div className='video-container w-[306px] transition-all duration-300 ease-in-out hover:w-1/2 hover:z-10 group md:w-full md:hover:w-full'>
            <video
              src='./images/experiments-video/experiment-1.mp4'
              alt=''
              autoPlay
              loop
              muted
              className='object-cover w-full h-full rounded-lg'
            ></video>
          </div>
          <div className='video-container w-[636px] transition-all duration-300 ease-in-out group-hover:w-1/4 hover:w-1/2 hover:z-10 z-20 lg:w-[306px] md:w-full md:hover:w-full'>
            <video
              src='./images/experiments-video/experiment-2.mp4'
              alt=''
              autoPlay
              loop
              muted
              className='object-cover w-full h-full rounded-lg'
            ></video>
          </div>
          <div className='video-container w-[306px] transition-all duration-300 ease-in-out hover:w-1/2 hover:z-10 group md:w-full md:hover:w-full'>
            <video
              src='./images/experiments-video/experiment-3.mp4'
              alt=''
              autoPlay
              loop
              muted
              className='object-cover w-full h-full rounded-lg'
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiment;
