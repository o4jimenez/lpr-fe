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
        <Route
          path={process.env.PUBLIC_URL + "/rentals"}
          element={<Rentals />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/contact_us"}
          element={<Contact />}
        />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
