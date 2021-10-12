import React from "react";
import "./life-cmarix.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';
import lifePlate from '../../assets/images/elements/collage-1.jpg';
import extended from '../../assets/images/elements/extended.jpg';
import aboutIcon from '../../assets/images/inner-top/about.png';
import lifeTop from '../../assets/images/new-graphics/life-at-cmarix.svg';
import data from '../../constants/lifeAtCmarix';
import { Link } from "react-router-dom";

class LifeCmarix extends React.Component {
    state = {
        onScrollClass: "",
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

    render() {
        return (
            <>
                <div className="cmr-life">
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
                                        <div className="inner-head-title sr-from-bottom content__paragraph mt-3 mb-3" data-splitting>
                                            <h1>
                                                <span>Life</span> at<br />
                                                CMARIX
                                            </h1>
                                        </div>
                                        <h4 className="sr-from-bottom-2">
                                            {data.title}
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-md-7 text-right at-right-bottom">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={lifeTop} alt="hero-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 pt-5 left-sq">
                        <div className="sec-tag-lines">
                            <h2 className="sr-from-bottom-2 happy-hours-work">
                                Wanna get the feel of our <br />
                                happy hours at work?
                            </h2>
                        </div>
                        <div className="sec-description mt-3">
                            <div>
                                <p className="sr-from-bottom-3">
                                    Words went short when we tried explaining our happy hours at work… <br /><br />
                                    <b>Probably these pictures did our job.</b>
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 sr-from-bottom-4">
                            <ImageView src={lifePlate} alt="Cmarians" />
                        </div>

                        <div className="sec-description sr-from-bottom-5">
                            <div>
                                <p>
                                    <b>At CMARIX</b>, we cultivate a positive workplace where happy employees are our top priority. Our work culture ensures we hire the right people and give them freedom centric and result driven work environments for them to solve incremental challenges and add tremendous value. Growth in career is most important for work satisfaction and we provide ample opportunities, infrastructure and work environment to our employees to achieve it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-happen">
                        <div className="container mini-container">
                            <h3 className="sr-from-bottom">
                                The Most Happening People With Us
                            </h3>
                            <p className="sr-from-bottom-1">
                            We are not just developers, marketers, designers, strategists or managers. We are even <b>artists, cooks, travelers, readers, musicians, among the rest other talents</b>. We celebrate these different perspectives of each individual that translate to tech skills and overall growth of the company.
                            </p>
                        </div>

                        <div className="cmr-extended">
                            <div className="row m-0">
                                <div className="col-md-6 extend-img sr-from-bottom-2">
                                    <ImageView src={extended} alt="team" />
                                </div>

                                <div className="col-md-6 right-extend">
                                    <div className="sec-title sr-from-bottom-3">
                                        <p className="sr-from-bottom-4"><span>About Team</span></p>
                                        <h3 className="sr-from-bottom-5">
                                            An Extended Team,<br />
                                            which can be part<br />
                                            of your Project
                                        </h3>
                                        <Link to="/our-team.html">
                                            <button className="cmr-solid-btn sr-from-bottom-6 mt-5 hvr-shutter-out-horizontal">
                                                Meet the Team <i className="icon-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-relate">
                        <div className="right-cq"></div>
                        <div className="container mini-container  left-sq">
                            <div className="sec-tag-lines">
                                <span className="sr-from-bottom-1">Our Mission</span>
                                <h3 className="sr-from-bottom-2">
                                A Mission-Driven Team That Make Ideas Happen
                            </h3>
                            </div>
                            <div className="sec-description mt-3">
                                <div>
                                    <p className="sr-from-bottom-3">
                                    With diverse backgrounds and talents, <b>CMARIANS</b> unite to make the technology work for our clients. We are a group of individuals who challenge the status quo, among the fast learners, share good jokes, take a lot of pictures, do debates on popular opinions and a lot that adds joy. Sounds interesting? <br/>
                                    <b>Join to enjoy</b> good <b>work</b> & humor and never get bored or micro-managed.
                                </p>
                                </div>
                            </div>

                            <Link to="/career.html">
                                <button className="cmr-solid-btn get-center mt-5 hvr-shutter-out-horizontal">
                                    Join Our Team <i className="icon-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="cmr-ab-relate">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="sec-tag-lines">
                                        <span className="sr-from-bottom-1">Know Us</span>
                                        <h3 className="sr-from-bottom-2">
                                            Know The Partners <br/> “Who We Are” & “What We Do”
                                        </h3>
                                    </div>
                                    <div className="sec-description mt-3">
                                        <div>
                                            <p className="sr-from-bottom-3">
                                            We are a group of optimistic thinkers and doers who will do what it takes to get things done. With our pragmatic approach we help our entrepreneurs and businesses to take ideas from strategic vision to market reality. Irrespective of the industry, your brand has a story to tell. And, we are the best company to tell it
                                            </p>
                                        </div>
                                    </div>
                                    <Link to="/know-us.html">
                                        <button className="cmr-solid-btn mt-3 mb-3 hvr-shutter-out-horizontal">
                                            Know Us <i className="icon-arrow-right"></i>
                                        </button>
                                    </Link>
                                </div>

                                <div className="col-md-5 at-right-bottom sr-from-bottom-4">
                                    <ImageView src={aboutIcon} alt="agile team" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LifeCmarix;