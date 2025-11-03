import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Goat Breeds",
      description:
        "We specialize in purebred Kota goats and other elite Indian breeds. Each goat is carefully selected for strong genetics, superior size, and long-term productivity, ensuring exceptional quality for breeders and farmers alike.",
      imgSrc: "/assets/img/service/service1.png",
    },
    {
      title: "Quality Feed & Nutrition",
      description:
        "We believe that great goats come from great nutrition. Our animals are fed with a balanced mix of green fodder, dry roughage, and high-protein concentrate, enriched with essential vitamins and minerals. This ensures faster growth, healthy digestion, and natural immunity.",
      imgSrc: "/assets/img/service/service2.png",
    },
    {
      title: "Hygiene & Health Management",
      description:
        "Clean environments build healthy livestock. At Shalimar Farms, every goat is raised in sanitized, well-ventilated enclosures and monitored under strict hygiene protocols. Regular deworming, vaccinations, and health check-ups ensure the best farm conditions and disease-free herds.",
      imgSrc: "/assets/img/service/service3.png",
    },
    {
      title: "Weight & Quality Guarantee",
      description:
        "Every goat that leaves Shalimar Farms meets our minimum 100 kg weight standard, a reflection of consistent nutrition and expert care. We also provide health and breed certification to guarantee authenticity and transparency for every buyer.",
      imgSrc: "/assets/img/service/service4.png",
    },
  ];

  return (
    <section className="why-choose-us-section section-padding white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-md-8 col-sm-11">
            <div className="section-title mb-60 text-center">
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Why Choose Shalimar Farms
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Experience the Difference of Ethical Excellence.
              </p>
              <p className="wow fadeInUp" data-wow-delay="0.5s">
                “Quality is more than a promise, it’s our principle.” Every
                goat is raised with utmost care, advanced nutrition, and ethical
                farming methods. From selective breeding to nationwide supply,
                we stand for purity, health, and trust in every goat we raise.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-xl-4 g-3 justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="why-choose-us-item">
                <div className="thumb">
                  <Image
                    src={feature.imgSrc}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-100"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
