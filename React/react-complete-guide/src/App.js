import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const app = props => {

  let [persons, setPersons] = new useState([{ name: "Lukas", age: 20 }, { name: "Hubert", age: 59 }]);

  const switchNameHandler = () => {
    setPersons([{ name: "Lukas Weidich", age: 20 }, { name: "Hubert Weidich", age: 59 }])
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <h1>This is really working, wow!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={persons[0].name} age={persons[0].age}></Person>
      <Person name={persons[1].name} age={persons[1].age}></Person>
    </div>
  );
}

export default app;