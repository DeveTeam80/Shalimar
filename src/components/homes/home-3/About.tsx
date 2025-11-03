"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section className="about-section style-v01 white-bg section-padding">
      <div className="container">
        <div className="about-wrapperv3">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-7 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s">
                   Where Heritage Meets Excellence in Goat Breeding.
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Raising the Finest Kota Goats
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    At Shalimar Farms, we take pride in preserving the royal lineage of pure Kota goats. Each goat is bred and nurtured with care, guided by ethical farming practices and modern nutrition techniques. Our commitment to quality, purity, and sustainability ensures that every Shalimar goat stands as a symbol of strength, trust, and excellence.
                  </p>
                  <div className="mission-vision">
                    <div className="mission mt-4">
                      <h5>Our Mission</h5>
                      <p>To deliver healthy, purebred Kota Goats through sustainable farming practices, ensuring trust, quality, and value for every farmer and breeder.</p>
                    </div>
                    <div className="vision mt-4">
                      <h5>Our Vision</h5>
                      <p>To be a leading name in premium goat farming, where the Kota Goat becomes a global symbol of quality, resilience, and excellence.</p>
                    </div>
                  </div>
                  <Link href="/about" className="cmn-btn mt-4">
                    Learn More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-8">
              <div className="about-thumv03 position-relative pe-xl-4 wow fadeInDown" data-wow-delay=".3s">
                <Image src="/assets/img/about/aboutv6.png" alt="About Shalimar Farms" width={500} height={500} className="mimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
