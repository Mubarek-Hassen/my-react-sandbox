import { Component } from "react";


class User extends Component {
  componentWillUnmount(){
    console.log('User Will Unmount!')
  }
  render() {
    return <li style={{listStyle: 'none'}}>{this.props.name}</li>
  }
}

export default User;