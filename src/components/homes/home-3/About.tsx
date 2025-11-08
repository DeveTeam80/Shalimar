"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="about-section style-v01 white-bg section-padding">
      <div className="container">
        <div className="about-wrapperv3">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5
                    className="p1-clr text-uppercase wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    Redefining Goat Farming in India
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Where Heritage Meets Excellence in Goat Breeding
                  </h2>
                  <br/>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    What began as a childhood fascination has evolved into one of
                    India’s most trusted goat farming and breeding ventures. With
                    over 25 years of hands-on experience, Shalimar Farms
                    specializes in premium Kota goat breeding, farm consulting,
                    and livestock management, combining ethical practices,
                    modern nutrition, and sustainable methods to raise goats that
                    embody strength, trust, and excellence.
                  </p>
                  <Link href="/about" className="cmn-btn mt-4">
                    Learn More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-8">
              <div
                className="about-thumv03 position-relative pe-xl-4 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <Image
                  src="/assets/img/about/aboutv6.png"
                  alt="About Shalimar Farms"
                  width={500}
                  height={500}
                  className="mimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
