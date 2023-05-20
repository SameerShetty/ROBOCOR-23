import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventD from "./pages/EventD";
import "react-lazy-load-image-component/src/effects/blur.css";
import Register from "./pages/Register";
import Results from "./pages/Results";
import FourOFour from "./pages/FourOFour";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/event/:id" exact element={<EventD />} />
          <Route path="/register" exact element={<Register />} />
          {/* <Route path="/results" exact element={<Results />} />
          <Route path="/certificate" exact element={<Certificate />} /> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
