import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export const Footer = ()  => (
    <div className="bg-dark text-white">
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Visit Eritrea Ltd
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    )
