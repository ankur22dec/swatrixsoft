import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon1 from "../../assets/images/casestudy/rogi/macbook.png";
import icon2 from "../../assets/images/casestudy/rogi/screens.png";
import icon3 from "../../assets/images/casestudy/rogi/mobile.png";
import icon4 from "../../assets/images/casestudy/rogi/mac1.png";
import icon5 from "../../assets/images/casestudy/rogi/screens1.png";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";


class Rogi extends React.Component {

    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script>
                    <meta property="og:image" content={`https://www.cmarix.com${icon1}`} />
                </Helmet>
                <div className="cmr-company">
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
                                            <span>ROGI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rogiCase">
                <ImageView src={cmarixLine} alt="Cmarix-line" className="mt2px h15px" />
                    <div className="rogi_bg">
                        <p className="container tagText"><strong>ROGI</strong> stands for Return on Gathering information is a task management product that empowers Company & it’s terms to be highly organized & extremely productive. ROGI has a facility to keep a track of everything you do for your client and stores it in one central location, accessible by Phone, Tablet or Desktop. With the help of this software you can track your clients, keeping your ‘To-Do-Lists’ updated sending email, following up with your client, and building a lifetime of value.</p>

                        <div className="">
                            <div className="container flPad">
                                <div className="row nomargin">
                                    <div className="col-md-4 disFlex">
                                        <ul className="row techRows">
                                            <li>
                                                <div className="techIcons">
                                                    <i className="icon-icon_bulb sbrandone"></i>
                                                </div>
                                                <div>
                                                    <p>Technologies</p>
                                                    <h3>iOS, Android, PHP Yii Framework</h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="techIcons">
                                                    <i className="icon-icon_webmob sbrandtwo"></i>
                                                </div>
                                                <div>
                                                    <p>Built for</p>
                                                    <h3>Web, Mobile & Tablets</h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="techIcons">
                                                    <i className="icon-icon_industry sbrandthree"></i>
                                                </div>
                                                <div>
                                                    <p>Industry</p>
                                                    <h3>IT & Software</h3>
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
                                        <ImageView src={icon1} alt="Image" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="curvyBg">
                        <div className="container">
                            <p className="fs22">
                                <b>CMARIX</b> has designed and developed this Task Management Solution with Salesforce & Authorize.net integration that automates the manual processes, helps to do business more efficiently saving time and improving workflows with consistent processes and quality Standard.
        </p>
                        </div>
                    </div>

                    <div className="blackBg">
                        <div className="container">
                            <div className="col-md-6 featuresDiv">
                                <div className="titleDiv">
                                    <h1>Features</h1>
                                </div>
                                <ul className="leftLink noDisc">
                                    <li>Salesforce Integration</li>
                                    <li>Authorize .Net Payment Gateway Integration</li>
                                    <li>Task Management</li>
                                    <li>Real-time Push Notification</li>
                                    <li>Assessment Report Generation</li>
                                    <li>Representation of Scores through HighCharts</li>
                                    <li>Social Media Integration</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <div className="rellax relPos screenDiv" data-rellax-percentage="0.1" data-rellax-speed="-1">
                                    <ImageView src={icon2} alt="Image" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wavesBg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <ImageView src={icon3} alt="Image" className="mobile rellax relPos img-responsive" />
                                </div>
                                <div className="col-md-8 text-center">
                                    <ImageView src={icon4} alt="Image" className="laptop img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blackBg1">
                        <div className="container">
                            <div className="col-md-6">
                                <div>
                                    <ImageView src={icon5} alt="Image" className="laptop img-responsive" />
                                </div>
                            </div>

                            <div className="col-md-6 featuresDiv tech">
                                <div className="titleDiv">
                                    <h1>TechSpecs</h1>
                                </div>

                                <div className="leftDiv leftLink2">
                                    <h4>Developement Environment</h4>
                                    <p>Web</p>
                                    <ul className="withDisc">
                                        <li>PHP 7.0 / 7.1</li>
                                        <li>Yii 2.0</li>
                                    </ul>

                                    <p>App</p>
                                    <ul className="withDisc">
                                        <li>Xcode 8.3.1</li>
                                        <li>Android Studio SDK 4.4</li>
                                    </ul>

                                    <h4>Database</h4>
                                    <ul className="withDisc">
                                        <li>SQLite</li>
                                        <li>MySQL</li>
                                    </ul>

                                    <h4>Third Party Tools</h4>
                                    <ul className="withDisc">
                                        <li>Authorize .Net Payment Gateway</li>
                                        <li>Salesforce</li>
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

export default Rogi;