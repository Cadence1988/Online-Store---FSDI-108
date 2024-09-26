import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catelog";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import GlobalProvider from "./state/GlobalProvider";
import Cart from "./pages/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Catalog" element={<Catalog></Catalog>} />
            <Route path="/About" element={<About></About>} />
            <Route path="/Admin" element={<Admin></Admin>} />
            <Route path="/Contact" element={<Contact></Contact>} />
            <Route path="/Cart" element={<Cart></Cart>} />
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

/**
 * Create and Admin page
 * should be displayed on /admin
 *
 * put a H1 on it
 *
 *
 */
