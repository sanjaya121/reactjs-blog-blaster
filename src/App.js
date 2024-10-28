import React, { useReducer } from "react";
import "./App.scss";
import TicketForm from "./components/ticket-form/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/ticket-list/TicketList";
function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App container">
      <h1> BUG Blaster </h1>
      <div className="row">
        <div className="col-md-6">
          <TicketForm
            dispatch={dispatch}
            editingTicket={state.editingTicket}
          ></TicketForm>
        </div>
        <div className="col-md-6">
          {state.tickets.length > 0 && (
            <>
              <h2>All Tickets</h2>
              <TicketList
                tickets={state.tickets}
                dispatch={dispatch}
              ></TicketList>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
