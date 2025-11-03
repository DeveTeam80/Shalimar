"use client";
import React, { useState } from 'react';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (i: number) => setIsOpen(i === isOpen ? -1 : i);

const faq_data = [
  {
    question: "What makes Shalimar Farms’ goats different from others?",
    answer:
      "Our goats represent a blend of pure genetics, careful breeding, and superior health standards. Each animal is nurtured in a stress-free environment with premium feed, constant monitoring, and expert handling — ensuring unmatched quality and structure.",
  },
  {
    question: "How do you maintain hygiene and health at the farm?",
    answer:
      "Cleanliness is the foundation of Shalimar Farms. All enclosures are sanitized daily, and goats are kept in well-ventilated, spacious shelters. Regular deworming, vaccination, and health checkups are part of our routine to prevent any form of infection or disease.",
  },
  {
    question: "What kind of diet do your goats follow?",
    answer:
      "We provide a scientifically balanced diet combining green fodder, dry hay, mineral mixtures, and concentrated protein feed. This ensures optimal growth, improved immunity, and a naturally strong body structure — vital for premium breeding standards.",
  },
  {
    question: "What are the key traits of your premium Kota bloodline?",
    answer:
      "Our Kota bloodline stands out for its muscular frame, bone density, and superior structure. Every generation is selectively bred for purity, resilience, and genetics — making them exceptionally rare and true to breed standards.",
  },
  {
    question: "How do you ensure ethical breeding practices?",
    answer:
      "We follow a controlled and responsible breeding system that prioritizes the health of both the male and female goats. Each pairing is planned with focus on genetic strength, purity, and temperament, ensuring strong, disease-free offspring.",
  },
  {
    question: "Why are your goats considered rare and premium?",
    answer:
      "Because each goat at Shalimar Farms is bred, raised, and maintained with precision and patience. From bloodline selection to daily care, we focus on quality over quantity — creating goats that are not just livestock, but living examples of heritage and excellence.",
  },
];

  return (
    <section className="faq-section section-padding white-bg">
      <div className="container">
        <div className="row g-md-4 g-2 align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="faq-content-left">
              <div className="section-title mb-40">
                <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                  Frequently Asked Questions
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Find answers to the most common questions.
                </h2>
                <p>
                  Answers to the most common questions about our goats, quality standards, and purchasing process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-md-0 order-1">
            <div className="tab-faq faq">
              <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                {faq_data.map((item, i) => (
                  <div key={i} className={`accordion-single ${isOpen === i ? "active" : ""}`}>
                    <h5 className="header-area" onClick={() => toggle(i)}>
                      <button className="accordion-btn d-flex align-items-center d-flex position-relative w-100" type="button">
                        {item.question}
                      </button>
                    </h5>
                    <div className="content-area" style={{ display: isOpen === i ? "block" : "none" }}>
                      <div className="content-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}