import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
      .then((res)=>res.json())
      .then((data)=> setToys(data))
  }, [])

  function handleToyAddition(toy){
    setToys([...toys, toy])
  }

  function handleDelete(id){
    setToys(toys.filter((toy)=>toy.id !== id))
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleToyAddition={handleToyAddition}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} />
    </>
  );
}

export default App;
