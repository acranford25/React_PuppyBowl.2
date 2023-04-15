import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPuppies from "./Components/AllPuppies";
import SinglePuppy from "./Components/SinglePuppy";
import Header from "./Components/Header";
import { postPuppy } from "./api";

function App() {
  return (
    <div className="App">
      <h3 id="header">
        <Header postPuppy={postPuppy} />
      </h3>
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
