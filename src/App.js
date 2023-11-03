import "./App.css"
import {Route,Routes} from 'react-router-dom'
import Login from "./Sections/LogIn_SignUp/login";
import SignUp from "./Sections/LogIn_SignUp/signup";
import ProjectPage from "./Sections/Project Page";
import Slider from "./Sections/misc/slider";
import Tasks from "./Sections/Tasks";
import Home from "./Sections/Home";
import Profile from "./Sections/Profile";
import CustomAutoComplete from "./Node/Tasks_v2/customAuto";
function App() {

  return (
    <>
    <Slider isLoggedIn={true}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/:pid" element={<ProjectPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path = "/signup" element={<SignUp/>}/>
    </Routes>

    </>
  );
}

export default App;
