import { Component } from "react";
import User from "./User";

const DUMMY_USERS = [
  {
    name: 'RICK',
    id: '1'
  },
  {
    name: 'MORTY',
    id: '2'
  }
]

class Users extends Component {

  constructor(){
    super()
    this.state = {
      showUsers: true,

    };
  }

  toggleUserHandler(){
    this.setState((curState)=>{
      return {showUsers: !curState.showUsers}
    })
  }

  render(){

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user)=>(
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    )

    return(
      <div>
        <button onClick={this.toggleUserHandler.bind(this)}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}
export default Users;

