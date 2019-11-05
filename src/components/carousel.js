import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import image4 from "../images/abstract-art1.webp"
import image2 from "../images/abstract-art2.webp"
import image3 from "../images/abstract-art3.webp"

import Premium from '../images/premium.png'
import Ipa from '../images/ipa.png'
import C10 from '../images/10.png'
import Royal from '../images/royal.png'
import Witbier from '../images/witbier.png'

const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={5} className="z-depth-1 w-100" showIndicators={false}>
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={Premium} alt="Faxe Premium Bier" />
                        {/* <MDBMask overlay="black-strong" /> */}
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={Ipa} alt="Faxe Ipa Bier" />
                        {/* <MDBMask overlay="black-strong" /> */}
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={C10} alt="Faxe 10% Bier" />
                        {/* <MDBMask overlay="black-strong" /> */}
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                        <img className="d-block w-100" src={Royal} alt="Faxe Royal Bier" />
                        {/* <MDBMask overlay="black-strong" /> */}
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                    <MDBView>
                        <img className="d-block w-100" src={Witbier} alt="Faxe Witbier Bier" />
                        {/* <MDBMask overlay="black-strong" /> */}
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
