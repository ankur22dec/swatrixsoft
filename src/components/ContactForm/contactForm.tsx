import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import HtmlParser from "../htmlParser/htmlParser";
import { apiEndpoint, captchaKey } from "../../constants/apiConfig";
import publicIp from "public-ip";
import { MainContext } from "../../App";
import { withRouter } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';



const URL = `${apiEndpoint}/contact`;

const captchKey = captchaKey;

const ErrorUI = ({ message, submit }: any) => {
    if (message && submit) {
        return <span>{message}</span>;
    } else {
        return <></>;
    }
};

function ContactForm(props: any) {
    const context: any = useContext(MainContext);
    const {
        title = "Let's Talk <br /><span>Business!</span>",
        description = "Have questions about your idea? Drop in your details to discuss with our solution consultants. We look forward to hear from you." } = props;
    const [submitted, setSubmit] = useState(false);
    const [file, setFile]: any = useState(null);
    const [emailError, setError] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [state, setState]: any = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        // interest: '',
        routeName: window.location.pathname,
        services: []
    });

    function onChange(key: any, value: any) {
        setState({
            ...state,
            [key]: value
        });
        if (key === "email") {
            var re = /\S+@\S+\.\S+/;
            setError(!re.test(value));
        }
    }

    async function onSubmit() {


        setSubmit(true);
        if (!state.firstName) {
            return;
        }
        if (!state.lastName) {
            return;
        }
        if (!state.email) {
            return;
        }
        if (!state.phone) {
            return;
        }
        // if (!state.interest) {
        //     return;
        // }
        if (emailError) {
            return;
        }

        if (!captcha) {
            return;
        }
        const ip = await publicIp.v4();
        var myHeaders = new Headers();
        var formdata = new FormData();

        if (file) {
            formdata.append("image", file);
        }
        for (let i in state) {
            formdata.append(i, state[i].toString());
        }
        formdata.append("ip", ip);

        const history = createHistory()
        ReactGA.initialize('UA-59443825-1');
        history.listen((location, action) => {
            ReactGA.pageview(location.pathname);
        });

        let windowObj: any = window;
        // windowObj.ga("send", "event", { eventCategory: "Inquiry Page", eventAction: "Submit" });

        let requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: formdata
        };

        setLoading(true);
        context.dispatch({ type: "SET_ALLOW", flag: true });
        fetch(URL, requestOptions)
            .then(function (res: any) {
                return res.json();
            })
            .then(function (result: any) {
                windowObj.grecaptcha.reset();
                setCaptcha(false);
                setLoading(false);
                if (result.success) {

                    props.history.push("/thank-you.html");
                    // setState({
                    //     firstName: '',
                    //     lastName: '',
                    //     email: '',
                    //     phone: '',
                    //     description: '',
                    //     // interest: '',
                    //     routeName: window.location.pathname,
                    //     services: []
                    // });


                    // toast.success("Thank you. Your inquiry submitted successfully. We will get back to you soon.")
                    // setSubmit(false);
                    // setFile(null);
                }
            })
            .catch(error => {
                windowObj.grecaptcha.reset();
                setLoading(false);
                setCaptcha(false);
                console.log("error", error);
            });
    }

    function updateService(label: any, flag: any) {
        const { services } = state;
        const index = services.findIndex((x: any) => x === label);
        if (flag) {
            if (index === -1) {
                services.push(label);
            }
        } else {
            if (index > -1) {
                services.splice(index, 1);
            }
        }

        setState({
            ...state,
            services: [...services]
        });
    }

    function selected(label: any) {
        const { services } = state;
        const index = services.findIndex((x: any) => x === label);
        if (index > -1) {
            return true;
        }
        return false;
    }

    const flag = props.location.pathname === "/inquiry.html";

    return (
        <div className="container mini-container" id="contactForm">
            <div className="cmr-contact">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="sec-title left-brush sr-from-bottom">
                            <p className="sr-from-bottom-1"><span>Contact Us</span></p>
                            {
                                flag ? (
                                    <h2 className="sr-from-bottom-2">
                                        <HtmlParser html={title} />
                                    </h2>
                                ) : (
                                        <h3 className="sr-from-bottom-2">
                                            <HtmlParser html={title} />
                                        </h3>
                                    )
                            }

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <p className="sr-from-bottom-1 contact-form-detail">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-inline sr-from-bottom-2">
                            <label className="cmr-label">First Name:</label>
                            <input
                                className="form-control"
                                placeholder="e.g. Ross"
                                value={state.firstName}
                                onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace(/[^A-Za-z\s]/ig, "");
                                    onChange("firstName", value);
                                }
                                }
                            />
                            <span className="error-message">
                                <ErrorUI submit={submitted} message={state.firstName ? "" : "Please enter first name"} />
                            </span>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-2">
                        <div className="form-inline">
                            <label className="cmr-label">Last Name:</label>
                            <input
                                className="form-control"
                                placeholder="e.g. McCarthy"
                                value={state.lastName}
                                onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace(/[^A-Za-z\s]/ig, "");
                                    onChange("lastName", value);
                                }
                                }
                            />
                            <span className="error-message">
                                <ErrorUI submit={submitted} message={state.lastName ? "" : "Please enter last name"} />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-3">
                        <div className="form-inline">
                            <label className="cmr-label">Email:</label>
                            <input className="form-control" placeholder="e.g. ross@yopmail.com" value={state.email} onChange={(e) => onChange("email", e.target.value)} />
                            <span className="error-message">
                                <ErrorUI
                                    submit={submitted}
                                    message={state.email ? (emailError ? "Enter valid email" : "") : "Please enter email"} />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-3">
                        <div className="form-inline">
                            <label className="cmr-label">Contact:</label>
                            <input type="number" className="form-control" placeholder="e.g. 631-541-1452" value={state.phone} onChange={(e) => onChange("phone", e.target.value)} />
                            <span className="error-message">
                                <ErrorUI submit={submitted} message={state.phone ? "" : "Please enter phone number"} />
                            </span>
                        </div>
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12 sr-from-bottom-4">
                        <div className="form-inline">
                            <label className="cmr-label">Interested in:</label>
                            <select className="form-control" value={state.interest} onChange={e => onChange('interest', e)}>
                                <option value="" disabled>Select</option>
                                <option value="Interested in Mobile app">Interested in Mobile app</option>
                                <option value="Interested in Website">Interested in Website</option>
                                <option value="Only UI Design">Only UI Design</option>
                                <option value="Only Development">Only Development</option>
                                <option value="Concept Design">Concept Design</option>
                                <option value="Technical Consultancy">Technical Consultancy</option>
                                <option value="Maintainance Support">Maintainance Support</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="error-message">
                                <ErrorUI submit={submitted} message={state.interest ? '' : "Please select your interest"} />
                            </span>
                        </div>
                    </div> */}
                    <div className="col-12 sr-from-bottom-4">
                        <div className="form-inline nowrap form-service-row">
                            <label className="cmr-label">Services:</label>
                            <div className="checkform">
                                <label className="pure-material-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selected("Mobile Development")}
                                        onChange={(e: any) => {
                                            updateService("Mobile Development", e.target.checked);
                                        }}
                                    />
                                    <span>Mobile Development</span>
                                </label>
                                <label className="pure-material-checkbox">
                                    <input type="checkbox" checked={selected("Web Development")} onChange={(e: any) => {
                                        updateService("Web Development", e.target.checked);
                                    }} />
                                    <span>Web Development</span>
                                </label>
                                <label className="pure-material-checkbox">
                                    <input type="checkbox" checked={selected("Hire Developer")} onChange={(e: any) => {
                                        updateService("Hire Developer", e.target.checked);
                                    }} />
                                    <span>Hire Developer</span>
                                </label>
                                <label className="pure-material-checkbox">
                                    <input type="checkbox" checked={selected("Maintenance & Support")} onChange={(e: any) => {
                                        updateService("Maintenance & Support", e.target.checked);
                                    }} />
                                    <span>Maintenance & Support</span>
                                </label>
                                <label className="pure-material-checkbox">
                                    <input type="checkbox" checked={selected("Technical Consultancy")} onChange={(e: any) => {
                                        updateService("Technical Consultancy", e.target.checked);
                                    }} />
                                    <span>Technical Consultancy</span>
                                </label>
                                <label className="pure-material-checkbox">
                                    <input type="checkbox" checked={selected("Other Services")} onChange={(e: any) => {
                                        updateService("Other Services", e.target.checked);
                                    }} />
                                    <span>Other Services</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 sr-from-bottom-5">
                        <div className="form-inline nov-center">
                            <label className="cmr-label">About Project:</label>
                            <textarea className="form-control" placeholder="Description (Optional)" value={state.description} onChange={(e) => onChange("description", e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="col-12 sr-from-bottom-6">
                        <div className="form-inline mt-2">
                            <label className="cmr-label">Document (if any):</label>
                            <Form className="file-upload">
                                <Form.File
                                    id="custom-file"
                                    label="Choose File"
                                    custom
                                    onChange={(e: any) => {
                                        if (e.target.files.length > 0 && e.target.files[0]) {
                                            setFile(e.target.files[0]);
                                        }
                                    }}
                                />
                            </Form>
                        </div>
                        <div className="form-inline">
                            <label className="cmr-label"></label>
                            <div>
                                <span className="file-name">
                                    {file ? file.name : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                        <div className="form-inline mt-2">
                            <label className="cmr-label"></label>
                            <div className="captcha-control">
                                <ReCAPTCHA
                                    sitekey={captchKey}
                                    onChange={(e: any) => {
                                        if (e) {
                                            setCaptcha(true);
                                        }
                                    }}
                                    onExpired={() => setCaptcha(false)}
                                />
                                <span className="error-message captcha-error">
                                    <ErrorUI submit={submitted} message={captcha ? "" : "Please fill the captcha"} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 text-center mt-4">
                        <div className="text-center">
                            <button disabled={isLoading} onClick={() => onSubmit()} className="cmr-solid-btn hvr-shutter-out-horizontal sr-from-bottom-6 get-center">
                                Inquire Now <i className="icon-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ContactForm);