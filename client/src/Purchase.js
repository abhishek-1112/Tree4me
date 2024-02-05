import React , {useState} from 'react'
import Checkout from './Checkout';
import { plants } from './plants'
import './purchase.css'
function Purchase({user,userData,dataR}) {
    const [show,setShow]  = useState(false);
    const [det,setDet] = useState(plants[0]);
  return (
    <div ><h1 style={{paddingLeft:"45px"}}>Matketplace</h1>
    <div className='plants-cont'>

{
    plants.map(m=>(<>
    
    <div onClick = {()=>{
        setShow(true);
        console.log(show);
        setDet(m);
    }} className='plant-card'>
    <img src = {m.templeteimage}></img>
    <p style = {{paddingInline:"10px",width:"90%", "display": "flex" ,"justifyContent":"space-between","lineHeight":"0"}}>
    <b>{m.type}</b>
    <b>{m.cost}TP</b>
 
    </p>
   
</div>
    
    
    </>))
}



    </div>
    <div style = {{transform:`translateY(-${200*(show == false?1:0)}%)`,transition:"transform .5s ease-in", "boxShadow":"20px 20px 2px 300px rgba(0,0,0,.4)","borderRadius":"2%" ,"position" : "absolute",top:"10%",width:"70%", height:"70%" ,"background":"yellow"}}>
<Checkout data = {det} user = {user} setShow = {setShow} userData = {userData} dataR = {dataR}></Checkout>


</div> 
{
    (show == true)?<>

    </>:null
}

    </div>
  )
}

export default Purchase