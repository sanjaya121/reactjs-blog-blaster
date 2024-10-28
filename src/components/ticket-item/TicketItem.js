import React from "react";
const TicketItem = ({ ticket, dispatch }) => {
  const { d, title, description, priority } = ticket;
  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default TicketItem;
