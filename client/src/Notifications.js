import React , {useState,useEffect} from 'react'

import axios from 'axios'
function Notifications({user,userData}) {
const [plants,setPlants] = useState([]);
useEffect(() => {
  
axios.get("http://localhost:8080/getAllPlants/"+user).then(r=>{
  setPlants(r.data);
  console.log(r.data);
})
  return () => {
    
    
  }
}, [])

  return (
<div style ={{"paddingInline":"100px"}}>
<h1>
  Notifications
</h1>
    <div style = {{width :"70vw",height:"100vh","overflowY":"scroll","display":"flex",flexDirection:"column"}}>{
      plants.map(m=>(<div style = {{"display" :"flex",flexDirection:"row","alignItems":"center",gap:"10px"}}>
        <img src = {userData.profilePic} style = {{width :"30px" , height :"30px" , borderRadius:"100%"}}></img>
<p>Congratulations! We have planted your {m.name}. Please watch it grow</p>
      </div>))
      }
      
  
    </div>
    </div>
  )
}

export default Notifications