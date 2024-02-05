import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Post from './Post';
import "./profile.css"



function Explore({user,userData}) {

  const [data,setData] = useState([]);
  const [refresh,setRefresh] = useState(0)
  useEffect(() => {
    
  axios.get(`http://localhost:8080/getAllPlants`).then((dat)=>{
setData(dat.data);
console.log(dat.data);
  }).catch(e=>console.log(e));
    return () => {
    
    }
  }, [refresh])
  


  return (
    <div style={{height:"100vh",overflowY:"scroll"}}>
   
{
  data.reverse().map(m=><Post dat = {m}  user = {user} setRefresh = {setRefresh}></Post>)
}
    </div>


   
  )
}

export default Explore