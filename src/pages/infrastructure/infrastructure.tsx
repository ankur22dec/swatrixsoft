import React from "react";
import "./infrastructure.scss";
import VisibilitySensor from 'react-visibility-sensor';
import ImageView from "../../components/ImageView";
import oAmbience from '../../assets/images/elements/collage.png';
import data from '../../constants/infrastructure';
import { Link } from "react-router-dom";
import TechnologyTabView from "../../components/technologyTab/technologyTab";

class Infrastructure extends React.Component {
    scrollRef: any = "";
    state = {
        onScrollClass: "",
    };
    // componentWillMount() {
    // }

    componentDidMount() {
        let windowObj: any = window;
        windowObj.helloTest();
    }

    handleSlideChange() {}

    goTo = () => {
        window.scrollTo({
            behavior: "smooth",
            top: this.scrollRef.offsetTop
        });
    }

    render() {
        return (
            <>
                <div className="cmr-careers cmr-infra">
                    <div className="inner-top-header banner-without-image team-page">
                        <div className="container">
                            <div className="cmr-reflectors">INFRASTRUCTURE</div>
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
                                                Infrastructure
                                                <br />
                                                <span>@CMARIX</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq pt-60">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">Flexibility at its pace</span>
                            <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                            “Modernizing and facilitating teams with high-tech advancing infrastructure powerhouse is always top priority considering the type of data rich, performance driven, security centric enterprise grade platforms we deliver.”
                            </h3>
                        </div>
                        <div className="sec-description mt-0">
                            <div>
                                <p className="medium_fontsize sr-from-bottom-3">
                                An essential goal for swatrixsoft is sustainable growth, aggravating at a pace with smooth operations, whether for their clients or their internal team. To walk parallely with this goal, we provide a culture with high secured IT space. Our premium IT infrastructure focuses on maintaining agile infrastructure, availing the top facilities of cloud computing and latest hardwares and software. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-perks cmr-tw-adv">
                        <div>

                            <div className="tw-lefter">
                                <div className="right-slant">
                                    <VisibilitySensor
                                        partialVisibility={true}
                                        onChange={(e) => {
                                            if (e) {
                                                if (!this.state.onScrollClass) {
                                                    this.setState({
                                                        onScrollClass: 'in-view'
                                                    })
                                                }
                                            }
                                        }}
                                    >
                                        <div className={`anmtn-element ${this.state.onScrollClass}`}>
                                            <div className="animated-cuts-right">
                                                <div className="right-bg"></div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7">
                                            <div className="col-md-12 p-0">
                                                <div className="sec-title sr-from-bottom">
                                                    <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                                    <h2 className="sr-from-bottom-2">
                                                        Our <span>Office </span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="row multiple-infraplates">
                                                <div className="infraplates">
                                                    <div>
                                                        <h6>Area</h6>
                                                        <p>13000 sqft.</p>
                                                    </div>
                                                </div>
                                                <div className="infraplates">
                                                    <div>
                                                        <h6>Strength</h6>
                                                        <p>170+ CMARIANs</p>
                                                    </div>
                                                </div>
                                                <div className="infraplates">
                                                    <div>
                                                        <h6>Expandable Capacity</h6>
                                                        <p>250+</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="model_characteristics">
                                                <li>Over 13,000 Sq. Ft of state-of-the-art development center</li>
                                                <li>Currently housing team of 170+ CMARIans</li>
                                                <li>Expandable capacity of 250+ employees</li>
                                                <li>Open seating for cross team collaboration</li>
                                                <li>Green energy conservation systems</li>
                                                <li>24 x 7 Power through Torrent (private electric provider)</li>
                                                <li>Backup Power via UPS and Generators</li>
                                                <li>2000 Sq. Ft of recreation and gaming area</li>
                                                <li>Additional 10,000 Sq. Ft+ of scalable office infrastructure</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-5 text-center sr-from-bottom-3">
                                            <div className="rellimage advanone">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-righter">
                                <div className="left-slant">
                                    <VisibilitySensor
                                        partialVisibility={true}
                                        onChange={(e) => {
                                            if (e) {
                                                if (!this.state.onScrollClass) {
                                                    this.setState({
                                                        onScrollClass: 'in-view'
                                                    })
                                                }
                                            }
                                        }}
                                    >
                                        <div className={`anmtn-element ${this.state.onScrollClass}`}>
                                            <div className="animated-cuts-left">
                                                <div className="left-bg"></div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>
                                </div>
                                <div className="container">
                                    <div className="row m-0">
                                        <div className="col-sm-6 text-center sr-from-bottom-1">
                                            <div className="rellimage ml-0 security-surveillance">
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-md-12 p-0">
                                                <div className="sec-title sr-from-bottom">
                                                    <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                                    <h3 className="sr-from-bottom-2">
                                                        <span>Security & Surveillance</span>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="infraplates">
                                                <ul className="model_characteristics mt-0">
                                                    <li>High Definition CCTV Surveillance</li>
                                                    <li>Biometric Access control (COSEC PATH DCFx)</li>
                                                    <li>Certified Security Personnel</li>
                                                    <li>SVN Implementation</li>
                                                    <li>Disaster recovery provision</li>
                                                    <li>Advanced software for monitoring servers</li>
                                                    <li>RAID (redundant array of independent disks)</li>
                                                    <li>NagiOS to monitor servers and applications</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-lefter">
                                <div className="right-slant">
                                    <VisibilitySensor
                                        partialVisibility={true}
                                        onChange={(e) => {
                                            if (e) {
                                                if (!this.state.onScrollClass) {
                                                    this.setState({
                                                        onScrollClass: 'in-view'
                                                    })
                                                }
                                            }
                                        }}
                                    >
                                        <div className={`anmtn-element ${this.state.onScrollClass}`}>
                                            <div className="animated-cuts-right">
                                                <div className="right-bg"></div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7">
                                            <div className="col-md-12 p-0">
                                                <div className="sec-title sr-from-bottom">
                                                    <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                                    <h3 className="sr-from-bottom-2">
                                                        <span>Devices</span>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row multiple-infraplates">
                                                <div className="infraplates">
                                                    <div>
                                                        <h6>Smartphones</h6>
                                                        <p>50+ <span>in all OS</span></p>
                                                    </div>
                                                </div>
                                                <div className="infraplates">
                                                    <div>
                                                        <h6>Tablets</h6>
                                                        <p>15+ <span>in all OS</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="model_characteristics">
                                                <li>Intel i7, i9 processor based high speed Desktops</li>
                                                <li>iMac Pro, iMac, Macbook</li>
                                                <li>50+ Smartphones across different OS</li>
                                                <li>15+ different tablets across different OS</li>
                                                <li>Samsung Gear VR, Oculus Rift, Smart TVs and more</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-5 text-center sr-from-bottom-3">
                                            <div className="rellimage devices">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-righter">
                                <div className="left-slant">
                                    <VisibilitySensor
                                        partialVisibility={true}
                                        onChange={(e) => {
                                            if (e) {
                                                if (!this.state.onScrollClass) {
                                                    this.setState({
                                                        onScrollClass: 'in-view'
                                                    })
                                                }
                                            }
                                        }}
                                    >
                                        <div className={`anmtn-element ${this.state.onScrollClass}`}>
                                            <div className="animated-cuts-left">
                                                <div className="left-bg"></div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>
                                </div>
                                <div className="container">
                                    <div className="row m-0">
                                        <div className="col-sm-6 text-center sr-from-bottom-1">
                                            <div className="rellimage ml-0 network-server">
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-md-12 p-0">
                                                <div className="sec-title sr-from-bottom">
                                                    <p className="sr-from-bottom-1"><span>Take a look at</span></p>
                                                    <h3 className="sr-from-bottom-2">
                                                        <span>Networks & Servers</span>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="infraplates">
                                                <ul className="model_characteristics mt-0">
                                                    <li>Cisco Firewall  4100 Series</li>
                                                    <li>Cisco Catalyst  3750-X Series Switches</li>
                                                    <li>CAT6 Network Cables</li>
                                                    <li>IBM System x3550 M4</li>
                                                    <li>Amazon Cloud Infrastructure</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="awards mt-50">
                                <div className="container">
                                    <div className="award_title text-center">
                                        <div className="award_title_inner centerdir sr-from-bottom-1">
                                            <div className="award_section_icon">
                                                <div className="cmr-tech-part">
                                                    <div className="cmr-tech-xicon red-bg ml-auto mr-auto">
                                                        <div className="spriteOne spt-mobile-tech ranked-icon different-certificate"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>
                                                <span>Our Ambience</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ImageView src={oAmbience} alt="waves" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TechnologyTabView technologyStopTitle="All about our" />
                    {/*Start project section */}
                   <div className="start_project pb-100">
                        <div className="container">
                        <div className="hire_developer_orange sr-from-bottom-1">
                            <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                                <div className="hire_left">
                                <h4>{data.cardLabel}</h4>
                                <h3>{data.cardTitle}</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                                <div className="hire_right">
                                <Link to="/inquiry.html">
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                    {data.cardButton}
                                    <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                                <div className="rings">
                                    <div className="ring_inner">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">We Assure You</span>
                            <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                                {data.weAre}
                            </h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Infrastructure;