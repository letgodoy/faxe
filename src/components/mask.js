import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

// import Logo from '../images/FAXE-LOGO.png'
// import Lata from '../images/FAXE_Premium_1000ml_Front.png'

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{ marginTop: "40vh" }}>
            <MDBRow >
                <MDBCol md="6" className="white-text">
                {/* <img src={Logo} alt="logo" style={{ width: "30%", margin: "auto" }} /> */}
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">Share a Faxe, Share a Story.</h2>
                    {/* <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
                    <MDBBtn color="info" ><MDBIcon icon="home" className="mr-2" /> Visit us</MDBBtn> */}
                    
                    {/* <h4 className="subtext-header h4-responsive mt-2 mb-4"></h4> */}
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">O viking moderno vence uma batalha por dia e merece o momento sagrado do Happy Hour.</h4>
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Chame os amigos para dividir esse momento, dividir uma Faxe e dividir as suas histórias.</h4>
                    <hr className="hr-light my-4 w-100" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Siga a Faxe nas redes sociais:</h4>
                    <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                    <MDBIcon fab icon="twitter" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                    <MDBIcon fab icon="linkedin-in" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                    <MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                </MDBCol>
                <MDBCol md="6" className="white-text text-center">
                    {/* <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">Creative Agency</h2>
                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
                    <MDBBtn color="info" ><MDBIcon icon="home" className="mr-2" /> Visit us</MDBBtn> */}
                    {/* <img src={Lata} alt="logo" style={{ width: "80%", margin: "auto" }} /> */}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
