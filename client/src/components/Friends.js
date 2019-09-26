import React from 'react';
import axios from 'axios';
import { Card, Header, Image } from "semantic-ui-react"

class Friends extends React.Component {
  state = { friends: [], }


  componentDidMount() {
    axios.get("/api/friends")
      .then(res => {
        this.setState({ friends: res.data })
      })
  }
  renderFriends = () => {
    const { friends } = this.state;
    if (friends.length <= 0)
      return <Header as="h2" textAlign="center" color="red">No Friends</Header>
    return friends.map(friends => (
      <Card key={friends.id}>
        <Image src={friends.avatar} />
        <Card.Content>
          <Card.Header>{friends.name}</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Friends</Header>
        <br />
        <Card.Group>
          {this.renderFriends()}
        </Card.Group>
      </div>
    );
  };
};

export default Friends;