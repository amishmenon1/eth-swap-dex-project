import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { StyledButton } from "components";
import { round } from "utils/conversion-utils";

function DexDisplay({ input, output }) {
  console.log("DexDisplay --- render");
  const [inputBalance, setInputBalance] = useState("0");
  const [outputBalance, setOutputBalance] = useState("0");
  const spacer = (spacePx) => <div style={{ height: `${spacePx}px` }}></div>;
  const styles = {
    image: {
      objectFit: "cover",
      borderRadius: 40,
      height: "80px",
    },
    header: {
      marginTop: "10px",
      marginBottom: "10px",
      fontFamily: "cursive",
      fontSize: "large",
    },
    dexForm: {},
    dexContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    formContainer: {
      borderRadius: "10px",
      width: "30%",
      padding: "30px",
      backgroundColor: "darkgreen",
    },
    submitButton: {
      marginTop: "20px",
      width: "100%",
    },
    formLabel: {
      display: "flex",
      justifyContent: "right",
      fontSize: "1.5rem",
    },
    spacer: {
      height: "10px",
    },
  };
  useEffect(() => {
    if (!input || !output) {
      return;
    }
    setInputBalance(round(input.balance, 4));
    setOutputBalance(round(output.balance, 4));
  }, [input.balance, output.balance]);
  return (
    <Row style={styles.dexContainer}>
      <Col style={styles.formContainer}>
        <Form style={styles.dexForm} onSubmit={() => {}}>
          <Form.Group>
            <Form.Label htmlFor="input-control" style={styles.formLabel}>
              Balance: {inputBalance} {input.token.symbol}
            </Form.Label>
            <Form.Control
              id="input-control"
              type="text"
              placeholder={input.token.symbol}
            />
          </Form.Group>
          {spacer(20)}
          <Form.Group>
            <Form.Label style={styles.formLabel}>
              Balance: {outputBalance} {output.token.symbol}
            </Form.Label>
            <Form.Control type="text" placeholder={output.token.symbol} />
          </Form.Group>
          {spacer(20)}
          <StyledButton
            hoverEnabled={true}
            style={styles.submitButton}
            type="submit"
          >
            SWAP!
          </StyledButton>
        </Form>
      </Col>
    </Row>
  );
}

export default DexDisplay;
