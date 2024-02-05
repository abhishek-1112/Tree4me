import logo from './logo.svg';
import Chat from "./Chat";

import { useRef,useEffect } from 'react';
import './App.css';

function App({login}) {
  const videoref = useRef();
  useEffect(() => {

    videoref.current.play();
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="App" style = {{"overflowY":"hidden"}}>
           <div class="navbar">
            <Chat></Chat>
        <p  className='a' href="#" class="logo">A tree for me</p>
        <ul class="nav" style={{"color":"transparent"}}>
            <li><a className='a' href="#home">Home</a></li>
            <li><a className='a' onClick = {()=>login()}>Login</a></li>
            <li><a className='a' href="#about">About</a></li>
            <li><a className='a' href="#service">Service</a></li>
            <li><a className='a' href="#contact">Contact</a></li>
        </ul>
    </div>
    <div class="banner-area" id="home">
<video style ={{width :"100vw"}} autoplay class = "vid"   loop ref = {videoref} src = "https://res.cloudinary.com/sidd293/video/upload/v1677653148/TREE4ME/Video_background_Tree_growing_at_sunrise_Object_in_the_middle_000007064773_HD1080Video_hmgldk.mp4" ></video>
<h1  style = {{"position":"absolute","top":"40%","left":"35%",fontSize:"100px"}} className='h1 bgmov'>Tree4me</h1>
    </div>
    <div class="about-area" id="about">
        <div class="text-part">
            <h1 className='h1'>About Area</h1>
            <p className='p'>We are a community of people doing the very least of the task that we as a part of this ecosytem must do,
                that is to plant trees, we specialize in planting and growing the trees with the help of our picked out
                garderners and tree planting experts, moreover we are whistle blowers that it is not a time to be just
                thinking of environment, its about time we take a step and start giving back to the nature.
        </p>
        </div>
        
    </div>
    
    <div class="service-area"  style = {{"height":"150vh"}} id="service">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#afe1af" fill-opacity="1" d="M0,0L48,48C96,96,192,192,288,208C384,224,480,160,576,133.3C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
        <div class="text-part" >
            <h1 className='h1'>Services</h1>
            <p className='p'>We provide remote Tree planting opportunities to people, working with NGOs and government agencies we
                target to achieve the goal of diverse reforestation and restoring the genral wildlife.<br></br>
                <br></br>
                In addition to it, we provide tours of the plantation areas and organize rallies, events and workshops
                to make people aware and active about the problem of deforestation.<br></br>
                <br></br>
                Sending a percentage of produce of trees to the planters along with many goodies to motivate others
                around them, rest of the produce is donated to food banks or NGOs to put that to good use and help the
                to carry forward the message "a tree for many"
            </p>
        </div>
    </div>
    
    <div class="contact-area" id="contact" style = {{"height":"150vh"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ecffdc" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,112C960,85,1056,43,1152,37.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
        <div class="text-part">
            <h1 className='h1'>Contact</h1>
            <p className='p'>To contact:<br></br>
                Gmail: A_Tree_for_me@gmail.com<br></br>
                Phone: 0000-1111-2222<br></br>
                Whatsapp: 790***925<br></br>
                <hr></hr>
                follow us on:<br></br>
                @A_TrEE_FME on Instagram<br></br>
                @Tree_and_comm on Twitter<br></br>
            </p>
        </div>
    </div>
    </div>
  );
}

export default App;
