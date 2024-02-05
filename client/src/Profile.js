import React  , {useEffect,useState} from 'react'
import "./profile.css"
import axios from 'axios'
import Post from './Post';
function Profile({user,userData}) {
  const [data,setData] = useState([]);
  const [refresh,setRefresh] = useState(0)
  useEffect(() => {
    
  axios.get(`http://localhost:8080/getAllPlants/${user}`).then((dat)=>{
setData(dat.data);
console.log(dat.data);
  }).catch(e=>console.log(e));
    return () => {
    
    }
  }, [refresh])
  
  return (

    <div className='profile'>
<div className='profile-cont'>
  <img src={userData.profilePic}>
    </img>
    <div className='profile-det'>
      <p>{user}</p>
      <p style = {{"display":"flex","gap":"30px"}}><p> <b>{data.length}</b> Plants</p> <p> <b>{userData.badges}</b> Badges</p> <p> <b>{userData.treePoints}</b> TreePoints</p> </p>
    <b>{userData.username}</b>
    </div>


    </div>
    <div className='uplants-cont'>
{
  data.reverse().map(m=><Post dat = {m}  user = {user} setRefresh = {setRefresh}></Post>)
}
    </div>
      
    </div>
  )
}

export default Profile