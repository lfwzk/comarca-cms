import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import BackgroundSlider from "react-background-slider";
import ReactTextRotator from 'react-text-rotator';

// Import images
import bg01 from "../../assets/images/blog/comunidad/comunidad.jpg";
import bg02 from "../../assets/images/blog/ofvirtual/ofvirtual.jpg";
import bg03 from "../../assets/images/blog/creativo/creativo.jpg";
import { Link } from "react-router-dom";


const rotatetext = [
  {
    text: "Servicios",
    animation: "false",
  },
  {
    text: "Servicios",
    animation: "false",
  },
  {
    text: "Servicios",
    animation: "false",
  },
];

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [bg01, bg02, bg03],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-slider position-relative mt-5">
          <div className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item mt-4 active">
                <div
                  className="bg-half-170"
                >
                  <BackgroundSlider
                    images={this.state.items}
                    duration={8}
                    transition={1}
                  />
                  <div className="bg-overlay"></div>
                  <Container>
                    <Row className="mt-5 justify-content-center">
                      <Col xs={12}>
                        <div className="title-heading text-center">
                          <h2 className="text-white title-dark mb-3">
                            <ReactTextRotator
                              content={rotatetext}
                              time={2000}
                            />
                          </h2>
                          <p className="para-desc mx-auto text-white-50 mb-0">
                            Comience a trabajar con CO MARCA que puede brindarle todo lo que necesita para generar conciencia.
                          </p>
                          <div className="mt-4">
                            <Link to="#" className="btn btn-primary">
                              Reserva{" "}
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
