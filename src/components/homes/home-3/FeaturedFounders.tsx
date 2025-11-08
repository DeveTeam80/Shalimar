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
                  src="/assets/img/about/founders.png"
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
                    visionaries driven by a shared passion for ethical livestock
                    breeding and animal welfare. With decades of combined
                    experience, they set out to redefine goat farming in India
                    through innovation, integrity, and sustainable practices.
                  </p><br/>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Their leadership blends scientific breeding methods with
                    traditional care, ensuring every animal thrives in a healthy
                    and humane environment. From nutrition and herd management
                    to health and genetics, their expertise touches every corner
                    of the farm.
                  </p><br/>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    At Shalimar Farms, Zaid and Safdar uphold a simple promise,
                    purity in bloodlines, transparency in process, and
                    excellence in every outcome, building a legacy that
                    continues to inspire breeders and farmers nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
