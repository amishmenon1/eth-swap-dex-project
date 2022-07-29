import React from "react";
import Row from "react-bootstrap/Row";

function Disclaimer ({ message }) {
  return (
    <Row className="centeralign">
      <h3>Disclaimer</h3>
      <Row>
        <p>{message}</p>
      </Row>
    </Row>
  );
};

export default Disclaimer;
