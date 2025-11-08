import React from "react";

export default function GoogleMap() {
  return (
    <>
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3785.2119052871194!2d73.87733467518946!3d18.42868538264706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI1JzQzLjMiTiA3M8KwNTInNDcuNyJF!5e0!3m2!1sen!2sin!4v1762591642898!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
