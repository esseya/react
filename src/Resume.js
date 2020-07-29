import React from 'react'
import cafe from "./assets/cafe.png";
import diving from "./assets/diving.png";
import hiking from "./assets/hiking.png";
import {Container, Row, Col, Image} from 'react-bootstrap';

export const Resume = ()  => (
    <Container>
        <div id="Resume"  className="pt-5">
        <div className="pt-3">
            <h2 className="text-center pt-5 pb-5 ">Activities</h2>
            <Row className="text-center" xs={1} md={3}>
                <Col>
                    <Image src={cafe} alt="city" fluid/>
                    <h4 className="pt-3">ASMARA</h4>
                    <p>Walking in the beatiful and clean streets of the capital city and enjoying the beatiful athmosphere of the various and diverse cafe</p>
                </Col>
                <Col>
                    <Image src={diving} alt="diving" fluid/>
                    <h4 className="pt-3">MASSAWA</h4>
                    <p>Diving in the beatiful and diverse red sea and enjoy the lifeful nightlife of the city of Massawa</p>
                </Col>
                <Col>
                    <Image src={hiking} alt="hiking" fluid/>
                    <h4 className="pt-3">GASH-BARKA AND DEBUB</h4>
                    <p>Hiking in the lowland of the Gash-Barka region or in the mountainous Southern Region</p>
                </Col>
            </Row>

        </div>
        </div>
    </Container>
    )
