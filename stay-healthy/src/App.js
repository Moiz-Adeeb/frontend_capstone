import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Define individual Route components for different pages */}
          <Route path="/" element={<Landing_Page />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route */}
            {/* path="/instant-consultation" */}
            {/* element={<InstantConsultation />} */}
          {/* /> */}
          <Route path="<component_route>" element={<component_name />} />{" "}
          //Replace the component_route with the component path and
          component_name with the component name as imported in the App.js file.
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
