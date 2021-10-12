import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import CareerForm from "./careerForm";
import Modal from 'react-modal';
import openingJson from './../../../constants/opening';

const customStyles = {
    content : {
        background: 'white'
    }
  };
function Opening() {
    const [model, setModel] = useState(false);
    const [job, setJob] = useState('');
    const opening: any = openingJson;
    return (
        <>
        <Modal
            style={customStyles}
            isOpen={model}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => {
                setModel(false)
            }}
            contentLabel="Career Form"
        >
            <CareerForm job={job} onClose={() => setModel(false)}/>
        </Modal>
        <Accordion defaultActiveKey="0">

        {
            opening.map((data: any,key: number) => {
                return(
                    <Card className="sr-from-bottom-1" key={key}>
                    <Accordion.Toggle as={Card.Header} eventKey={`${key}`}>
                        <div className={`opng-icon ${data.imageClass}`}>
                            <i className="icon-apple"></i>
                        </div>
                        <div className="opng-details">
                             <h5>{data.title}</h5>
                            <ul>
                                <li><strong>Experience:</strong> {data.experience}</li>
                                <li><strong>No. of Openings:</strong> {data.opening}</li>
                                <li><strong>Qualifications:</strong> {data.qualifications}</li>
                            </ul>
                        </div>
                        <div>
                            <button onClick={() => {
                                setModel(true);
                                setJob(data.title);
                            }} className="btn btn-dark large-btn">Apply Now <i className="icon-arrow-right ml-2"></i></button>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${key}`}>
                        <Card.Body>
                            <ul className="job-desc">
                                {
                                    data.skills.map((skill: any,key: number) => {
                                        return(
                                            <li key={key}>{skill}</li>
                                        )
                                    })
                                }
                            
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                )
            })
        }
        </Accordion>
        </>
    )
}

export default Opening;