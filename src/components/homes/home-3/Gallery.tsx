import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import allGoats from '@/data/goat_data'; // Import your updated data file

export default function FeaturedGoats() {
  // 1. Filter the array to get ONLY the goats where 'isFeatured' is true
  const featuredGoats = allGoats.filter(goat => goat.isFeatured);

  return (
    <section className="gallery-section overflow-hidden section-padding white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
            <div className="section-title mb-60 text-center">
              <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                Our Champions
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Meet Our Featured Goats
              </h2>
            </div>
          </div>
        </div>
        <div className="gallery-itemsv02 row g-xl-4 g-3 justify-content-center">
          {/* 2. Map over the NEW 'featuredGoats' array to display them */}
          {featuredGoats.map((goat, index) => (
            <div key={goat.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
              <div className="gallery-static-item">
                <Image 
                  src={goat.mainImage} 
                  alt={goat.name} 
                  width={400} 
                  height={400} 
                  className="w-100 mimg" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="content">
                  <span>{goat.gender}</span>
                  <Link href={`/goats/${goat.id}`} className="title">{goat.name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}