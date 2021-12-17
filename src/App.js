import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
