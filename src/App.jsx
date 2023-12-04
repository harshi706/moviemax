import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import List from './Components/List'
import Detail from './Components/Detail'
function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Detail />}></Route>
          <Route path="movies/:type" element={<List />}></Route>
          <Route path="/*" element={<h1>Server not found</h1>}></Route>
        </Routes>
      </Router>  
     </>
  )
}

export default App
