import logo from './logo.svg';
import React,{Component} from "react";
import {HomePage} from "./components/home"
import './App.css';
import Ticket from './components/Ticket';
import {useState} from 'react';

function App() {

const [ticket, setTicket] = useState({ticketName:"event name",
ticketPrice:15});
  return (
      <div>
         <HomePage></HomePage>
         <Ticket ticket={ticket} className="ticket" onClick/>
      </div>
  );
}

export default App;
