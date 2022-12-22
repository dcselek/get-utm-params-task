import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home
      </h1>
      <button className='p-4 bg-black text-white'><Link to="/about">About</Link></button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        About
      </h1>
      <button className='p-4 bg-black text-white'><Link to="/">go back</Link></button>
    </div>
  );
}