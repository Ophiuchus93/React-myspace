import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from "semantic-ui-react";

class Login extends React.Component {
  state = { email: "", password: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => { 
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render () {
    const { email, password, } = this.state;
    //this.setState({ [name]: value, });
  
    return (
      <Segment>
        <Header as="h1" textAlign="center">Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Email Address"
            autoFocus
            required
            name="email"
            value={email}
            placeholder= "Email Address"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            type="password"
            placeholder= "Password"
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

export default class ConnectedLogin extends React.Component {
  render () {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
