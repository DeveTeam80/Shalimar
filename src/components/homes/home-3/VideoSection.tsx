"use client";
import VideoPopup from "@/modals/VideoPopup";
import React, { useState } from "react";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const videoId = "g6fIMrh-eRE";

  return (
    <>
<section className="video-section-shalimar section-padding">
  {/* Video Thumbnail Wrapper */}
  <div className="video-wrapper position-relative">
    {/* Custom Thumbnail Image */}
    <img
      src="assets/img/banner/shalimar-website-thumbnail.jpg" // your custom thumbnail path
      alt="Sultan-E-Hind Video Thumbnail"
      className="img-fluid rounded-3 w-100"
    />

    {/* Play Button on Center */}
    <div
      className="video-watch-button wow fadeInUp"
      data-wow-delay=".5s"
      onClick={() => setIsVideoOpen(true)}
    >
      <a className="video-cmn d-center video-popup">
        <i className="fa-solid fa-play"></i>
      </a>
      {/* <h5>Watch Video</h5> */}
    </div>
  </div>

  {/* Popup Video */}
  <VideoPopup
    isVideoOpen={isVideoOpen}
    setIsVideoOpen={setIsVideoOpen}
    videoId={videoId}
  />
</section>

    </>
  );
}
