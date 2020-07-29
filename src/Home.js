import React from 'react'
import styled from 'styled-components';
import Capture from "./assets/Ghina.png";
import {Image} from 'react-bootstrap';

const Styles = styled.div `
#h1 {
    position: absolute;
    text-align: center; 
    top: 25vw; 
    width: 100%;
    font-size: 10vw;
}

`;

export const Home = ()  => (
        <Styles>
            <div className="text-center" id="Home">
                <Image src={Capture} alt="logo" fluid/>
                <h1 id="h1" className="text-white">Welcome</h1>
            </div>
        </Styles>
    )