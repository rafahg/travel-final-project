import React from "react";
import { Tabs, Tab, Image } from "react-bootstrap";
import RafaImage from "../../../assets/images/rafa.png";
import GarethImage from "../../../assets/images/gareth.png";
import NimaImage from "../../../assets/images/nima.png";
import Neha from "../../../assets/images/neha.png";
import Artemis from "../../../assets/images/artemis.png";
import Individual from "./Individual";

import * as DESCRIPTION from "./Description";

const About = () => {
  return (
    <div className="container">
    <div data-test="about-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          marginTop: "50px",
        }}
      >
        <h3 style={{ width: "80%" }} className="text-center">
          Below are the people who worked on this wonderful application. Click
          on any of their names below to find out more about them.{" "}
        </h3>
      </div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="rafa" title="Rafa Hernandez">
          <Individual
            name="Rafa Hernandez"
            img={RafaImage}
            desc={DESCRIPTION.RAFA}
            link="https://github.com/rafahg"
          />
        </Tab>
        <Tab eventKey="artemis" title="Artemis Papanikolaou">
          <Individual
            name="Artemis Papanikolaou"
            img={Artemis}
            desc={DESCRIPTION.RAFA}
            link="https://github.com/artemis-p"
          />
        </Tab>
        <Tab eventKey="neha" title="Neha Singh">
          <Individual
            name="Neha Singh"
            img={Neha}
            desc={DESCRIPTION.RAFA}
            link="https://github.com/sgneha"
          />
        </Tab>
        <Tab eventKey="gareth" title="Gareth Harris">
          <Individual
            name="Gareth Harris"
            img={GarethImage}
            desc={DESCRIPTION.RAFA}
            link="https://github.com/gdharris1000"
          />
        </Tab>
        <Tab eventKey="nima" title="Nima Soufiani">
          <Individual
            name="Nima Soufiani"
            img={NimaImage}
            desc={DESCRIPTION.NIMA}
            link="https://github.com/Nimzyow"
          />
        </Tab>
      </Tabs>
    </div>
    </div>
  );
};

export default About;
