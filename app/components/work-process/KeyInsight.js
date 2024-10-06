import React from 'react';

const KeyInsight = () => {
  return (
    <>
      <section>
        <div className='max-w-[856px] mx-auto mt-[300px] lg:px-10'>
          <h2 className='font-inter text-2xl mb-[15px]'>
            Key <span className='font-black'>Insights</span>
          </h2>

          <div className='flex gap-1 mb-[30px]'>
            <span> ▪ </span>
            <p className='text-base text-[#656565]'>
              <span className='text-sm font-medium text-black uppercase'>
                Personalized Content:
              </span>
              Studies show that personalized user experiences can increase
              engagement by up to 60%. By tailoring content, recommendations,
              and services based on a patient's history or preferences, <br />
              medical websites can retain more users.
            </p>
          </div>
          <div className='flex gap-1 mb-[30px]'>
            <span> ▪ </span>
            <p className='text-base text-[#656565]'>
              <span className='text-sm font-medium text-black uppercase'>
                Mobile Optimization:
              </span>
              With over 60% of users accessing health-related websites on mobile
              devices, having a fully responsive, mobile-friendly design is
              crucial for retention. Ensuring fast load times and easy
              navigation can <br />
              keep users from bouncing.
            </p>
          </div>
          <div className='flex gap-1 mb-[30px]'>
            <span> ▪ </span>
            <p className='text-base text-[#656565]'>
              <span className='text-sm font-medium text-black uppercase'>
                Simplified Navigation & Accessibility:
              </span>
              Users are 80% more likely to stay on a site with intuitive
              navigation. Implementing clear, straightforward menus, search
              functionality, and accessibility features (like larger text and
              voice navigation) can make medical sites more user-friendly,
              especially for elderly or disabled visitors.
            </p>
          </div>
          <div className='flex gap-1 mb-[30px]'>
            <span> ▪ </span>
            <p className='text-base text-[#656565]'>
              <span className='text-sm font-medium text-black uppercase'>
                Trust & Security:
              </span>
              Medical sites with strong security signals (SSL certificates,
              privacy policies) retain more users, as 84% of patients value data
              security when accessing health information online. Transparency in
              how data is handled builds trust and encourages return visits.
            </p>
          </div>
          <div className='flex gap-1 mb-[175px]'>
            <span> ▪ </span>
            <p className='text-base text-[#656565]'>
              <span className='text-sm font-medium text-black uppercase'>
                Interactive Tools & Features:
              </span>
              Features like symptom checkers, appointment scheduling, and
              patient portals with easy access to medical records can improve
              engagement. A study revealed that 64% of patients prefer online
              tools that help them manage their health conveniently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyInsight;
