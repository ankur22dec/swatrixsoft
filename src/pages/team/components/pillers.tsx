import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import ImageView from '../../../components/ImageView';
import arrowprev from "../../../assets/images/arrow-prev.svg";
import arrownext from "../../../assets/images/arrow-next.svg";
import linkedin from "../../../assets/images/team/linkedin.svg";
import HtmlParser from '../../../components/htmlParser/htmlParser';

function Pillers(props: any) {
    return (
        <div className="pillar-slider">
            <div className="container">
            <div className="row align-items-center customer_review_swiper sr-from-bottom-1">
                <div className="col-md-6 col-lg-6 col-sm-5 col-12">
                <div className="pillar_slider_left sr-from-bottom-2">
                    <div className="pillar_small">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={false}
                        touchRatio={0}
                        // effect={"fade"}
                        allowTouchMove={false}
                        navigation={{
                        nextEl: ".swiper-button-next-unique",
                        prevEl: ".swiper-button-prev-unique",
                        }}
                    >
                        {
                            props.members.map((data: any, key: number) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <ImageView src={data.image} alt={data.name} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-7 col-12">
                <div className="pillar_slider_right sr-from-bottom-2">
                    <Swiper
                        draggable={false}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={false}
                        // effect={"fade"}
                        touchRatio={0}
                        allowTouchMove={false}
                        navigation={{
                            nextEl: ".swiper-button-next-unique",
                            prevEl: ".swiper-button-prev-unique",
                        }}
                    >
                        {
                            props.members.map((data: any, key: number) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <div className="pillar_details">
                                            <p className="details_with_quote">
                                                <HtmlParser html={data.title} />
                                            </p>
                                            <h3 className="pillar_name">
                                                {data.name}
                                                <a href={data.url}>
                                                    <ImageView src={linkedin} alt="Linkdin" />
                                                </a>
                                            </h3>
                                            <h4 className="pillar_designation">
                                                {data.position}
                                            </h4>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                </div>
                <div className="swiper-button-prev-unique">
                    <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
                </div>
                <div className="swiper-button-next-unique">
                    <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pillers;
