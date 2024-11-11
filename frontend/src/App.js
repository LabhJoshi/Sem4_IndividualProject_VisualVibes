import React from "react";
import Login from "./Login";
import Trending from './Trending';
import MainProfile from "./MainProfile";
import Home from "./Home";
import Images from "./Images";
import Form from "./Form";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <Router>
            <Link to='/'></Link>
            <Link to='/login'></Link>
            <Link to='/images'></Link>
            <Link to='/profile'></Link>
            <Link to='/form'></Link>
            <Link to='/trending'></Link>
            <Link to='/about'></Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/images" element={<Images />}></Route>
          <Route path="/profile" element={<MainProfile />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
