import React from 'react'
import NavBar from './components/NavBar'
import Posts from './components/page/Posts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './components/page/Post'
// import './App.css';
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Posts />} />
          <Route path='/posts/:postId' element = {<Post />} />
        </Routes>
      </Router>
    </>
  )
}

export default App