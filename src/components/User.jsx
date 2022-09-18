import { Component } from "react";


class User extends Component {
  render() {
    return <li>{this.props.name}</li>
  }
}

export default User;