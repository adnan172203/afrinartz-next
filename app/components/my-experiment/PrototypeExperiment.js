import React from 'react';

const PrototypeExperiment = () => {
  return (
    <>
      <section className='mx-[108px]'>
        <div className='max-w-[1296px] mx-auto flex pt-[120px]'>
          <div>
            <div className='text-[80px] font-gallient relative mb-[70px]'>
              <h1 className='relative z-20'>Some Prototyping Experiments</h1>

              <span className='bg-[#F3D333] w-[137px] h-[73px] absolute left-[246px] top-[20px] lg:top-0  rounded-lg z-[10] transform -rotate-12  md:top-[81px] md:left-[32px] xs:top-[64px] xs:left-[21px] xs:w-[108px] xs:h-[50px] xs:hidden'></span>
            </div>
            <div className='w-[612px] h-[623px]'>
              <video
                src='../../../images/experiments-video/experiment-2.mp4'
                autoPlay
                loop
                muted
                className='object-cover w-full h-full rounded-[20px] border-4 border-slate-300'
              ></video>
            </div>

            <div className='font-inter mt-[110px]'>
              <h3 className='mb-5 text-2xl'>
                Wanna See The <span className='font-black'>Figma Link?</span>
              </h3>
              <p className='text-xs uppercase text-[#0067FF] font-bold'>
                Request For prototype link
              </p>
            </div>
          </div>
          <div>
            <div className='w-[612px] h-[432px] mb-[72px]'>
              <video
                src='../../../images/experiments-video/experiment-3.mp4'
                autoPlay
                loop
                muted
                className='object-cover w-full h-full rounded-[20px] border-4 border-slate-300'
              ></video>
            </div>
            <div className='w-[612px] h-[545px]'>
              <video
                src='../../../images/experiments-video/experiment-1.mp4'
                autoPlay
                loop
                muted
                className='object-cover w-full h-full rounded-[20px] border-4 border-slate-300'
              ></video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrototypeExperiment;
