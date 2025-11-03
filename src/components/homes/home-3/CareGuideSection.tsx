// File: components/homes/home-3/CareGuideSection.tsx

import React from 'react';
import Link from 'next/link';

const careGuides = [
  {
    id: 1,
    icon: "fa-solid fa-chart-line",
    title: "Weight Gain Guide",
    description: "Essential deworming and feeding practices for healthy growth",
    link: "/care-guide/weight-gain",
    color: "#d4f4d9",
    iconColor: "#2ab939",
    tag: "Popular"
  },
  {
    id: 2,
    icon: "fa-solid fa-crown",
    title: "Sultan Bloodline",
    description: "What makes our premium Kota breed unique and exceptional",
    link: "/care-guide/sultan-bloodline",
    color: "#fef7d6",
    iconColor: "#fdd61f",
    tag: "Premium"
  },
  {
    id: 3,
    icon: "fa-solid fa-heart-pulse",
    title: "Pregnancy Care",
    description: "Complete diet and care guide for pregnant goats",
    link: "/care-guide/pregnancy-care",
    color: "#d4f4d9",
    iconColor: "#2ab939",
    tag: "Essential"
  },
  {
    id: 4,
    icon: "fa-solid fa-baby",
    title: "Kid Care 101",
    description: "Life-saving tips for newborn goat care and early feeding",
    link: "/care-guide/kid-care",
    color: "#fef7d6",
    iconColor: "#fdd61f",
    tag: "Critical"
  },
  {
    id: 5,
    icon: "fa-solid fa-truck",
    title: "Safe Transport",
    description: "Before, during, and after travel care for your goats",
    link: "/care-guide/transportation",
    color: "#d4f4d9",
    iconColor: "#2ab939",
    tag: "Tips"
  },
  {
    id: 6,
    icon: "fa-solid fa-stethoscope",
    title: "Health Diagnosis",
    description: "Early detection and treatment of common health issues",
    link: "/care-guide/health-diagnosis",
    color: "#fef7d6",
    iconColor: "#fdd61f",
    tag: "Important"
  }
];

export default function CareGuideSection() {
  return (
    <section className="care-guide-section section-padding p100-bg">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-60">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="section-title text-center">
              <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                EXPERT KNOWLEDGE
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Learn from Decades of Experience
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Comprehensive care guides to help you raise healthy, champion goats. 
                Trusted practices from Shalimar Farms since 1984.
              </p>
            </div>
          </div>
        </div>

        {/* Care Guide Cards Grid */}
        <div className="row g-4 mb-40">
          {careGuides.map((guide, index) => (
            <div 
              key={guide.id} 
              className="col-lg-4 col-md-6 wow fadeInUp" 
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              <Link href={guide.link} className="care-guide-card">
                <div className="card-header">
                  <div className="icon-wrapper" style={{ background: guide.color }}>
                    <i className={guide.icon} style={{ color: guide.iconColor }}></i>
                  </div>
                  {guide.tag && (
                    <span className="tag">{guide.tag}</span>
                  )}
                </div>
                <div className="card-body">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <div className="read-more">
                    Read Guide <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="row wow fadeInUp" data-wow-delay="0.8s">
          <div className="col-12 text-center">
            <Link href="/care-guide" className="cmn-btn">
              View All Care Guides
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}