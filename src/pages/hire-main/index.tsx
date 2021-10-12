import React from "react";
import "./hire-main.scss";
import ImageView from "../../components/ImageView";
import codingIcon from "../../assets/images/coding.svg";
import HireModel from "../../components/hireModel/hireModel";
import hireMainJson from '../../constants/hireMain';
import HireService from "./components/hireService";
import WeProvide from "../../components/weProvide/weProvide";
import EngageStep from "../../components/engageStep/engageStep";
import Benifits from "../../components/benifits/benifits";
import DomainExpert from "../../components/domainExpert/domainExpert";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import { Link } from "react-router-dom";
import HtmlParser from "../../components/htmlParser/htmlParser";
import VisibilitySensor from 'react-visibility-sensor';
import aboutIcon from '../../assets/images/inner-top/about.png';
import { Helmet } from "react-helmet";

class HireMain extends React.Component<any, any> {
  scrollRef: any = "";
  state = {
    onScrollClass: "",
  };
  // componentWillMount() { 
  // }

  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  handleSlideChange() { }

  goTo = () => {
    window.scrollTo({
      behavior: "smooth",
      top: this.scrollRef.offsetTop
    });
  }
  render() {
    const data = hireMainJson;
    return (
      <>
        <Helmet>
          <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
        </Helmet>
        <div>
          <div className="inner-top-header hire-developers hire-main-page">
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-md-7">
                  <div className="inner-left">
                    <div
                      className="inner-head-title sr-from-bottom content__paragraph" data-splitting >
                      <div className="banner-pattern">
                        <div className="pattern_inner">
                          <span></span>
                          <div className="line line1"></div>
                          <div className="line line2"></div>
                          <div className="line line3"></div>
                        </div>
                      </div>
                      <h1>
                        <span className="label-angular">Hire</span> {data.title}
                        <br />
                        Developers
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
                <div className="col-md-5 text-right row align-items-end justify-content-center bottom-overlap-image">
                  <div className="inner-right ">
                    <div className="image_with_circles bggimage">
                      <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : 'Hire Dedicated Developers'} />
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

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1">{data.assureLabel}</span>
              <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                {data.assureTitle}
              </h2>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <p className="medium_fontsize">
                <HtmlParser html=
                  {data.assureDescription}
                />
              </p>
            </div>
            <div className="team_count text-center clearfix ">
              <div className="team_count_inner sr-from-bottom-1">
                <div className="mobile_img_parent sr-from-bottom-2">
                  <div className="mobile_image">
                    <ImageView src={codingIcon} alt="coding" />
                  </div>
                  <div className="waves"></div>
                </div>
                <div className="number_developers sr-from-bottom-2">
                  <h3>{data.developers}</h3>
                  <h4>Developers</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="hiring_model mb-100">
            <div className="container">
              <div className="cmr-reflectors">HIRE</div>
              <div className="row mb-5 align-items-center">
                <div className="col-md-5">
                  <div className="sec-title sr-from-bottom">
                    <p className="sr-from-bottom-1">
                      <span>
                        {
                          (data.hireModelTagline) ? (data.hireModelTagline) : 'Take a look at'
                        }
                      </span>
                    </p>
                    <h3 className="sr-from-bottom-2">
                      Our Hiring <br /> <span>Models</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <h4 className="right-tag-lines sr-from-bottom-1 right_subtitle">
                    <HtmlParser html=
                      {data.hireTitle}
                    />
                  </h4>
                </div>
              </div>
            </div>
            <div className="hiring_types">
              <HireModel models={data.hireModels} />
            </div>
            <div className="mt-4 sr-from-bottom-8">
              <Link to="/inquiry.html">
                <button className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                  Hire Now <i className="icon-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="let-discuss with-white-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="discuss-left">
                    <div className="discuss-title sr-from-bottom-2">

                      <h3>
                        <span>Share</span> your "want list". We’ll get it <span>done</span> from there.
                                </h3>
                      <p className="mt-3">
                        <i>
                          Really, we mean it. Jot down the complete details you want to include in your project. Tech-savvy CMARIANS are here to share the expertise you required yesterday and deliver outstanding results.
                                    </i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="discuss-right left-brush sr-from-bottom-3">
                    <h4>Click below to</h4>
                    <Link to="/inquiry.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        Share Your Idea
                                <i className="icon-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*Our Dedicated Hire Services*/}
          <div className="hire_services">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>
                        {
                          (data.dedicatedServiceTag) ? (data.dedicatedServiceTag) : 'Take a look at'
                        }
                      </span>
                    </p>
                    <h3 className="sr-from-bottom-3 font-weight-black">
                      Our Dedicated Hire <span>Services</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="dedicated_services_list">
              <div className="container">
                <HireService services={data.dedicatedServices} />
              </div>
            </div>
          </div>

          {/* What we Provide */}
          <div className="cmr-what-we">
            <div className="container mt-5">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Win & Wow With</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
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
          <div className="how_hire_help pt-100 pb-60 left-sq">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 col-12 offset-lg-1 offset-md-1">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sec-title">
                        <p className="sr-from-bottom-1">
                          <span>{data.benifitLabel}</span>
                        </p>
                        <h3 className="sr-from-bottom-3">
                          {data.benifitTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Benifits benifits={data.benifits} />
                </div>
              </div>
            </div>
          </div>

          <div className="domain_expertise pb-60">
            <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sec-title">
                        <p className="sr-from-bottom-1">
                          <span>Our Expertise</span>
                        </p>
                        <h3 className="sr-from-bottom-3">
                          Domain <span>Expertise</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DomainExpert experts={data.domainExpert} />
            </div>
          </div>


          <div className="cmr-ab-relate hire-cmr-ab-relate">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="sec-tag-lines">
                    <span className="sr-from-bottom-1">Know Us</span>
                    <h3 className="sr-from-bottom-2">
                      We Are The Rare Agile Team With <br /> Triple Power Threat
                            </h3>
                  </div>
                  <div className="sec-description mt-3">
                    <div>
                      <p className="sr-from-bottom-3">
                        We are a close-knit team of innovators and problem solvers. We ensure world-class products are delivered with the implementation of strategy, technology and design. With our triple power – <b>extreme capability, flexibility to work with</b>, and <b>dedication to our work</b>, we have made some great stories for Fortune 500 brands and few startups. Do you want us to inundate the world with your cool idea?
                                </p>
                    </div>
                  </div>
                  <Link to="/our-team.html">
                    <button className="cmr-solid-btn mt-3 mb-3 hvr-shutter-out-horizontal">
                      Meet Our Team <i className="icon-arrow-right"></i>
                    </button>
                  </Link>
                </div>

                <div className="col-md-5 at-right-bottom sr-from-bottom-2">
                  <ImageView src={aboutIcon} alt="agile team" />
                </div>
              </div>
            </div>
          </div>

          <div className="cmr-perks cmr-tw-adv hire-perks">
            <div>
              <div className="container">
                <div className="row mb-5 align-items-center">
                  <div className="col-md-12">
                    <div className="sec-title sr-from-bottom">
                      <h3 className="sr-from-bottom-2">
                        Who We Are & What We Do
                                </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-lefter">
                <div className="right-slant">
                  <VisibilitySensor
                    partialVisibility={true}
                    onChange={(e) => {
                      if (e) {
                        if (!this.state.onScrollClass) {
                          this.setState({
                            onScrollClass: 'in-view'
                          })
                        }
                      }
                    }}
                  >
                    <div className={`anmtn-element ${this.state.onScrollClass}`}>
                      <div className="animated-cuts-right">
                        <div className="right-bg"></div>
                      </div>
                    </div>
                  </VisibilitySensor>
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <div className="perk-plate sr-from-bottom-1">
                        <div className="perk-title">
                          <div className="perk-num perk-one">
                            <h6>01.</h6>
                          </div>
                          <div className="perk-tit">
                            We are Collaborative
                                        </div>
                        </div>
                        <div className="perk-desc">
                          We work as your extended team and bring out the best in our development, design and marketing services. We understand your requirement, discuss various queries and mutually make the best out of it.
                                    </div>
                      </div>

                      <div className="perk-plate sr-from-bottom-2">
                        <div className="perk-title">
                          <div className="perk-num perk-two">
                            <h6>02.</h6>
                          </div>
                          <div className="perk-tit">
                            We are Indispensable
                                      </div>
                        </div>
                        <div className="perk-desc">
                          We believe the actual problem resides behind the problem itself. The forte in technology helps to solve the challenges in the project and make us win.
                                    </div>
                      </div>
                      <div className="perk-plate sr-from-bottom-3">
                        <div className="perk-title">
                          <div className="perk-num perk-three">
                            <h6>03.</h6>
                          </div>
                          <div className="perk-tit">
                            We Unleash the Genius.
                                      </div>
                        </div>
                        <div className="perk-desc">
                          We unleash the unconventional aspects of your project with our expertise. We love those hidden aspects and let it shine.
                                    </div>
                      </div>
                    </div>
                    <div className="col-sm-6 text-center sr-from-bottom-3">
                      <div className="rellimage advanone">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-righter">
                <div className="left-slant">
                  <VisibilitySensor
                    partialVisibility={true}
                    onChange={(e) => {
                      if (e) {
                        if (!this.state.onScrollClass) {
                          this.setState({
                            onScrollClass: 'in-view'
                          })
                        }
                      }
                    }}
                  >
                    <div className={`anmtn-element ${this.state.onScrollClass}`}>
                      <div className="animated-cuts-left">
                        <div className="left-bg"></div>
                      </div>
                    </div>
                  </VisibilitySensor>
                </div>
                <div className="container">
                  <div className="row m-0">
                    <div className="col-sm-6 text-center sr-from-bottom-1">
                      <div className="rellimage ml-0 advantwo">
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="perk-plate sr-from-bottom-1">
                        <div className="perk-title">
                          <div className="perk-num perk-one">
                            <h6>03.</h6>
                          </div>
                          <div className="perk-tit">
                            We Don't Stop Designing.
                                        </div>
                        </div>
                        <div className="perk-desc">
                          Design and development certainly influence each other. Our expertise blurs the lines between them so the project can thrive in each of the phases together.
                                    </div>
                      </div>

                      <div className="perk-plate sr-from-bottom-2">
                        <div className="perk-title">
                          <div className="perk-num perk-two">
                            <h6>04.</h6>
                          </div>
                          <div className="perk-tit">
                            We Diminish Risk Early.
                                        </div>
                        </div>
                        <div className="perk-desc">
                          Our prior attention is given to the most challenging aspects of the project – from research to implementation, while providing you the belief that we will gain objectives in productive time.
                                    </div>
                      </div>

                      <div className="perk-plate sr-from-bottom-3">
                        <div className="perk-title">
                          <div className="perk-num perk-three">
                            <h6>05.</h6>
                          </div>
                          <div className="perk-tit">
                            We iterate quickly
                                        </div>
                        </div>
                        <div className="perk-desc">
                          We deliver you the working versions of your concepts and designing at pace, so you can share the feedback early and enable us to work on project improvements as per the need.
                                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <h4>{data.cardLabel}</h4>
                      <h3>{data.cardTitle}</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                          {data.cardButton}
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
                    {data.weAre}
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

export default HireMain;
