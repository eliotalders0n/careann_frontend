import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./pages/Booking";
import Chat from "./pages/Chat";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import Payement from "./pages/Payement";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import UserDashboard from "./components/user/UserDashboard";
import UserAppointment from "./components/user/UserAppointment";
import UserSearch from "./components/user/UserSearch";

function App() {
  var id = "g4ic79bnef";

  useEffect(() => {
    clarity.init(id);
  }, [id]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/payement" element={<Payement />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* user routes */}
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userAppointment" element={<UserAppointment />} />
          <Route path="/userSearch" element={<UserSearch />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
