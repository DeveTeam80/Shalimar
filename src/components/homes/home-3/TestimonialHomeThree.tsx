"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ashish Survey",
      title: "Happy Customer",
      image: "/assets/img/testimonial/re2.png",
      quote: "They have various breeds of goats and that too at reasonable cost. The quality is unmatched and the delivery was seamless."
    },
    {
      name: "Rohan Patel",
      title: "Breeder",
      image: "/assets/img/testimonial/re2.png",
      quote: "Shalimar Farms provides the healthiest and strongest Kota goats I have ever seen. Their ethical farming practices are truly commendable."
    }
  ];

  return (
    <>
      <section className="testimonial-section style-section-v03 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-common-wrapper testimonial-wrapperv02 position-relative">
                <div className="section-title mb-50">
                  <h5 className="p2-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Testimonials
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    What Our Clients Say
                  </h2>
                </div>
                <Swiper
                  spaceBetween={2}
                  loop={true}
                  slidesPerView={1}
                  speed={1300}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="swiper testimonial-slidewrap01 ">
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="testimonail-common-items stylev03">
                        <div className="d-lg-flex d-grid justify-content-between">
                          <div className="review-man">
                            <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                            <div className="cont">
                              <h3>{testimonial.name}</h3>
                              <span>{testimonial.title}</span>
                            </div>
                          </div>
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>{testimonial.quote}</p>
                        <div className="dot-cmn"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-thumbv3 w-100 wow fadeInDown" data-wow-delay=".4s">
                <Image src="/assets/img/testimonial/testimonial.jpg" alt="img" width={600} height={500} className="w-100 mimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
