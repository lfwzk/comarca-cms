import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

import imagen1 from '../../assets/images/home/l8.png';
import imagen2 from '../../assets/images/home/l9.png';
import imagen3 from '../../assets/images/home/l1.png';

import imagen4 from '../../assets/images/home/l2.png';
import imagen5 from '../../assets/images/home/l5.png';
import imagen6 from '../../assets/images/home/l6.png';

class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center" id="partners">
          <Col id="partner1" lg="2" md="2" xs="6" className="text-center py-4">
            <img src={imagen1} className="avatar avatar-ex-sm" alt="Avatar" />
          </Col>

          <Col id="partner2" lg="2" md="2" xs="6" className="text-center py-4">
            <img src={imagen2} className="avatar avatar-ex-sm" alt="" />
          </Col>
      
          <Col
            id="partner3"
            lg="2"
            md="2"
            xs="6"
            className="text-center py-4"
          >
            <img src={imagen3} className="avatar avatar-ex-sm" alt="" />
          </Col>

          <Col
            id="partner4"
            lg="2"
            md="2"
            xs="6"
            className="text-center py-4"
          >
            <img src={imagen4} className="avatar avatar-ex-sm" alt="" />
          </Col>

          <Col
            id="partner5"
            lg="2"
            md="2"
            xs="6"
            className="text-center py-4"
          >
            <img src={imagen5} className="avatar avatar-ex-sm" alt="" />
          </Col>

          <Col
            id="partner6"
            lg="2"
            md="2"
            xs="6"
            className="text-center py-4"
          >
            <img src={imagen6} className="avatar avatar-ex-sm" alt="" />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Partners;
