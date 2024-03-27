import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Fetch from './components/Fetch';
import Toggle from './components/Toggle';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/fetch" element={<Fetch/>} />
        <Route path="/toggle" element={<Toggle/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
