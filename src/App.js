import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
