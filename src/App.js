import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nameBatman" element={<Form />} />
        <Route path="/nameBatman/success" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
