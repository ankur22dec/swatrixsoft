import React from "react";
import ImageView from "../../components/ImageView";
import notFound from '../../assets/images/elements/404.png';
import heroTopRight from '../../assets/images/herotopwave.svg';
import { Link } from "react-router-dom";
class PageNotFound extends React.Component {
    render(){
        return(
            <div>
                <div className="page-not-found-container inner-top-header">
                    <div className="max-animation-lg">
                        <div className="top-right">
                            <ImageView src={heroTopRight} alt="waves" className="destructive" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="pagenotfound-container">
                            <div className="notfound-image">
                            <ImageView src={notFound} alt="Page Not Found" />
                            </div>
                            <div className="not-found-content">
                                <p>Looks like something broken here.</p>
                                <p>The page you were looking for could not be found.</p>
                            </div>
                            <div className="got-to-home">
                                <Link to={`/`}>
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        Go To Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound;