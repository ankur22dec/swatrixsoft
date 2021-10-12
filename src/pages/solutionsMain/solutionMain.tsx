import React from "react";
import "./solution.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';
import solutions from '../../assets/images/new-graphics/solutions-we-provide.svg';
import consultingMainJson from '../../constants/consultingMain';
import digitalMarketingIcon from "../../assets/images/new-graphics/digital-marketing.svg";
import supportTesting from "../../assets/images/new-graphics/support-testing.svg";
import ondemand from "../../assets/images/new-graphics/on-demand-app-dev.svg";
import webService from "../../assets/images/inner-top/solutions/website-top.svg";
import itconsulting from '../../assets/images/inner-top/solutions/it-consulting.svg';
import apiIntegration from '../../assets/images/inner-top/solutions/website.svg';
import { Link } from "react-router-dom";
import EngageStep from "../../components/engageStep/engageStep";
import ContactForm from "../../components/ContactForm/contactForm";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import { Helmet } from "react-helmet";

class SolutionMain extends React.Component<any, any> {
    scrollRef: any = '';
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
    goTo = () => {
        window.scrollTo({
            behavior: "smooth",
            top: this.scrollRef.offsetTop
        });
    }

    render() {
        const data = consultingMainJson;
        return (
            <>
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${solutions}`} />
                </Helmet>
                <div className="cmr-solution-page">
                    <div className="inner-top-header bottom-align-banner">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container relate-pos">
                            <div className="row align-items-end">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 industry-inner-banner-left">
                                    <div className="inner-left">
                                        <div className="banner-pattern">
                                            <div className="pattern_inner">
                                                <span></span>
                                                <div className="line line1"></div>
                                                <div className="line line2"></div>
                                                <div className="line line3"></div>
                                            </div>
                                        </div>
                                        <div className="inner-head-title sr-from-bottom content__paragraph" data-splitting>
                                            <h1>
                                                <span>Solutions</span><br />
                                                We Provide
                                            </h1>
                                        </div>
                                        <p className="inner-about sr-from-bottom-1">
                                        Successful and worthy products are not merely created by coincidence. At CMARIX, with our development solutions for different industries we follow proven engineering processes, agile principles, and reliable continuous development methods that enable you to translate conventional ones and zeros, but help you make it alive and shine. 
                                        </p>
                                        <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                            Inquire Now <i className="icon-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-right at-right-bottom">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={solutions} alt="hero-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">Grow With Us</span>
                            <h2 className="sr-from-bottom-2">
                            Confront The New Era Competitors With Our Solutions 
                            </h2>
                        </div>
                        <div className="sec-description sr-from-bottom-3 mt-1">
                            <div>
                                <p className="medium_fontsize sr-from-bottom-4">
                                    At CMARIX, our vision is to engineer future-ready capabilities and business strategies for digital enterprise and startup solutions. We leverage design and development expertise that continues to meet user expectations. Having a track record of guiding countless companies to success, we know how to weave the latest technologies with business contexts for shaping the digital footprints of enterprises. Whether delivering a superb mainstream design for web and mobile apps or creating custom user experience over and above the standard practices, we can get the right wings for the enterprise solutions to fly over the competition.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-related sr-from-bottom">
                        <div className="left-cq"></div>
                        <div className="right-cq"></div>
                        <div className="container">
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-12">
                                    <div className="sec-title sr-from-bottom">
                                        <p className="sr-from-bottom-1"><span>Our Expertise</span></p>
                                        <h3 className="sr-from-bottom-2">
                                             Let’s Standout With Our Comprehensive Solutions
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cmr-halfwally">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/development-and-design-solution.html">
                                            < div className="related-plate sr-from-bottom-1">
                                                <div className="related-icon">
                                                    <ImageView src={webService} alt="Development & Design" />
                                                </div>
                                                <h6>
                                                    Development & Design
                                                 </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/on-demand-app-development.html">
                                            < div className="related-plate sr-from-bottom-2">
                                                <div className="related-icon">
                                                    <ImageView src={ondemand} alt="On-demand Solutions" />
                                                </div>
                                                <h6>
                                                    On-demand Solutions
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/support-and-testing.html">
                                            < div className="related-plate sr-from-bottom-3">
                                                <div className="related-icon">
                                                    <ImageView src={supportTesting} alt="Support & Testing" />
                                                </div>
                                                <h6>
                                                    Support & Testing
                                                 </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/digital-marketing.html">
                                            < div className="related-plate sr-from-bottom-4">
                                                <div className="related-icon">
                                                    <ImageView src={digitalMarketingIcon} alt="Digital Marketing" />
                                                </div>
                                                <h6>
                                                    Digital Marketing
                                                 </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/api-integration.html">
                                            < div className="related-plate sr-from-bottom-5">
                                                <div className="related-icon">
                                                    <ImageView src={apiIntegration} alt="API Integration" />
                                                </div>
                                                <h6>
                                                    API Integration
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <Link to="/consulting-and-strategy-solution.html">
                                            < div className="related-plate sr-from-bottom-6">
                                                <div className="related-icon">
                                                    <ImageView src={itconsulting} alt="Consulting Stratergy" />
                                                </div>
                                                <h6>
                                                    Consulting Stratergy
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div className="row provide-plate sr-from-bottom-3">
                                <div className="col-md-6 col-lg-4 left-tags">
                                    <span className="step-number-custom">01.</span>
                                    <span className="step-label-custom">Strategy</span>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <p>We do in-depth research, audits and review analytics to form a solid strategy. We combine the goals with our technology insights to bring the best strategy on table.</p>
                                </div>
                            </div>
                            <div className="row provide-plate sr-from-bottom-3">
                                <div className="col-md-6 col-lg-4 left-tags">
                                     <span className="step-number-custom">02.</span>
                                     <span className="step-label-custom">Design  </span>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <p>With a human-centered approach we work on design that is loved by humans. We bring a brand-centric and an intuitive and flexible experience to your users. </p>
                                </div>
                            </div>
                            <div className="row provide-plate sr-from-bottom-3">
                                <div className="col-md-6 col-lg-4 left-tags">
                                     <span className="step-number-custom">03.</span>
                                     <span className="step-label-custom">Development</span>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <p>We don’t just work for clients we work with clients. With our great code skills in development and design and deliver you a product that runs smoothly for all your operations. </p>
                                </div>
                            </div>
                            <div className="row provide-plate sr-from-bottom-3">
                                <div className="col-md-6 col-lg-4 left-tags">
                                     <span className="step-number-custom">04.</span>
                                     <span className="step-label-custom">Testing </span>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <p> The development is never complete without QA services. With our testing practices we ensure great quality and result.</p>
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
                        <div className="steps invert_bg sr-from-bottom-1">
                            <div className="container">
                                <EngageStep steps={data.engageSteps} />
                            </div>
                        </div>
                    </div>
                    
                    <TechnologyTabView technologyStopTitle="All about our"/>
                    
                    <div ref={(ref) => this.scrollRef = ref}>
                        <ContactForm />
                    </div>

                </div>
            </>
        )
    }
}

export default SolutionMain;