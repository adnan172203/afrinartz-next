import React from 'react';
import Banner from '../components/home/Banner';
import Project from '../components/home/Project';
import CaseStudies from '../components/home/Case-Studies';
import Experiment from '../components/home/Experiment';

const Home = () => {
  return (
    <>
      <Banner />
      <Project />
      <CaseStudies />
      <Experiment />
    </>
  );
};

export default Home;
