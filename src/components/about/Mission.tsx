"use client";
import React from "react";

export default function Mission() {
  return (
    <>
      <section className="who-section overflow-hidden section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            {/* <div className="section-title mb-40">
              <h5 className="wow fadeInLeft" data-wow-delay="0.4s">
                Our Mission
              </h5>
              <h2
                className="wow fadeInDown mb-24"
                data-wow-delay=".3s"
              >
                Committed to Excellence in Goat Farming
              </h2>
              <p className="wow fadeInDown" data-wow-delay=".4s">
                To deliver healthy, purebred Kota Goats through sustainable
                farming practices, ensuring trust, quality, and long-term value
                for every farmer and breeder we serve.
              </p>
            </div> */}

            <div className="row g-xl-6 g-4">
              {/* Vision Block */}
              <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                <div className="who-box">
                  <div className="icon d-center">
                    <img
                      src="assets/img/icon/hand-planp900.svg"
                      alt="mission icon"
                    />
                  </div>
                  <h5 className="title white-clr">Our Vision</h5>
                  <p className="white-clr">
                    To preserve and promote the finest goat bloodlines in India,
                    guiding the next generation of farmers through knowledge,
                    training, and ethical practices.
                  </p>
                </div>
              </div>

              {/* Ecosystem Goal */}
              <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                <div className="who-box">
                  <div className="icon d-center">
                    <img
                      src="assets/img/icon/wheath-p900.svg"
                      alt="vision icon"
                    />
                  </div>
                  <h5 className="title white-clr">Our Mission</h5>
                  <p className="white-clr">
                    To build a sustainable ecosystem of premium goat farming —
                    not just selling goats, but inspiring passion, promoting
                    quality, and setting benchmarks of excellence in livestock
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/who-element.png"
          alt="decorative element"
          className="who-element"
        />
      </section>
    </>
  );
}
