import Image from "next/image";
import React from "react";
import Link from "next/link";

const PremiumITExpertise = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="about-image">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop"
            alt="About Swatrixsoft - Professional Team"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content">
          <div className="section-title">
            <h2 className="title">Who We Are</h2>
            <p className="subtitle-desc mt--20">
              Swatrixsoft is India's leading IT solutions company specializing in innovative technology services. With over a decade of experience, we've helped businesses of all sizes achieve their digital transformation goals.
            </p>
          </div>

          <div className="expertise-features mt--40">
            <div className="feature-row">
              <div className="feature-icon">
                <i className="feather-zap"></i>
              </div>
              <div className="feature-text">
                <h5>Innovative Solutions</h5>
                <p>We stay ahead of the curve with latest technologies and methodologies</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">
                <i className="feather-users"></i>
              </div>
              <div className="feature-text">
                <h5>Dedicated Team</h5>
                <p>Expert professionals committed to your project success</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">
                <i className="feather-target"></i>
              </div>
              <div className="feature-text">
                <h5>Goal-Oriented</h5>
                <p>Every project aligned with your business objectives</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">
                <i className="feather-shield"></i>
              </div>
              <div className="feature-text">
                <h5>Quality Assured</h5>
                <p>Rigorous testing and quality standards for excellence</p>
              </div>
            </div>
          </div>

          <div className="rbt-button-group mt--40">
            <Link href="/about" className="rbt-btn btn-gradient" legacyBehavior>
              <a>Learn About Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumITExpertise;
