import React from "react";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./hire.scss";
import ImageView from "../../components/ImageView";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import ContactForm from "../../components/ContactForm/contactForm";
import CaseStudies from "../../components/CaseStudies/caseStudies";
import hireJson from '../../constants/hire';
import HireModel from "../../components/hireModel/hireModel";
import HireHelp from './components/hireHelp';
import DevelopmentService from "../../components/developmentServices/developmentService";
import EngageSteps from "../../components/engageStep/engageStep";
import HtmlParser from "../../components/htmlParser/htmlParser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; 

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class Hire extends React.Component<any, any> {
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

    const data: any = hireJson.find((x) => window.location.pathname.includes(x.routeName));
    return (
      <>
        <Helmet>
          <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
        </Helmet>
        <div className={data.className}>
          <div className={`inner-top-header hire-developers ${data.className === 'hire-web-developer' ? 'hire-web-developer-main': ''}`}>
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
                        Hire <span className="label-angular">{data.name}</span>
                        <br />
                        Developers
                      </h1>
                    </div>
                    <div className="inner-about sr-from-bottom-1">
                      <HtmlParser html={data.description} />
                    </div>
                    <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                    {data.hireLabel ? data.hireLabel : 'Hire Now'}&nbsp;<i className="icon-arrow-down"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-5 text-right row align-items-end justify-content-center bottom-overlap-image">
                  <div className="inner-right ">
                    <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : 'Hire Developer'} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1 with_quote">{data.missionLabel}</span>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <p className="bigger_fontsize">
                <HtmlParser html={data.missionTitle} />
              </p>
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
                  <h2 className="right-tag-lines sr-from-bottom-1">
                    <HtmlParser html={data.hireModelTitle} />
                  </h2>
                </div>
              </div>
            </div>
            <div className="hiring_types">
              <HireModel models={data.hireModels} />
            </div>
            <div className="mt-4 sr-from-bottom-8">
              <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                { 
                (data.routeName == 'hire-manual-tester.html' || 
                data.routeName == 'hire-automated-tester.html') ? <HtmlParser html={'Schedule Interview With Tester <i className="icon-arrow-down"></i>'} /> :  <HtmlParser html={'Schedule Interview With Developer <i className="icon-arrow-down"></i>'} />}
              </button>
            </div>
          </div>

          <div className="container mini-container mt-5 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1">{data.missionTwolabel}</span>
              <h3 className="sr-from-bottom-2 font-weight-bold">
                {data.missionTwoTitle}
              </h3>
            </div>
            <div className="sec-description flex-wrap">
              <div className="sec-desc-title sr-from-bottom-3 full_width label_with_half_circle mb-3">
                <h6 className="full_width">
                  {
                    (data.whatslable) ? data.whatslable : `What's ${data.name}`
                  }
                </h6>
              </div>
              <div className="full_width">
                <div className="sr-from-bottom-4 font-14">
                  <HtmlParser html={data.missionTwoDescription} />
                </div>
              </div>
            </div>
          </div>
          {data.className !== "hire-on-site-developers" && <div className="insideedge">
            <div className="container mt-5">
              <div className="cmr-reflectors">SERVICES</div>
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>{data.serviceLable}</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      <HtmlParser html=
                        {
                          (data.weprovideLabel) ? data.weprovideLabel : 'Our Core  <span>Services</span>'
                        }
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row hire-ser-plates">
                <DevelopmentService services={data.services} />
              </div>
              <div className="mt-4 sr-from-bottom-8">
                <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                  Talk to our {data.name} Expert <i className="icon-arrow-down"></i>
                </button>
              </div>
            </div>
          </div>
          }

          {/* How hiring help bussiness */}
          <div className="how_hire_help pt-100 pb-60 left-sq">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 col-12 offset-lg-1 offset-md-1">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sec-title">
                        <p className="sr-from-bottom-1">
                          <span>
                            {
                              (data.hireTopTagline) ? (data.hireTopTagline) : 'Take a look at'
                            }
                          </span>
                        </p>
                        <h3 className="sr-from-bottom-3">
                          {data.hireTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <HireHelp help={data.hireHelp} />

                </div>
              </div>
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
            <div className="steps">
              <div className="container">
                <EngageSteps steps={data.engageSteps} />
              </div>
            </div>
          </div>

          <div className="casestudy-swiper">
            <CaseStudies
              studies={data.caseStudies}
              label={data.caseStudiesLabel}
              title={data.caseStudiesTitle}
              description={data.caseStudiesDescription} />
          </div>

          {/* <div className="cmr-faqs">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-12">
                        <div className="sec-title">
                            <p className="sr-from-bottom-1"><span>Our Mission</span></p>
                            <h3 className="sr-from-bottom-2">
                                Some of <span>FAQs</span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 sr-from-bottom-3 faq-list">
                        <div id="accordion">
                            <ul>
                                {
                                    data.faqs.map((data: any, key: number) => {
                                        return (
                                            <li key={key}>
                                                <div className="faq_item">
                                                    <div className="faq_header">
                                                        <a className="card-link" aria-expanded={key ==0 ? 'true': 'false'} data-toggle="collapse" href={`#collapseOne${key}`}>
                                                            {data.title}
                                                        </a>
                                                    </div>
                                                    <div id={`collapseOne${key}`} className={`faq_body collapse ${key == 0 ? 'show': ''}`} data-parent="#accordion">
                                                        <div className="faq_body_inner">
                                                            {data.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>   */}

          <TechnologyTabView technologyStopTitle="All about our" />
          <div className="mt-4 sr-from-bottom-8">
                <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                  HIRE {data.name.toUpperCase()} SPECIALIST NOW <i className="icon-arrow-down"></i>
                </button>
              </div>

          {
            (data.className === 'hire-web-developer') ? (
              <div className="let-discuss hire-developer-let-discuss">
                <div className="container">
                  <div className="row align-items-center mb-5">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="discuss-left">
                        <div className="discuss-title sr-from-bottom-2">

                          <h3>
                            Is Your Website <span>Responsive</span> On Different Platforms?
                                    </h3>
                          <p className="mt-3">
                            <i>
                              More than 80% of the website traffic is counted from mobile phones and other devices. Can your website leverage most out of these platforms? Is your website easily accessed on mobile phone? Hire our web developers to ensure a responsive website development.
                                        </i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="discuss-right left-brush sr-from-bottom-3">
                        <h4>Click below to</h4>
                        <Link to="/responsive-website-design.html">
                          <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                            Responsive Design Services
                                    <i className="icon-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center reverse-direction-mobile">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="discuss-right left-brush sr-from-bottom-3">
                        <h4>Click below to</h4>
                        <Link to="/search-engine-optimization.html">
                          <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                            Hire Our SEO Services
                                    <i className="icon-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="discuss-left">
                        <div className="discuss-title sr-from-bottom-2">

                          <h3>
                            Is Your Website Built To Rank Higher On <span>Search</span> Engines?
                                    </h3>
                          <p className="mt-3">
                            <i>
                              Is your website optimized according to search engines? We built websites that are optimized to rank higher on popular search tools and get you most out of your digital tool.
                                        </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : ''
          }




          <div className="cmarix_motto pt-60 pb-60">
            <div className="container mini-container">
              <div className="better_outcome">
                <div className="sec-tag-lines sr-from-bottom-1">
                  <h3>
                    {data.workingWith}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" ref={(ref) => this.scrollRef = ref}>
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}

export default Hire;
