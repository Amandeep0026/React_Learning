import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';
import Nav from './components/Nav.jsx';
import { DataContext } from './context/UserContext.jsx';

const App = () => {

  const data = useContext(DataContext)
  console.log(data)

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <h3>This will display the username age '{data.age}' from UserContext (App.jsx)</h3>
    </div>
  )
}

export default App