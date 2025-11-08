

import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '@/components/common/Breadcrumb'
import ContactHomeTwo from '@/components/homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea'

export default function ServiceDetails() {
  return (
    <>
      <HeaderOne style_2={true} />
      <Breadcrumb title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <ContactHomeTwo />
      <FooterTwo />
    </>
  )
}
