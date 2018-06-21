import React, { Component } from "react";
import {Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class OurTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('Name: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return(
            <Grid>
                <Row className="show-grid">
                    <Col lg={12}>
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formInlineName">
                                <ControlLabel>Name</ControlLabel>{' '}
                                <FormControl type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange}/>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineEmail">
                               <ControlLabel>Email</ControlLabel>{' '}
                               <FormControl type="email" placeholder="name@example.com" />
                            </FormGroup>{' '}
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                  <Button value="submit" type="submit">Sign in</Button>
                                </Col>
                              </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
function UserGreeting(props) {
  return <div className="login-greet"> <h3>Hola!</h3> </div>;
}

function GuestGreeting(props) {
  return <div className="login-greet"> <h3>Please sign up.</h3> </div>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick} className="btn-style">
        Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick} className="btn-style">
           Logout
        </button>
    );
}
export default OurTeam;