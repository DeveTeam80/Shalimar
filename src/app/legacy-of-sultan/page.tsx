

import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '@/components/common/Breadcrumb'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea'

export default function ServiceDetails() {
  return (
    <>
      <HeaderOne style_2={true} />
      <Breadcrumb title="Sultan -E- hind" subtitle="Legacy of Sultan" />
      <ServiceDetailsArea />
      <FooterTwo />
    </>
  )
}
