import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";

import { Container } from "reactstrap";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [isClicked, setClick] = useState(false);
  const url = "https://reqres.in/api/users?page=1";
  const fetchUsers = async () => {
    const { data } = await Axios.get(url);
    const user = data.data;
    setUsers(user);
  };
  console.log(users[0]);
  useEffect(() => {
    fetchUsers();
  }, [users]);

  const showData = () => {
    setClick(!isClicked);
  };

  return (
    <>
      <div className="App">
        <Navbar handleClick={showData} />
        <Container>
          {isClicked ? (
            <div className="main">
              {users.map((data) => {
                return (
                  <UserCard
                    key={data?.id}
                    lname={data?.first_name}
                    fname={data?.last_name}
                    email={data?.email}
                    picUrl={data?.avatar}
                  />
                );
              })}
            </div>
          ) : null}
        </Container>
      </div>
    </>
  );
}

export default App;
