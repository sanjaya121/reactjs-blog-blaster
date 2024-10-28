import React, { useEffect, useState } from "react";
import "./ticketform.scss";

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(() => {
    console.log("useEffect with Dependency");
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  useEffect(() => {
    console.log("useEffect without Dependency");
    filterMovies(1);
  }, []);
  const filterMovies = (id) => {
    const movie = [
      {
        id: 1,
        title: "Jawan",
        desc: "jawan jwan jawan",
      },
      {
        id: 2,
        title: "Rang De Basanti",
        desc: "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
      },
      {
        id: 3,
        title: " 3 Idiots",
        desc: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots",
      },
      {
        id: 4,
        title: "Swades",
        desc: "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
      },
      {
        id: 5,
        title: "Dangal",
        desc: "Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
      },
    ];
    console.log(movie.filter((mov) => id == mov.id));
  };

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
