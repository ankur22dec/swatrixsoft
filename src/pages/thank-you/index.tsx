import React from "react";
import ImageView from "../../components/ImageView";
import thankYouImage from "../../assets/images/elements/thank-you.svg";
import thankyou2 from "../../assets/images/elements/thank-you2.png";
import heroTopRight from "../../assets/images/herotopwave.svg";
import { Link } from "react-router-dom";


class ThankYou extends React.Component {
    componentDidMount() {
        let windowObj: any = window;
        windowObj.googleaAnalytics(); 
    }
    
    render() {
        return (
            <div>
                <div className="thank-you inner-top-header">
                    <div className="max-animation-lg">
                        <div className="top-right">
                            <ImageView src={heroTopRight} alt="waves" className="destructive" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="thank-you-container">
                            <div className="thank-you-left-content">
                                <div className="thank-you-text">
                                    <ImageView src={thankyou2} alt="Thank you" />
                                </div>
                                <div className="thank-you-content">
                                    <p>Thank you for contacting us our representative will get <br /> touch with you in 12 hours.</p>
                                </div>
                                <div className="got-to-home">
                                    <Link to={`/`}>
                                        <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                            Go To Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="thank-you-right-content">
                                <ImageView src={thankYouImage} alt="Thank You" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ThankYou;