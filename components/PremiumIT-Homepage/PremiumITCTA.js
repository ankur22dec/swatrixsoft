import React from "react";
import Link from "next/link";

const PremiumITCTA = () => {
  return (
    <div className="rbt-cta-area rbt-section-gap bg-gradient-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12">
            <div className="rbt-cta-content text-center">
              <div className="section-title">
                <h2 className="cta-title">Ready to Transform Your Business?</h2>
                <p className="cta-description mt--20">
                  Let's discuss your project and create a tailored solution that drives real results. 
                  Our team is ready to turn your vision into reality.
                </p>
              </div>

              <div className="rbt-button-group justify-content-center mt--40">
                <Link href="/contact" className="rbt-btn btn-white">
                  <span>Get Free Consultation</span>
                </Link>
                <Link href="/services" className="rbt-btn btn-white-outline">
                  <span>Explore Services</span>
                </Link>
              </div>

              <div className="cta-stats mt--60">
                <div className="stat-box">
                  <h4>24/7</h4>
                  <p>Support</p>
                </div>
                <div className="stat-box">
                  <h4>100%</h4>
                  <p>Confidential</p>
                </div>
                <div className="stat-box">
                  <h4>0</h4>
                  <p>Setup Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumITCTA;
