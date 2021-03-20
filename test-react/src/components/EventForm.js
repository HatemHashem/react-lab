import React, { Component } from "react";

export class EventForm extends Component {
  constructor(props) {
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
      codeOfConduct: "",
    },
  };
  updateEvent(key, value) {
    this.setState({ newEvent: { ...this.state.newEvent, [key]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.newEvent);
    this.updateEvent("id", Date.now());
    this.setState({ events: this.state.events.concat(this.state.newEvent) });
    console.log(this.state.events);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name:</label>
          <br></br>

          <input
            className="input"
            name=""
            value={this.state.newEvent.name}
            onChange={(e) => this.updateEvent("name", e.target.value)}
            type="text"
          />
          <br></br>
          <label htmlFor="">Description:</label>
          <br></br>
          <input
            className="input"
            name=""
            value={this.state.newEvent.description}
            onChange={(e) => this.updateEvent("description", e.target.value)}
            type="text"
          />
          <br></br>
          <label htmlFor="">Location:</label>
          <br></br>
          <input
            className="input"
            name=""
            value={this.state.newEvent.location}
            onChange={(e) => this.updateEvent("location", e.target.value)}
            type="text"
          />
          <br></br>
          <label htmlFor="">Date:</label>
          <br></br>
          <input
            className="input"
            name=""
            value={this.state.newEvent.date}
            onChange={(e) => this.updateEvent("date", e.target.value)}
            type="text"
          />
          <br></br>

          <label htmlFor="">Hotel:</label>
          <br></br>
          <input
            className="input"
            name=""
            value={this.state.newEvent.hotel}
            onChange={(e) => this.updateEvent("hotel", e.target.value)}
            type="text"
          />
          <br></br>
          <label htmlFor="">code Of Conduct:</label>
          <br></br>
          <input
            className="input"
            name=""
            value={this.state.newEvent.codeOfConduct}
            onChange={(e) => this.updateEvent("codeOfConduct", e.target.value)}
            type="text"
          />
          <br></br>

          <button>Add #{this.state.events.length + 1}</button>
        </form>
        <ul>
          {this.state.events.map((item) => (
            <li>
              <span>{item.name} </span>
              <span>{item.description} </span>
              <span>{item.location} </span>
              <span>{item.date} </span>
              <span>{item.hotel} </span>
              <span>{item.codeOfConduct} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
