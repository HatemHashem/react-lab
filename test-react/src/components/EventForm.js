import React, { Component } from "react";

export class EventForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    events: [],
    
    newEvent: {
      id: "",
      name: "",
      description: "",
      location: "",
      date: "",
      hotel: "",
      codeOfConduct: ""
    },
   
  };
  updateEvent(key, value) {
    this.setState({ newEvent: { ...this.state.newEvent, [key]: value } });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.newEvent);
    this.updateEvent("id",  Date.now());
    this.setState({events: this.state.events.concat(this.state.newEvent)});
    console.log(this.state.events);
  }



  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <input
          className="input"
          name=""
          value={this.state.newEvent.description}
          onChange={(e) => this.updateEvent("description", e.target.value)}
          type="text"
        />
        <input
          className="input"
          name=""
          value={this.state.newEvent.location}
          onChange={(e) => this.updateEvent("location", e.target.value)}
          type="text"
        />
        <input
          className="input"
          name=""
          value={this.state.newEvent.date}
          onChange={(e) => this.updateEvent("date", e.target.value)}
          type="text"
        />
        <input
          className="input"
          name=""
          value={this.state.newEvent.hotel}
          onChange={(e) => this.updateEvent("hotel", e.target.value)}
          type="text"
        />
         <input
          className="input"
          name=""
          value={this.state.newEvent.codeOfConduct}
          onChange={(e) => this.updateEvent("codeOfConduct", e.target.value)}
          type="text"
        />

        <button >Add #{this.state.events.length + 1}</button>

      </form>
    );
  }
}
