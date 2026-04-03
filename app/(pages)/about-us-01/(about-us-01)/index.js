"use client";

import Context from "@/context/Context";
import Link from "next/link";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import Store from "@/redux/store";

import Banner from "@/components/About-Us-01/Banner";
import CompanyExpertise from "@/components/About-Us-01/CompanyExpertise";
import About from "@/components/Abouts/About";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import SplitTwo from "@/components/Split/Split-Two";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";

const AboutUsPage = () => {
  const trustStats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Experts Onboard" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div
            className="slider-area rbt-banner-10 height-750 bg_image bg_image--11"
            data-black-overlay="5"
          >
            <Banner />
          </div>

          <section className="swx-page-intro-strip">
            <div className="container">
              <div className="row g-4">
                {trustStats.map((item) => (
                  <div className="col-lg-3 col-sm-6" key={item.label}>
                    <div className="swx-intro-stat">
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>
          <div className="rbt-video-area rbt-section-gapBottom pt--50 bg-color-white">
            <div className="container">
              <SplitTwo isImg={false} />
            </div>
          </div>
          <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <span className="subtitle bg-pink-opacity">
                      Client Testimonials
                    </span>
                    <h2 className="title">What Our Clients Say</h2>
                    <p className="description mt--20">
                      Teams across industries trust Swatrixsoft for quality
                      delivery, transparency, and long-term technology support.
                    </p>
                    <div className="veiw-more-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                        href="/contact"
                      >
                        <span data-text="Marquee Y">Start Your Project</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <TestimonialSix />
              </div>
            </div>
          </div>
          <CompanyExpertise />

          <section className="swx-about-cta rbt-section-gap">
            <div className="container">
              <div className="swx-about-cta-inner">
                <h2>Need a Reliable Technology Partner?</h2>
                <p>
                  We help startups and enterprises design, build, and scale
                  modern digital products with speed and confidence.
                </p>
                <Link className="rbt-btn btn-gradient" href="/contact">
                  <span>Book a Free Consultation</span>
                </Link>
              </div>
            </div>
          </section>

          <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
            <NewsletterTwo />
          </div>

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
