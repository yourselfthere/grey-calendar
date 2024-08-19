import React from "react";
import { EventProvider } from "./context/EventContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarView from "./pages/CalendarView";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import EventDetailsPage from "./pages/EventDetailsPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarView />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/edit/:id" element={<EditEvent />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
