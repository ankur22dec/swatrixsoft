import React from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageView from '../../../components/ImageView';
import arrowprev from "../../../assets/images/arrow-prev.svg";
import arrownext from "../../../assets/images/arrow-next.svg";

// Import Swiper styles
import 'swiper/swiper.scss';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Autoplay]);

function Projects(props: any) {
    return (
        <div className="cmr-nm-projects">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-5">
                        <div className="sec-title">
                            <p className="sr-from-bottom-1"><span>Our Mission</span></p>
                            <h3 className="sr-from-bottom-2">
                                Our <span>{props.name}</span><br />
                                Projects
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-7 sr-from-bottom-3">
                        <h4 className="right-tag-lines sr-from-bottom-3">
                            {!props.solutionServiceLabel && <React.Fragment><span>{props.name}</span> Solutions Built to Transform.</React.Fragment>}
                            {props.solutionServiceLabel && <React.Fragment>{props.solutionServiceLabel}</React.Fragment>}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="cmr-nm-projects-swiper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    loop={true}
                    centeredSlides={true}
                    navigation={{
                        nextEl: ".swiper-button-next-unique",
                        prevEl: ".swiper-button-prev-unique",
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false
                    // }}
                >
                    {
                        props.projects.map((data: any, key: number) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="slide-project pr-type-1">
                                        <div className="row m-0">
                                            <div className="col-lg-5 col-md-5 col-sm-12 col-12  nm-pic">
                                                <ImageView src={data.image} alt="hero-icon" />
                                            </div>
                                            <div className="col-lg-7 col-md-7 col-sm-12 col-12 nm-p-details">
                                                <h4 className="slide-project-name">
                                                    {data.id}. {data.name}
                                                </h4>
                                                <h5>
                                                    {data.description}
                                                </h5>

                                                <div className="pr-tags">
                                                    <div className="pr-tag-per sm-np">
                                                        <h5>Built for</h5>
                                                        <p>{data.buildFor}</p>
                                                    </div>
                                                    <div className="pr-tag-per">
                                                        <h5>Technologies</h5>
                                                        <p>{data.technologies}</p>
                                                    </div>
                                                    <div className="pr-tag-per">
                                                        <h5>Industry</h5>
                                                        <p>{data.industry}</p>
                                                    </div>
                                                </div>
                                                <Link to={data.projectlink}>
                                                <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                                    View Project <i className="icon-arrow-right"></i>
                                                </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="swiper_pagination">
                    <div className="swiper_navigation">
                        <div className="swiper-button-prev-unique">
                            <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
                        </div>
                        <div className="swiper-button-next-unique">
                            <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
