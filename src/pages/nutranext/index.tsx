import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon2 from "../../assets/images/casestudy/nutranext/macbook.png";
import icon3 from "../../assets/images/casestudy/nutranext/icons.png";
import icon4 from "../../assets/images/casestudy/nutranext/fruitsbg.png";
import icon5 from "../../assets/images/casestudy/nutranext/tree.png";
import icon6 from "../../assets/images/casestudy/nutranext/ss1.png";
import icon7 from "../../assets/images/casestudy/nutranext/ss2.png";
import icon8 from "../../assets/images/casestudy/nutranext/ss3.png";
import icon9 from "../../assets/images/casestudy/nutranext/leaves.png";
import icon10 from "../../assets/images/casestudy/nutranext/muscle.png";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";

class Nutranext extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script>
                    <meta property="og:image" content={`https://www.cmarix.com${icon2}`} />
                </Helmet>
                <div className="hire-automated-tester">
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
                                            <span>NUTRANEXT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nutraCase">
                    <ImageView src={cmarixLine} alt="Cmarix-line" className="mtmin6 h15px" />
                    <div className="nutra_bg">
                        <p className="container tagText"><strong>NUTRANEXT<sup>TM</sup></strong> is a leading GMP-certified manufacturer with 30 years of leadership in suppliment manufacturing, packaging and marketing of nutritional products needed at different stages and different lifestyles. Nutranext is committed to the highest standards of product quality,  purity testing, sustainability practices and corporate by giving programs including corporate social responsibility to help foster a vibrant state of health in families around the globe.</p>

                        <div className="">
                            <div className="row nomargin">
                                <div className="container flPad">
                                    <div className="row">
                                        <div className="col-md-4 disFlex">
                                            <ul className="row techRows">
                                                <li>
                                                    <div className="techIcons">
                                                        <i className="icon-icon_bulb sbrandone"></i>
                                                    </div>
                                                    <div>
                                                        <p>Technologies</p>
                                                        <h3>Magento 2.x Enterprise</h3>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="techIcons">
                                                        <i className="icon-icon_webmob sbrandtwo"></i>
                                                    </div>
                                                    <div>
                                                        <p>Built for</p>
                                                        <h3>Web</h3>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="techIcons">
                                                        <i className="icon-icon_industry sbrandthree"></i>
                                                    </div>
                                                    <div>
                                                        <p>Industry</p>
                                                        <h3>Healthcare & Wellness</h3>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="techIcons">
                                                        <i className="zmdi zmdi-globe sbrandfour"></i>
                                                    </div>
                                                    <div>
                                                        <p>Country</p>
                                                        <h3>United States</h3>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-8">
                                            <ImageView src={icon2} alt="max" className="leftMac" width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="curvyBg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <p className="fs18">
                                        <b>CMARIX</b> has contributed to the vision of the company by creating a Magento Enterprise Multistore eCommerce platform with Authorized.Net CIM Integration for NUTRANEXT<sup>TM</sup> facilitating the global reach and sale of the nutritional products with a swift buying process & optinium user engagement.
				                    </p>
                                </div>

                                <div className="col-md-2 text-center">
                                    <ImageView src={icon3} alt="icons" className="mw170" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="featuresDiv">
                        <div className="row">
                            <div className="col-md-8 nopadding">
                                <div className="backShad">
                                    <div className="fruites">
                                        <ImageView src={icon4} alt="fruit" className="relPos1 rellax" />
                                    </div>
                                    <div className="fruitsBg">
                                        <div className="titleDiv">
                                            <h1 className="nomargin">Features</h1>
                                        </div>
                                        <ul className="noDisc">
                                            <li>Magento Enterprise Multistore Implementation</li>
                                            <li>SAP Integration</li>
                                            <li>Authorize.Net CIM Integration</li>
                                            <li>Enhanced Fraud Detection </li>
                                            <li>Several Third-party integration like Xtento Order Export, Stock Import<br />,Tracking Import </li>
                                            <li>DocuSign API Integration</li>
                                            <li>Ultimate fallback Search functionality via Global Search</li>
                                            <li>Complete PCI Compliance </li>
                                            <li>Automated Deployment Processes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 hideSmall">
                                <ImageView src={icon5} alt="tree" className="relPos rellax" />
                            </div>
                        </div>
                    </div>

                    <div className="ssBg">
                        <div className="text-center ssOne">
                            <ImageView src={icon6} alt="screen" />
                        </div>
                        <div className="text-right ssTwo">
                            <ImageView src={icon7} alt="screen" />
                        </div>
                        <div className="text-right ssThree">
                            <ImageView src={icon8} alt="screen" />
                        </div>
                        <div className="text-right botLeaves">
                            <ImageView src={icon9} alt="leaves" />
                        </div>
                    </div>

                    <div className="techBlack">
                        <div className="container">
                            <div className="titleDiv">
                                <h1>Tech Specs</h1>
                            </div>

                            <div className="titleDiv slantDiv">
                                <h1>Tech Specs</h1>
                            </div>

                            <ul className="row techSpecs">

                                <li className="col-sm-6 col-lg-4">
                                    <div>
                                        <h3>Development Environment</h3>
                                        <ul className="propUl">
                                            <li>PHP Version 7.0</li>
                                            <li>Magento Enterprise 2.1.7</li>
                                            <li>Zend Op catch</li>
                                            <li>Redis 3.0</li>
                                            <li>FPC</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3>Database</h3>
                                        <ul className="propUl">
                                            <li>MySql 5.6</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="col-sm-6 col-lg-4">
                                    <div>
                                        <h3>Server Monitoring Tools</h3>
                                        <ul className="propUl">
                                            <li>NewRelic</li>
                                            <li>Dynatrace</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3>Third Party Library & Tools</h3>
                                        <ul className="propUl">
                                            <li>Varnish 4.0</li>
                                            <li>ElasticSearch 2.0</li>
                                            <li>Require.JS</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="col-sm-6 col-lg-4">
                                    <div>
                                        <h3>APIs</h3>
                                        <ul className="propUl">
                                            <li>DocuSign API</li>
                                            <li>Authorize.Net CIM API</li>
                                        </ul>
                                    </div>

                                    <div className="muscleDiv">
                                        <ImageView src={icon10} alt="muscle" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Nutranext;