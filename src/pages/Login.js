import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Helmet title="Login">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4 pt-5">Login</h3>
                <Form className="auth_form">
                  <FormGroup className="form_group">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={e=> setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input 
                      type="password" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={e=> setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button className="buy_btn auth_btn" type="submit">Login</button>
                  <p>
                    Don't have an account?
                    <Link to="/signup">Create an account</Link>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Login;
