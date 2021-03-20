import React, { Component } from "react";

export class EventForm extends Component {
  state = {
    newEvent: {
      id: "1",
      name: "tech",
      description: "about future",
      location: "cairo",
      date: "5/3/2021",
      hotel: "sphinx",
      codeOfConduct: "",
    },
  };
  updateEvent(key, value) {
    this.setState({ newEvent: { ...this.state.newEvent, [key]: value } });
  }
  render() {
    return (
      <form>
        <input
          className="input"
          name=""
          value={this.state.newEvent.name}
          onChange={(e) => this.updateEvent("name", e.target.value)}
          type="text"
        />
      </form>
    );
  }
}
