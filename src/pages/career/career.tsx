import React from "react";
import "./career.scss";
import VisibilitySensor from 'react-visibility-sensor';
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';

import careerTop from '../../assets/images/inner-top/career.svg';
import data from '../../constants/career';
import Opening from "./component/opening";
import { Link } from "react-router-dom";
import Encourge from "./component/encourge";


class Career extends React.Component {
    scrollRef: any = "";
    state = {
        onScrollClass: "",
        openModel: false,
        title: ''
    };

    // componentWillMount() {
    //     // const script = document.createElement("script");
    //     // script.src =
    //     //     "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    //     // script.async = true;
    //     // document.body.appendChild(script);
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
        return (
            <>
                <div className="cmr-careers">

                    <div className="inner-top-header">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-md-6">
                                    <div className="inner-left">
                                        <div className="banner-pattern">
                                            <div className="pattern_inner">
                                                <span></span>
                                                <div className="line line1"></div>
                                                <div className="line line2"></div>
                                                <div className="line line3"></div>
                                            </div>
                                        </div>
                                        <div className="inner-head-title sr-from-bottom content__paragraph mt-3 mb-3" data-splitting>
                                            <h1>
                                            {data.title}
                                            </h1>
                                        </div>

                                        <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                            View Openings <i className="icon-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 text-right at-right-bottom">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={careerTop} alt="hero-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">Excited to</span>
                            <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                                Let’s Engineer A New Future Together
                            </h2>
                        </div>
                        <div className="sec-description">
                            <div className="sec-desc-title sr-from-bottom-3">
                                <h6>Ready for <br />Growth?</h6>
                            </div>
                            <div>
                                <p className="sr-from-bottom-4">
                                    We are a bunch of geeky and creative people, who live, breathe and believe in the power of technology to create a world with innovations - a better world. We are in search of energetic innovators, thinkers and doers who dare to learn fast, adapt faster and execute in real time. The developers who passionately talk about the perfection in design and the designers who talk about development trends with conviction or a marketer who wants to build up their own sphere of stories. Think you have got what it takes? With your heartfelt desire to be a pioneer in this digital realm, consider joining a forward-thinking team.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-perks cmr-tw-adv">
                        <div>
                            <div className="container">
                                <div className="row mb-5 align-items-center">
                                    <div className="col-md-12">
                                        <div className="sec-title sr-from-bottom">
                                            <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                            <h3 className="sr-from-bottom-2">
                                                <span>Perks</span> @SWATRIXSOFT
                                            </h3>
                                        </div>

                                        <p className="nm-texts mt-3 sr-from-bottom-1">
                                            SWATRIXSOFT is a place where you would be inspired, challenged and acknowledged for your distinguished work. From highly-experienced peers to stimulating work environments, geeky conversations to funny jokes we make our passion worth living.
                                    </p>
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
                                                        Never Stop Learning
                                                    </div>
                                                </div>
                                                <div className="perk-desc">
                                                    Constant and Never Ending Improvement is our core culture. We give you whatever is needed to grow at 3x pace. Learning is a growth catalyst.
                                                </div>
                                            </div>

                                            <div className="perk-plate sr-from-bottom-2">
                                                <div className="perk-title">
                                                    <div className="perk-num perk-two">
                                                        <h6>02.</h6>
                                                    </div>
                                                    <div className="perk-tit">
                                                        Work On The Next Big Thing
                                                    </div>
                                                </div>
                                                <div className="perk-desc">
                                                    Work on top brands projects for a range of industries while building your knowledge and portfolio. We work on enterprise grade projects and platforms.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-center sr-from-bottom-3">
                                            <div className="rellimage neverstoplearning">
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
                                            <div className="rellimage ml-0 flexibility">
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="perk-plate sr-from-bottom-1">
                                                <div className="perk-title">
                                                    <div className="perk-num perk-one">
                                                        <h6>03.</h6>
                                                    </div>
                                                    <div className="perk-tit">
                                                    Flexibility
                                                    </div>
                                                </div>
                                                <div className="perk-desc">
                                                    We thrive on new challenges and strive for flexibility with fun.
                                                </div>
                                            </div>

                                            <div className="perk-plate sr-from-bottom-1">
                                                <div className="perk-title">
                                                    <div className="perk-num perk-three">
                                                        <h6>04.</h6>
                                                    </div>
                                                    <div className="perk-tit">
                                                        Enjoy Your Work
                                                    </div>
                                                </div>
                                                <div className="perk-desc">
                                                    Do what you love. We provide a freedom centric and result driven work environment to live your passion and work with effortless ease.
                                                </div>
                                            </div>

                                            <div className="perk-plate sr-from-bottom-2">
                                                <div className="perk-title">
                                                    <div className="perk-num perk-four">
                                                        <h6>05.</h6>
                                                    </div>
                                                    <div className="perk-tit">
                                                        See The World
                                                    </div>
                                                </div>
                                                <div className="perk-desc">
                                                    Having clients globally would bring employees to travel and work from beautiful destinations. We travel both ways i.e. welcome regular client visits as well as meet them personally in their country.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mini-container pt-100 pb-100">
                        <div className="sec-tag-lines">
                            <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                            Today is the time to make a decision that will bring a new realm of opportunities to you. Join us to be our next brand ambassador, we are expanding and accepting thrilling applications.
                            </h3>
                        </div>
                    </div>


                    <div className="cmr-encorage">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <div className="sec-title sr-from-bottom">
                                        <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                        <h3 className="sr-from-bottom-2">
                                            What do we look for?
                                        </h3>
                                    </div>
                                </div>
                                <Encourge items={data.encourge} />
                            </div>
                            <div className="row text-center">
                                <div className="col-12">
                                <Link to='/life-at-cmarix.html'>
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2 readmore-button life-at-cmarix">
                                        Life @SWATRIXSOFT
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cmr-openings" ref={(ref) => this.scrollRef = ref}>
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <div className="sec-title sr-from-bottom">
                                        <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                        <h3 className="sr-from-bottom-2">
                                            Current <span>Openings</span> Us?
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <Opening />
                        </div>
                    </div>

                    <div className="let-discuss mt-0 mb-3">
                        <div className="container">
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-left">
                                        <div className="discuss-title sr-from-bottom-2">
                                            <h3>
                                            Are you filled with the <span>passion</span> to try fresh, new and <span>innovative</span> subjects?
                                            </h3>
                                            <p className="mt-3">
                                                <i>
                                                Are you an expert in the industry that we have an open position for? We can talk more.
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-right left-brush sr-from-bottom-3">
                                        <h4>Join the team</h4>
                                        <Link to="/life-at-cmarix.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                Apply Anyway
                                                <i className="icon-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center reverse-direction-mobile">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-right left-brush sr-from-bottom-3">
                                        <h4>Still have doubts?</h4>
                                        <Link to="/life-at-cmarix.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                See Life @SWATRIXSOFT
                                                <i className="icon-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="discuss-left">
                                        <div className="discuss-title sr-from-bottom-2">

                                            <h3>
                                                We are <span>cultivating</span> an <span>environment</span> that promotes diversity and unique <span>talents</span>.
                                            </h3>
                                            <p className="mt-3">
                                                <i>
                                                    We have people from different parts of the country as well as a global employee workforce.  We give our best to work, laugh, throw good jokes, share crazy pictures, run fanatic with some creative ideas, brainstorm regularly, enjoy the debates about which pizza to order and live a very good life.
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="container mini-container mt-5 mb-5 pb-60 pt-60">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">We Assure You</span>
                            <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                                {data.weAre}
                            </h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Career;