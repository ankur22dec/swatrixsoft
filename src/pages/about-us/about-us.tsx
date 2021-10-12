import React from 'react';
import './about-us.scss';
import VisibilitySensor from 'react-visibility-sensor';
import aboutIcon from '../../assets/images/know-us/meet-cmarix.svg';
import waves from '../../assets/images/inner-top/waves.svg';
import ImageView from '../../components/ImageView';
import whatWe from "../../assets/images/know-us/what-we-do.svg";
import howWe from "../../assets/images/know-us/how-we-do.svg";
import whyWe from "../../assets/images/know-us/why-cmarix.svg";
import certiOne from "../../assets/images/iso1.png";
import certiTwo from "../../assets/images/iso2.png";
import certiThree from "../../assets/images/cmmi3.png";
import aboutOne from "../../assets/images/mission.png";
import aboutTwo from "../../assets/images/approch.png";
import ContactForm from '../../components/ContactForm/contactForm';
import data from '../../constants/about';
import HtmlParser from '../../components/htmlParser/htmlParser';
import { Link } from 'react-router-dom';
import TechnologyTabView from '../../components/technologyTab/technologyTab';

class AboutUs extends React.Component<any, any> {
    scrollRef: any = "";
    state = {
        onScrollClass: ''
    }
    // componentWillMount() {
    //     // const script = document.createElement("script");
    //     // script.src = "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    //     // script.async = true;
    //     // document.body.appendChild(script);
    // }
    componentDidMount() {
        let windowObj: any = window;
        windowObj.helloTest();
    }
    goTo = () => {
        window.scrollTo({
            behavior: "smooth",
            top: this.scrollRef.offsetTop
        });
    }
    render() {
        return (
            <>
                <div className="cmr-about-us">
                    <div className="inner-top-header">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-md-5">
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
                                            <h1>{data.title}</h1>
                                        </div>
                                        <p className="inner-about sr-from-bottom-1">
                                            {data.description}
                                        </p>
                                        <Link to="/inquiry.html">
                                            <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                                Inquire Now <i className="icon-arrow-down"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-7 text-right at-right-bottom">
                                    <div className="inner-right sr-from-bottom-2 abour-us-banner">
                                        <ImageView src={aboutIcon} alt="hero-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">Grow With Us</span>
                            <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                                {data.assureTitle}
                            </h2>
                        </div>
                        <div className="sec-description sr-from-bottom-3 mt-1">
                            <div>
                                <div className="sr-from-bottom-4">
                                    <HtmlParser html={data.assureDescription} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        {/* <ImageView src={teamPeople} alt="People" width="100%" /> */}

                        <div className="we-solve-section">
                            <div className="container">
                                <div className="we-solve-card">
                                    <div className="double-size-alphabet">
                                        <h3>We</h3>
                                    </div>
                                    <div className="we-solve-content">
                                        <div className="content-inner-title">
                                            <h4>Solve Problems.</h4>
                                            <h4>Fuel Innovation.</h4>
                                            <h4>Make It Happen.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="floating-half-shade"></div>
                        </div>

                        <div className="aboutthings">
                            <div className="conitaner mini-container mt-5">
                                <div className="sec-title rtop-line sr-from-bottom">
                                    <h3 className="sr-from-bottom-1">
                                        {/* {data.weDoTitle} */}
                                    </h3>
                                </div>
                            </div>

                            <div className="conitaner mini-container">
                                <div className="row about-tags align-items-center">
                                    <div className="col-md-6 col-sm-6 col-12 tag-about-left">
                                        <div className="sec-title sr-from-bottom">
                                            <h3 className="fs-24 sr-from-bottom-1">
                                                {data.whatweDo.title}
                                            </h3>
                                            <p className="sr-from-bottom-2">{data.whatweDo.descripion}</p>
                                            <Link to={data.whatweDo.link}>
                                                <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2 readmore-button">
                                                    Read More
                                                    <i className="icon-arrow-right"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 tag-image">
                                        <ImageView src={whatWe} alt="People" width="100%" />
                                    </div>
                                </div>

                                <div className="row about-tags align-items-center">
                                    <div className="col-md-6 col-sm-6 col-12 tag-image">
                                        <ImageView src={howWe} alt="People" width="100%" />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 tag-about-left tag-purple">
                                        <div className="sec-title sr-from-bottom">
                                            <h3 className="fs-24 sr-from-bottom-1">
                                                {data.howWeDO.title}
                                            </h3>

                                            <p className="sr-from-bottom-2">{data.howWeDO.description}</p>
                                            <Link to={data.howWeDO.link}>
                                                <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2 readmore-button">
                                                    Read More
                                                <i className="icon-arrow-right"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row about-tags align-items-center">
                                    <div className="col-md-6 col-sm-6 col-12 tag-about-left tag-yellow">
                                        <div className="sec-title sr-from-bottom">
                                            <h3 className="fs-24 sr-from-bottom-1">
                                                {data.whyCmarix.title}
                                            </h3>

                                            <p className="sr-from-bottom-2">{data.whyCmarix.description}</p>
                                            <Link to={data.whyCmarix.link}>
                                                <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2 readmore-button">
                                                    Read More
                                                    <i className="icon-arrow-right"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 tag-image">
                                        <ImageView src={whyWe} alt="People" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mis-vis sr-from-bottom-1">
                        <div className="container cmr-tw-adv">
                            <div className="mlr-auto">
                                <div className="row">
                                    <div className="col-sm-6 sr-from-bottom-2">
                                        <div className="tw-plate tw-two">
                                            <div className="cmr-tip-des">
                                                <div className="spriteOne"></div>
                                                <p className="cmr-point mt-3">
                                                    <span>{data.missionTitle}</span>
                                                </p>
                                            </div>
                                            <div className="slide-plate">
                                                <div className="spriteOne slide-number slide-act-one"></div>
                                                <div className="slide-detail">
                                                    <p>{data.missionDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 sr-from-bottom-3">
                                        <div className="tw-plate tw-three">
                                            <div className="cmr-tip-des">
                                                <div className="spriteOne"></div>
                                                <p className="cmr-point mt-3">
                                                    <span>{data.visionTitle}</span>
                                                </p>
                                            </div>
                                            <div className="slide-plate">
                                                <div className="spriteOne slide-number slide-act-one"></div>
                                                <div className="slide-detail">
                                                    <p>{data.visionDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="cmr-certificates sr-from-bottom-4">
                            <p className="fj-letters">CERTIFIED BY:</p>
                            <ImageView src={certiOne} alt="iso" />
                            <ImageView src={certiTwo} alt="iso" />
                            <ImageView src={certiThree} alt="iso" />
                        </div>
                    </div>



                    <div className="cmr-tw-adv mt-5">
                        <div>
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
                                    <div className="row m-0">
                                        <div className="col-sm-6">
                                            <div className="tw-plate tw-lg tw-four">
                                                <div className="cmr-tip-des">
                                                    <div className="spriteOne"></div>
                                                    <p className="cmr-point mt-3">
                                                        <span>{data.approchTitle}</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <div className="slide-detail">
                                                        <p>{data.approchDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <ImageView src={aboutOne} alt="Image" />
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
                                        <div className="col-sm-6 text-left">
                                            <ImageView src={aboutTwo} alt="Image" />
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="tw-plate tw-one">
                                                <div className="cmr-tip-des">
                                                    <div className="spriteOne"></div>
                                                    <p className="cmr-point mt-3">
                                                        <span>{data.missionTeam}</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <div className="slide-detail">
                                                        <p>{data.missionTeamDescription}.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="container mt-5 mb-5">
                        <div className="text-center">
                            <div className="sec-title sr-from-bottom">
                                <h3 className="fs-24 sr-from-bottom-1 mb-3">
                                    {data.missionTwoTitle}
                                </h3>
                            </div>
                            <Link to="/our-team.html">
                                <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2 get-center">
                                    Meet Our Team <i className="icon-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="let-discuss">
                        <div className="container">
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-left">
                                        <div className="discuss-title sr-from-bottom-2">

                                            <h3>
                                                <HtmlParser html={data.friendsTitle} />
                                            </h3>
                                            <p className="mt-3">
                                                <i>
                                                    {data.friendsDescription}
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-right left-brush sr-from-bottom-3">
                                        <h4>Click below to</h4>
                                        <Link to="/career.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                Join Our Team
                                            <i className="icon-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center reverse-direction-mobile">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-right left-brush sr-from-bottom-3">
                                        <h4>See how we</h4>
                                        <Link to="/life-at-cmarix.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                Learn And Play
                                            <i className="icon-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-left">
                                        <div className="discuss-title sr-from-bottom-2">

                                            <h3>
                                                <HtmlParser html={data.funTitle} />
                                            </h3>
                                            <p className="mt-3">
                                                <i>
                                                    {data.funDescription}
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Core Value */}
                    
                    {/* case study */}

                    <TechnologyTabView technologyStopTitle="All about our" />
                    <div className="start_project">
                        <div className="container">
                        <div className="hire_developer_orange sr-from-bottom-1">
                            <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                                <div className="hire_left">
                                <h4>But enough about us</h4>
                                <h3>we are keen to know about you! </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                                <div className="hire_right">
                                <Link to="/inquiry.html">
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                   Contact Us
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

            
                <div className="container mini-container mt-5 left-sq pb-60 pt-60">
                    <div className="sec-tag-lines">
                        <span className="sr-from-bottom-1">We Assure You</span>
                        <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                        Working with CMARIX means you have got the <b>BEST TEAM</b> to make your idea a popular reality.
                        </h3>
                    </div>
                </div>

                <div ref={(ref => this.scrollRef = ref)}>
                    <ContactForm />
                </div>

                </div>


            </>
        )
    }
}

export default AboutUs;