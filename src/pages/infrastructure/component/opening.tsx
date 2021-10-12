import React from "react";
import { Accordion, Card } from "react-bootstrap";

function Opening() {
    return (
        <Accordion defaultActiveKey="0">
            <Card className="sr-from-bottom-3">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="opng-icon one-opng">
                        <i className="icon-apple"></i>
                    </div>
                    <div className="opng-details">
                        <h5>iOS Developer</h5>
                        <ul>
                            <li><strong>Experience:</strong> 2+ Years</li>
                            <li><strong>No. of Openings:</strong> 3</li>
                            <li><strong>Qualifications:</strong> B.E / B.Tech</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn btn-dark large-btn">Apply Now <i className="icon-arrow-right ml-2"></i></button>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul className="job-desc">
                            <li>Should have hands on experience on: – Asp.net 2.0/3.5/4.0, C#</li>
                            <li>Good database Skill on MS SQL Server 2008, R2</li>
                            <li>Hands on experience on MVC is must</li>
                            <li>Good analytical Skills &amp; Problem solving skills</li>
                            <li>Approach on building scalable &amp; secure applications</li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="sr-from-bottom-4">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="opng-icon two-opng">
                        <i className="icon-apple"></i>
                    </div>
                    <div className="opng-details">
                        <h5>iOS Developer</h5>
                        <ul>
                            <li><strong>Experience:</strong> 2+ Years</li>
                            <li><strong>No. of Openings:</strong> 3</li>
                            <li><strong>Qualifications:</strong> B.E / B.Tech</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn btn-dark large-btn">Apply Now <i className="icon-arrow-right ml-2"></i></button>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ul className="job-desc">
                            <li>Should have hands on experience on: – Asp.net 2.0/3.5/4.0, C#</li>
                            <li>Good database Skill on MS SQL Server 2008, R2</li>
                            <li>Hands on experience on MVC is must</li>
                            <li>Good analytical Skills &amp; Problem solving skills</li>
                            <li>Approach on building scalable &amp; secure applications</li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="sr-from-bottom-5">
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="opng-icon three-opng">
                        <i className="icon-apple"></i>
                    </div>
                    <div className="opng-details">
                        <h5>iOS Developer</h5>
                        <ul>
                            <li><strong>Experience:</strong> 2+ Years</li>
                            <li><strong>No. of Openings:</strong> 3</li>
                            <li><strong>Qualifications:</strong> B.E / B.Tech</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn btn-dark large-btn">Apply Now <i className="icon-arrow-right ml-2"></i></button>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <ul className="job-desc">
                            <li>Should have hands on experience on: – Asp.net 2.0/3.5/4.0, C#</li>
                            <li>Good database Skill on MS SQL Server 2008, R2</li>
                            <li>Hands on experience on MVC is must</li>
                            <li>Good analytical Skills &amp; Problem solving skills</li>
                            <li>Approach on building scalable &amp; secure applications</li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Opening;