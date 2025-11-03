"use client";
import VideoPopup from '@/modals/VideoPopup';
import Image from 'next/image';
import React, { useState } from 'react';

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="video-section-shalimar section-padding">
        <div className="container">
          <div className="row g-md-4 g-2 align-items-center justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-title mb-40">
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Sultan-E-Hind Cinematic Video
                </h2>
                <div className="video-watch-button wow fadeInUp" data-wow-delay=".5s">
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-cmn d-center video-popup">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <h5>Watch Video</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/faq-element.png" alt="Grass Element" width={150} height={100} className="grass-element" />
      </section>
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"g6fIMrh-eRE"} />
    </>
  );
}