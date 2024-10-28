import React, { useReducer } from "react";
import "./App.scss";
import TicketForm from "./components/ticket-form/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/ticket-list/TicketList";
function App() {
  const initialState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <h1> BUG Blaster </h1>
      <TicketForm dispatch={dispatch}></TicketForm>

      {state.tickets.length > 0 && (
        <>
          <h2>All Tickets</h2>
          <TicketList tickets={state.tickets} dispatch={dispatch}></TicketList>
        </>
      )}
    </div>
  );
}

export default App;
