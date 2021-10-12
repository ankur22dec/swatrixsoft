import React from "react";
import ImageView from "../../../components/ImageView";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Parallax,
    Mousewheel,
} from "swiper";
  
import { Swiper, SwiperSlide } from "swiper/react";
  
import SliderUIElement from "./sliderElementUI";
import email from "../../../assets/images/home/email.svg";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Parallax, Mousewheel]);

function MobileSliderComponent(props: any) {
    const { slides } = props;
    return (
        <div className="container">
            <div className="service-slider">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={false}
                    speed={800}
                    mousewheel={{
                        releaseOnEdges: true
                    }}
                    grabCursor={true}
                    autoplay={{
                        delay: 7000,
                    }}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    effect="fade"
                    breakpoints={{
                        320: {
                        direction: "horizontal",
                        },
                        767: {
                        direction: "vertical",
                        },
                    }}
                    pagination={{
                            clickable: true,
                            el: ".service-slider-pagination",
                            renderBullet: function (_, className) {
                                return `<span class='${className}'></span>`
                            // return '<span class="' + className + '">' + "</span>";
                        },
                    }}
                    navigation={{
                        nextEl: ".next-slide",
                    }}
                >
                    {
                        slides.map((data: any, key: number) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="service-slide">
                                        <SliderUIElement data={data}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="service-slider-pagination"></div>
                <div className="email-us">
                    <Link to="/inquiry.html">
                        <ImageView src={email} alt="Email Us" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileSliderComponent;
