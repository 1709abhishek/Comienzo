import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Greet name="abhishek" heroName="IronMan" />
      <Welcome name="abhishek" heroName="IronMan" /> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}
    </div>
  );
}

export default App;
