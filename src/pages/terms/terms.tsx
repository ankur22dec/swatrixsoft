import React from "react";
import "./terms.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';


class Terms extends React.Component {
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
                            <div className="cmr-reflectors">TERMS</div>
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
                                                <span>Terms & Conditions</span>
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
                                        Kindly read and understand these Terms and Conditions carefully before using www.cmarix.com website.
                                        <br /><br />
                                        It has been assumed that you have been agreeing to add terms and conditions defined here to use www.cmarix.com website.
                                        <br /><br />
                                        This website www.cmarix.com is owned and operated by CMARIX TechnoLabs only. All content and material available on this website is the sole property of CMARIX TechnoLabs including all the graphics, images, logos, software, trademarks, video, text, audio and animation used.
                                        <br /><br />
                                        CMARIX name, tagline and logo is the trademark of CMARIX TechnoLabs only. These trademarks and logo may not be used in any manner anywhere else. You may not copy, reproduce, republished, use, adapt, modify and alter these contents of this website without the consent and permission of CMARIX TechnoLabs. You must not use any contact information or e-mail addresses which may be found on this web site to send any unsolicited commercial or personal information.
                                        <br /><br />
                                        The link of the third party web site address may found on this web sites, so we are not responsible for the contents of such sites or whole third party website at all. The Third party web site is not under control of CMARIX TechnoLabs at all. You at your own risk may access to such other sites via the links contained on this web site.
                                        <br /><br />
                                        CMARIX shall have no responsibility for any damage to your computer system or loss of data that results from the download of any information from this Site.
                                        <br /><br />
                                        CMARIX, reserves the right to modify “Terms of Use” at any time without informing its users.
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

export default Terms;