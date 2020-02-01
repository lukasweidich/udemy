import React, { useState } from 'react';
import './App.css';
import './Person/Person.css';
import Person from "./Person/Person"

const app = props => {

  let [persons, setPersons] = new useState([{ name: "Lukas", age: 20 }, { name: "Hubert", age: 59 }]);

  const switchNameHandler = (newName) => {
    setPersons([{ name: newName, age: 20 }, { name: "Hubert Weidich", age: 59 }])
  }

  const nameChangedHandler = (event) => {
    setPersons([{ name: event.target.value, age: 20 }, { name: "Hubert Weidich", age: 59 }])
  }

  const style =
  {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid lightcoral",
    padding: "8px",
    cursor: "pointer"
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <h1>This is really working, wow!</h1>
      <button style={style} onClick={() => switchNameHandler("Button Lukas Weidich")}>Switch Name</button>
      <Person changed={nameChangedHandler} click={() => switchNameHandler("Person Lukas Weidich")} name={persons[0].name} age={persons[0].age}></Person>
      <Person name={persons[1].name} age={persons[1].age}></Person>
    </div>
  );
}



export default app;