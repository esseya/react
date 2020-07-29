import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export const Contact = ()  => (
    <Container>
        <div className="pt-5" id="Contact">
            <h2 className="pb-3 text-center ">Contact Us</h2>
            <Row xs={1} md={3} >
                <Col>
                    <form className="pb-5" id="contact-form"  method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Col>
                <Col className="ml-5">
                    <br />
                    <h4>VISIT ERITREA LTD</h4>
                    <br />
                    <h5>HARNET AVENUE N. 46</h5>
                    <h5>ASMARA -ERITREA</h5>
                    <br />
                    <h5>TEL:- 1234567890</h5>
                    <h5>EMAIL:- visit@visiteritrea.com</h5>
                </Col>
            </Row>

        </div>
    </Container>
    )