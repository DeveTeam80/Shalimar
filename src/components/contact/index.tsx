import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumb'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ContactHomeTwo from '../homes/home-3/CounterHomeThree'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <ContactHomeTwo />
      <GoogleMap />
      <ContactInfo />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
