import React from "react";
import "./confidential.scss";
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
                <div className="cmr-company confidentail">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">CONFIDENTIAL</div>
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
                                                We are Highly
                                                <br />
                                                <span>CONFIDENTIAL</span>
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
                                    Confidentiality Is Our Topmost Priority
                                </h2>
                            </div>
                            <div className="sec-description">
                                <div className="sr-from-bottom-4">
                                    <p>
                                    Software product development includes tangible as well as intangible assets, strategies and communication whereby confidentiality is most important. We are a 100% technology service company which means whatever work we do, our client has complete ownership of the source code as well as Intellectual Property (IP) rights. </p>
                                    <p>
                                        At <b>CMARIX</b>, we do a lot of work with agencies, entrepreneurs, start-ups and enterprises across the globe who subcontract their work to us. We have core Governance, Risk Management and Compliances in place to ensure we safeguard our customer’s best interest and provide complete confidentiality.
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
                                                        <span>NON DISCLOSURE AGREEMENT</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <div className="slide-detail">
                                                        <ul className="model_characteristics mb-3">
                                                            <li>As part of the standard recruitment process, CMARIX employees sign standard Non Disclosure agreements on a legal basis Government of India stamp paper. Based on this they cannot disclose any proprietary information directly or indirectly to anyone outside the project team or company, or use, copy, publish, summarize or remove such information from the company premises.</li>
                                                            <li>Any information received by employees while working from clients or third parties are held in strictest confidence and are not allowed disclosing or using it.</li>
                                                            <li>As a company, we sign NDA with our customers as well as our employees, thereby safeguarding our customer’s best interest.</li>
                                                        </ul>
                                                    </div>
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
                                                        <span>TECHNOLOGY SECURITY</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <div className="slide-detail">
                                                        <ul className="model_characteristics mb-3">
                                                            <li>CISCO Firewalls and switches</li>
                                                            <li>PCI Data Security Standards</li>
                                                            <li>Latest AntiVirus in all Workstations</li>
                                                            <li>Licensed Antivirus, Anti malware, Anti ransomware softwares</li>
                                                            <li>Regular Monitoring and logging</li>
                                                            <li>Software and Security audits</li>
                                                            <li>Authorized IP access in network</li>
                                                            <li>Encrypted Data transfer</li>
                                                            <li>RAID (Redundant Backup of Information Disks)</li>
                                                        </ul>
                                                    </div>
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
                                                        <span>INFRASTRUCTURE SECURITY</span>
                                                    </p>
                                                </div>
                                                <div className="slide-plate sr-from-bottom-3">
                                                    <div className="spriteOne slide-number slide-act-one"></div>
                                                    <div className="slide-detail">
                                                        <ul className="model_characteristics mb-3">
                                                            <li>24 x 7 CCTV for safety and security</li>
                                                            <li>Biometric security system for authorized entry</li>
                                                            <li>Fire and BMS Alarm</li>
                                                            <li>Authorized entry only using valid Identification card</li>
                                                            <li>Certified Security Personnel</li>
                                                            <li>Backup Generator and UPS</li>
                                                        </ul>
                                                    </div>
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