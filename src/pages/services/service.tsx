import React from 'react';
import expertIcon from '../../assets/images/inner-icons/service/experts.svg';
import experienceIcon from '../../assets/images/inner-icons/service/experience.svg';
import projectsIcon from '../../assets/images/inner-icons/service/projects.svg';
import mobilePro from '../../assets/images/inner-icons/service/mobile-projects.svg';
import ImageView from '../../components/ImageView/index';
import VisibilitySensor from 'react-visibility-sensor';
import pointerDe from '../../assets/images/pointer-de.svg';
import serviceJson from '../../constants/service';
import ContactForm from '../../components/ContactForm/contactForm';
import TechnologyTabView from '../../components/technologyTab/technologyTab';
import RelatedService from '../../components/relatedService/relatedService';
import DevelopmentService from '../../components/developmentServices/developmentService';
import HtmlParser from '../../components/htmlParser/htmlParser';
import './service.scss';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import CaseStudies from '../../components/CaseStudies/caseStudies';
import BlogSection from '../../components/BlogSection/blogSection';
import { Helmet } from 'react-helmet';


class Service extends React.Component<any, any> {
    scrollRef: any = ""
    state = {
        onScrollClass: ''
    }
    // componentWillMount() {
    //     // const script = document.createElement("script");
    //     // script.src = "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    //     // script.async = true;
    //     // document.body.appendChild(script);
    // }
    componentDidMount() {
        let windowObj: any = window;
        windowObj.helloTest();
    }

    goTo = () => {
        window.scrollTo({
            behavior: "smooth",
            top: this.scrollRef.offsetTop
        });
    }

    render() {
        const data: any = serviceJson.find((x) => window.location.pathname.includes(x.routeName));
        return (
            <>  
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
                </Helmet>
                <div className={data.className}>
                    <div className="inner-top-header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="inner-left">
                                        <div className="inner-head-title sr-from-bottom content__paragraph" data-splitting>
                                            <h1>
                                                <span>{data.name}</span><br />
                                                {
                                                    data.className !== 'seo-smo-solution'
                                                        && data.className !== 'software-testing-solution'
                                                        && data.className !== 'support-maintenance-solution'
                                                        && data.className !== 'mobile-testing-solution'
                                                        && data.className !== 'content-marketing-solution'
                                                        && data.className !== 'smm-marketing'
                                                        && data.className !== 'shipping-integration-solution'
                                                        && data.className !== 'payment-integration-solution'
                                                        && data.className !== 'social-networking-solution'
                                                        && data.className !== 'design-prototyping-services' ? (
                                                            <React.Fragment>
                                                                Development
                                                            </React.Fragment>
                                                        ) : ''
                                                }
                                            </h1>
                                        </div>
                                        <div className="inner-about sr-from-bottom-1">
                                            <HtmlParser html={data.description} />
                                        </div>
                                        <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                            Inquire Now <i className="icon-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : data.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">
                                {data.missionLabel}
                            </span>
                            <h3 className="sr-from-bottom-2">
                                {data.missionTitle}
                            </h3>
                        </div>
                        <div className="sec-description">
                            <div className="sec-desc-title sr-from-bottom-3">
                                <h6>{data.whatIs || "We Help You Win"}</h6>
                            </div>
                            <div>
                                <div className="sr-from-bottom-4">
                                    <HtmlParser html={data.missionDescription} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insideedge">
                        <div className="container mt-5">
                            <div className="cmr-reflectors">
                                SERVICES
                            </div>
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-5">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1"><span>{data.serviceLabel}</span></p>
                                        <h2 className="sr-from-bottom-2">
                                            {
                                                ((data.className === 'magento-ecommerce-development-services' 
                                                || data.className === 'angular-development-services-india') 
                                                && <React.Fragment>Best</React.Fragment>)
                                            } {data.name}
                                                <br />
                                            {
                                            data.className === 'react-native-application-development-services' &&
                                                <React.Fragment>App </React.Fragment>}
                                            {
                                                data.className !== 'seo-smo-solution'
                                                    && data.className !== 'shipping-integration-solution'
                                                    && data.className !== 'payment-integration-solution'
                                                    && data.className !== 'smm-marketing-solution'
                                                    && data.className !== 'mobile-testing-solution'
                                                    && data.className !== 'content-marketing-solution'
                                                    && data.className !== 'smm-marketing'
                                                    && data.className !== 'shipping-integration-solution'
                                                    && data.className !== 'payment-integration-solution'
                                                    && data.className !== 'social-networking-solution'
                                                    && data.className !== 'responsive-website-design-services' ? (
                                                        <React.Fragment>
                                                            <span>Development</span><br />
                                                        </React.Fragment>
                                                    ) : ''
                                            }
                                            Services
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h4 className="right-tag-lines sr-from-bottom-3">
                                        <HtmlParser html={data.serviceDescription} />
                                    </h4>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <DevelopmentService services={data.services} />
                            </div>
                            <div className="mt-4 sr-from-bottom-8">
                                <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                                    Inquire Now <i className="icon-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`anmtn-element ${this.state.onScrollClass}`}>
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
                            <div className="service-stats animated-cuts-left">
                                <div className="sec-title text-center">
                                    <p><span>{data.expertLabel}</span></p>
                                    <h3>
                                        {data.expertTitle}
                                    </h3>
                                </div>
                                <div className="left-cq"></div>
                                <div className="right-cq"></div>
                                <div className="cmr-reflectors">
                                    STATS
                                </div>
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-sm-6 col-lg-3 col-6">
                                            <div className="stat-icon">
                                                <ImageView src={expertIcon} alt="expertIcon" />
                                            </div>
                                            <div className="stat-details">
                                                <h4>{data.expertCount}+</h4>
                                                <p>{data.countTitle}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3 col-6">
                                            <div className="stat-icon">
                                                <ImageView src={experienceIcon} alt="experienceIcon" />
                                            </div>
                                            <div className="stat-details">
                                                <h4>{data.experience}+</h4>
                                                <p>{data.experienceTitle}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3 col-6">
                                            <div className="stat-icon">
                                                <ImageView src={projectsIcon} alt="projectsIcon" />
                                            </div>
                                            <div className="stat-details">
                                                <h4>{data.projectCount}+</h4>
                                                <p>{data.projectCountTitle}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3 col-6">
                                            <div className="stat-icon">
                                                <ImageView src={mobilePro} alt="mobilePro" />
                                            </div>
                                            <div className="stat-details">
                                                <h4>{data.customSoftwareSolution}+</h4>
                                                <p>{data.customSoftwareTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>

                    {
                        (data.routeName !== 'software-testing.html' &&
                            data.routeName !== 'support-maintenance.html' &&
                            data.routeName !== 'mobile-testing.html' &&
                            data.routeName !== 'content-marketing.html' &&
                            data.routeName !== 'search-engine-optimization.html' &&
                            data.routeName !== 'social-media-marketing.html'
                        ) ?
                            <div className="container mini-container mt-5 after-numberical-section">
                                <div className="sec-tag-lines">
                                    <span className="sr-from-bottom-1">
                                        {data.missionLabelTwo}
                                    </span>
                                    <h3 className="sr-from-bottom-2">
                                        {data.missionTitleTwo}
                                    </h3>
                                </div>

                                <div className="sec-description mt-3 sr-from-bottom-3">
                                    <div>
                                        <HtmlParser html={data.missionDescriptionTwo} />
                                    </div>
                                </div>
                            </div>
                            : ''
                    }

                    {
                        (data.routeName !== 'software-testing.html' &&
                            data.routeName !== 'support-maintenance.html' &&
                            data.routeName !== 'mobile-testing.html') ?
                            <div className="cmr-query">
                                <div className="container mini-container">
                                    <div className="row align-items-center">
                                        <div className="query-title">
                                            <h4 className="right-tag-lines sr-from-bottom-4">
                                                <HtmlParser html={data.supportTitle} />
                                            </h4>
                                        </div>
                                        <div className="query-round sr-from-bottom-5">
                                            <img src={pointerDe} alt="pointer" className="brusher topdown" />
                                            <h5>Quick Support</h5>
                                            <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                                                {data.supportLabel} <i className="icon-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }

                    <div className="casestudy-swiper">
                        <CaseStudies
                            studies={data.caseStudies}
                            label={data.caseStudiesLabel}
                            title={data.caseStudiesTitle}
                            description={data.caseStudiesDescription} />
                    </div>

                    {
                        (data.routeName === 'software-testing.html' ||
                            data.routeName === 'support-maintenance.html' ||
                            data.routeName === 'mobile-testing.html') ?
                            <div className="cmr-query">
                                <div className="container mini-container">
                                    <div className="row align-items-center">
                                        <div className="query-title">
                                            <h4 className="right-tag-lines sr-from-bottom-4">
                                                <HtmlParser html={data.supportTitle} />
                                            </h4>
                                        </div>
                                        <div className="query-round sr-from-bottom-5">
                                            <img src={pointerDe} alt="pointer" className="brusher topdown" />
                                            <h5>Quick Support</h5>
                                            <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                                                {data.supportLabel} <i className="icon-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }

                    <TechnologyTabView technologyStopTitle="All about our"/>

                    <div className="container">
                        <div className="cmr-cta sr-from-bottom">
                            <div>
                                <h3>
                                    <HtmlParser html={data.cardLabel} />
                                    <span className="sr-from-bottom-2">
                                        <HtmlParser html={data.cardTitle} />
                                    </span>
                                </h3>
                            </div>
                            <div className="cta-btn sr-from-bottom-3">
                                <button onClick={() => this.goTo()} className="cmr-solid-btn-w get-center hvr-shutter-out-horizontal orange-section-hire-button">
                                    {data.cardButton} <i className="icon-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <RelatedService label={data.relatedServiceLable} title={data.relatedServiceTitle} services={data.relatedService} />
                    </div>

                    <div className="blog_section">
                        <div className="container">
                            <h4 className="our_blog_title sr-from-bottom-1">Our Blogs</h4>
                            <div className="blog_upper">
                                <div className="upper_left sr-from-bottom-2">
                                    <h3>
                                        <HtmlParser html={
                                            (data.blogsTitle) ? data.blogsTitle : 'We Have A Lot of <span>Experience</span> <br />(and Cautionary Tales) to <span>Write</span> About'
                                        } />
                                    </h3>
                                </div>
                                <div className="upper_right sr-from-bottom-2">
                                    <a rel="noopener noreferrer" className="view_all_blog" href="https://www.cmarix.com/blog" target="_blank">
                                        View All Blogs <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="blog_list">
                                <BlogSection />
                            </div>
                        </div>

                    </div>

                    <div ref={(ref) => this.scrollRef = ref}>
                        <ContactForm title={data.contactFormLabel} description={data.contactFormDetailTitle} />
                    </div>

                </div>
            </>
        )
    }
}

export default Service;