// File: app/goats/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import allGoats, { Goat } from '@/data/goat_data';

import Breadcrumb from '@/components/common/Breadcrumb';
import SubscribeHomeThree from '@/components/homes/home-3/SubscribeHomeThree';
import FooterTwo from '@/layouts/footers/FooterTwo';
import GoatDetailsArea from '@/components/goats/GoatDetailsArea';
import HeaderOne from '@/layouts/headers/HeaderOne';
import { Metadata } from 'next';

// Props interface for our page component
interface GoatProfilePageProps {
  params: {
    slug: string;
  };
}

// Function to pre-generate static pages for each goat at build time
export async function generateStaticParams() {
  return allGoats.map((goat) => ({
    slug: goat.id,
  }));
}

// Enhanced metadata for SEO and social sharing
export async function generateMetadata({ params }: GoatProfilePageProps): Promise<Metadata> {
  const goat = allGoats.find(g => g.id === params.slug);
  
  if (!goat) {
    return { 
      title: 'Goat Not Found | Shalimar Goat Farm',
      description: 'The goat profile you are looking for could not be found.'
    };
  }

  const title = `${goat.name} - ${goat.gender} | Shalimar Goat Farm`;
  const description = goat.description || `Meet ${goat.name}, a ${goat.gender.toLowerCase()} at Shalimar Goat Farm.`;
  
  return {
    title,
    description,
    keywords: [
      goat.name,
      goat.gender,
      'Kota goat',
      'Shalimar Farms',
      goat.stats.Breed || '',
      'prize goat',
      'Indian goat farm',
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      images: [
        {
          url: goat.mainImage,
          width: 800,
          height: 600,
          alt: `${goat.name} - ${goat.gender} at Shalimar Goat Farm`,
        },
      ],
      type: 'profile',
      siteName: 'Shalimar Goat Farm',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [goat.mainImage],
    },
  };
}

// The Page Component itself (it's a Server Component)
export default function GoatProfilePage({ params }: GoatProfilePageProps) {
  const { slug } = params;
  
  // Find the goat on the server using the slug from the URL
  const goat = allGoats.find(g => g.id === slug);

  // If no goat is found for the given slug, show a 404 page
  if (!goat) {
    notFound();
  }

  return (
    <>
      <HeaderOne style_2={true} />
      {/* Breadcrumb with dynamic goat name and gender */}
      <Breadcrumb 
        title={goat.name} 
        subtitle={`${goat.gender} Profile`} 
      />
      
      {/* Pass the server-fetched goat data as a prop to the details component */}
      <GoatDetailsArea goat={goat} />
      
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  );
}