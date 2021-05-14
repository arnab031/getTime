import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [mode,setMode]=useState("Light")

  useEffect(() => {

    let time=new Date().getMinutes();
    setInterval( () => {
       setTime(new Date().toLocaleTimeString())
       if(mode==="Light" && Math.abs(new Date().getMinutes()-time)===1){
           setMode("Dark")
           time=new Date().getMinutes()
       }else if(mode==="Dark" && Math.abs(new Date().getMinutes()-time)===1){
           setMode("Light")
           time=new Date().getMinutes()
       }
       // mode==="Light" && Math.abs(new Date().getMinutes-tym)===5?setMode("Dark"):setMode("Light")
     },1000)
   // return () => clearInterval(setTime);
   }, [mode]);
   return (
      <section style={mode==="Light"?parentMode:childMode}>
        <div className="container" style={mode==="Light"?childMode:parentMode}>
          <h1>{time}</h1>
        </div>
      </section>
    // <div>{time}</div>
  );
}
const parentMode={
  backgroundColor: "#dbdb12"
  
}
const childMode={
  backgroundColor: "#080808"
}

export default App;
