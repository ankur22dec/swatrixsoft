import React from "react";
import "./portfolio.scss";
import ImageView from "../../components/ImageView";
import data from '../../constants/portfolio';
import Application from "./components/application";
import { Link } from "react-router-dom";

class Portfolio extends React.Component {
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
                <div className="cmr-portfolio">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={data.image} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">PORTFOLIO</div>
                            <div className="row align-items-stretch">
                                <div className="col-md-12">
                                    <div className="inner-left">
                                        <div
                                            className="inner-head-title sr-from-bottom text-center"
                                            data-splitting
                                        >
                                            <div className="banner-pattern centered_lines">
                                                <div className="pattern_inner">
                                                    <span></span>
                                                    <div className="line line1"></div>
                                                    <div className="line line2"></div>
                                                    <div className="line line3"></div>
                                                </div>
                                            </div>
                                            <h1>
                                                <span>Portfolio</span>
                                                <br />
                                                Which Speaks Our Job
                                            </h1>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="port-navs">
                        <Application applications={data.applications}/>
                    </div>
                    <div className="container">
                        <div className="cmr-cta sr-from-bottom">
                            <div>
                                <h3>
                                    {data.cardLabel}
                                    <span className="sr-from-bottom-2">{data.cardTitle}</span>
                                </h3>
                            </div>
                            <div className="cta-btn sr-from-bottom-3">
                                <Link to="/inquiry.html">
                                    <button className="cmr-solid-btn-w get-center hvr-shutter-out-horizontal orange-section-hire-button">
                                        {data.cardButton} <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">We Assure You</span>
                            <h3 className="sr-from-bottom-2">
                                {data.weAre}
                            </h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio;