import React from 'react';
import './top-hierarchy.scss';
import codingIcon from "../../assets/images/coding.svg";
import ImageView from '../../components/ImageView';
import serviceMainJson from '../../constants/serviceMain';
import AppDevelopmentService from './component/appDevelopmentService';
import WeProvide from '../../components/weProvide/weProvide';
import EngageStep from '../../components/engageStep/engageStep';
import waves from '../../assets/images/inner-top/waves.svg';
import DomainExpert from '../../components/domainExpert/domainExpert';
import HtmlParser from '../../components/htmlParser/htmlParser';
import { Link } from 'react-router-dom';
import TechnologyTabView from '../../components/technologyTab/technologyTab';
import CaseStudies from '../../components/CaseStudies/caseStudies';
import { Helmet } from 'react-helmet';

class TopHierarchy extends React.Component<any, any> {
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

    render() {
        // const
        const data: any = serviceMainJson.find((x) => window.location.pathname.includes(x.routeName));
        // const data = serviceMainJson[0];
        return (
            <>
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
                </Helmet>
                <div className="mobile-top-hierarchy solution-main-pages">
                    <div className="inner-top-header hire-developers">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-md-7">
                                    <div className="inner-left">
                                        <div
                                            className="inner-head-title sr-from-bottom"
                                            data-splitting>

                                            <div className="banner-pattern">
                                                <div className="pattern_inner">
                                                    <span></span>
                                                    <div className="line line1"></div>
                                                    <div className="line line2"></div>
                                                    <div className="line line3"></div>
                                                </div>
                                            </div>
                                            <h1>
                                                <HtmlParser html={data.title} />
                                            </h1>
                                        </div>
                                        <p className="inner-about sr-from-bottom-1">
                                            <HtmlParser html=
                                                {data.description}
                                            />
                                        </p>
                                        <Link to="/inquiry.html">
                                            <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                                Hire Now <i className="icon-arrow-down"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right sr-from-bottom-2 row align-items-end justify-content-center bottom-overlap-image">
                                    <div className="inner-right ">
                                        <ImageView src={data.image} alt="startupIcon" />
                                        <div className="at-bottom-stats">
                                            <div className="stat-inner-div">
                                                <span className="at-before-tip sr-from-bottom-3">{data.typeOfDevelopment}</span>
                                                <span className="top-banner-stats sr-from-bottom-4">{data.appCount} <span>{data.whatDeveloped}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mini-container pt-60 pb-100 left-sq">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">{data.missionLabel}</span>
                            <h3 className="sr-from-bottom-2">
                                {data.missionTitle}
                            </h3>
                        </div>

                        <div className="sec-description sr-from-bottom-3 mt-1">
                            <div>
                                <div className="sr-from-bottom-4">
                                    <HtmlParser html={data.missionDescription} />
                                </div>
                            </div>
                        </div>

                        <div className="stat-plates sr-from-bottom-5">
                            <div className="mini-plate">
                                <ImageView src={codingIcon} alt="coding" />
                            </div>

                            <div className="max-plate">
                                <span className="app-count">{data.appCount}</span>
                                <p>{data.whatDeveloped}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container mini-container">
                            <div className="row mb-2 align-items-center">
                                <div className="col-md-12">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1"><span>{data.serviceLabel}</span></p>
                                        <h2 className="sr-from-bottom-2">
                                            <HtmlParser html={data.serviceTitle} />
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cmr-app-services">
                            <AppDevelopmentService services={data.developmentService} />
                        </div>
                    </div>

                    <div className={"cmr-what-we " + (data.pageClass ? data.pageClass : '')}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1">
                                            <span>{data.provideLabel}</span>
                                        </p>
                                        <h3 className="sr-from-bottom-2">
                                            <HtmlParser html={data.provideTitle} />
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <WeProvide provide={data.weProvide} />
                        </div>
                    </div>
                    {
                        (data.className === 'design-services') ? (
                            <React.Fragment>
                                <div className="let-discuss">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                                <div className="discuss-left">
                                                    <div className="discuss-title sr-from-bottom-2">
                                                        <h3>
                                                            Design Is An <span>Attractive Aspect</span>. But is it everything?
                                                    </h3>
                                                        <p className="mt-3">
                                                            <i>
                                                                Visual elements will always be the matter of first impression, but only good looks won???t be inclusive for digital transformation. To see your idea turning real onto the web, you will need good developers and design strategists.
                                                        </i>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                                <div className="discuss-right left-brush sr-from-bottom-3">
                                                    <h4>Click below to</h4>
                                                    <Link to="/inquiry.html">
                                                        <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                            Let???s Develop
                                                    <i className="icon-arrow-right"></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : ''
                    }

                    <div className="engage_steps pt-60 pb-60">
                        <div className="container  mini-container">
                            <div className="row">
                                <div className="col-12 ">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sec-title">
                                                <p className="sr-from-bottom-1">
                                                    <span>Take a look at</span>
                                                </p>
                                                <h3 className="sr-from-bottom-2">
                                                    Steps to <span>Engage</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="container">
                                <EngageStep steps={data.engageSteps} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row mt-3 align-items-center">
                                <div className="col-md-12">
                                    <div className="sec-title sr-from-bottom">
                                        <p className="sr-from-bottom-1">
                                            {
                                                data.domainExperttagline ? (
                                                    <span>{data.domainExperttagline}</span>
                                                ) : (<span>Power Your Industry</span>)
                                            }
                                        </p>
                                        <h3 className="sr-from-bottom-2">
                                            <span>Domain Expertise</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-industries-main pt-0 pb-0">
                            <div className="background-label">INDUSTRIES</div>
                            <div className="container">
                                <DomainExpert experts={data.domainExpert} />
                            </div>
                        </div>
                    </div>

                    {
                        (data.routeName === "microsoft-development.html" ||
                            data.routeName === "cms-development.html" ||
                            data.routeName === "javascript-development.html" ||
                            data.routeName === "cross-platform-app-development.html" ||
                            data.routeName === "php-opensource-development-services.html" ||
                            data.routeName === "native-app-development.html" ||
                            data.routeName === "on-demand-app-development.html" ||
                            data.routeName === "design-services.html" ||
                            data.routeName === "support-and-testing.html" ||
                            data.routeName === "digital-marketing.html" ||
                            data.routeName === "api-integration.html" ||
                            data.routeName === "php-development.html" ||
                            data.routeName === "mobile-application-development-services-india.html" ||
                            data.routeName === "development-and-design-solution.html"
                        ) ?
                            <div className="casestudy-swiper">
                                <CaseStudies
                                    studies={data.caseStudies}
                                    label={data.caseStudiesLabel}
                                    title={data.caseStudiesTitle}
                                    description={data.caseStudiesDescription} />
                            </div> : ''
                    }

                    {data.routeName === "cms-development.html" ? 
                    <div className="cmr-faqs">
                    <div className="container">
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-12">
                                <div className="sec-title">
                                    <p className="sr-from-bottom-1"><span>Our Mission</span></p>
                                    <h3 className="sr-from-bottom-2">
                                        Some of <span>FAQs</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-md-12 sr-from-bottom-3 faq-list">
                                <div id="accordion">
                                    <ul>
                                        {
                                            data.faqs.map((data: any, key: number) => {
                                                return (
                                                    <li key={key}>
                                                        <div className="faq_item">
                                                            <div className="faq_header">
                                                                <a className="card-link" aria-expanded={key ==0 ? 'true': 'false'} data-toggle="collapse" href={`#collapseOne${key}`}>
                                                                    {data.title}
                                                                </a>
                                                            </div>
                                                            <div id={`collapseOne${key}`} className={`faq_body collapse ${key == 0 ? 'show': ''}`} data-parent="#accordion">
                                                                <div className="faq_body_inner">
                                                                    {data.answer}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  : ''}

                    <div className="right-sq">
                        <TechnologyTabView technologyStopTitle="All about our" />
                    </div>

                    <div className="container mini-container pt-60 pb-60">
                        <div className="sec-tag-lines">
                            <h3 className="sr-from-bottom-2">
                                {data.weAre}
                            </h3>
                        </div>
                    </div>

                    <div className="container">
                        <div className="cmr-cta sr-from-bottom">
                            <div>
                                <h3>
                                    {data.cardLabel}
                                    <span className="sr-from-bottom-2">
                                        {data.cardTitle}
                                    </span>
                                </h3>
                            </div>
                            <div className="cta-btn sr-from-bottom-3">
                                <Link to="/inquiry.html">
                                    <button className="cmr-solid-btn-w get-center hvr-shutter-out-horizontal orange-section-hire-button">
                                        {data.cardButton} <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default TopHierarchy;