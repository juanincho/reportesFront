import './App.css';
import Home from './Reportes';
import MiaRewards from './MiaRewards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miarewards" element={<MiaRewards />} />
      </Routes>
    </Router>
  );
}

export default App;
