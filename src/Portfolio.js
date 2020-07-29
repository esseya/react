import React from 'react'
import due from "./assets/2.png";
import tre from "./assets/3.png";
import auno from "./assets/a1.png";
import adue from "./assets/a2.png";
import atre from "./assets/a3.png";
import ghinda from "./assets/Ghinda.png";
import m from "./assets/m.png";
import muno from "./assets/m1.png";
import d from "./assets/d.png";
import {Container, Row, Col, Image} from 'react-bootstrap';

export const Portfolio = ()  => (
    <Container>
        <div  id="Portfolio" className="pt-5">
            <div className="pt-3">
                 <h2 className="text-center">Gallery</h2>
                 <Row xs={1} md={3}>
                     <Col><Image src={due} alt="pic1" fluid/></Col>
                     <Col><Image src={tre} alt="pic2" fluid/></Col>
                     <Col><Image src={auno} alt="pic3" fluid/></Col>
                 </Row>
                 <Row xs={1} md={3}>
                     <Col><Image src={adue} alt="pic4" fluid/></Col>
                     <Col><Image src={atre} alt="pic5" fluid/></Col>
                     <Col><Image src={ghinda} alt="pic6" fluid/></Col>
                 </Row>
                 <Row xs={1} md={3}>
                     <Col><Image src={m} alt="pic7" fluid/></Col>
                     <Col><Image src={d} alt="pic8" fluid/></Col>
                     <Col><Image src={muno} alt="pic9" fluid/></Col>
                 </Row>
                 
            </div>
        </div>
    </Container>
    )