import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
/*  Function Based Component
function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}
*/

/*  Class Based Component */
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Hello</h1>
      </Fragment>
    );
  }
  /* React.createElement('elementTag', {elementProp: 42, foo: "bar"}, 
  React.createElement('h1', null, 'Hello from React' )); */
}

export default App;
