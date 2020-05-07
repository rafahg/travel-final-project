import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import RafaImage from "../../../assets/images/rafa.png";
import GarethImage from "../../../assets/images/gareth.png";
import NimaImage from "../../../assets/images/nima.png";
import NehaImage from "../../../assets/images/neha.png";
import ArtemisImage from "../../../assets/images/artemis.png";
import Individual from "./Individual";

import * as DESCRIPTION from "./Description";

const About = () => {
  const individualPerson = () => {
    const individual = [
      {
        eventKey: "rafa",
        titleAndName: "Rafa Hernandez",
        img: RafaImage,
        desc: DESCRIPTION.RAFA,
        link: "https://github.com/rafahg",
      },
      {
        eventKey: "artemis",
        titleAndName: "Artemis Papanikolaou",
        img: ArtemisImage,
        desc: DESCRIPTION.ARTEMIS,
        link: "https://github.com/artemis-p",
      },
      {
        eventKey: "neha",
        titleAndName: "Neha Singh",
        img: NehaImage,
        desc: DESCRIPTION.NEHA,
        link: "https://github.com/sgneha",
      },
      {
        eventKey: "gareth",
        titleAndName: "Gareth Harris",
        img: GarethImage,
        desc: DESCRIPTION.GARETH,
        link: "https://github.com/gdharris1000",
      },
      {
        eventKey: "nima",
        titleAndName: "Nima Soufiani",
        img: NimaImage,
        desc: DESCRIPTION.NIMA,
        link: "https://github.com/Nimzyow",
      },
    ];

    return individual.map((ind) => (
      <Tab eventKey={ind.eventKey} title={ind.titleAndName}>
        <Individual
          name={ind.titleAndName}
          img={ind.img}
          desc={ind.desc}
          link={ind.link}
        />
      </Tab>
    ));
  };

  return (
    <div className="container cont">
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
          {individualPerson()}
        </Tabs>
      </div>
    </div>
  );
};

export default About;
