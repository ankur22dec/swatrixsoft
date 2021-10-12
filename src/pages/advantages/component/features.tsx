import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class Features extends React.Component {
    state = {
        onScrollClass: "",
    };

    render() {
        return (
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
                        <div className="row m-0">
                            <div className="col-sm-6">
                                <div className="tw-plate tw-lg sr-from-bottom-1">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Certified Resources</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We have certified experts across different technologies like Magento, Microsoft, Zend, Drupal, AWS and many more. Our employees are engineers by formal education and many of them have postgraduate and doctorate degrees.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-plate tw-lg sr-from-bottom-2">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Quality Policy</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>
                                            High Quality is the most prominent benchmark for any software. We are an ISO 9001:2015 certified quality centric company and practically set high quality standards for any work which we do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center sr-from-bottom-3">
                                <div className="rellimage certified-resources leftrel">
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
                                <div className="rellimage advanone rightrel">
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="tw-plate tw-lg sr-from-bottom-2">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Infrastructure</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We have best-in-class technology infrastructure specially designed for enterprise grade productivity for our employees and luxurious recreation area as well. We have advanced hardware and softwares in place to ensure we provide faster throughput. We have scalable 13,000+ Sq. Ft of additional office space.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-plate tw-lg sr-from-bottom-3">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Competitive Pricing</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We provide very competitive pricing as compared to your local vendor and are upto 60% cost effective comparatively.</p>
                                        </div>
                                    </div>
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
                        <div className="row m-0">
                            <div className="col-sm-6">
                                <div className="tw-plate tw-lg sr-from-bottom-1">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Hybrid Model</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We provide local project management and offshore development services for our customers in North America, Europe, Australia, MiddleEast and Africa. We have Project Managers based out of the US, UK, Italy, Australia, Bahrain & Nigeria to facilitate Project Management locally and development takes place in India office.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-plate tw-lg sr-from-bottom-2">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Customer Centric</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We are a 100% customer centric organization. We understand the importance of quality service delivery and client satisfaction and go the extra mile to ensure we always have happy customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center sr-from-bottom-3">
                                <div className="rellimage customerCentric leftrel">
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
                                <div className="rellimage confidentiality rightrel">
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="tw-plate tw-lg sr-from-bottom-2">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Total Ownership</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We provide complete source code, third party selling rights as well as Intellectual Property rights to our customers. In other words you have complete ownership of the work done by us for you.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-plate tw-lg sr-from-bottom-3">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Confidentiality and Security</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We follow ISO 27001 security standards in terms of confidentiality and IP security. We have legal contractual agreements with all our employees safeguarding client’s business interests.</p>
                                        </div>
                                    </div>
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
                        <div className="row m-0">
                            <div className="col-sm-6">
                                <div className="tw-plate tw-lg sr-from-bottom-1">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Turnkey Services</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>We are a one stop solution company whether you are looking to have design, development, testing or deployment services related to Mobile App, Web platform or Enterprise product. We also provide Digital Marketing Services. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-plate tw-lg sr-from-bottom-2">
                                    <div className="cmr-tip-des">
                                        <div className="spriteOne"></div>
                                        <p className="cmr-point mt-3">
                                            <span>Stability</span>
                                        </p>
                                    </div>
                                    <div className="slide-plate">
                                        <div className="spriteOne slide-number slide-act-one"></div>
                                        <div className="slide-detail">
                                            <p>Having established since 2009 we are very financially stable company adhering to all compliances and regulations of the Ministry of Corporate Affairs, India Government. We are totally self funding and reinvesting continuously in our business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center sr-from-bottom-3">
                                <div className="rellimage stability leftrel">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
} 

export default Features;
