"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import PortfolioProfessional from "@/components/Services/PortfolioProfessional";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import Link from "next/link";

const ServicePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb
            title="Portfolio"
            text="Case Studies, Product Builds & Delivery Highlights"
          />

          <section className="rbt-service-area bg-color-white rbt-section-gapBottom pt--60">
            <div className="container">
              <div className="section-title text-center mb--50">
                <span className="subtitle bg-primary-opacity">Our Work</span>
                <h2 className="title">Selected Projects Across Industries</h2>
                <p className="subtitle-desc">
                  Explore how we solve real business challenges with practical,
                  scalable technology solutions.
                </p>
              </div>
            </div>
            <PortfolioProfessional />
          </section>

          <section className="swx-about-cta rbt-section-gapTop rbt-section-gapBottom">
            <div className="container">
              <div className="swx-about-cta-inner">
                <h2>Have a Similar Project in Mind?</h2>
                <p>
                  Share your idea and we will propose a delivery roadmap with
                  timeline, scope, and technology recommendations.
                </p>
                <Link className="rbt-btn btn-gradient" href="/contact">
                  <span>Discuss Your Requirements</span>
                </Link>
              </div>
            </div>
          </section>

          <MobileMenu />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ServicePage;
