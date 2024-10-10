import React from 'react';
import Link from 'next/link';

const Project = () => {
  return (
    <section>
      <div className='grid grid-cols-2 max-w-[1296px] mx-auto gap-[88px] xxl:px-5 xl:px-[100px] xs:px-[70px] xxl:gap-[60px] lg:grid-cols-1 xxs:px-[40px]'>
        <div>
          <div className='relative mt-[140px] mb-[100px]'>
            <h2 className='relative text-[80px] font-gallient z-[20] xxl:text-[70px] xl:text-[60px] md:text-[53px] xs:text-[45px]'>
              I thrive on sharing <br className='xl:block' /> my designs
            </h2>
            {/* <span className='bg-[#F3D333] w-[137px] h-[73px] absolute left-[180px] top-[140px] rounded-lg z-[10] transform -rotate-12 xxl:top-[111px] xxl:left-[160px] xl:top-[96px] xl:left-[135px] lg:top-[89px] lg:left-[131px]'></span> */}
          </div>
          <div>
            <Link href='/work-process/1'>
              <div className='bg-[#E6EDE3] mb-[88px] lg:mb-[60px] rounded-[20px]'>
                <div className='px-[70px] pt-[60px] xs:px-9'>
                  <span className='bg-[#00B67A] text-white px-[12px] py-[4px] rounded-2xl font-inter text-xs font-normal tracking-[6px] uppercase'>
                    lms
                  </span>
                  <h2 className='font-inter text-2xl mt-[13px]'>
                    <span className='font-black'>Edvik -</span> A Education
                    Website
                  </h2>
                  <p className='font-inter text-[#656565] mt-[15px]'>
                    Edvik is a new modern Moodle theme designed and developed
                    for Education and Online Courses Management websites!
                  </p>
                </div>
                <img src='./images/project/1.png' alt='' />
              </div>
            </Link>
            <div className='bg-[#EDE3E3] mb-[152px] lg:mb-0 rounded-[20px]'>
              <div className='px-[70px] pt-[60px] pb-[47px] xs:px-9'>
                <span className='bg-black text-white px-[12px] py-[4px] rounded-2xl font-inter text-xs font-normal tracking-[6px] uppercase'>
                  streaming
                </span>
                <h2 className='font-inter text-2xl mt-[13px]'>
                  <span className='font-black'>Kapa -</span> A Car Repair &
                  Servicing Website
                </h2>
                <p className='font-inter text-[#656565] mt-[15px]'>
                  Kapa is a modern responsive WordPress Theme built for Car
                  Repair & Auto Services websites.
                </p>
              </div>
              <img src='./images/project/2.png' alt='' />
            </div>
          </div>
        </div>
        <div>
          <div className='mt-[120px] lg:mt-0 relative'>
            <div className='bg-[#E3EBED] mb-[88px] lg:mb-[60px] rounded-[20px]'>
              <div className='px-[70px] pt-[60px] pb-[47px] xs:px-9'>
                <span className='bg-[#0A55E5] text-white px-[12px] py-[4px] rounded-2xl font-inter text-xs font-normal tracking-[6px] uppercase'>
                  medical
                </span>
                <h2 className='font-inter text-2xl mt-[13px]'>
                  <span className='font-black'>Hospa -</span> A healthcare
                  website
                </h2>
                <p className='font-inter text-[#656565] mt-[15px]'>
                  Kapa is a modern responsive WordPress Theme built for Car
                  Repair & Auto Services websites.
                </p>
              </div>
              <img src='./images/project/3.png' alt='' />
            </div>

            <div className='bg-[#E7E6F1] mb-[70px] rounded-[20px]'>
              <div className='px-[70px] pt-[60px] pb-[47px] xs:px-9'>
                <span className='bg-[#6560F0] text-white px-[12px] py-[4px] rounded-2xl font-inter text-xs font-normal tracking-[6px] uppercase'>
                  dashboard
                </span>
                <h2 className='font-inter text-2xl mt-[13px]'>
                  <span className='font-black'>Adlash -</span> A Multi-purpose
                  dashboard
                </h2>
                <p className='font-inter text-[#656565] mt-[15px]'>
                  Adlash is a sleek and modern admin dashboard template based on
                  Vue.js, TypeScript, and Bootstrap Vue.
                </p>
              </div>
              <img src='./images/project/4.png' alt='' />
            </div>

            <div className='w-[280px] h-[283px] xs:w-[250px] xs:h-[250px] xxxs:w-[200px] xxxs:h-[200px] relative top-20 left-44 xxl:top-16 lg:flex lg:justify-center lg:left-0 lg:mx-auto'>
              <div className='absolute inset-0 animate-spin-slow font-inter text-[6px]'>
                <svg className='w-full h-full' viewBox='0 0 100 100'>
                  <path
                    id='textPath'
                    d='M50,10 a40,40 0 0,1 0,80 a40,40 0 0,1 0,-80'
                    fill='none'
                  />
                  <text className='uppercase tracking-[2.5px] text-black opacity-40 font-light'>
                    <textPath href='#textPath'>
                      * View more projects * View more projects
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='flex items-center justify-center w-16 h-16 bg-black rounded-full'>
                  <span className='text-2xl text-white'>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
