import React, { useEffect,useState } from 'react'

function Clock() {
      const [clockState,setClockState]=useState();
      useEffect(() =>
      {
          setInterval(() => {
              const date = new Date();
              setClockState(date.toLocaleTimeString());
          },1000);
        }, []);
         


  return (
        <>
        <h1 align ="center">Digital Clock</h1>
    <div style={{fontSize : "55px",margin:"60px",marginLeft:"550px"}}> 
        {clockState}
        
        </div>

        </>
  )
}

export default Clock