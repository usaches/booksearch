import React from "react";
import { Col, Row, Container } from "../components/Grid";
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
         <p>404</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
