import React from "react";
import "./industry-main.scss";
import industryIcon from "../../assets/images/industries/banner-graphic/industries-we-serve.svg";
import ImageView from "../../components/ImageView";
import arrowprev from "../../assets/images/arrow-prev.svg";
import arrownext from "../../assets/images/arrow-next.svg";
import codingIcon from "../../assets/images/coding.svg";
import industryMainJson from "../../constants/industryMain";
import DomainExpert from "../../components/domainExpert/domainExpert";
import WeProvide from "../../components/weProvide/weProvide";
import EngageStep from "../../components/engageStep/engageStep";
import Benifits from "../../components/benifits/benifits";
import Product from "../dashboard/component/product";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import { Helmet } from "react-helmet";

class IndustryMain extends React.Component {
  state = {
    slideupsection: false,
    onScrollClass: "",
    // isMobile: this.flag
  };

  // componentWillMount() {
  // }

  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  render() {
    const data = industryMainJson;

    return (
      <>
        <Helmet>
            <meta property="og:image" content={`https://www.cmarix.com${industryIcon}`} />
        </Helmet>
        <div className="industry-main bottom-align-banner">
          <div className="inner-top-header">
            <div className="max-animation-lg">
              <div className="top-right">
                <ImageView
                  src={data.image}
                  alt="waves"
                  className="destructive"
                />
              </div>
            </div>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-md-6 industry-inner-banner-left">
                  <div className="inner-left">
                    <div className="banner-pattern">
                      <div className="pattern_inner">
                        <span></span>
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                      </div>
                    </div>
                    <div
                      className="inner-head-title sr-from-bottom content__paragraph"
                      data-splitting
                    >
                      <h1>
                        <span>Industries</span>
                        <br />
                        We Serve
                      </h1>
                    </div>
                    <p className="inner-about sr-from-bottom-1">
                      {data.description}
                    </p>
                    <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                      Inquire Now <i className="icon-arrow-down"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="inner-right sr-from-bottom-2">
                    <ImageView src={industryIcon} alt="hero-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mini-container mt-5 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1">
                {(data.assureLabel) ? data.assureLabel : 'We Assure You'}
              </span>
              <h2 className="sr-from-bottom-2">{data.assureTitle}</h2>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <div>
                <p className="sr-from-bottom-4">{data.assureDescription}</p>
              </div>
            </div>

            <div className="stat-plates sr-from-bottom-5">
              <div className="mini-plate">
                <ImageView src={codingIcon} alt="coding" />
              </div>

              <div className="max-plate">
                <span className="app-count">{data.industryCount}</span>
                <p>Industries</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="container">
              <div className="row mt-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title sr-from-bottom">
                    <p className="sr-from-bottom-1">
                      <span>
                        {(data.missionLabel) ? data.missionLabel : 'Our Mission'}
                      </span>
                    </p>
                    <h3 className="sr-from-bottom-2">
                      <span>Industry Expertise</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-industries-main pt-0">
              <div className="background-label">INDUSTRIES</div>
              <div className="container">
                <DomainExpert experts={data.domainExpert} />
              </div>
            </div>
          </div>

          <div className="home-case-study-main sr-from-bottom-1">
            <div className="container home-case-study-title">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <h3 className="sr-from-bottom-2">
                    <span className="bubble-title">Everything we do is</span>
                    <br />
                  Implemented to <br />
                  Grow
                </h3>
                </div>
                <div className="col-lg-6 section-small-description">
                  {/* <VisibilitySensor
                  partialVisibility={true}
                  onChange={(e) => {
                    if (e) {
                      if (!this.state.onScrollClass) {
                        this.setState({
                          onScrollClass: "in-view",
                        });
                      }
                    }
                  }}
                >
                  <div className={`${this.state.onScrollClass}`}>
                    <p data-splitting="chars">
                      We’ve brought <strong>maximum</strong> <br />
                      <strong>results</strong> to early stage startups
                    </p>
                  </div>
                </VisibilitySensor> */}
                </div>
              </div>
            </div>
            <div className="home-case-study-swiper sr-from-bottom-1">
              <Product />
              <div className="case-study-pagination">
                <div className="container">
                  <div className="case-study-slider-pagination"></div>
                </div>
              </div>
              <div className="swiper-button-prev-unique">
                <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
              </div>
              <div className="swiper-button-next-unique">
                <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
              </div>
            </div>
          </div>


          <div className="cmr-what-we">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Win & Wow With</span>
                    </p>
                    <h3 className="sr-from-bottom-2">
                      Our Core <span>Services</span>
                    </h3>
                  </div>
                </div>
              </div>
              <WeProvide provide={data.weProvide} />
            </div>
          </div>

          <div className="engage_steps pt-60 pb-60">
            <div className="container  mini-container">
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sec-title">
                        <p className="sr-from-bottom-1">
                          <span>Take a look at</span>
                        </p>
                        <h3 className="sr-from-bottom-2">
                          Steps to <span>Engage</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="steps">
              <div className="container">
                <EngageStep steps={data.engageSteps} />
              </div>
            </div>
          </div>

          <div className="how_hire_help pt-100 pb-60 left-sq">
            <div className="container mini-container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="sec-title sr-from-bottom">
                    <p className="sr-from-bottom-1">
                      <span>Why CMARIX?</span>
                    </p>
                    <h3 className="sr-from-bottom-2">
                      <span>Benefits</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <h4 className="right-tag-lines sr-from-bottom-1">
                    <span>Work With Best Teams For Top Development Projects @CMARIX – On Your Terms</span>
                  </h4>
                </div>
              </div>
              <Benifits benifits={data.benifits} />
            </div>
          </div>
          <TechnologyTabView  technologyStopTitle="All about our"/>
          <div className="container">
            <div className="cmr-cta sr-from-bottom">
              <div>
                <h3>
                Ready to win with a digital asset?
                  <span className="sr-from-bottom-2">
                  Let’s build software together.
                  </span>
                </h3>
              </div>
              <div className="cta-btn sr-from-bottom-3">
                <button className="cmr-solid-btn-w get-center hvr-shutter-out-horizontal orange-section-hire-button">
                  Inquire Now <i className="icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="container mini-container left-sq pb-60 pt-60">
            <div className="sec-tag-lines mb-5">
              <h3 className="sr-from-bottom-2">
              Working with CMARIX means your business will boldly transform from inside-out while delivering off the charts results.
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IndustryMain;
