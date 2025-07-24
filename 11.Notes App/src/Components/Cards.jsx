import React from "react";
import Card from "./Card";
function Cards({ data,HandleContent,HandleDelete,toggleFav}) {
  return (
    <div className="w-[100%] mt-16 flex flex-wrap gap-8 mx-10">
      {data.map((value, index) => (
        <Card
          color={value.color}
          content={value.content}
          isFav={value.isFav}
          key={value.id}
          HandleContent ={HandleContent}
          index = {index}
          HandleDelete = {HandleDelete}
          ID = {value.id}
          toggleFav ={toggleFav}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
