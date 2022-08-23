
import './App.css';

import {Routes, Route} from "react-router-dom"

import NavbarHome from './components/NavbarHome';
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Event from "./pages/events/Events";
import Member from "./pages/Member";
import Colaborators from "./pages/Colaborators";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Admin from "./pages/profile/Admin";
import Myprofile from "./pages/profile/Myprofile";
import IsPrivate from './components/IsPrivate';
import UsServices from './pages/UsServices';
import IsAdmin from './components/IsAdmin';


function App() {
  return (
    <div className="App">
      <NavbarHome/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        
        <Route path="/events" element={<Event/>}/> 

        {/* ponerle que solo puede entrar admin  */}  
        <Route path="/admin" element={<IsAdmin><Admin/></IsAdmin>}/>

        <Route path="/member" element={<Member/>}/>
        <Route path="/colaborators" element={<Colaborators/>}/>
        <Route path="/usservices" element={<UsServices/>}/>
        <Route path="/myprofile" element={<IsPrivate><Myprofile/></IsPrivate>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        

        {/* componentes para error handling */}
        <Route path="/error" element={<Error/>}/>
        <Route path="/*" element={<NotFound/>}/>




      </Routes>

    </div>
  );
}

export default App;
