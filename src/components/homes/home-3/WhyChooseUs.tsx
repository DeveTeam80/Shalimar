"use client";
import Link from "next/link";
import React from "react";

export default function WorkProcessHomeTwo() {
  return (
    <>
      <section className="Working-section">
        <div className="container">
          {/* Section Heading */}
          <div className="working-common-head">
            <div className="section-title">
              <h5
                className="wow fadeInLeft text-uppercase"
                data-wow-delay="0.4s"
              >
                Our Process
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                From Selection to Delivery <br /> Every Step Built on Trust
              </h2>
            </div>
            <p
              className="working-pra wow fadeInLeft"
              data-wow-delay=".3s"
            >
              At Shalimar Farms, every goat’s journey is guided by precision and
              care. From choosing the right breeding stock to maintaining daily
              records, our process ensures healthy, purebred Kota goats that
              reflect quality and heritage in every detail.
            </p>
          </div>

          {/* Process Steps */}
          <div className="row g-xl-4 g-3 justify-content-center position-relative mb-60">
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="working-proces-items01 p900-bg">
                <h3 className="white-clr">
                  Select <br /> the Bloodline
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="step"
                  className="step-working"
                />
                <span className="step-text">01</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <div className="working-proces-items01 p900-bg">
                <h3 className="white-clr">
                  Nurture <br /> with Care
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="step"
                  className="step-working"
                />
                <span className="step-text">02</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".7s"
            >
              <div className="working-proces-items01 p900-bg">
                <h3 className="white-clr">
                  Monitor <br /> Growth & Health
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="step"
                  className="step-working"
                />
                <span className="step-text">03</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".9s"
            >
              <div className="working-proces-items01 p900-bg">
                <h3 className="white-clr">
                  Deliver <br /> with Integrity
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="step"
                  className="step-working"
                />
                <span className="step-text">04</span>
              </div>
            </div>

            {/* connecting arrows */}
            <img
              src="assets/img/element/arro-round-top.png"
              alt="arrow"
              className="working-arrows-one"
            />
            <img
              src="assets/img/element/arro-round-bottom.png"
              alt="arrow"
              className="working-arrows-two d-lg-block d-none"
            />
            <img
              src="assets/img/element/arro-round-bottom.png"
              alt="arrow"
              className="working-arrows-three d-lg-block d-none"
            />
          </div>

          {/* Footer text */}
          <p className="text-white processs-text">
            Every step is transparent, ethical, and traceable, ensuring your
            trust is well placed.
          </p>
        </div>

        {/* background elements */}
        {/* <img
          src="assets/img/element/sylli.png"
          alt="decoration"
          className="working-slilli"
        />
        <img
          src="assets/img/element/green-area.png"
          alt="decoration"
          className="working-green"
        /> */}
      </section>
    </>
  );
}
