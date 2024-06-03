import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EachQuiz from "./components/EachQuiz";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quiz/:id/*" element={<EachQuiz />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
