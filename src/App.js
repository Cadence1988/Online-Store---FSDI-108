import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catelog";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Home></Home>
      <Catalog></Catalog>
      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;
