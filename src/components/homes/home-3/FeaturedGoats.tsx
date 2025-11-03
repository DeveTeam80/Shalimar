import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FeaturedGoats() {
  return (
    <section className="feature-sectionv02 p900-bg space-top space-bottom">
      <div className="container">
        <div className="row g-4 align-items-lg-start align-items-center justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-10">
            <div className="about-contentv1">
              <div className="section-title mb-40">
                <h5
                  className="text-white text-uppercase wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  Selective genetics, expert nutrition, and unmatched physical
                  excellence.
                </h5>
                <h2
                  className="text-white mb-24 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  Scientific & Quality Focus
                </h2>
                <p
                  className="text-white wow fadeInUp mb-lg-4 mb-3"
                  data-wow-delay=".4s"
                >
                  Renowned for their majestic build, muscular frame, and
                  superior genetics, Kota goats are among the most sought-after
                  breeds in India. We preserve this royal lineage through
                  selective breeding and expert nutrition. Each goat reflects
                  our deep commitment to purity, resilience, and heritage,
                  ensuring that our clients receive nothing less than
                  excellence.
                </p>
                <Link
                  href="/goats/kota"
                  className="cmn-btn cmn-white"
                >
                  Learn More
                  <i className="fa-solid fa-arrow-right p1-clr"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-8 ps-lg-5">
            <div
              className="feature-thumv02 position-relative w-100 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <Image
                src="/assets/img/about/kotagoat.png"
                alt="Kota Goat"
                width={700}
                height={500}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/element/feature-green2.png"
        alt="Green element"
        width={200}
        height={300}
        className="feature-element2"
      />
    </section>
  );
}
