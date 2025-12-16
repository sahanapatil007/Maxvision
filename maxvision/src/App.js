//import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Counter from './components/Counter'
import Click from './components/Click';
import Parent from './components/Parent';
function App() {
  return (
    <div className="App">
    <Counter />
    <Click/>
    <Parent/>
    </div>
  );
}

export default App;
 