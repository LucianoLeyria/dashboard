import './App.css';
import { Menu } from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import { Productos } from './components/Productos/Productos';
import { Categorias } from './components/Categorias/Categorias';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>
    </div>
  );
}

export default App;
