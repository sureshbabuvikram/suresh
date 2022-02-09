import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import './App.css';


var mystyle={
  color:"green",
}

export default function App() {
  return ( <div style={mystyle}>
    <h1><center>SURESH REALESTATE</center></h1>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));