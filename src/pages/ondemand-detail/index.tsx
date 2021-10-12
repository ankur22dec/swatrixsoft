import React from "react";
import "./ondemand.scss";
import ImageView from "../../components/ImageView";
import pointerDe from '../../assets/images/pointer-de.svg';
import WeProvide from "../../components/weProvide/weProvide";
// import consultingMainJson from '../../constants/consultingMain';
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import ContactForm from "../../components/ContactForm/contactForm";
import EngageSteps from "../../components/engageStep/engageStep";
import onDemandjson from "../../constants/ondemain";
import HtmlParser from "../../components/htmlParser/htmlParser";
import KeyFeature from "./component/keyFeature";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class OndemandDetail extends React.Component<any, any> {
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
        // const data = onDemandjson[0];
        const data: any = onDemandjson.find((x) => window.location.pathname.includes(x.routeName));
        
        return (
            <>
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
                </Helmet>
                <div className={data.class}>
                    <div className="inner-top-header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="inner-left">
                                        <div className="inner-head-title sr-from-bottom content__paragraph" data-splitting>
                                            <h1><span>{data.title}</span></h1>
                                        </div>
                                        <p className="inner-about sr-from-bottom-1">
                                            {data.description}
                                        </p>
                                        <Link to="inquiry.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                                Inquire Now <i className="icon-arrow-down"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={data.image} className="max100per" alt="hero-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">
                                {data.assureLabel}
                            </span>
                            <h2 className="sr-from-bottom-2">
                                {data.assureTitle}
                            </h2>
                        </div>
                        <div className="row align-items-center mt-3">
                            <div className="col-md-12">
                                <div className="sec-description mt-0">
                                    <p className="sr-from-bottom-3">
                                        <HtmlParser html={data.assureDescription} />
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-md-12 mt-4 text-center">
                                <ImageView src={deliveryIcon} alt="Deliveryboy" />
                            </div> */}
                        </div>
                    </div>

                    <div className="app-ss sr-from-bottom-1">
                        <ImageView src={data.detailImage} alt="screenshots" width="100%" />
                    </div>

                    <KeyFeature features={data.keyFeatures} keyfeatureTitle={data.keyfeatureTitle}/>

                    <div className="what_we_provide cmr-what-we">
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

                    <div className="cmr-query">
                        <div className="container mini-container">
                            <div className="row align-items-center">
                                <div className="query-title">
                                    <h4 className="right-tag-lines sr-from-bottom-4">
                                        <HtmlParser html={data.cardTitle} />
                                    </h4>
                                </div>
                                <div className="query-round sr-from-bottom-5">
                                    <img src={pointerDe} alt="pointer" className="brusher topdown" />
                                    <h5>{data.cardSubtitle}</h5>
                                    <Link to={data.buttonLink}>
                                        <button className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                                        {data.cardButton} <i className="icon-arrow-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TechnologyTabView technologyStopTitle="All about our"/>

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

                    <ContactForm title={data.contactFormLabel} description={data.contactFormDetailTitle}></ContactForm>
                </div>
            </>
        );
    }
}

export default OndemandDetail;