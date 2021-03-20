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

  resetForm(){
    this.setState({newEvent : {
      id: "",
      name: "",
      description: "",
      location: "",
      date: "",
      hotel: "",
      codeOfConduct: "",
    }})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.newEvent);
    this.updateEvent("id", Date.now());
    this.setState({ events: this.state.events.concat(this.state.newEvent) });
    this.resetForm();
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
        <table className="table table-border">
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
              <th>location</th>
              <th>date</th>
              <th>hotel</th>
              <th>codeOfConduct</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((item) => (
            <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.description} </td>
              
              <td> {item.location} </td>
              
              <td>{item.date} </td>
              
              <td>{item.hotel} </td>
              
              <td> {item.codeOfConduct} </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
