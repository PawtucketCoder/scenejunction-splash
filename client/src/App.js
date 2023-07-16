import React, { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Axios from "axios";

const App = () => (
  <div className="app">
    <h1>SceneJunction - Splash</h1>
    <Navigation />
    <Main />
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="home">
    <h1>Welcome to SceneJunction.com</h1>
    <p>Feel free to register!</p>
  </div>
);

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitUser = () => {
    var dateNow;
    dateNow = new Date();
    dateNow = dateNow.getUTCFullYear() + '-' +
        ('00' + (dateNow.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + dateNow.getUTCDate()).slice(-2) + ' ' + 
        ('00' + dateNow.getUTCHours()).slice(-2) + ':' + 
        ('00' + dateNow.getUTCMinutes()).slice(-2) + ':' + 
        ('00' + dateNow.getUTCSeconds()).slice(-2);
    
    Axios.post("http://localhost:3001/api/user/register", {
      email: email,
      username: username,
      password: password,
      createdDate: dateNow,
      modifiedDate: dateNow
    })
  };

  return (
    <div className="App">
      <h1>REGISTER</h1>

      <div className="form">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={submitUser}>Submit</button>

      </div>
    </div>
  );
};

export default App;
