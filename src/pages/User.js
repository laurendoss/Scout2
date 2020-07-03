import React from "react";
import { UserContext } from "../utils/UserContext";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function User() {
  const { state } = React.useContext(UserContext);


  

 
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Welcome, {state.name}!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Registered Email:</h4>
            <p>{state.email}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
