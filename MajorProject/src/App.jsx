import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Index from "./Index";
import ListOne from "./ListOne";
import AddNewList from "./AddNewList";
import Show from "./Show";
import Demo from "./Demo";
import Signup from "./Signup";
import Login from "./Login";
function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Index />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/list/:id" element={<ListOne />} />
      <Route path="/add" element={<AddNewList />} />
      <Route path="/show/:id" element={<Show/>}/>
      <Route path="/demo" element={<Demo/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
