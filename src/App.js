//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigator from "./Navigator";
import Footer from "./components/Footer";

import Home from "./Home";
import Rentals from "./Rentals";
import Contact from "./Contact";

function App() {
  //console.log("App render");
  return (
    <Router>
      <Navigator />

      <Routes>
        <Route path={"/rentals"} element={<Rentals />} />
        <Route path={"/contact_us"} element={<Contact />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
