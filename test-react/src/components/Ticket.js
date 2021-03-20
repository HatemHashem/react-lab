

function Ticket({ticket,onClick}) {
    return (
        <div>
            <textarea  name="">{ticket.ticketName}</textarea>
            <textarea  name="">{ticket.ticketPrice}</textarea>
            <button onClick={onClick}>buy ticket</button>
        </div>
    )
}

export default Ticket
