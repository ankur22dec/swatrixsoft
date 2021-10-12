import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon1 from "../../assets/images/casestudy/glitty/glitty-app-banner.png";
import icon2 from "../../assets/images/casestudy/glitty/down-arrow.png";
import icon3 from "../../assets/images/casestudy/glitty/right-big-arrow.png";
import icon4 from "../../assets/images/casestudy/glitty/stan-gerards.png";
import icon5 from "../../assets/images/casestudy/glitty/left-big-arrow.png";
import icon6 from "../../assets/images/casestudy/glitty/the-challenge.gif";
import icon7 from "../../assets/images/casestudy/glitty/mobile-glitty-logo.png";
import icon8 from "../../assets/images/casestudy/glitty/glimps-1.png";
import icon9 from "../../assets/images/casestudy/glitty/glimps-2.png";
import icon10 from "../../assets/images/casestudy/glitty/glimps-3.png";
import icon11 from "../../assets/images/casestudy/glitty/achieved-icon.png";
import icon12 from "../../assets/images/casestudy/glitty/download-glitty-app.png";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";


class Glitty extends React.Component {

    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script>
                    <meta property="og:image" content={`https://www.cmarix.com${icon1}`} />
                </Helmet>
                <div className="hire-cross-platform-developer">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">CASESTUDY</div>
                            <div className="row align-items-stretch">
                                <div className="col-md-12">
                                    <div className="inner-left">
                                        <div
                                            className="inner-head-title sr-from-bottom text-center"
                                            data-splitting
                                        >
                                            <div className="banner-pattern centered_lines">
                                                <div className="pattern_inner">
                                                    <span></span>
                                                    <div className="line line1"></div>
                                                    <div className="line line2"></div>
                                                    <div className="line line3"></div>
                                                </div>
                                            </div>
                                            <span>GLITTY APP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageView src={cmarixLine} alt="Cmarix-line" className="mtmin15 h15px ontopever" />
                <div className="glitty-app-wrap mtmin15">

                    <div className="glitty-app-banner">
                        <div className="banner-img">
                            <ImageView src={icon1} alt="Image" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner-caption">
                                        <div className="banner-title-text"> Glitty App
                                            <div className="banner-semi-title"> <span>Success Story</span> </div>
                                        </div>
                                        <div className="banner-info"> <span>Turn your photos from</span> <br />
                                            <span>regular to striking,</span> <br />
                                            <span>superfast</span>
                                            <a className="down-link" href="#the-client" title="Scroll Down">
                                                <ImageView src={icon2} className="keyBounce" alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="the-client" className="glitty-app-client">
                        <div className="right-big-arrow">
                            <ImageView src={icon3} alt="Image" />
                        </div>
                        <div className="left-down-link"> <a href="#the-challenge" className="down-link" title="How We Started">How We Started <span>
                            <ImageView src={icon2} className="keyBounce" alt="Image" />
                        </span></a> </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="glitty-app-title black-text">The <span>Client</span></h2>
                                </div>
                                <div className="col-md-12">
                                    <div className="app-client-wrap">
                                        <div className="app-client-info">
                                            <div className="app-client-image">
                                                <ImageView src={icon4} alt="Image" />
                                            </div>
                                            <div className="app-client-name"> Stan Gerards
              <div className="app-client-insta"> <span>stangerards</span> </div>
                                            </div>
                                        </div>
                                        <div className="app-client-des">
                                            <div className="app-client-title">A Social Media Star <br />
              &amp; Photographer</div>
                                            <p><b>Stan Gerards</b> is a Social media star and photographer who is most popular on Instagram and Twitter. He has more than <b>210,000 followers</b> on social media platform. </p>
                                            <br />
                                            <p>Stan is an <b>Active Illustrator</b> from a young age and fell in love with video making during the rise of YouTube’s popularity. He <b>dropped out of high school</b> to pursue his creative endeavors. He has artistic skill, technical knowledge and originality to come up with visual depictions of various concepts on the video and image photography. He posts many videos on his YouTube channel and other social media platform.</p>
                                            <br />
                                            <p>One day he thought to create an App which can transform your photo into a glitter masterpiece. We discussed with him to understand his vision, and then we have converted his idea into reality, with Glitty App.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="the-challenge" className="glitty-app-challenge">
                        <div className="left-big-arrow">
                            <ImageView src={icon5} alt="Image" />
                        </div>
                        <div className="right-down-link"> <a href="#the-solution" className="down-link" title="What's The Solution">What's The Solution<span>
                            <ImageView src={icon2} className="keyBounce" alt="Image" />
                        </span></a> </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="glitty-app-title yello-text">The <span>Challenge</span></h2>
                                    <div className="challenge-semi-title"><span>Technical Brainstorming</span></div>
                                </div>
                                <div className="col-md-12">
                                    <div className="glitty-app-challenge-step">
                                        <ImageView src={icon6} alt="Image" />
                                        <ul>
                                            <li> <span>1</span> Move the image<br />
                                                with texture </li>
                                            <li> <span>2</span> Image quality<br />
                                                with zoom in </li>
                                            <li> <span>3</span> Zoom-In &amp; brush<br />
                                                together </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="challenge-progress-wrap">
                                        <div className="yello-text"> <span>Work breakdown structure</span> </div>
                                        <ul>
                                            <li>
                                                <p className="progress-step-name">Milestone wise Tasks Scheduling</p>
                                                <div className="progress-step">
                                                    <span className="left80per"></span> 
                                                </div></li>
                                            <li>
                                                <p className="progress-step-name">Resource Allocation</p>
                                                <div className="progress-step">
                                                    <span className="left90per"></span> 
                                                </div>
                                            </li>
                                            <li>
                                                <p className="progress-step-name">Collaborative Communication</p>
                                                <div className="progress-step">
                                                    <span className="left85per"></span> 
                                                </div>
                                            </li>
                                            <li>
                                                <p className="progress-step-name">Program Evaluation Review Technique (PERT)</p>
                                                <div className="progress-step">
                                                    <span className="left895per"></span> 
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="black-text"> <span>We Planned to Achieve 100%</span> </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="what-we-faced">
                                        <h2 className="glitty-app-title black-text">What we <span>Faced</span></h2>
                                        <ul>
                                            <li>Enforcing <b>Glitter effect</b> on High-resolution image.</li>
                                            <li><b>Zoom in and Zoom out image</b> with the textured background.</li>
                                            <li>Revert the last Glitty effect using <b>Undo feature</b>.</li>
                                            <li><b>Move the image with texture effect</b> was the challenge to achieve as we already added the <b>Brush feature to erase the content</b> of the image and <b>apply the Glitter using one finger</b>.</li>
                                            <li>To achieve the <b>brush and zoom in effect together</b>.</li>
                                            <li>If app detected the <b>touch with two fingers</b>, the zoom in or zoom out operation should work, and if a user will move the single finger on Image, the brush should apply some glitter to that picture.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="the-solution" className="glitty-app-solution">
                        <div className="right-down-link"> <a href="#the-results" className="down-link" title="Check The Results">Check The Results <span>
                            <ImageView src={icon2} className="keyBounce" alt="Image" />
                        </span></a> </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="glitty-app-title black-text">The <span>Solution</span></h2>
                                    <div className="glitty-solution-info">
                                        <p><span>HERE IT IS</span></p>
                                        <p>To add the Pinch zoom effect in the application we have added the <b>UIPanGestureRecognizer</b>,
              <b>UIPinchGestureRecognizer</b>, and <b>PinchActionZoomImage</b> over the image.</p>
                                        <p>We have applied <b>gestures to the coding where two fingers are used</b><br />
              to zoom in and zoom out the image. Zoom out cannot be done beyond<br />
              the actual size of the image, If the user will zoom out beyond the actual size, it will reset to the actual size along with bounce effect.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="glitty-solution-step">
                                        <ul>
                                            <li>UIPanGestureRecognizer</li>
                                            <li>UIPinchGestureRecognizer</li>
                                            <li>PinchActionZoomImage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="the-results" className="glitty-app-results">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="glitty-app-title black-text">The <span>Results</span></h2>
                                    <div className="app-semi-title"> Glitty App is used to <b>create a unique or professional photographer image</b> using the <b>different texture.</b> <br />
                                        <b>The user can share it on the different social media platform</b> and save it to mobile devices for the memories. </div>
                                </div>
                            </div>
                        </div>
                        <div className="glimps-of-glitty">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="glimps-title"><span>Glimpse of Glitty</span></div>
                                        <div className="results-iamges">
                                            <ImageView src={icon7} alt="Image" />
                                            <ImageView src={icon8} alt="Image" />
                                            <ImageView src={icon9} alt="Image" />
                                            <ImageView src={icon10} alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="glitty-app-works">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="glitty-app-title yello-text">How the app <span>Works?</span></h2>
                                    <div className="glitty-app-video">
                                        <video id="vid" playsinline autoplay muted loop>
                                            <source src={icon13} type="video/mp4"/>
                                        </video>
                                        <video id="vidIpad" playsinline autoplay muted loop controls="true">
                                            <source src={icon13} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="glitty-app-success">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h2 className="glitty-app-title black-text">The <span>Success</span></h2>
                                </div>
                                <div className="col-md-6 col-sm-6 yello-bg">
                                    <div className="mobile-glitty-app">
                                        <ImageView src={icon7} alt="Image" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 black-bg">
                                    <div className="achieved-wrap">
                                        <div className="achieved-icon"> <span>Achieved</span>
                                            <ImageView src={icon11} alt="Image" />
                                        </div>
                                        <div className="achieved-info"><span>#<b>1</b></span> photo and video app <br />
                                        on the apple store</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="download-app-inquiry">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="download-glitty-app">
                                        <h3>Ready to turn your photos from Regular to Striking?</h3>
                                        <a href="https://itunes.apple.com/us/app/glitty-glitter-effect-editor/id1435607925?mt=8" title="Download on the App Store" target="_blank" rel="noopener noreferrer">
                                            <ImageView src={icon12} alt="Download on the App Store" />
                                        </a> </div>
                                    <div className="glitty-app-inquiry">
                                        <h3>Let's make your idea happen</h3>
                                        <a href="https://www.cmarix.com/inquiry.html" title="Share Your Idea" target="_blank" rel="noopener noreferrer">Share Your Idea</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Glitty;