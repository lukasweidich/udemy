import React, { useState } from 'react';
import './App.css';
import './Person/Person.css';
import Person from "./Person/Person"

const app = props => {

  let [persons, setPersons] = new useState([
    { id: "lukas243", name: "Lukas", age: 20 },
    { id: "hubert122", name: "Hubert", age: 59 }
  ]);
  let [showPersons, setShowPersons] = new useState(false);

  const nameChangedHandler = (event, id) => {
    // setPersons([{ name: event.target.value, age: 20 }, { name: "Hubert Weidich", age: 59 }])
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    })

    const pers = { ...persons[personIndex] }
    pers.name = event.target.value;
    let persArray = [...persons]
    persArray[personIndex] = pers;
    setPersons(persArray)
  }

  const togglePersonHandler = () => {
    setShowPersons(!showPersons)
  }

  const deletePersonHandler = (i) => {
    // const x = persons.slice(); // returns copy of array, same as spread operator
    const x = [...persons]
    x.splice(i, 1);
    setPersons(x);
  }

  const style =
  {
    backgroundColor: "green",
    font: "inherit",
    border: "1px solid lightcoral",
    padding: "8px",
    cursor: "pointer"
  }

  let personDisplay = null;

  if (showPersons) {
    personDisplay = (
      < div >
        {persons.map((el, i) => {
          return <Person click={() => deletePersonHandler(i)} changed={() => nameChangedHandler(event, el.id)} key={el.id} name={el.name} age={el.age}></Person>
        })}
      </div >
    )

    style.backgroundColor = "red";
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <h1>This is really working, wow!</h1>
      <button style={style} onClick={() => togglePersonHandler()}>Toggle Persons</button>

      {personDisplay}

    </div>
  );
}

export default app;