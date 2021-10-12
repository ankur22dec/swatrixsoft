import React from "react";
import ImageView from "../ImageView";
import arrowprev from "../../assets/images/arrow-prev.svg";
import arrownext from "../../assets/images/arrow-next.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import caretright from "../../assets/images/caret-right.svg";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import HtmlParser from "../htmlParser/htmlParser";
import LinkTo from "../LinkTo/linkTo";

function CaseStudies(props: any) {
  return (
    <>
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-5">
            <div className="sec-title sr-from-bottom">
              <p className="sr-from-bottom-1">
                <span>
                  { (props.label) ? props.label : 'Our Mission'}
                </span>

              </p>
              <h3 className="sr-from-bottom-2">
                <span>
                  {
                    (props.title) ? props.title : 'Case Studies'
                  }
                </span>
               
                {/* <HtmlParser html={props.title} /> */}
              </h3>
            </div>
          </div>
          <div className="col-md-7">
            <h4 className="right-tag-lines sr-from-bottom-1">
              <HtmlParser html={
                (props.description) ? props.description : 'Some of our <span>Stellar Projects</span> for your inspiration'
              } />
              </h4>
          </div>
        </div>
      </div>
      <div className="casestudy-slider">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-5 sliderleftcol">
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              touchRatio={0}
              allowTouchMove={false}
              navigation={{
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique",
              }}
              pagination={{
                clickable: true,
                el: ".swiper_pagination_lines",
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"></span>';
                },
              }}
              breakpoints={{
                767: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {props.studies.map((data: any, key: number) => {
                return (
                  <SwiperSlide key={key}>
                    <div className="slide_image">
                      <ImageView src={data.image} alt={data.image} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-md-7 col-lg-7 sliderrightcol">
            <div className="sliderrightcol_iiner">
              <Swiper
                draggable={false}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                touchRatio={0}
                allowTouchMove={false}
                navigation={{
                  nextEl: ".swiper-button-next-unique",
                  prevEl: ".swiper-button-prev-unique",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper_pagination_lines",
                  renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                  },
                }}
              >
                {props.studies.map((data: any, key: number) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className="casestudy_details">
                        <span className="horizontal_separator"></span>
                        <h3 className="name">{data.title}</h3>
                        <h4 className="type">{data.type}</h4>
                        <p>{data.description}</p>
                        <div className="view-case-study">
                            <LinkTo to={data.caseStudyUrl ? data.caseStudyUrl : '/'}>
                               Request for Quotation <img src={caretright} alt="Arrow" />
                            </LinkTo>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper_pagination">
                <div className="swiper_navigation">
                  <div className="swiper-button-prev-unique">
                    <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"/>
                  </div>
                  <div className="swiper-button-next-unique">
                    <ImageView src={arrownext} alt="arrow-next" width="17" height="14" />
                  </div>
                </div>
                <div className="swiper_pagination_lines"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudies;
