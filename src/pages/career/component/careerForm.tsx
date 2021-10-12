import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import closeIcon from '../../../assets/images/close.svg';
import ImageView from '../../../components/ImageView';
import { apiEndpoint, captchaKey } from "../../../constants/apiConfig";
import { toast } from 'react-toastify';

import "./career.scss";

const URL = `${apiEndpoint}/apply`;
const captchKey = captchaKey;


const ErrorUI = ({ message, submit }: any) => {
    if (message && submit) {
        return <span>{message}</span>
    } else {
        return <></>
    }
}

function CareerForm(props: any) {
    const [submitted, setSubmit] = useState(false);
    const [file, setFile]: any = useState(null);
    const [emailError, setError] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [state, setState]: any = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
        company: ''
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

    function onSubmit() {
        setSubmit(true);
        if (!state.name) {
            return;
        }
        if (!state.email) {
            return;
        }
        if (!state.phone) {
            return;
        }
        
        if (!state.company) {
            return;
        }
        if (emailError) {
            return;
        }

        if (!captcha) {
            return;
        }

        var myHeaders = new Headers();
        var formdata = new FormData();

        if (file) {
            formdata.append("image", file);
        }
        formdata.append("job", props.job);
        for (let i in state) {
            formdata.append(i, state[i].toString());
        }
        
        let windowObj: any = window;

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        
        setLoading(true);
        fetch(URL, requestOptions)
            .then(function (res) {
                return res.json();
            })
            .then(function (result) {
                setLoading(false);
                windowObj.grecaptcha.reset();
                setCaptcha(false);
                if (result.success) {
                    setState({
                        name: '',
                        email: '',
                        phone: '',
                        description: '',
                        company: ''
                    });
                    setSubmit(false);
                    setFile(null);
                    toast.success("Thank you. Your application submitted successfully. We will get back to you soon.")
                    props.onClose();
                }
            })
            .catch(error => {
                console.log('error', error);
                windowObj.grecaptcha.reset();
                setCaptcha(false);
                setLoading(false);
            });

    }


    return (
        <>
            <button className="close-btn" onClick={() => props.onClose()}>
                <ImageView src={closeIcon} alt="icon" />
            </button>
            <div className="modal-header">
                <div>Apply Now <span>({props.job || ''})</span></div>
            </div>
            <div className="container mini-container" id="careerForm">

                <div className="cmr-contact mt-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-inline sr-from-bottom-2">
                                <label className="cmr-label">Name:</label>
                                <input 
                                    className="form-control" 
                                    placeholder="e.g. Ross" 
                                    value={state.name} 
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        value = value.replace(/[^A-Za-z\s]/ig, '')
                                        onChange('name', value)}
                                    } 
                                />
                                <span className="error-message">
                                    <ErrorUI submit={submitted} message={state.name ? '' : "Please enter your name"} />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-3">
                            <div className="form-inline">
                                <label className="cmr-label">Email:</label>
                                <input className="form-control" placeholder="e.g. ross@yopmail.com" value={state.email} onChange={(e) => onChange('email', e.target.value)} />
                                <span className="error-message">
                                    <ErrorUI
                                        submit={submitted}
                                        message={state.email ? (emailError ? "Enter valid email" : '') : "Please enter email"} />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-2">
                            <div className="form-inline">
                                <label className="cmr-label">Phone Number:</label>
                                <input type="number" className="form-control" placeholder="e.g. 999-999-9999" value={state.phone} onChange={(e) => onChange('phone', e.target.value)} />
                                <span className="error-message">
                                    <ErrorUI submit={submitted} message={state.phone ? '' : "Please enter phone number"} />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-3">
                            <div className="form-inline">
                                <label className="cmr-label">Comapny:</label>
                                <input type="text" className="form-control" placeholder="Company name" value={state.company} onChange={(e) => onChange('company', e.target.value)} />
                                <span className="error-message">
                                    <ErrorUI submit={submitted} message={state.company ? '' : "Please enter company"} />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-12 sr-from-bottom-5">
                            <div className="form-inline nov-center">
                                <label className="cmr-label">Your message:</label>
                                <textarea className="form-control" placeholder="Your message (Optional)" value={state.description} onChange={(e) => onChange('description', e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline mt-2">
                                <label className="cmr-label">Resume:</label>
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
                            <span className="error-message">
                                <ErrorUI submit={submitted} message={file ? '' : "Please select resume"} />
                            </span>
                            <div className="form-inline">
                                <label className="cmr-label"></label>
                                <div>
                                    <span className="file-name">
                                        {file ? file.name : ''}
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
                                        <ErrorUI submit={submitted} message={captcha ? '' : "Please fill the captcha"} />
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="text-center">
                        <button disabled={isLoading} onClick={() => onSubmit()} className="cmr-solid-btn hvr-shutter-out-horizontal sr-from-bottom-6 get-center">
                            Apply Now <i className="icon-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CareerForm;