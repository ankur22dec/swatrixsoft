import React from "react";
import "./partnership.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';


class Confidential extends React.Component {
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

    render() {
        return (
            <>
                <div className="cmr-company">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">PARTNERSHIP</div>
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
                                                Partnership
                                                <br />
                                                <span>With Us</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-relate">
                        <div className="left-cq"></div>
                        <div className="container mini-container mt-5">
                            <div className="sec-tag-lines">
                                <span className="sr-from-bottom-1">Smart. Simple. Sellable.</span>
                                <h2 className="sr-from-bottom-2">
                                    PARTNERSHIP
                                </h2>
                            </div>
                            <div className="sec-description">
                                <div className="sr-from-bottom-4">
                                    <p>
                                    We believe in collaboration and mutual growth. We are always open to have more Consultants, Agencies, Businesses to be associated with us to provide better than best service to society as a whole. To fulfill this, we do have partnership programs as below where we build a strong strategic alliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-relate">
                        <div className="">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 mt-5">
                                        <div className="cmr-tw-adv sr-from-bottom-1">
                                            <div className="tw-plate tw-lg tw-two">
                                                <div className="cmr-tip-des sr-from-bottom-2">
                                                    <div className="spriteOne"></div>
                                                    <p className="cmr-point mt-3">
                                                        <span>Strategic Partnership</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    
                                                        <p>
                                                        CMARIX TechnoLabs aligns in complimentary business model with companies providing consulting, design and development and marketing services.
                                                        <br/><br/>
                                                        With thousands of man hours of company experience, great team of Software Engineers, Analyst and Experts we are able to provide a strong technology powerhouse. This enables you to immensely transform the quality of business that you provide and the quantity of business that your company can deliver.
                                                        <br/><br/>
                                                        We aspire to bring competitive advantages, values, efficiency, excellence and of course revenue on board, together. Of course strategic partnership comes with several benefits, synergy and overall growth.
                                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <div className="cmr-tw-adv sr-from-bottom-2">
                                            <div className="tw-plate tw-lg tw-three">
                                                <div className="cmr-tip-des sr-from-bottom-2">
                                                    <div className="spriteOne"></div>
                                                    <p className="cmr-point mt-3">
                                                        <span>Affiliate Partnership</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <p>
                                                    Most suited for individuals who are working actively into technology business.
                                                    <br/><br/>
                                                    With affiliate partnership you can receive a streamlined process, pricing and working model with which you can focus on generating more business and count on us for the complete production process. Of course we will be providing you with complete pre-sales assistance and end to end business life cycle.
                                                    <br/><br/>
                                                    We welcome you to be our affiliate and work together to provide more diverse, competitive and qualitative services to your customers.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-5">
                                        <div className="cmr-tw-adv sr-from-bottom-2">
                                            <div className="tw-plate tw-lg tw-four">
                                                <div className="cmr-tip-des sr-from-bottom-2">
                                                    <div className="spriteOne"></div>
                                                    <p className="cmr-point mt-3">
                                                        <span>Reseller Partnership</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <p>
                                                    We respect our brand and have earned the great reputation with the hard work, going an extra mile and focusing on what is most important for our customers. We love working with companies who have similar thought process.
                                                    <br/><br/>
                                                    If you have established a marketing channel and want out software services to be used under our brand name, we are interested and we welcome you.
                                                    <br/><br/>
                                                    We want to be aligned with you for your customer base and provide our service range to them. Because we believe in you and aim to work along with you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Confidential;