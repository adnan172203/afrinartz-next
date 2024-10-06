import React from 'react';
import WorkProcessBanner from '../components/work-process/WorkProcessBanner';
import AboutProject from '../components/work-process/AboutProject';
import MyProcess from '../components/work-process/MyProcess';
import KeyInsight from '../components/work-process/KeyInsight';
import Secrets from '../components/work-process/Secrets';

const WorkProcess = () => {
  return (
    <>
      <WorkProcessBanner />
      <AboutProject />
      <MyProcess />
      <KeyInsight />
      <Secrets />
    </>
  );
};

export default WorkProcess;
