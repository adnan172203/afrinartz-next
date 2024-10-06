import React from 'react';

const CaseStudies = () => {
  return (
    <>
      <section className='bg-black lg:mt-[150px] px-6 xxl:px-[100px] xs:px-[20px]'>
        <div className='max-w-[1296px] mx-auto pt-[120px]'>
          <div>
            <h1 className='font-gallient text-white text-[8vw] lg:text-[12vw] text-center'>
              Case Studies
            </h1>
          </div>

          <div>
            <div className='flex justify-start mb-7 lg:flex-col lg:items-center lg:text-left'>
              <div className='flex-shrink-0'>
                <img src='./images/case-studies/case-1.png' alt='' />
              </div>

              <div className='font-inter ml-[69px] mt-[104px] lg:ml-0 lg:mt-[50px]'>
                <p className='text-[#FFC271] uppercase tracking-widest text-xs'>
                  A Compettive analysis on
                </p>

                <h2 className='text-white text-2xl mt-[15px]'>
                  <span className='font-black'>How to Improve</span> Medical
                  Appointment Booking Experience
                </h2>
                <p className='text-white/70 mt-[15px]'>
                  My first elaborate case study to improve a medical service for
                  a website.
                </p>

                <div className='flex items-center mt-[25px]'>
                  <span className='flex justify-center items-center w-9 h-9 rounded-full border border-[#3A3A3A] text-white mr-3'>
                    +
                  </span>
                  <p className='text-xs tracking-widest text-white uppercase'>
                    view case studies
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-row-reverse justify-start pb-[128px] lg:flex-col lg:items-center lg:text-left lg:mt-[80px]'>
              <div className='flex-shrink-0'>
                <img src='./images/case-studies/case-2.png' alt='' />
              </div>

              <div className='font-inter mr-[69px] lg:mr-0 mt-[104px] lg:ml-0 lg:mt-[50px]'>
                <p className='text-[#FFC271] uppercase tracking-widest text-xs'>
                  A Compettive analysis on
                </p>

                <h2 className='text-white text-2xl mt-[15px]'>
                  <span className='font-black'>How to Improve</span> Medical
                  Appointment Booking Experience
                </h2>
                <p className='text-white/70 mt-[15px]'>
                  My first elaborate case study to improve a medical service for
                  a website.
                </p>

                <div className='flex items-center mt-[25px]'>
                  <span className='flex justify-center items-center w-9 h-9 rounded-full border border-[#3A3A3A] text-white mr-3'>
                    +
                  </span>
                  <p className='text-xs tracking-widest text-white uppercase'>
                    view case studies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
