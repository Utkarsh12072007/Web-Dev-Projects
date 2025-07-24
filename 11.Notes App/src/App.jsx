import React, { useEffect, useState } from "react";
import SideBar from "./Components/SideBar";
import Cards from "./Components/Cards";
function App() {
  const [arr, Setarr] = useState([]);
  const [loaded,setLoaded] = useState(false);
  useEffect(()=>{
    const getArr = JSON.parse(localStorage.getItem("notesArray"));
    if(getArr){
      Setarr(getArr);
      setLoaded(true);
    }
  },[])
  useEffect(()=>{
    if(loaded){
      localStorage.setItem("notesArray", JSON.stringify(arr));
    }
  },[arr,loaded])
  const HandleClick = (color) => {
    Setarr((prev) => [...prev, { id:Date.now(),color: color, content: "", isFav: false }]);
  };
  const HandleContent = (a,iD) => {
    const updateArray = arr.map((value) =>
      value.id === iD ? { ...value, content: a } : value
    );
    Setarr(updateArray);
  };
  const HandleDelete = (ID) =>{
    const updateArray = arr.filter((value) => value.id != ID )
    Setarr(updateArray);
  }
  const toggleFav = (ID)=>{
    const updateArray = arr.map((value) =>
      value.id === ID ? { ...value, isFav:!value.isFav } : value
    );
    Setarr(updateArray);
  }
  return (
    <>
      <div className="font-montserrat flex overflow-x-hidden bg-[#222020] min-h-screen">
        <SideBar handleClick={HandleClick}></SideBar>
        <div className="w-[87%] ml-[13%]">
          <h1
            className="text-5xl text-shadow-lg/30 text-shadow-regal-white
            font-semibold pl-[10%] mt-10 text-[#e6e4e4]"
          >
            Notes
          </h1>
          <Cards data={arr} HandleContent={HandleContent} HandleDelete={HandleDelete} toggleFav ={toggleFav}  ></Cards>
        </div>
      </div>
    </>
  );
}

export default App;