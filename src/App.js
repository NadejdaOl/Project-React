import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./layout/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
  
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;