import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catelog";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
