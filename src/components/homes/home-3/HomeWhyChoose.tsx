import React from "react";
import {
  GiGoat,
  GiFarmTractor,
  GiRibbonMedal,
  GiFamilyHouse,
  GiIndiaGate,
} from "react-icons/gi";

export default function LegacySection() {
  const legacyData = [
    {
      icon: <GiRibbonMedal size={50} />,
      title: "Legacy Bloodlines",
      desc: "Home to the legendary Sultan lineage, preserving the finest genetics in Indian goat breeding.",
      delay: ".3s",
    },
    {
      icon: <GiIndiaGate size={50} />,
      title: "Nationwide Presence",
      desc: "A trusted name across Rajasthan, Punjab, Maharashtra, and beyond, connecting farmers and breeders across India.",
      delay: ".5s",
    },
    {
      icon: <GiGoat size={50}  />,
      title: "Selective Breeding",
      desc: "We meticulously evaluate thousands of goats but select only the top few that meet our genetic and quality standards.",
      delay: ".7s",
    },
    {
      icon: <GiFarmTractor size={50}  />,
      title: "25+ Years of Expertise",
      desc: "Over two decades of excellence in goat farming, breeding, and livestock management, built on passion and integrity.",
      delay: ".9s",
    },
    {
      icon: <GiFamilyHouse size={50}  />,
      title: "Trusted by Generations",
      desc: "Recognized and relied upon by farmers, traders, and buyers across India for quality and authenticity.",
      delay: "1.1s",
    },
  ];

  return (
    <section className="service-section white-bg space-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
            <div className="section-title mb-50 text-center">
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Our Legacy of Trust and Excellence
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-xl-4 g-3 justify-content-center">
          {legacyData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="service-itemsv1 text-center flex-column">
                <div className="icons mb-3">{item.icon}</div>
                <div className="content">
                  <h4 className="title">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
