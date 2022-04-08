import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>} />
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>} />
            <Route path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>} />
            <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>} />
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>} />
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
}
