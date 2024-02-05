import React from 'react'
import {ImLeaf} from 'react-icons/im';
import axios from 'axios';
import {GrLocation} from 'react-icons/gr';
function onlyUnique(myArray) {
    return [...new Set(myArray)]
  }
export default function Post({dat,user,setRefresh}) {
  return (
    <div className='post-cont'>

    <div className = "post-card">
  {

  }
  

{window.location.href.split('/')[3] != "Explore"?<>
<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
</>:null}



        <h3>{dat.name}</h3>
        {dat.location?<p style = {{"fontSize":"12px","lineHeight":"0px"}}><GrLocation></GrLocation>{dat.location}</p>:""}
        <img src = {dat.photoUrl}></img>
        <p style = {{"display":"flex","alignItems":"center","gap":"10px"}}><img style={{"width":"26px","height" :"26px","borderRadius":"100%"}} src= {dat.photoUrl}></img>{dat.user}</p>

        <br></br><br></br>
       <div style = {{"display" : "flex","flex-direction":"row","alignContent":"baseline","gap":"20px",marginTop:window.location.href.split('/')[3] == "Explore"?"-40px":"0px"}}> 
       {/* <p > */}
       <ImLeaf onClick={()=>{
axios.post(`http://localhost:8080/likePlant/${dat._id}?user=${user}`).then(e=>{
    setRefresh(p=>p+1);
}).catch(e=>{
    console.log(e)
})
    }} style = {{color:dat.likes.find(usrs => usrs==user)?"green":"black"}}></ImLeaf>
        {/* </p> */}
        
        {onlyUnique(dat.likes).length>0?<>
            Liked By{onlyUnique(dat.likes)[0]} { onlyUnique(dat.likes).length>1 ?<> <>and</> {onlyUnique(dat.likes).length -1} other</> :null }
        
        </>:null}
        </div>
        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    </div>
    </div>
  )
}
