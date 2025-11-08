"use client";
import React from "react";

export default function ServiceDetailsArea() {

  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4">
              <div className="gallery-headright-details">
                <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                  <h3 className="mb-0">Sultan-e-Hind</h3>

                  <span className="badge-custom badge-male">♂ Male</span>

                  {/* <span className="badge-custom badge-featured">
                    ⭐ Featured
                  </span> */}
                </div>

                <p className="goat-description">
                  A name that set a benchmark in Kota excellence Sultan-e-Hind
                  is one of the most respected names in the Kota goat lineage at
                  Shalimar Farms, a goat whose structure, length, and horns
                  defined a new standard in the breed. Sultan wasn’t just a
                  goat; he was a bloodline milestone and the foundation of many
                  of our finest, well-balanced males seen today.
                </p>

                <div className="author-details">
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Height <span>:</span>
                    </span>
                    <span className="info">43 inches</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Weight <span>:</span>
                    </span>
                    <span className="info">145 kgs</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Ear Length <span>:</span>
                    </span>
                    <span className="info">22 inches</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Acquired <span>:</span>
                    </span>
                    <span className="info">June 14, 2022</span>
                  </div>

                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Father <span>:</span>
                    </span>
                    <span className="info">
                      {/* <Link href="/goats/legend" className="parent-link"> */}
                      Legend
                      {/* </Link> */}
                    </span>
                  </div>

                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Mother <span>:</span>
                    </span>
                    <span className="info">Mother India</span>
                  </div>
                </div>

                {/* <div className="share-section mt-4">
                  <h6 className="mb-3">Share this profile</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    <button
                      className="share-btn share-btn-primary"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: "Sultan-e-Hind",
                            text: "Purchased on June 14, 2022, Sultan-e-Hind is a magnificent son of the legendary Legend.",
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        }
                      }}
                    >
                      <i className="fa-solid fa-share-nodes"></i>
                      <span>Share</span>
                    </button>

                    <button
                      className="share-btn share-btn-secondary"
                      onClick={() => window.print()}
                    >
                      <i className="fa-solid fa-print"></i>
                      <span>Print</span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/about/aboutv6.png" alt="img" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>Why Sultan Mattered</h3>
                  <p>Sultan-e-Hind became iconic for 3 reasons:</p>
                  <ul
                    className="py-2 hero-list wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Exceptional body length that stayed consistent through
                      maturity
                    </li>
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Horns with a unique structure, complementing a strong
                      masculine frame
                    </li>
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Aggressive temperament & ring presence, making him a
                      standout stud
                    </li>
                  </ul>
                  <p>
                    Every feature, from head profile to stride echoed true Kota
                    type.
                  </p>
                </div>
                <div className="working-process-details">
                  <div
                    className="working-proces-items01 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h3 className="white-clr">
                      Unique <br /> Horns
                    </h3>
                    {/* <div className="details-iconbox d-center">
                      <GiBullHorns size={48} className="trait-icon" />
                    </div> */}
                  </div>

                  <div
                    className="working-proces-items01 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h3 className="white-clr">
                      Extraordinary <br /> Length
                    </h3>
                    {/* <div className="details-iconbox d-center">
                      <GiBodyHeight size={48} className="trait-icon" />
                    </div> */}
                  </div>

                  <div
                    className="working-proces-items01 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h3 className="white-clr">
                      Balanced <br /> Frame
                    </h3>
                    {/* <div className="details-iconbox d-center">
                      <GiBodyBalance size={48} className="trait-icon" />
                    </div> */}
                  </div>
                </div>

                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>What Sultan Built</h3>
                  <p>
                    Sultan-e-Hind strengthened our breeding foundation in key
                    ways:
                  </p>

                  <ul
                    className="py-2 hero-list wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Set a benchmark for exceptional body length and frame
                    </li>
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Passed on powerful, dominant presence, a true alpha trait
                    </li>
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Contributed strong horn structure and head profile
                    </li>
                    <li className="py-2">
                      <i className="fa-solid fa-angles-right pe-1"></i>
                      Established a recognisable, consistent Kota type seen in
                      his offsprings
                    </li>
                  </ul>

                  <p className="mt-3">
                    Today, Sultan’s bloodline remains the backbone of Shalimar
                    Farms’ Kota breeding program.
                  </p>

                  <h3 className="mt-5">Legacy</h3>
                  <p>
                    Sultan-e-Hind may have left the farm in 2024, but his
                    bloodline, balance, and breeding value live on in the goats
                    that bear his stamp.
                  </p>
                  <br />
                  <p>
                    From <strong>Legend → Sultan → the next generation</strong>
                    , this lineage defines who we are and what we breed for.
                  </p>
                  <br />
                  <p className="fw-bold">Strong. Balanced. True Kota.</p>
                </div>

                <div className="service-single-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay=".7s">
                    <img
                      src="assets/img/about/aboutv6.png"
                      alt="img"
                    />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                    <img
                      src="assets/img/about/aboutv6.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
