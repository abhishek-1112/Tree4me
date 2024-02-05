import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
function Checkout({data,user,setShow,userData,dataR}) {
    const navigate = useNavigate();
    const checkout = (e)=>{
        e.preventDefault();
        
        const pname = e.target[0].value;
        const location = e.target[1].value;
        if(pname.length == 0){
            alert("please fill the name accurately");
            return ;
        }
        console.log(userData);
        if(userData.treePoints< data.cost)
        {
            alert("Not Enough Tree Points Please Buy More Tree Points");
            return ;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You will get your plant planted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Plant it'
          }).then((result) => {

            if (result.isConfirmed) {
                axios.post("http://localhost:8080/addPlant/"+userData.userId,{
                    cost:data.cost,
                    name :pname,
                    type :data.type,
                    location,
                    photoUrl:data.templeteimage,
                    treePoints: userData.treePoints - data.cost,
                    
                            }).then(e=>{
                                dataR(userData.email);
                                
   Swal.fire(
            'Plant Planted',
            'Please see your plant in the profile section',
            'success'
          ).then(e=>{
            navigate('/');
          })



                            })


            }
          })

       



 
    }
  return (
    <>
    {/* <p >Close</p> */}
    <AiOutlineClose  onClick = {()=>setShow(false)} style= {{"position":"absolute","fontSize":"2rem","left":"95%",cursor:"pointer"}}></AiOutlineClose>
    <div className = "checkout-cont">
    <img src = {data.templeteimage}></img>
    <div style = {{"padding":"10px"}}>
<h1>{data.type}</h1>
    <p>
        {data.description}
        
    </p>
    <p><b>Cost:</b> {data.cost} Tree Points</p>
<form onSubmit={e=>checkout(e)}>
<table>
    <tr>
<td><label for = "name">Name:</label></td>
    <td>
<input name = "name" type = "text" ></input>
</td>
    </tr>
<tr>
<td>
<label for = "location">Location</label>

</td>
<td>
<select name = "location">
<option>Hyderabad</option>
<option>Chennai</option>
<option>Kolkata</option>
<option>Delhi</option>
<option>Amritsar</option>
</select>
</td>
</tr>
</table>

<br></br>


<input  type ="submit" value ="Adopt"></input>

</form>
    
    </div>
    
    </div>
    </>
  )
}

export default Checkout