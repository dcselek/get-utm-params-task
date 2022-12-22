import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from './components/Layout';
import './App.css';
import Thanks from './pages/Thanks';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thanks" element={<Thanks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;