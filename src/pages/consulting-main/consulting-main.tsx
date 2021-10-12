import React from "react";
import "./consulting-main.scss";
import ImageView from "../../components/ImageView";
import startupconsulting from "../../assets/images/icon-startup-consulting.svg";
import itconsulting from "../../assets/images/icon-it-consulting.svg";
import consultiongsetup from "../../assets/images/icon-setup-odc.svg";
import consultiongaudit from "../../assets/images/icon-pro-auditing.svg";
import consultiongoutsource from "../../assets/images/icon-outsource.svg";

import consultingMainJson from '../../constants/consultingMain';
import WeProvide from "../../components/weProvide/weProvide";
import EngageStep from "../../components/engageStep/engageStep";
import Benifits from "../../components/benifits/benifits";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import { Link } from "react-router-dom";
import HtmlParser from "../../components/htmlParser/htmlParser";
import { Helmet } from "react-helmet";

class ConsultingMain extends React.Component {
  state = {
    onScrollClass: "",
  };
  // componentWillMount() {
  // }
  
  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  handleSlideChange() {}

  render() {
    const data = consultingMainJson;
    return (
      <>
        <Helmet>
          <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
        </Helmet>
        <div>
          <div className="inner-top-header consulting-main-page">
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-md-7">
                  <div className="inner-left">
                    <div
                      className="inner-head-title sr-from-bottom content__paragraph"
                      data-splitting
                    >
                      <div className="banner-pattern">
                        <div className="pattern_inner">
                          <span></span>
                          <div className="line line1"></div>
                          <div className="line line2"></div>
                          <div className="line line3"></div>
                        </div>
                      </div>
                      <h1>
                      <span className="label-angular">Strategy</span> &  <br/>Consulting
                      </h1>
                    </div>
                    <p className="inner-about sr-from-bottom-1">
                      {data.description}
                    </p>
                    <Link to="/inquiry.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                        Contact Us <i className="icon-arrow-down"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-5 text-right row align-items-end justify-content-center">
                  <div className="inner-right consulting-banner-image">
                    <ImageView src={data.image} alt="Consulting" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1"> Plans That Pay Off</span>
              <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                {data.assureTitle}
              </h3>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <div className="medium_fontsize">
                <HtmlParser html={data.assureDescription} />
              </div>
            </div>
          </div>

          {/* Our Consulting Services */}
          <div className="our_consultion_services right_round">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Our Services</span>
                    </p>
                    <h2 className="sr-from-bottom-3">
                      Our <span> Strategy & Consulting</span> Solutions
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="consulting_service_block">
                    <Link to="startup-consulting.html">
                      <div className="service_title">
                        <div className="title_image">
                          <ImageView
                            src={startupconsulting}
                            alt="Startup Consulting"
                          />
                        </div>
                        <h3>Startup Consulting</h3>
                        <i className="icon-arrow-right"></i>
                      </div>
                      </Link>
                      <div className="service_description">
                        <p>
                        Our Startup consulting services are high in demand.
                        </p>
                      </div>
                  </div>
                  <div className="consulting_service_block">
                    <Link to="it-consulting-services.html">
                      <div className="service_title">
                        <div className="title_image">
                          <ImageView
                            src={itconsulting}
                            alt="Startup Consulting"
                          />
                        </div>
                        <h3>IT Consulting Service</h3>
                        <i className="icon-arrow-right"></i>
                      </div>
                      </Link>
                      <div className="service_description">
                        <p>
                        Your idea deserves world-class and intelligent technology solutions.
                        </p>
                      </div>
                  </div>
                  <div className="consulting_service_block">
                    <Link to="setup-odc-in-india.html">
                      <div className="service_title">
                        <div className="title_image">
                          <ImageView
                            src={consultiongsetup}
                            alt="Startup Consulting"
                          />
                        </div>
                        <h3>Setup ODC in India</h3>
                        <i className="icon-arrow-right"></i>
                      </div>
                      </Link>
                      <div className="service_description">
                        <p>
                        We help you set up an offshore development center in India.
                        </p>
                      </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  {/* <div className="consuting_service_images">
                    <ImageView
                      src={consultionserviceimage1}
                      alt="Consulting Services"
                    />
                    <ImageView
                      src={consultionserviceimage2}
                      alt="Consulting Services"
                    />
                  </div> */}
                  <div className="consulting_service_block">
                    <Link to="product-auditing.html">
                      <div className="service_title">
                        <div className="title_image">
                          <ImageView
                            src={consultiongaudit}
                            alt="Startup Consulting"
                          />
                        </div>
                        <h3>Product Auditing</h3>
                        <i className="icon-arrow-right"></i>
                      </div>
                      </Link>
                      <div className="service_description">
                        <p>
                        Auditing is a sure shot way to minimize risk and ensure gold standards. 
                        </p>
                      </div>
                  </div>
                      <div className="consulting_service_block">
                        <Link to="software-product-development.html">
                          <div className="service_title">
                            <div className="title_image">
                              <ImageView
                                src={startupconsulting}
                                alt="Startup Consulting"
                              />
                            </div>
                            <h3>Product Developement</h3>
                            <i className="icon-arrow-right"></i>
                          </div>
                          </Link>
                          <div className="service_description">
                            <p>
                            We are enterprise development companies with product development expertise.  
                            </p>
                          </div>
                      </div>
                      <div className="consulting_service_block">
                        <Link to="outsource-india.html">
                          <div className="service_title">
                            <div className="title_image">
                              <ImageView
                                src={consultiongoutsource}
                                alt="Startup Consulting"
                              />
                            </div>
                            <h3>Outsource to India</h3>
                            <i className="icon-arrow-right"></i>
                          </div>
                          </Link>
                          <div className="service_description">
                            <p>
                            Outsource development work in India to CMARIX and grow high with great minds. 
                            </p>
                          </div>
                      </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">

                </div>
              </div> */}
            </div>
          </div>

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
              A Unique Idea Is One Thing. But Users Validation About It Is Another.
              </h3>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <p className="medium_fontsize">
              Validate your vision before you move forward. We ensure your assumptions through thorough user testing, involved at each step of product design and development. With rapid prototyping and testing techniques we ensure a product that users will love.
              </p>
            </div>
          </div>


          {/* What we Provide */}
          <div className="what_we_provide cmr-what-we">
            <div className="container mt-5">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Win & Wow With</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      Our Core  <span>Services</span>
                    </h3>
                  </div>
                </div>
              </div>
              <WeProvide provide={data.weProvide}/>
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
                        <h3 className="sr-from-bottom-3">
                          Steps to <span>Engage</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="steps invert_bg sr-from-bottom-1">
              <div className="container">
                <EngageStep steps={data.engageSteps} />
              </div>
            </div>
          </div>

          {/* How hiring help bussiness */}
          <div className="how_hire_help pt-100 pb-60 right-sq">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 col-12 offset-lg-1 offset-md-1">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sec-title">
                        <p className="sr-from-bottom-1">
                          <span>Why CMARIX?</span>
                        </p>
                        <h3 className="sr-from-bottom-3">
                          <span>Benefits</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Benifits benifits={data.benifits}/>
                </div>
              </div>
            </div>
          </div>
          

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
              Let Us Validate Your Software Too
              </h3>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <p className="medium_fontsize">
              With our consulting services, we share fresh information that can add unique possibilities and determine challenges with current digital products. No code works for eternity, nor earlier plan will be forever valid. We help your business scale with product auditing and proper consulting.
              </p>
            </div>
          </div>


          <TechnologyTabView technologyStopTitle="All about our"/>

          {/*Start project section */}
          <div className="start_project">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left">
                      <h4>Do you want to accelerate growth with the right strategies?</h4>
                      <h3>We are waiting to hear your idea.</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                          Hire Developer
                          <i className="icon-arrow-right"></i>
                        </button>
                      </Link>
                      <div className="rings">
                        <div className="ring_inner">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cmarix_motto pt-100 pb-100">
            <div className="container mini-container">
              <div className="better_outcome">
                <div className="sec-tag-lines sr-from-bottom-1">
                  <h3>
                  Working with CMARIX means your business will deliver off-chart performance while implementing the right digital path. 
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ConsultingMain;
