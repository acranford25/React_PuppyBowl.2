import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPuppies from "./Components/AllPuppies";
import SinglePuppy from "./Components/SinglePuppy";

function App() {
  return (
    <div className="App">
      <h1 id="header">Header</h1>
      <div>
        <Routes>
          <Route path="/:playerId" element={<SinglePuppy />} />
          <Route path="/" element={<AllPuppies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
