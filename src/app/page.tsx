import HomeShalimar from '@/components/homes/home-3';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shalimar Farms - Premium Kota Goats',
  description: 'Shalimar Farms, established in 1984, is the premier home of the finest Kota Goats, renowned for their quality, strength, and adaptability.',
};

export default function HomePage() {
  return (
    <Wrapper>
      <HomeShalimar />
    </Wrapper>
  );
}