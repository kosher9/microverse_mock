import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null)

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  useEffect(() => {
  //  https://6308fcaff8a20183f76cccfc.mockapi.io/users
    axios.get('https://6308fcaff8a20183f76cccfc.mockapi.io/users')
      .then(function (response) {
        // handle success
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  })

  return (
    <div className="App">
      {
        users ? users.map((user) => {
          return(<div key={user.id}>
            <h5>{user.name}</h5>
            <button onClick={() => deleteUser(user.id)}>Remove</button>
          </div>)
        }) : 0
      }
    </div>
  );
}

export default App;
