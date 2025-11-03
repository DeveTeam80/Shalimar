// File: components/homes/home-3/index.tsx

import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterShalimar from '@/layouts/footers/FooterTwo';
import React from 'react';
import Hero from './Hero';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import FeaturedGoats from './FeaturedGoats';
import Gallery from './Gallery';
import VideoSection from './VideoSection';
import CareGuideSection from './CareGuideSection';
import Faq from './Faq';
import TestimonialHomeThree from './TestimonialHomeThree';
import FooterTwo from '@/layouts/footers/FooterTwo';
import FeaturedFounders from './FeaturedFounders';

export default function HomeShalimar() {
  return (
    <>
      <HeaderOne style_2={true} />
      <Hero />
      <About />
      <WhyChooseUs />
      <FeaturedGoats />
      <FeaturedFounders/>
      {/* <Gallery /> */}
      <VideoSection />
      <CareGuideSection /> 
      <Faq />
      <TestimonialHomeThree />
      <FooterTwo />
    </>
  );
}