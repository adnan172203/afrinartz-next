// import React from 'react';

// const Banner = () => {
//   return (
//     <section className='bg-black text-white mx-2.5 rounded-b-[10px]'>
//       <div className='relative flex items-center justify-center px-4 px-10 py-8 overflow-hidden text-white width-1296px'>
//         <div className='absolute'>
//           <img src='/images/banner/ellipse.svg' alt='' />
//         </div>
//         <div className='relative z-10 text-center'>
//           <p className='mb-4 text-sm text-left md:text-base lg:text-lg opacity-70 lg:mb-[-18px] md:mb-[-32px] '>
//             <span>Hello, I am </span>
//             <span className='font-bold'> Afrina,</span>
//             <br />
//             who loves to combine
//           </p>

//           <h1 className='font-gallient text-[170px] leading-[180px] xxl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[50px] xxs:text-[40px] xxxs:text-[30px] xs:leading-[123px]'>
//             Awesome design
//           </h1>

//           <div className='mb-4 md:mb-6 lg:mb-8'>
//             <div className='md:flex md:justify-center'>
//               <p className='text-sm md:text-base lg:text-lg xxl:mb-1 opacity-70 mb-5 xxl:mr-[12px] xl:mr-[-16px] lg:mr-[-87px] lg:mb-[-15px] md:mr-1 md:mb-[-22px] xs:mr-[-50px]'>
//                 with human-centric
//               </p>
//             </div>
//             <h2 className='flex justify-end xxxs:justify-center md:pr-14 text-[170px] font-gallient leading-[150px] mr-[-95px] xxl:mr-[-60px] xxl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[50px] xxs:text-[40px] xxxs:text-[30px] xs:leading-[120px]'>
//               Experience
//             </h2>

//             <p className='text-sm md:text-base lg:text-lg opacity-70 flex justify-end mr-[-95px] text-right xxl:mr-[-54px] md:pr-[50px] md:mt-[-38px]'>
//               for a seamless
//               <br />
//               interaction
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React from 'react';

const TextHighlight = ({ children, className = '' }) => (
  <p className={`text-sm md:text-base lg:text-lg opacity-70 ${className}`}>
    {children}
  </p>
);

const HeadingStyle = ({ children, className = '' }) => (
  <h1
    className={`font-gallient text-[170px] leading-[180px] xxl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[50px] xxs:text-[40px] xxxs:text-[30px] xs:leading-[123px] ${className}`}
  >
    {children}
  </h1>
);

const Banner = () => {
  return (
    <section className='bg-black text-white mx-2.5 rounded-b-[10px]'>
      <div className='relative flex items-center justify-center px-4 px-10 py-8 overflow-hidden text-white width-1296px'>
        {/* Background Element */}
        <div className='absolute'>
          <img src='/images/banner/ellipse.svg' alt='Background decoration' />
        </div>

        {/* Content Container */}
        <div className='relative z-10 text-center'>
          {/* Introduction */}
          <TextHighlight className='text-left lg:mb-[-18px] md:mb-[-32px]'>
            <span>Hello, I am </span>
            <span className='font-bold'>Afrina,</span>
            <br />
            who loves to combine
          </TextHighlight>

          {/* Main Heading */}
          <HeadingStyle>Awesome design</HeadingStyle>

          {/* Experience Section */}
          <div className='mb-4 md:mb-6 lg:mb-8'>
            {/* Human-centric text */}
            <div className='md:flex md:justify-center'>
              <TextHighlight className='xxl:mb-1 mb-5 xxl:mr-[12px] xl:mr-[-16px] lg:mr-[-87px] lg:mb-[-15px] md:mr-1 md:mb-[-22px] xs:mr-[-50px]'>
                with human-centric
              </TextHighlight>
            </div>

            {/* Experience heading */}
            <HeadingStyle className='flex justify-end xxxs:justify-center md:pr-14 leading-[150px] mr-[-95px] xxl:mr-[-60px] xs:leading-[120px]'>
              Experience
            </HeadingStyle>

            {/* Closing text */}
            <TextHighlight className='flex justify-end mr-[-95px] text-right xxl:mr-[-54px] md:pr-[50px] md:mt-[-38px]'>
              for a seamless
              <br />
              interaction
            </TextHighlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
