"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./menu/NavMenu";
import Offcanvas from "@/components/common/Offcanvas";

type PropsType = {
  style_2?: boolean;
};

export default function HeaderOne({ style_2 }: PropsType) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`header-1 ${style_2 ? "header-3" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              {/* Left Section - Logo */}
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <Image
                      src="/assets/img/logo/logo.png"
                      alt="logo-img"
                      height={75}
                      width={220}
                    />
                  </Link>
                </div>
              </div>

              {/* Right Section - Navigation */}
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setOpen(!open)}
                  >
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Sidebar */}
      <Offcanvas open={open} setOpen={setOpen} />
    </>
  );
}
