import React from 'react';

const Secrets = () => {
  return (
    <>
      <section className='relative'>
        <div className='bg-[#E3EBED] rounded-[30px] mx-[50px] xxs:mx-6 relative'>
          <div className='top-[-100px] xl:top-[-70px] lg:top-[-60px] md:top-[-50px] sm:top-[-40px] xxs:top-[-30px] absolute w-full flex justify-center z-20 sm:px-5 sm:text-center'>
            <h2 className='font-gallient text-[120px] xl:text-[90px] lg:text-[80px] md:text-[60px] sm:text-[50px] xxs:text-[9vw]'>
              Some Screens Are Here
            </h2>
          </div>

          <div className='flex sm:flex-col max-w-[1600px] mx-auto justify-center gap-14 pt-[101px] px-5 xl:px-10 xxs:px-5'>
            <div>
              <div className='mb-14'>
                <img
                  src='./images/screen/screen-1.jpg'
                  alt=''
                  className='w-full rounded-lg shadow-lg'
                />
              </div>
              <div className='mb-14'>
                <img
                  src='./images/screen/screen-2.jpg'
                  alt=''
                  className='w-full h-auto rounded-lg shadow-lg'
                />
              </div>
              <div className='mb-14 sm:mb-0'>
                <img
                  src='./images/screen/screen-3.jpg'
                  alt=''
                  className='w-full h-auto rounded-lg shadow-lg'
                />
              </div>
            </div>

            <div>
              <div className='mb-14'>
                <img
                  src='./images/screen/screen-4.jpg'
                  alt=''
                  className='w-full h-auto rounded-lg shadow-lg'
                />
              </div>
              <div className='sm:mb-10'>
                <img
                  src='./images/screen/screen-5.jpg'
                  alt=''
                  className='w-full h-auto rounded-lg shadow-lg'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pt-[226px] flex flex-col items-center'>
          <p className='text-2xl'>
            Wanna See <span className='font-black'>Full Project?</span>
          </p>
          <p className='uppercase text-[#0067FF] font-bold mt-[21px] text-xs tracking-widest'>
            Live Project Here
          </p>
        </div>
      </section>
    </>
  );
};

export default Secrets;
