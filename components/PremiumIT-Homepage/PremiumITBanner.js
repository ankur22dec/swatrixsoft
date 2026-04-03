import Image from "next/image";
import React from "react";
import Link from "next/link";

const PremiumITBanner = () => {
  return (
    <>
      <div className="wrapper bg-gradient-premium">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="inner">
                  <div className="section-title">
                    <span className="subtitle bg-primary-opacity">
                      Swatrixsoft - Premium IT Solutions
                    </span>
                  </div>

                  <h1 className="banner-title">
                    Transform Your Business with 
                    <span className="theme-gradient"> Cutting-Edge Technology</span>
                  </h1>

                  <p className="description has-medium-font-size mt--20">
                    From web and mobile apps to AI-powered solutions, enterprise systems, and cloud infrastructure—we deliver world-class technology that drives growth and innovation. Trusted by leading brands worldwide.
                  </p>

                  <div className="slider-btn rbt-button-group mt--40">
                    <Link href="/contact" legacyBehavior>
                      <a className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y me-3">
                        <span data-text="Start Your Project">Start Your Project</span>
                      </a>
                    </Link>
                    <Link href="/hireteam" legacyBehavior>
                      <a className="rbt-btn btn-border rbt-switch-btn rbt-switch-y">
                        <span data-text="Learn More">Learn More</span>
                      </a>
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="stats-grid mt--60">
                    <div className="stat-item">
                      <h4 className="stat-number">500+</h4>
                      <p className="stat-label">Projects Delivered</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">150+</h4>
                      <p className="stat-label">Expert Professionals</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">10+</h4>
                      <p className="stat-label">Years Experience</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">98%</h4>
                      <p className="stat-label">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image-premium text-center">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=1100&fit=crop"
                  alt="IT company team building websites and software solutions"
                  width={500}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumITBanner;
