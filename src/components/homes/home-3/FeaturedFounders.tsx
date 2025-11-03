import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FeaturedFounders() {
  return (
    <section className="about-section style-v01 white-bg section-padding">
      <div className="container">
        <div className="about-wrapperv3">
          <div className="row g-4 align-items-start justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-8">
              <div
                className="about-thumv03 position-relative pe-xl-4 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <Image
                  src="/assets/img/gallery/safdar.png"
                  alt="About Shalimar Farms"
                  width={500}
                  height={500}
                  className="mimg"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5
                    className="p1-clr text-uppercase wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    Meet Our Founders – The Minds Behind Shalimar Farms
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Zaid & Safdar
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Shalimar Farms was founded by Mr. Zaid and Mr. Safdar, two
                    visionaries who share a deep passion for livestock breeding
                    and animal welfare. Together, they have combined years of
                    hands-on experience with a mission to redefine goat farming
                    standards in India, built on principles of ethics,
                    innovation, and sustainable growth.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Their expertise covers every aspect of the farm, from
                    scientific breeding and nutrition planning to herd
                    management and animal health care. What sets them apart is
                    their commitment to purity in bloodlines, transparency in
                    process, and excellence in outcome.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    At Shalimar Farms, they don’t just raise goats, they
                    preserve a legacy of strength, trust, and heritage that
                    continues to inspire breeders and farmers across India.
                  </p>
                  <div className="testimonial-thumbv2">
                    <div className="testimonial-count" data-wow-delay=".6s" style={{flexDirection: "column", bottom:"-173px"}}>
                      <span>
                      “Every goat we raise is a reflection of our promise, care
                      in every step, strength in every breed, and honesty in
                      every relationship.”
                      </span>
                      {/* <br /> */}
                      <strong>
                        — Zaid & Safdar,
                        <br />
                        Founders of Shalimar Farms
                      </strong>
                    </div>
                  </div>
                  {/* <Link href="/about" className="cmn-btn mt-4">
                    Learn More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
