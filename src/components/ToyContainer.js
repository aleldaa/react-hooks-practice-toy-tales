import React, { useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete }) {





  const showToys = toys.map((toy)=>{
    return <ToyCard 
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      onDelete={handleDelete}
    />
  })

  return (
    <div id="toy-collection">{showToys}</div>
  );
}

export default ToyContainer;
