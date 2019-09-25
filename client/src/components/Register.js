import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from "semantic-ui-react";

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "",};

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if ( password === passwordConfirmation )
      handleRegister({ email, password, passwordConfirmation,}, history);
      else 
        alert("Passwords Do Not Match!")
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render () {
    const { email, password, passwordConfirmation, } = this.state;
    return (
      <Segment>
        <Header as="h1" textAlign="center">Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Email Address"
            required
            autoFocus
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
          />
          <div>
            <Button primary type="submit" color="blue">Submit</Button>
          </div>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render () {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
