
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import TvDetails from './components/TvDetails';
import Top from './components/Top';
import TvSeries from './components/TvSeries';
import Gener from './components/Gener';
import Home from './components/Home.js/Home';
import MovieDetails2 from './components/MovieDetails2/MovieDetails2';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/topimdb" element={<Top />} />
      <Route path="/" element={<Home />} />
      <Route path="/gener" element={<Gener />} />
      <Route path="/tvseries" element={<TvSeries />} />
      <Route path="/movieINformations/:movieId" element={<MovieDetails2 />} />
      <Route path="/tvINformations/:movieId" element={<TvDetails />} />
      
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);



