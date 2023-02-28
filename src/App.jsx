import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  

  return (
    <div className="App">
     <Router>
     <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<h1>Movie Detail Page </h1>}></Route>
        <Route path="movies/:type" element={<h1>Movie List Page </h1>}></Route>
        <Route path="/*" element={<h1>Error Page </h1>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
