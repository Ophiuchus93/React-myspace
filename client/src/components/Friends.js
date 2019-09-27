import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from "semantic-ui-react"

class Friends extends React.Component {
  state = { friends: [], }


  componentDidMount() {
    axios.get("/api/friends")
      .then(res =>
        this.setState({ friends: res.data })
      );
  }
  // renderFriends = () => {
  //   const { friends } = this.state;
  //   if (friends.length <= 0) {
  //     return <Header as="h2" textAlign="center" color="red">No Friends</Header>
  //   } else {
  //     return friends.map(friends => (
  //       <Card key={friends.id}>
  //         <Image src={friends.avatar} />
  //         <Card.Content>
  //           <Card.Header>{friends.name}</Card.Header>
  //         </Card.Content>
  //       </Card>
  //     ))
  //   }
  // }

  render() {
    const { friends, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { friends.map( friend => 
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header> { friend.name }</Card.Header>
            </Card.Content>

          </Card>
          )}
      </Card.Group>
    );
  };
};

export default Friends;