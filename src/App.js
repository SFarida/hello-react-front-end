import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
