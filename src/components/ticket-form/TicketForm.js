import React, { useEffect, useState } from "react";
import "./ticketform.scss";

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLabel = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    console.log("Form Submit :>>");
    e.preventDefault();
    const ticketData = {
      id: editingTicket
        ? editingTicket.id
        : Math.floor(Math.random() * 1000000000),
      title,
      description,
      priority,
    };
    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });
    console.log("ticketData :>> ", ticketData);
    clearForm();
  };
  return (
    <form className="ticket-form mb-3" onSubmit={handleSubmit}>
      <div className="ticket-title row">
        <label className="form-label" col-sm-2 col-form-label>
          {" "}
          Title{" "}
        </label>
        <input
          type="text"
          value={title}
          className="form-input from-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="row ticket-description">
        <label className="col-sm-2 col-form-label"> Description </label>
        <textarea
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="ticket-priority">
        <fieldset className="row mb-3 priority-fieldset">
          <legend>Priority</legend>
          {Object.entries(priorityLabel).map(([value, label]) => (
            <div className="priority-label col-sm-3" key={value}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={value}
                  checked={priority === value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  {label}
                </label>
              </div>
            </div>
          ))}
        </fieldset>
        <button className="btn btn-lg btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default TicketForm;
