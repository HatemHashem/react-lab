

function Ticket({ ticket, onClick }) {
    return (
        <div>
            <textarea name="name" value={ticket.ticketName} className="form-control"/>
            <textarea name="price"value={ticket.ticketPrice} className="form-control"/>
            <button onClick={onClick}>buy ticket</button>
            <br></br>
            {(ticket.ticketPrice===0)?<label>all tickets sold out!</label>:""}
        </div>
    )
}

export default Ticket
