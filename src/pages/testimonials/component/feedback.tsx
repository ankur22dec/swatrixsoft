import React from 'react';
import ImageView from '../../../components/ImageView';
import invertedcommas from "../../../assets/images/inverted-commas.svg";

function FeedbackUI(props: any) {
    return (
        <div className="customer_review_vertical">
            <ul>
                {
                    props.feedbacks.map((data: any, key: number) => {
                        return (
                            <li key={key}>
                                <div className="review_box">
                                <div className="review_top">
                                    <div className="client_image">
                                    <ImageView src={data.image} alt="User"></ImageView>
                                    </div>
                                    <div className="client_review">
                                    <ImageView
                                        src={invertedcommas}
                                        alt="Quote"
                                    ></ImageView>
                                    <p>
                                        {data.title}
                                    </p>
                                    </div>
                                </div>
                                <div className="client_details">
                                    <h3>{data.name}</h3>
                                    <span className="line_pattern redish"></span>
                                </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FeedbackUI;