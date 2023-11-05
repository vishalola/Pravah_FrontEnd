import "./App.css"
import {Route,Routes} from 'react-router-dom'
import Login from "./Sections/LogIn_SignUp/login";
import SignUp from "./Sections/LogIn_SignUp/signup";
import ProjectPage from "./Sections/Project Page";
import Slider from "./Sections/misc/slider";
import Tasks from "./Sections/Tasks";
import Home from "./Sections/Home";
import Profile from "./Sections/Profile";
import { useState,useEffect } from "react";
function App() {
  let [email,setEmail] = useState('vishalola555@gmail.com');
  let [name,setName] = useState('Vishal Ola');
  let [userName,setUserName] = useState('vishalola21');

  let [isLoggedIn,setIsLoggedIn] = useState(true);
  return (
    <>
    <Slider isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile name={name} email={email} userName={userName}/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/:pid" element={<ProjectPage/>}/>
      <Route path="/login" element={<Login setLog={setIsLoggedIn} setUserName={setUserName} setEmail={setEmail} setName={setName}/>}/>
      <Route path = "/signup" element={<SignUp/>}/>
    </Routes>

    </>
  );
}

export default App;
