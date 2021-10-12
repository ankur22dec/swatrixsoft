import React from 'react';
import './solution-inner-main.scss';
import pointerDe from '../../assets/images/pointer-de.svg';
import TechnologyTabView from '../../components/technologyTab/technologyTab';
import ContactForm from '../../components/ContactForm/contactForm';
import ImageView from '../../components/ImageView/index';
import AgileWay from './components/agileWay/index';
import solutionJson from '../../constants/solutionInnerMain';
import RelatedService from '../../components/relatedService/relatedService';
import CaseStudies from '../../components/CaseStudies/caseStudies';
import HtmlParser from '../../components/htmlParser/htmlParser';
import BlogSection from '../../components/BlogSection/blogSection';
import { Helmet } from 'react-helmet';

class SolutionInnerMain extends React.Component<any, any> {
    scrollRef: any = ""

    state = {
        onScrollClass: ''
    }
    // componentWillMount() {
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
        // const data = consultingJson[0]
        const data:any = solutionJson.find((x)=> window.location.pathname.includes(x.routeName));
        // console.log(data.image)
        return (
            <> 
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
                </Helmet>
                <div className={`startup-service ${data.className}
                ${
                    (data.routeName === 'digital-strategy-solution.html'
                    ) ? 'bottom-align-banner' : ''
                    }`}>
                    <div className="inner-top-header">
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className={`col-md-6
                                 ${
                                    (data.routeName === 'digital-strategy-solution.html'
                                    ) ? 'bottom-align-graphic-left' : ''}`
                                }>
                                    <div className="inner-left">
                                        <div className="inner-head-title sr-from-bottom content__paragraph" data-splitting>
                                            <h1>
                                                <span>{data.name}</span><br />
                                                {
                                                    (data.className !== 'outsource-india' 
                                                    && data.className !== 'software-product-development'
                                                    && data.className !== 'ODC-india'
                                                    && data.className !== 'product-auditing'
                                                    && data.className !== 'startup-consulting-solution' ) ? 'Solution' : ''
                                                }
                                            </h1>
                                        </div>
                                        <p className="inner-about sr-from-bottom-1">
                                            {data.description}
                                        </p>
                                        <button onClick={() => this.goTo()} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                            Inquire Now <i className="icon-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={`col-md-6 text-right
                                ${
                                    (data.routeName === 'digital-strategy-solution.html' 
                                    || data.routeName === 'setup-odc-in-india.html'
                                    || data.routeName === 'product-auditing.html'
                                    || data.routeName === 'it-consulting-services.html'
                                    || data.routeName === 'outsource-india.html'
                                    || data.routeName === 'software-product-development.html'
                                    || data.routeName === 'startup-consulting.html'
                                ) ? 'row align-items-end justify-content-center' : ''}`}>
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
                                {
                                    (data.missionLabel) ? data.missionLabel : 'Our Passion'
                                }
                            </span>
                            <h2 className="sr-from-bottom-2">
                                {data.missionTitle}    
                            </h2>
                        </div>
                        <div className="sec-description">
                            <div className="sec-desc-title sr-from-bottom-3">
                                {
                                    data.whatSectionlable ? (
                                            <h6>
                                                 <HtmlParser html={data.whatSectionlable} />
                                            </h6>
                                    ) : (
                                        <h6>What's<br />{data.name}</h6>
                                    )
                                }
                               
                            </div>
                            <div>
                                <p className="sr-from-bottom-4">
                                    {data.missionDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmr-solutions">
                        <div className="cmr-reflectors">
                            SERVICES
                        </div>
                        <div className="container">
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-5">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1">
                                            <span>{data.missionLabelTwo}</span>
                                        </p>
                                        <h3 className="sr-from-bottom-2">
                                           <HtmlParser html={data.missionTitleTwo || ''}/>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h4 className="right-tag-lines sr-from-bottom-3">
                                        <HtmlParser html={data.missionTitleDescription || ''}/>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="solution-div sr-from-bottom-3">
                            <AgileWay solutions={data.solutions}/>
                        </div>
                    </div>

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

                                {/* <div className="col-md-5">
                                    <h6 className="sr-from-bottom-4">
                                        Having Same Doubts?
                                    </h6>
                                    <h4 className="sr-from-bottom-5">
                                        We can clear all your
                                        doubt quickly...
                                    </h4>
                                    <button onClick={() => this.goTo()}  className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-6">
                                        Inquire Now <i className="icon-arrow-down"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="cmr-query">
                        <div className="container mini-container">
                            <div className="row align-items-center">
                                <div className="query-title">
                                    <h4 className="right-tag-lines sr-from-bottom-4">
                                        <HtmlParser html={
                                            (data.cardTitle) ? data.cardTitle : '<span> Want to match the vision</span> of your product’s success in reality?'
                                        }   
                                        />
                                    </h4>
                                </div>
                                <div className="query-round sr-from-bottom-5">
                                    <img src={pointerDe} alt="pointer" className="brusher topdown" />
                                    <h5>
                                        <HtmlParser html={data.circleTitle ? data.circleTitle : 'Quick Support'} />
                                    </h5>
                                    <button onClick={() => this.goTo()} className="cmr-solid-btn get-center hvr-shutter-out-horizontal">
                                        {
                                            (data.buttonText) ? data.buttonText : ' Get A Consultation'
                                        }
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CaseStudies
                            studies={data.caseStudies}
                            label={data.caseStudiesLabel}
                            title={data.caseStudiesTitle}
                            description={data.caseStudiesDescription} />

                                       
                    <TechnologyTabView technologyStopTitle="All about our"/>

                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                        {
                            data.workingWith ? (
                                <h3 className="sr-from-bottom-2">
                                    {data.workingWith}
                                </h3>
                            ) : (
                                <h3 className="sr-from-bottom-2">
                                    Working with CMARIX means your startup will propel on heights of ever-growing market and inline with modern applications. 
                                </h3>
                            )
                        }
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
                                    <a className="view_all_blog" href="https://www.cmarix.com/blog" target="_blank" rel="noopener noreferrer">
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
                        <ContactForm />
                    </div>
                </div>
            </>
        )
    }
}

export default SolutionInnerMain;