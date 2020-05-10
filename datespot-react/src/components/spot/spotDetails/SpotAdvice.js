import React, { Fragment, useState } from "react";
import { Toast, Button } from "react-bootstrap";

const SpotAdvice = ({ advice }) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="spotButton">
        <Button onClick={() => setShow(true)}>
          Let me give you some advice...
        </Button>
      </div>
      <SpotAdvice advice={advice} />
      <Toast onClose={() => setShow(false)} show={show} delay={20000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">
            Advice from DateSpot's in-house experts
          </strong>
        </Toast.Header>
        <Toast.Body>{advice}</Toast.Body>
      </Toast>
    </Fragment>
  );
};

export default SpotAdvice;
