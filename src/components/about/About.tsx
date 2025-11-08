"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section style-v01 white-bg mt-5">
      <div className="container">
        <div className="about-wrapperv3">
          <div className="row g-4 align-items-center justify-content-center">
            {/* Content Section */}
            <div className="col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5
                    className="p1-clr text-uppercase wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    What We Do at Shalimar Farms
                  </h5>

                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    More Than Just Farmers{" "}
                  </h2>

                  <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
                    We are more than just goat farmers, we are breeders,
                    consultants, and mentors for anyone passionate about goat
                    farming and livestock management.
                  </p>

                  <div className="about-list mt-4">
                    <ul className="list-unstyled">
                      <li className="wow fadeInUp" data-wow-delay=".45s">
                        <strong>Premium Breeding:</strong> Specialized in
                        selective breeding focused on superior genetics and
                        strong bloodlines to produce high-quality livestock.
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".5s">
                        <strong>Farm Consulting:</strong> Providing expert
                        guidance to both new and established goat farms, from
                        setup and management to marketing and sales strategies.
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".55s">
                        <strong>Livestock Boarding (Ply System):</strong>{" "}
                        Offering complete boarding, lodging, nutrition, and care
                        management for goats under a structured and supervised
                        system.
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".6s">
                        <strong>Commercial Trading:</strong> Sourcing and
                        supplying premium-quality goats across states, ensuring
                        transparency and ethical trade practices.
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".65s">
                        <strong>Qurbani Specialisation:</strong> Preparing
                        well-nourished, premium goats for Qurbani, with complete
                        health monitoring and weight management for every
                        animal.
                      </li>
                    </ul>
                  </div>

                  <Link href="/about" className="cmn-btn mt-4">
                    Learn More
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-md-6 col-sm-8">
              <div
                className="about-thumv03 position-relative pe-xl-4 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <Image
                  src="/assets/img/about/aboutv6.png"
                  alt="Shalimar Farms - What We Do"
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
