import "./App.css";
import Navbar from "./navbar";
import Order from "./order";
import Recommendations from "./Recommendations";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/Recommendations"
              element={<Recommendations />}
            ></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/order" element={<Order />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
