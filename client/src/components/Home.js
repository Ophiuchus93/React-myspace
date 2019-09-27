// import React from "react";
// import axios from "axios";
// import { Link, } from "react-router-dom";
// import { Header, Image, Card, Button, } from "semantic-ui-react"; 

// class Home extends React.Component {
//   state = { friends: [], };


//   componentDidMount() {
//     axios.get("/api/friends")
//     .then( res => this.setState({ friends: res.data }))
//   }

//   sample = () => {
//     const { friends, } =this.state;

//     if (friends.length) {
//       const index = Math.floor(Math.random() * friends.length);
//       return friends[index];
//     } else {
//       return null;
//     }
//   }

//   render() {
//     const friend = this.sample();
//     if (friend) {
//     return(
//       <div>
//         <br />
//         <Header as="h1" textAlign="center">My Space</Header>
//         <br />
//         <Card key={friend.id}>
//           <Image src={friend.avatar} />
//           <Card.Content>
//             <Card.Header>
//               { friend.name }
//             </Card.Header>
//           </Card.Content>
//         </Card>
//         <Link to="/friends">
//           <Button color="orange">
//             My Friends
//           </Button>
//         </Link>
//       </div>
//     );
//     } else { 
//       return <Header textAlign="center">No More Friends</Header>
    
//   };
// };
// };



// export default Home;

import React from 'react';
import axios from 'axios';
import { Card, Header, Image, Button, Icon } from "semantic-ui-react"

class Home extends React.Component {
  state = { friends: [], }


  componentDidMount() {
    axios.get("/api/friends")
      .then(res => {
        this.setState({ friends: res.data })
      })
  }
  renderFriends = () => {
    const { friends } = this.state;
    if (friends.length <= 0) {
      return <Header as="h2" contentAlign="center" color="red">No Friends</Header>
    } else {
      return friends.map(friends => (
        <Card key={friends.id}>
          <Image src={friends.avatar} />
          <Card.Content>
            <Card.Header>{friends.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downvote(friends.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upvote(friends.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
        </Card>
      ))
    }
  }

  downvote = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter( f => f.id !== id ),});
  }

  upvote = (id) => {
    const { friends, } =this.state;
    axios.put(`/api/friends/${id}`)
    .then( () => this.setState({ friends: friends.filter( f => f.id !== id),}) )
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

export default Home;