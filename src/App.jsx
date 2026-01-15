import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from "./components/navbar.jsx"
import Profile from "./components/profile.jsx"
import About from './components/aboutme.jsx';
import Skills from './components/skills.jsx';
import Project from './components/projects.jsx';
import Education from './components/education.jsx';
import Contact from './components/contact.jsx';


function App() {
  
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="main-content">
        < Profile /> 
        < About />
        < Skills />
        < Project/>
        < Education />
        <Contact />
      </div>
    </>
  )
}

export default App
