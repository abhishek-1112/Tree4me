import './App.css';
import {useState} from 'react'
import axios from 'axios';
import  signInWithGoogle  from "./Firebase.js";
import Chat from "./Chat";
import { FaBeer } from 'react-icons/fa';
import {MdOutlineOndemandVideo,MdOutlineExplore} from 'react-icons/md'
import {RiPlantFill, RiNotification3Fill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {BiSearchAlt} from 'react-icons/bi'
import Profile from './Profile'
import Greels from './Greels'
import Notifications from './Notifications'
import Explore from './Explore'
import Landing from "./Landing.js"
import Purchase from './Purchase'
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes , Link } from "react-router-dom";
import Search from './Search';
import Profile2 from './Profile2';
function App() {
const [login,setLogin] = useState(false);
const [username , setUsername] = useState("afa");
const [user,setUser] = useState('');
const [userData, setUserData] = useState({});
const Login =() =>{
    



signInWithGoogle().then(res=>{
	
	// alert(JSON.stringify(res))	;
	// console.log(res);

axios.post("http://localhost:8080/login",res.user).then(r=>{
	console.log("aaya annder");
console.log(r);	
setLogin(true);
setUsername(r.data.userId);
setUser(r.data.userId);
setUserData(r.data);
});
})

 
  }
  
  const dataR = (ID)=>{
	axios.post("http://localhost:8080/login",{email : ID}).then(r=>{
		console.log("aaya annder");
	
	setUserData(r.data);
	});
}  
if(login == false)
return (<>
{/* <button onClick = {()=>Login()}>Login</button> */}
<Landing login = {Login}></Landing>
</>)
else;

  return (
    <div className="App">
		{/* {username} */}
		<Chat></Chat>
    <Router>
      <div className='App-cont'>
    
    
     <div class = "sidebar">
      <h2>Tree4me</h2>
    
    <Link to = "/">
      <div className = "sidebar-btn"><p className = "sidebar-icon"><CgProfile/></p><p className='sidebar-txt'>Profile</p></div>
    </Link>
    <Link to = "/Explore">
    
      <div className = "sidebar-btn"><p className = "sidebar-icon"><MdOutlineExplore/></p><p className='sidebar-txt'>Explore</p></div>
    </Link>

    <Link to = "/Greels">

      <div className = "sidebar-btn"><p className = "sidebar-icon"><MdOutlineOndemandVideo/></p><p className='sidebar-txt'>Greels</p></div>
	  </Link>

	  <Link to = "/Purchase">

      <div className = "sidebar-btn"><p className = "sidebar-icon"><RiPlantFill/></p><p className='sidebar-txt'>Purchase</p></div>
	  </Link>

    <Link to = "/Search">

<div className = "sidebar-btn"><p className = "sidebar-icon"><BiSearchAlt/></p><p className='sidebar-txt'>Search</p></div>
</Link>

	  <Link to = "/Notifications">

      <div className = "sidebar-btn"><p className = "sidebar-icon"><RiNotification3Fill/></p><p className='sidebar-txt'>Notifications</p></div>
	  </Link>


     </div>
	 
     <Routes>
      <Route path = '/' element = {<><Profile user = {user} userData = {userData}></Profile></>}></Route>
      <Route path = '/Explore' element = {<><Explore user = {user} userData = {userData}></Explore></>}></Route>

      <Route path = '/Greels' element = {<><Greels></Greels></>}></Route>
      <Route path = '/Purchase' element = {<><Purchase user = {user} userData = {userData} dataR = {dataR}></Purchase></>}></Route>
      <Route path = '/Notifications' element = {<><Notifications user = {user} userData = {userData}></Notifications></>}></Route>
      <Route path = '/Profile/:id' element = {<><Profile2 user ={user} userData ={userData}></Profile2></>}></Route>
      <Route path = '/Search' element = {<><Search></Search></>}></Route>
     
	 </Routes>
     </div>
 
     </Router>
    </div>
  );
}

export default App;
