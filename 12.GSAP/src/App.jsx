import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function App() {
  const boxRef = useRef();
  useGSAP(()=>{
    gsap.to(boxRef.current,{
      rotate:360,
      delay:1,
      duration:2,
    })
  })
  return (
    <div className="w-screen h-screen bg-black p-10 flex gap-10">
      <div className="border-2 border-orange-400 w-52">
        <div className="w-40 h-40 bg-pink-400 rounded-md m-4"></div>
        <div className="w-40 h-40 bg-blue-400 rounded-full m-4"></div>
      </div>
      <div className="border-2 border-orange-400 w-52">
        <div ref={boxRef} className="w-40 h-40 bg-pink-400 rounded-md m-4"></div>
        <div className="w-40 h-40 bg-blue-400 rounded-full m-4"></div>
      </div>
    </div>
  );
}

export default App;
