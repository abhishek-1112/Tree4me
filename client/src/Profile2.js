import React , {useState,useEffect} from 'react'
import axios from 'axios';
import Post from './Post';
function Profile2({user}) {
    const [id,setId] = useState(window.location.href.split('/')[4])
  const [data,setData] = useState([]);
  const [userData,setUserData] =  useState({});
  const [refresh,setRefresh] = useState(0)
  
useEffect(() => {
  
    axios.post("http://localhost:8080/login2/"+window.location.href.split('/')[4]).then(r=>{
        console.log("aaya annder");
    console.log(r);	
 
    setUserData(r.data);
    });


  return () => {
    
  }
}, [])



    useEffect(() => {
      
    // setId();
      return () => {
        
      }
    }, [])
    

    

    useEffect(() => {
    
        
        axios.get(`http://localhost:8080/getAllPlants/${window.location.href.split('/')[4]}`).then((dat)=>{
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
  data.map(m=><Post dat = {m}  user = {id} setRefresh = {setRefresh}></Post>)
}
    </div>

    
    </div>
    
  )
}

export default Profile2