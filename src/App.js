import Home from "./Pages/Home";
import Mint from "./Pages/Mint";
import Wheatlist from "./Pages/Wheatlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/wheatlist" element={<Wheatlist />} />
      </Routes>
    </BrowserRouter>
    // <Index />
  );
}

export default App;
