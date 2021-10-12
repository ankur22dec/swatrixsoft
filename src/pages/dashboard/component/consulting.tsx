import React, { useState } from "react";
import closebutton from "../../../assets/images/icon-round-plus.svg";
import ImageView from "../../../components/ImageView";
import { Link } from "react-router-dom";

const modalData = [
    {
        title: 'Startup Consulting',
        description: 'Throw out your sticky notes and clean the ink on your white boards. Our startup consulting services are here to start and end with discoveries. We help you to peel back all the confusion and doubts about the tech implementation and lay a robust foundation for your digital product.',
        key: 'startUp',
        link:'startup-consulting.html'
    },
    {
        title: 'IT Consulting',
        description: 'Any business invariably requires the support of a technology partner who can help them materialise their aspiration for digital presence and shape their competitive lead through unique software solutions. We at Cmarix provide highly expertise driven IT consulting services to modern enterprises and as a technology partner we play an important role in creating new success stories.',
        key: 'itService',
        link:'it-consulting-services.html'
    },
    {
        title: 'Software product development',
        description: 'Throw out your sticky notes and clean the ink on your white boards. Our startup consulting services are here to start and end with discoveries. We help you to peel back all the confusion and doubts about the tech implementation and lay a robust foundation for your digital product.',
        key: 'productDevelopment',
        link:'software-product-development.html'
    },
    {
        title: 'Product Auditing',
        description: 'Product Auditing in the context of software solutions plays an important role in efficient evaluation of the software products corresponding to performance, data, code and infrastructure. At CMARIX, we help enterprises in carrying out expertise driven product auditing to ensure optimum quality and exceptional real world output of their software products.',
        key: 'productAuditing',
        link:'product-auditing.html'
    },
    {
        title: 'ODC India',
        description: 'Offshore Development Centers (ODC) are set up by companies in order to outsource software and app development projects from different parts of the globe. CMARIX is a leading player in developing Offshore Development Centres in India to help global companies outsource their software projects while taking advantage of the low cost of development and technology innovations from the world’s largest pool of developer talents.',
        key: 'odcIndia',
        link:'setup-odc-in-india.html'
    },
    {
        title: 'Outsource India',
        description: 'India has emerged as the global software outsourcing destination thanks to high quality talent pool, proficiency in English language and lower cost of development. CMARIX is a leading software outsourcing development company from India with a global footprint and countless successful software development projects up on its sleeve.',
        key: 'outsource',
        link:'outsource-india.html'
    }
]

function ConsultingUI(props: any){
    const [item, setItem] = useState("");

    function getTitle() {
        const data:any = modalData.find((x: any) => x.key === item);
        if(data) {
            return data.title || ''
        }
        return ''
        
    }
    function getLink() {
        const data:any = modalData.find((x: any) => x.key === item);
        if(data) {
            return data.link || ''
        }
        return ''
        
    }
    function getDescription() {
        const data:any = modalData.find((x: any) => x.key === item);
        if(data) {
            return data.description || ''
        }
        return '';
    }
    return (
        <div className="consulting-services" id="consulting">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-3 col-md-4 col-sm-12 col-12 consulting-left">
                <div className="consulting-services-left sr-from-bottom-1">
                    <h1>Our Consulting Services</h1>
                    <p>
                    Looking for <span>Quick Solution?</span>
                    </p>
                    <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        Consult Now
                        <i className="icon-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                </div>
                <div className="col-xl-9 col-md-8 col-sm-12 col-12  consulting-right">
                <div className="consulting-service-right">
                    <ul className="homepage-consulting">
                    <li className="sr-from-bottom-1">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('startUp');
                        }}>
                        <i className="icon-startup-consulting"></i>
                        <span>Startup Consulting</span>
                        </div>
                    </li>
                    <li className="sr-from-bottom-2">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('itService');
                        }}>
                        <i className="icon-it-consulting"></i>
                        <span>IT Consulting Service</span>
                        </div>
                    </li>
                    <li className="sr-from-bottom-3">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('productDevelopment');
                        }}>
                        <i className="icon-pro-dev"></i>
                        <span>Product Development</span>
                        </div>
                    </li>
                    <li className="sr-from-bottom-4">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('productAuditing');
                        }}>
                        <i className="icon-pro-auditing"></i>
                        <span>Product Auditing</span>
                        </div>
                    </li>
                    <li className="sr-from-bottom-5">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('odcIndia');
                        }}>
                        <i className="icon-setup-odc"></i>
                        <span>Setup ODC in India</span>
                        </div>
                    </li>
                    <li className="sr-from-bottom-6">
                        <div onClick={() => {
                            props.handleSlide();
                            setItem('outsource');
                        }}>
                        <i className="icon-outsource"></i>
                        <span>Outsource to India</span>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="circle-element"></div>
            <div className={`slideup-section  ${props.slideFlag ? "slideUp" : ""}`}>
            <div className="slideup-inner">
                <div className="container">
                <div className="slideup-content">
                    <button
                    className="close-modal"
                    onClick={props.handleSlideClose}
                    >
                        <ImageView src={closebutton} alt="Close" />
                    </button>
                    <h3>
                        {getTitle()}
                    </h3>
                    <p>
                        {getDescription()}
                    </p>
                    <Link to={`/${getLink()}`}>
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                         Consult Now
                        <i className="icon-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ConsultingUI;