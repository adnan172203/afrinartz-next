import React from 'react';

const WorkProcessBanner = ({ projectData }) => {
  console.log('images===>>>>>>>>>', projectData);

  return (
    <>
      <section className='text-white mx-2.5 relative'>
        <div className='bg-black text-white h-[730px] relative rounded-b-[10px] flex justify-center overflow-hidden px-4 pt-[154px]relative z-10'>
          <div className='relative z-10 text-center'>
            <div className='relative'>
              <h1 className='font-gallient text-[120px] xl:text-[80px] md:text-[65px]'>
                {projectData.title}
              </h1>

              <span className='bg-[#0A55E5] text-white px-[12px] py-[4px] rounded-2xl font-inter text-xs font-normal tracking-[6px] uppercase absolute transform -rotate-12 top-[25px] border-[4px] left-[575px] border-black'>
                medical
              </span>
            </div>

            <div className='flex flex-wrap justify-center gap-5'>
              <div className='bg-[#2D313A] rounded-full'>
                <div className='py-[15px] px-5 flex items-center'>
                  <img
                    src='./images/work-process/clock.svg'
                    alt=''
                    className='mr-2.5'
                  />
                  <p className='uppercase text-xs tracking-[4px] text-white/60 mr-2.5'>
                    Duration:
                  </p>
                  <p className='uppercase text-xs tracking-[4px]'>3 weeks</p>
                </div>
              </div>
              <div className='bg-[#2D313A] rounded-full'>
                <div className='py-[15px] px-5 flex items-center'>
                  <img
                    src='./images/work-process/user-check.svg'
                    alt=''
                    className='mr-2.5'
                  />
                  <p className='uppercase text-xs tracking-[4px] text-white/60 mr-2.5'>
                    Role:
                  </p>
                  <p className='uppercase text-xs tracking-[4px]'>
                    user interface designer
                  </p>
                </div>
              </div>
              <div className='bg-[#2D313A] rounded-full'>
                <div className='py-[15px] px-5 flex items-center'>
                  <img
                    src='./images/work-process/link.svg'
                    alt=''
                    className='mr-2.5'
                  />
                  <p className='uppercase text-xs tracking-[4px] text-[#F3D333] font-semibold'>
                    Live Link
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[-483px] relative z-20 gap-6 px-5'>
          {/* <div className='md:hidden'>
            <p className='text-2xl'>hello</p>
            <img
              src='../../../images/work-process/work-1.png'
              alt=''
              className='mb-6'
            />
            <img src='../../../images/work-process/work-2.png' alt='' />
          </div>
          <div className='md:mt-20 sm:mt-64'>
            <img src='../../../images/work-process/work-big-3.png' alt='' />
          </div>
          <div className='lg:hidden'>
            <img
              src='../../../images/work-process/work-4.png'
              alt=''
              className='mb-6'
            />
            <img src='../../../images/work-process/work-5.png' alt='' />
          </div> */}

          {projectData.images.map((section, index) => (
            <div key={index} className={section.className}>
              {section.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image.src}
                  alt=''
                  className={image.className}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkProcessBanner;
