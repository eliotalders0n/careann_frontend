import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
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
import firebase from "./firebase";

function App() {
  const [state, setstate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when the component mounts

    const authStateChanged = (user) => {
      if (user) {
        setstate(true);
        setIsLoading(false); // Set isLoading to false when the user state changes
      } else {
        setstate(false);
        setIsLoading(false); // Set isLoading to false when the user state changes
      }
    };

    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {!state && <Router>
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
            </Routes>
            </Router>
            }
      {state && (
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
      )}
      {isLoading && (
        <Container>
          <Row md={1} xs={1} className="g4">
            <Col>
              <div className="loading-overlay">
                <Spinner animation="grow" role="status" variant="dark">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
