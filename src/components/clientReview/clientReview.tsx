import React, { useState } from "react";
import ImageView from "../ImageView";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowprev from "../../assets/images/arrow-prev.svg";
import arrownext from "../../assets/images/arrow-next.svg";
import closebutton from "../../assets/images/icon-round-plus.svg";
import play from "../../assets/images/play.svg";
import HtmlParser from "../htmlParser/htmlParser";
import YouTube from "react-youtube";
import Modal from 'react-modal';

function ClientReview(props: any) {
  const { reviews }: any = props;
  const [state, setState] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  Modal.setAppElement('body');
  return (
    <div className="row customer_review_swiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
      >
        {reviews.map((data: any, key: number) => {
          return (
            <SwiperSlide key={key}>
              <div className="col-12">
                <div className="row clutch_review align-items-center">
                  <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                    <div className="review_left">
                      <div className="customer_image_container" onClick={() => {
                        setState(true);
                        setYoutubeUrl(data.url);
                      }}>
                        <div className="customer_image">
                          <ImageView src={data.image} alt={data.alt} width="512" height="588" />
                          <button className="play_video">
                            <ImageView src={play} alt="Customer"  width="70" height="70"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-6 col-12">
                    <div className="review_right">
                      <p>
                        <HtmlParser html={data.title} />
                      </p>
                      <div className="customer_details">
                        <div className="customer_name_role">
                          <h3>{data.name}</h3>
                          <h4>{data.position}</h4>
                        </div>
                        <div className="customer_project">
                          <h4>Development For: </h4>
                          <h4>{data.type}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-prev-unique">
        <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
      </div>
      <div className="swiper-button-next-unique">
        <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
      </div>
      <Modal
          isOpen={state}
          onAfterOpen={() => {}}
          onRequestClose={() => {
            setState(false)
          }}
          contentLabel="Example Modal"
        >
          <div className="video-modal">
          <div className="modal-inner">
            <button className="close-modal" onClick={() => setState(false)}>
              <ImageView src={closebutton} alt="Close" width="40" height="40" />
            </button>
            <div className="client-video">
              <YouTube videoId={youtubeUrl} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClientReview;
