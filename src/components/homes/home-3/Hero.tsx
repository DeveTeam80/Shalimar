"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="banner-section style-v3 overflow-hidden position-relative">
      <div className="container">
        <div className="banner-wrapperv3 position-relative">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="hero-contentv03">
                <div className="sun-star wow fadeInDown" data-wow-delay=".3s">
                  <Image src="/assets/img/icon/icon-sunstar.svg" alt="Star Icon" width={20} height={20} />
                  Premium Goat Farming Since 1984
                </div>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                  Shalimar Farms <br /> Home of the Kota Goats
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  At Shalimar Farms, we raise the finest Kota Goats, renowned for their quality, strength, and adaptability. With decades of ethical farming, we bring you livestock you can trust.
                </p>
                <div className="adjust-video">
                  <Link href="/about" className="cmn-btn wow fadeInUp" data-wow-delay="0.9s">
                    Explore More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src="/assets/img/banner/banner6.png" alt="Shalimar Farms Goat" fill style={{ objectFit: 'cover' }} className="hero-threthumb" />
    </section>
  );
}