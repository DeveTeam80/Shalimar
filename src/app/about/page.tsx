
import React from 'react'
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutSection from '@/components/about/About';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';
import FooterTwo from '@/layouts/footers/FooterTwo'
import HeaderOne from '@/layouts/headers/HeaderOne'
import WhyChooseUs from '@/components/homes/home-3/WhyChooseUs';

export default function About() {
  return (
    <>
      <HeaderOne style_2={true} />
      <Breadcrumb title="Legacy of Shalimar Farms" subtitle="About Us" />
      <AboutSection />
      <Mission/>
      <WhyChooseUs />
      <Team/>
      <FooterTwo />

    </>
  )
}
