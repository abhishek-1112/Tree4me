import React  , {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Search() {
  const [value,setValue] = useState("");
    const [users,setUsers] = useState([]);
    useEffect(() => {
        let timeoutId;
  
        const debouncer = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            // Make the API call here

            axios.get(`http://localhost:8080/allusers?q=`+value)
              .then((r) => {console.log(r);
                  setUsers(r.data);
            
                
              } )
              .catch((error) => {
                console.error(error);
              });
          }, 500);
        };
    
        debouncer();
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [value]);



  return (
    <div style ={{"paddingInline":"100px"}}>
      <div style = {{"width":"100%",display:"flex","justifyItems":"center",marginBottom:"40px"}}>
        <b></b>
      <input  style ={{"marginInline":"auto"}} placeholder = "Email or Userid" onChange={e => setValue(e.target.value)}  value = {value} type = "text"></input>

      </div>
        {/* <input onChange={e => setValue(e.target.value)} type = "text" > </input> */}


<div style ={{display:"grid" , "gridTemplateColumns":".3fr .3fr .3fr","gap":"30px"}}>
 {



 (users && users.length >0)?(
 users.map(m=>(<>

 <Link to = {"/Profile/"+m.userId} style ={{display:"flex","flexDirection":"column","width":"min-content","textAlign":"center"}}>
    <img style = {{"width": "150px",height:"150px","borderRadius":"100%","boxShadow":"3px 3px 3px grey"}} src = {m.profilePic}></img>
  <b> {m.userId}</b> 
    
    </Link>

 </>))):<>Start Typing</>}
 </div>
</div>
    )
}
