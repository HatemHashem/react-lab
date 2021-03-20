import React,{Component} from "react";

export class Header extends Component{
    state = {
        event: {description:"concert",location:"nasser ciry",date: "Tomorrow"}
    }
    render() {

        return(
            <div>
                <span>Event data</span>
                <span> {this.state.event.description}</span>
                <span> {this.state.event.location}</span>
                <span> {this.state.event.date}</span>
            </div>
        );}
}
