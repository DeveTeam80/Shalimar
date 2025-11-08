import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumb'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ContactHomeTwo from '../homes/home-3/CounterHomeThree'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'

export default function Contact() {
  return (
    <>
      <HeaderOne style_2={true} />
      <Breadcrumb title="Get In Touch" subtitle="Contact Us" />
      <SubscribeHomeThree />
      <ContactInfo />
      <GoogleMap />
      <FooterTwo />
    </>
  )
}
