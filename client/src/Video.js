import React, {useRef,useState,useLayoutEffect} from 'react'

function Video({url}) {
    useLayoutEffect(() => {
      
        const handleScroll = () => {
console.log("aaya upr");

        }
        
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
    
    
    }, [])
const videoref = useRef(null);
const scroller = useRef(null);
const [pause , setPause ] = useState(true);
const toogle =  ()=>{
    if(pause == true)
    {
setPause(false);
videoref.current.play();
    }
    else{
        setPause(true);
        videoref.current.pause();

    }
}
return (

    <>
        <video ref = {videoref} onClick = {toogle} className='greels-vid' src = {url}></video>
    </>
  )
}

export default Video