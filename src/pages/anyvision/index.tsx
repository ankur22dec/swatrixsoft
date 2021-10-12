import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon1 from "../../assets/images/casestudy/anyvision/tech_icon.png";
import icon2 from "../../assets/images/casestudy/anyvision/web_mobile_icon.png";
import icon3 from "../../assets/images/casestudy/anyvision/industry_icon.png";
import icon4 from "../../assets/images/casestudy/anyvision/globe_icon.png";
import icon5 from "../../assets/images/casestudy/anyvision/id_card1.png";
import icon6 from "../../assets/images/casestudy/anyvision/id_card2.png";
import icon7 from "../../assets/images/casestudy/anyvision/diagram.jpg";
import icon8 from "../../assets/images/casestudy/anyvision/nav_img.png";
import icon9 from "../../assets/images/casestudy/anyvision/mac_img.png";
import icon10 from "../../assets/images/casestudy/anyvision/settings_screen1.jpg";
import icon11 from "../../assets/images/casestudy/anyvision/settings_screen2.png";
import icon12 from "../../assets/images/casestudy/anyvision/red_nav.png";
import icon13 from "../../assets/images/casestudy/anyvision/terrorist_img.svg";
import icon14 from "../../assets/images/casestudy/anyvision/criminal_img.svg";
import icon15 from "../../assets/images/casestudy/anyvision/missing_person.svg";
import icon16 from "../../assets/images/casestudy/anyvision/anyvision_screen1.jpg";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";


class Anyvision extends React.Component {


    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script>
                    <meta property="og:image" content={`https://www.cmarix.com${icon9}`} />
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
                                            <span>ANYVISION</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="anyVision-case-study">
                <ImageView src={cmarixLine} alt="Cmarix-line" className="mtmin15 h15px"/>
                    <div className="case_study_banner">
                        <section className="case_study_desc">
                            <div className="container">
                                <div className="desc-container">
                                    <p className="desc-txt">
                                        AnyVision is amongst the <span className="desc-highlight">world’s leading Face recognition technology company</span>, creating solutions for government agencies, private security agencies, public sector bodies like airports, state highways, retails and more.
                        </p>
                                    <p className="desc-txt">
                                        Crucial aspect of this Product is to use the real-time face detection technique and retrieve the information about the person from the criminal database with the help of the propriety algorithm aiding the security system to avoid the incidents of global terrorism, bank frauds and other illegal activities.
                        </p>
                                </div>
                            </div>
                        </section>
                        <section className="case_study_feature clearfix">
                            <div className="container">
                                <h2 className="section-title">Features </h2>
                                <div className="feature_left">
                                    <div className="feature_info">
                                        <ul className="nav feature_list">
                                            <li>Acquisition of standards-based on biometric portraits</li>
                                            <li>Propriety face detection algorithm usage for person matching, verification and identification</li>
                                            <li>Accurate portrait characteristics check for recognising the face geometry</li>
                                            <li>Powerful Real-time identification in video streams or footage</li>
                                            <li>Rapid comparison of the images to the existing databases</li>
                                            <li>Real-time signals on user-defined events occur</li>
                                            <li>Unsurpassed Accuracy & Matching Speed</li>
                                            <li>Reduce redundancy by duplicate personality check</li>
                                            <li>Strong background check of the prospective anti-social activists</li>
                                        </ul>
                                    </div>
                                    <ul className="nav nav-pills feature_highlight">
                                        <li className="feature_block feature_tech">
                                            <div className="feature_icon">
                                                <ImageView src={icon1} alt="Image" />
                                            </div>
                                            <div className="feature_desc">
                                                <p>Technologies</p>
                                                <p className="feature_name">ASP.Net MVC</p>
                                            </div>
                                        </li>
                                        <li className="feature_block feature_built">
                                            <div className="feature_icon">
                                                <ImageView src={icon2} alt="Image" />
                                            </div>
                                            <div className="feature_desc">
                                                <p>Built for</p>
                                                <p className="feature_name">Web & Mobile</p>
                                            </div>
                                        </li>
                                        <li className="feature_block feature_industry">
                                            <div className="feature_icon">
                                                <ImageView src={icon3} alt="Image" />
                                            </div>
                                            <div className="feature_desc">
                                                <p>Industry</p>
                                                <p className="feature_name">Security</p>
                                            </div>
                                        </li>
                                        <li className="feature_block feature_globe">
                                            <div className="feature_icon">
                                                <ImageView src={icon4} alt="Image" />
                                            </div>
                                            <div className="feature_desc">
                                                <p>Country</p>
                                                <p className="feature_name">Israel, Belgium, Germany & other parts of Europe </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature_right">
                                    <div className="id_img1">
                                        <ImageView src={icon5} alt="Image" className="img-responsive" />
                                    </div>
                                    <div className="id_img2">
                                        <ImageView src={icon6} alt="Image" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="case_study_screen clearfix">
                        <div className="screen_left">
                            <ImageView src={icon7} alt="Image" className="img-responsive" />

                            <div className="nav_img">
                                <ImageView src={icon8} alt="Image" className="img-responsive" />

                            </div>
                        </div>
                        <div className="screen_right">
                            <ImageView src={icon9} alt="Image" className="img-responsive" />

                        </div>
                    </section>
                    <section className="camera_permission">
                        <div className="setup_camera clearfix">
                            <h3 className="title_small"> Setup <span>camera</span> <p className="dianmond"></p></h3>
                            <ImageView src={icon10} alt="Image" className="img-responsive" />

                        </div>
                        <div className="permission clearfix">
                            <div className="permission_left">
                                <ImageView src={icon11} alt="Image" className="img-responsive" />

                                <div className="nav_block">

                                    <ImageView src={icon12} alt="Image" className="img-responsive" />
                                </div>
                            </div>
                            <h3 className="title_small"> Permissions <p className="dianmond"></p></h3>
                        </div>
                    </section>
                    <section className="clearfix screen_analysis">
                        <div className="analysis_imgs col-md-4">
                            <ImageView src={icon13} alt="Image" className="img-responsive" />
                            <ImageView src={icon14} alt="Image" className="img-responsive" />
                            <ImageView src={icon15} alt="Image" className="img-responsive" />



                        </div>
                        <div className="analysis_screen col-md-8">
                            <ImageView src={icon16} alt="Image" className="img-responsive" />

                        </div>
                    </section>
                    <footer className="case_study_footer">
                        <div className="footer_inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="section-title"> Tech <span>Specs</span> for <p>AnyVision</p></h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 footer_nav">
                                            <ul className="nav">
                                                <li>
                                                    SDK
                                        <ul className="sub_nav">
                                                        <li>
                                                            Emgu CV
                                            </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Development Environment
                                        <ul className="sub_nav">
                                                        <li>
                                                            ASP.Net MVC
                                            </li>
                                                        <li>
                                                            ASP.Net MVC
                                            </li>
                                                        <li>
                                                            Net Core
                                            </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Database
                                        <ul className="sub_nav">
                                                        <li>
                                                            MS SQL
                                            </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 footer_nav">
                                            <ul className="nav">
                                                <li>
                                                    Library
                                        <ul className="sub_nav">
                                                        <li>
                                                            Caffe
                                            </li>
                                                        <li>
                                                            Emgu CV
                      </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Plugins
                                        <ul className="sub_nav">
                                                        <li>
                                                            Highcharts JS
                                            </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Framework
                                        <ul className="sub_nav">
                                                        <li>
                                                            Entity Framework
                                            </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Anyvision;