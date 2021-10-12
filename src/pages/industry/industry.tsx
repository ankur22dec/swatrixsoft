import React from 'react';
import ImageView from '../../components/ImageView';
import './industry.scss';
import industryJson from '../../constants/industry';
import ContactForm from '../../components/ContactForm/contactForm';
import TechnologyTabView from '../../components/technologyTab/technologyTab';
import Experties from './components/experties';
import Projects from './components/projects';
import Solutions from './components/solution';
import RelatedService from '../../components/relatedService/relatedService';
import HtmlParser from '../../components/htmlParser/htmlParser';
import BlogSection from '../../components/BlogSection/blogSection';
import { Helmet } from 'react-helmet';


class Industry extends React.Component<any, any> {
    scrollRef: any = ""

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
        // real-estate.html
        const data:any = industryJson.find((x)=> window.location.pathname.includes(x.routeName));
        
        // const data = [0]
        return (
            <>
                <Helmet>
                    <meta property="og:image" content={`https://www.cmarix.com${data.image}`} />
                </Helmet>
                <div className={`bottom-align-banner ${data.className}`}>
                    <div className="inner-top-header">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-md-6 industry-inner-banner-left">
                                    <div className="inner-left">
                                        <div className="inner-head-title sr-from-bottom content__paragraph" data-splitting>
                                            <h1>
                                                <span>{data.name}</span><br />
                                                Industry
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
                                <div className="col-md-6 text-center">
                                    <div className="inner-right sr-from-bottom-2">
                                        <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : data.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mini-container mt-5 left-sq pt-60">
                        <div className="sec-tag-lines">
                            <span className="sr-from-bottom-1">Our Mission</span>
                            <h3 className="sr-from-bottom-2">
                                {data.missionTitle}
                            </h3>
                        </div>
                    </div>

                    <div className="cmr-expertise">
                        <div className="container">
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-5">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1"><span>Our Mission</span></p>
                                        <h3 className="sr-from-bottom-2">
                                            Our <span>Domain</span><br/> Expertise
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-md-7 sr-from-bottom-3">
                                    <h2 className="right-tag-lines sr-from-bottom-3">
                                    <HtmlParser html={data.missiionLabel} />
                                    </h2>
                                </div>
                            </div>
                            {
                                (data.expertiseDetail) ? (
                                    <div className="row">
                                    <div className="col-12">
                                        <div className="domain-expertise-content">
                                            <p>
                                                {data.expertiseDetail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                ) : ''
                            }
                            <Experties experties={data.experties} />
                        </div>
                    </div>

                    <Projects name={data.name} solutionServiceLabel={data.solutionServiceLabel} projects={data.projects} />

                    <div className="cmr-emerging">
                        <div className="container">
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-5">
                                    <div className="sec-title">
                                        <p className="sr-from-bottom-1"><span>Our Mission</span></p>
                                        <h3 className="sr-from-bottom-2">
                                            <span>Emerging</span><br />
                                            Solutions
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-md-7 sr-from-bottom-3">
                                    <h4 className="right-tag-lines sr-from-bottom-3 emerging-solution-title">
                                        <HtmlParser html={data.solutionLabel} />
                                    </h4>
                                </div>
                            </div>
                            {
                                (data.solutionDetail) ? (
                                    <div className="row">
                                    <div className="col-12">
                                        <div className="domain-expertise-content">
                                            <p>
                                                {data.solutionDetail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                ) : ''
                            }
                            <Solutions solutions={data.solutions} />
                        </div>
                    </div>

                    <TechnologyTabView technologyStopTitle="All about our"/>

                    <div className="container mini-container mt-5 left-sq">
                        <div className="sec-tag-lines">
                            <h3 className="sr-from-bottom-2">
                               {data.workingWith}
                            </h3>
                        </div>
                    </div>

                    <div className="container">
                        <RelatedService services={data.relatedService} label={data.relatedLable} title={data.relatedTitle}/>
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
                                    <a className="view_all_blog" href="https://www.cmarix.com/blog"  rel="noopener noreferrer" target="_blank">
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
                        <ContactForm title={data.contactFormLabel} description={data.contactFormDetailTitle}></ContactForm>
                    </div>
                </div>
            </>
        )
    }
}

export default Industry;