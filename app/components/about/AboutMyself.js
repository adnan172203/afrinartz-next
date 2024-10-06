import React from 'react';

const AboutMyself = () => {
  return (
    <>
      <section>
        <div className='max-w-[1296px] mx-auto grid grid-cols-2 pt-[116px] gap-x-[180px] place-items-center px-[100px] lg:grid-cols-1 lg:w-[564px] lg:px-0 sm:px-5 xs:w-[430px] xxs:w-[350px] xxxs:w-full xxxs:px-4'>
          <div>
            <div>
              <div className='relative'>
                <h2 className='font-gallient text-[80px] z-20 relative xs:text-[60px] px-5 xxxs:text-[40px]'>
                  My Work
                </h2>
                <span className='bg-[#F3D333] w-[137px] h-[73px] absolute left-[165px] top-[20px] xs:top-[-4px] xs:left-[129px] rounded-lg z-[10] transform -rotate-12  xxxs:left-[87px] xxxs:w-[92px] xxxs:h-[48px]'></span>
              </div>
              <p className='font-inter text-[#656565] font-normal text-base mt-[40px] px-5'>
                You may be curious about where I am working now. I have been
                working at
                <span className='text-[#6560F0] text-base font-bold'>
                  Salah Software
                </span>
                Solution since 2020, and I have grown from a junior designer to
                a senior UI/UX designer.
              </p>

              <p className='font-inter text-[#656565] font-normal text-base mt-[30px] px-5'>
                Here I designed for some of its core offerings like LMS
                Dashboard, CRM System, Streaming website, Education website,
                Medical Website and numerous niche that really broaden my
                knowledge for user centric design.
              </p>

              <p className='font-inter text-[#656565] font-normal text-base mt-[30px] px-5'>
                Before that, I also did freelance work on the
                <span className='text-[#6560F0] text-base font-bold'>
                  Freelancer.com
                </span>
                marketplace from 2016 to 2019.
              </p>
            </div>

            <div className='mt-[100px] px-5'>
              <h2 className='font-gallient text-[80px] xs:text-[40px]'>
                My Education
              </h2>

              <p className='font-inter text-[#656565] font-normal text-base mt-[40px] '>
                I graduated from Food and Nutrition at Dhaka University,
                however, my passion for design insisted on exploring this
                career.
              </p>

              <p className='font-inter text-[#656565] font-normal text-base mt-[30px] '>
                Although I took a graphic design course from the Creative IT
                Institute, I am a self-taught User Interface and Experience
                designer, thanks to online resources that allowed me to pursue
                my endeavor.
              </p>
            </div>

            <div className='flex mt-[65px] items-center'>
              <div className='w-9 h-9 mr-[15px] bg-black rounded-full flex justify-center'>
                <span className='text-2xl text-white'>+</span>
              </div>
              <p>Download my resume</p>
            </div>
          </div>
          <div>
            <img src='./images/about/my-image.png' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMyself;
