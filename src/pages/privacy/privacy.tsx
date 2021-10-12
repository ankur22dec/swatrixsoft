import React from "react";
import "./privacy.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';


class Privacy extends React.Component {
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
                            <div className="cmr-reflectors">PRIVACY</div>
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
                                                CMARIX
                                                <br />
                                                <span>Priavcy Policy</span>
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
                                <span className="sr-from-bottom-1">Our Priority</span>
                                <h2 className="sr-from-bottom-2">
                                    We love our customers and their privacy is our topmost
                                    priority as it is most valuable.
                                </h2>
                            </div>
                            <div className="sec-description">
                                <div className="sr-from-bottom-4">
                                    <p>
                                        This privacy policy defines usage and protection of information that you give to CMARIX when you use our
                                        website.
                                        <br /><br />
                                        We at CMARIX are committed to make sure that your privacy is protected. Should we ask you to providecertain
                                        information by which you can be identified when using this website, then you can be assured that it will only be
                                        used in accordance with this privacy statement.
                                        <br /><br />
                                        CMARIX may change this policy from time to time by updating this page for betterment. This policy is effective
                                        from 1/1/2009.
                                        <br /><br />
                                        We may collect information which includes name, job title, contact information including email address, postal
                                        address and other information relevant to your interest in CMARIX services.
                                        <br /><br />
                                        We require these information to understand your needs and provide you with a better service, and in particular
                                        for the following reasons:
                                    </p>

                                    <ul className="job-desc">
                                        <li>To improve our products and services</li>
                                        <li>To send promotional emails periodically to you about new services or other information which we think you
                                            may find interesting</li>
                                        <li>From time to time, we may also use your information to contact you to provide information that we consider
                                            may be of interest to you and your business. We may contact you by email, phone, fax or mail</li>
                                    </ul>

                                    <p>
                                        In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                                        <br /><br />
                                        CMARIX periodically collects only domain information as a part of analysis process such as web site usability, performance, and effectiveness. This specific data gives us the information about which users visit our site, what parts of the site they visit often and how often they visit our site. We uses this useful information to improve its productivity, efficiency and customer satisfaction level. This information is collected automatically and requires no action from your end.
                                        <br /><br />
                                        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                                        <br /><br />
                                        We do not and will not provide any of your personal or business information to other companies or individuals without your specific request and permission. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Privacy;