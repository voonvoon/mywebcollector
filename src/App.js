import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/page/Home";
import Projects from "./components/page/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DirectMsg from "./components/DirectMsg";

function App() {
  return (
    <div className="App">
    <ToastContainer />
      <BrowserRouter>
        
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <DirectMsg/>
    </div>
  );
}

export default App;
