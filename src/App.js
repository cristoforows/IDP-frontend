import "./App.css";
import { Test } from "./pages/shop";
import { ContactUs } from "./pages/shop/ContactUs";
import { Faq } from "./pages/shop/Faq";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./Commons/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
