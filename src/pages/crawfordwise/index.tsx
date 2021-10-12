import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon1 from "../../assets/images/casestudy/crawfordwise/circle-2.svg";
import icon2 from "../../assets/images/casestudy/crawfordwise/macs.png";
import icon3 from "../../assets/images/casestudy/crawfordwise/bluemouse.svg";
import icon4 from "../../assets/images/casestudy/crawfordwise/ser1.svg";
import icon5 from "../../assets/images/casestudy/crawfordwise/ser2.svg";
import icon6 from "../../assets/images/casestudy/crawfordwise/ser3.svg";
import icon7 from "../../assets/images/casestudy/crawfordwise/ser4.svg";
import icon8 from "../../assets/images/casestudy/crawfordwise/ser5.svg";
import icon9 from "../../assets/images/casestudy/crawfordwise/ser6.svg";
import icon10 from "../../assets/images/casestudy/crawfordwise/ser7.svg";
import icon11 from "../../assets/images/casestudy/crawfordwise/ser8.svg";
import icon12 from "../../assets/images/casestudy/crawfordwise/ser9.svg";
import icon13 from "../../assets/images/casestudy/crawfordwise/ser10.svg";
import icon14 from "../../assets/images/casestudy/crawfordwise/ser11.svg";
import icon15 from "../../assets/images/casestudy/crawfordwise/ser12.svg";
import icon16 from "../../assets/images/casestudy/crawfordwise/flow.svg";
import icon17 from "../../assets/images/casestudy/crawfordwise/mouse.svg";
import icon18 from "../../assets/images/casestudy/crawfordwise/left1.png";
import icon19 from "../../assets/images/casestudy/crawfordwise/vector.png";
import icon20 from "../../assets/images/casestudy/crawfordwise/bottom.png";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";


class Crawfordwise extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script> 
                    <meta property="og:image" content={`https://www.cmarix.com${icon2}`} />
                </Helmet>
                <div className="hire-ios-developers">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">CASESTUDY</div>
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
                                            <span>CRAWFORDWISE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="crawFord">
                    <ImageView src={cmarixLine} alt="Cmarix-line" className="mt2px h15px" />
                    <div className="strycircle">
                        <div className="container">
                            <div className="col-md-12">
                                <h3 className="introClass">Introduction</h3>
                                <p className="fs22">Crawfordwise is a leading Consultancy firm having over 40 years of experience in providing services like Cyber Security, Solution Design,Business Intelligence, Development Services for Automation, VoIP, Cloud Hosting, Disaster Recovery Management, Virtualisation and many others.
                                </p><br />

                                <p className="fs22 mouseleft"><span className="yelloWish">CMARIX</span> has provided a turnkey solution to Crawfordwise by implementing custom design with Wordpress along with optimized SEO which empowers small businesses to take consultancy services through this platform.</p>

                                <div className="mt2rem">
                                    <ul className="row techRows nomargin">
                                        <li>
                                            <div className="techIcons">
                                                <i className="icon-icon_bulb sbrandone"></i>
                                            </div>
                                            <div>
                                                <p>Technologies</p>
                                                <h3>Wordpress</h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="techIcons">
                                                <i className="icon-icon_webmob sbrandtwo"></i>
                                            </div>
                                            <div>
                                                <p>Built for</p>
                                                <h3>Web & Mobile</h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="techIcons">
                                                <i className="icon-icon_industry sbrandthree"></i>
                                            </div>
                                            <div>
                                                <p>Industry</p>
                                                <h3>Consultancy</h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="techIcons">
                                                <i className="zmdi zmdi-globe sbrandfour"></i>
                                            </div>
                                            <div>
                                                <p>Country</p>
                                                <h3>United Kingdom</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relatePos">
                        <div className="rellax parallax-elem-1" data-rellax-percentage="0.1" data-rellax-speed="-3">
                            <ImageView src={icon1} alt="Image" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="row relatePos nomargin">
                            <div className="col-md-11 nopadding text-center crawImg">
                                <ImageView src={icon2} alt="macbook" />
                            </div>
                        </div>
                    </div>

                    <div className="mt2rem">
                        <div className="container">
                            <div className="row nomargin featuresDiv">

                                <div className="col-md-12 smp0">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-5 shadeFeature">
                                            <div>
                                                <div className="titleDiv">
                                                    <h1 className="nomargin">Features</h1>
                                                </div>
                                                <ImageView className="mouseImg" src={icon3} alt="mouse" />
                                            </div>
                                            <ul>
                                                <li>Mega Menu implementation</li>
                                                <li>Video embedded using HTML5</li>
                                                <li>Customized jQuery for One Page scroll</li>
                                                <li>Bootstrap Tooltip implementation</li>
                                                <li>Integration of Comment Validation</li>
                                                <li>Embedded Google Map in iframe</li>
                                                <li>Logo Showcase Slider integration</li>
                                                <li>Integrated Contact form 7</li>
                                                <li>Social Media Integration</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-1"></div>

                                        <div className="col-md-6 col-lg-6 pl60">
                                            <div className="titleDiv text-center mt2rem mb2rem">
                                                <h1 className="nomargin">Services</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon4} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Infrastructure Services</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon5} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>VoIP Services</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon6} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Development Services for<br />
                  Automation & Mobile Apps</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon7} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Cyber Security</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon8} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Collaboration Services</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon9} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Business Continuity &<br />Disaster Recovery Management</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon10} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Desktop Support</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon11} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Recruitment Services</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon12} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Solutions Design</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon13} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Virtualisation & Cloud Hosting</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon14} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Offshore resources</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 flexDiv">
                                                    <div>
                                                        <ImageView src={icon15} alt="service" />
                                                    </div>
                                                    <div>
                                                        <p>Virtual & Temporary Staffing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="strangeBg">
                        <div className="row">
                            <div className="col-md-5 nopadding">
                                <div className="goodWill rellax relPos1" data-rellax-percentage="0.1" data-rellax-speed="-3">
                                    <div className="leftTop">
                                        <div className="titleDiv">
                                            <h1><span className="bold">Services</span><br /><span className="fw600">Provided</span> <span className="fw300">by</span><br /><span className="textPink"><b>Cmarix</b></span></h1>
                                        </div>
                                    </div>
                                    <div className="middleTop">
                                        <ul>
                                            <li>Custom Design Creation</li>
                                            <li>Responsive HTML Implementation</li>
                                            <li>Wordpress Website development</li>
                                            <li>Quality Assurance</li>
                                            <li>Deployment</li>
                                            <li>Company Brochure & branding material</li>
                                            <li>Digital Marketing Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 workFlow">
                                <div className="titleDiv">
                                    <h1>Work Process</h1>
                                </div>

                                <div className="largeHidem">
                                    <ImageView src={icon16} alt="flow" />
                                </div>
                                <div className="process">
                                    <div className="texts">
                                        <h4>MEETING</h4>
                                        <p>“Arrange a meeting with us at you convenience”.</p>
                                    </div>

                                    <div className="texts">
                                        <h4>Planning</h4>
                                        <p>Let us work together to create a service that serves your business needs</p>
                                    </div>

                                    <div className="texts">
                                        <h4>Execution</h4>
                                        <p>Let us create a technology keeping you "in-the-loop" during all phases of the work lifecycle</p>
                                    </div>

                                    <div className="texts">
                                        <h4>Delivery</h4>
                                        <p>Partnering to transition over to the new provision</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mouseDiv">
                        <ImageView src={icon17} alt="mouse" />
                    </div>

                    <div className="imgDiv">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <ImageView className="relatePos" src={icon18} alt="mouse" />
                                </div>
                                <div className="col-md-4 text-center">
                                    <ImageView src={icon19} alt="mouse" />
                                </div>
                                <div className="col-md-12 text-right">
                                    <ImageView className="altImg" src={icon20} alt="mouse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row nomargin techSpecs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="titleDiv">
                                        <h1 className="relatePos">TechSpecs<span className="shaded">TechSpecs</span></h1>
                                    </div>
                                </div>

                                <div className="col-md-4 getPadding">
                                    <div>
                                        <p><strong>Technology:</strong> Wordpress 4.6.1</p>
                                        <p><strong>Development area:</strong> PHP</p>
                                        <p><strong>Database:</strong> MySQL1</p>
                                        <p><strong>SEO Tool:</strong> Yoast SEO</p>
                                    </div>
                                </div>

                                <div className="col-md-4 getPadding nopPadding">
                                    <p><strong>Third Party Library & Plugin:</strong></p>
                                    <ul>
                                        <li>Advanced Custom Fields</li>
                                        <li>Max Mega Menu</li>
                                        <li>Instant Comment Validation</li>
                                        <li>WP Logo Showcase Responsive Slider</li>
                                        <li>Contact Form 7</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Crawfordwise;