import React, { useState } from "react";
import { Toast, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faMoneyBillWave,
  faClock,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const SpotDetailsAbout = ({
  avg_cost,
  best_times,
  dress,
  description,
  advice,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Col>
      <p>
        <FontAwesomeIcon icon={faMoneyBillWave} /> : £{avg_cost}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} /> : {best_times}
      </p>
      <p>
        <FontAwesomeIcon icon={faUserTie} /> : {dress}
      </p>
      <p>
        <FontAwesomeIcon icon={faInfoCircle} /> : {description}
      </p>
      <div className="spotButton">
        <Button onClick={() => setShow(true)}>
          Let me give you some advice...
        </Button>
      </div>
      <Toast onClose={() => setShow(false)} show={show} delay={20000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">
            Advice from DateSpot's in-house experts
          </strong>
        </Toast.Header>
        <Toast.Body>{advice}</Toast.Body>
      </Toast>
    </Col>
  );
};

export default SpotDetailsAbout;
