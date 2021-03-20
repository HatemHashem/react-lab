import logo from './logo.svg';
import React,{Component} from "react";
import {HomePage} from "./components/home"
import './App.css';
import Ticket from './components/Ticket';



function App() {
  
  return (
      <div>
         <HomePage></HomePage>
         <Ticket/>
      </div>
  );
}

export default App;
