import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Administrador from './pages/admi/Administrador' 

function App() {
  return (
    <div className="App">
      <h1>HOlaaaaaa</h1>

    <BrowserRouter>
     <Routes>
      <Route path='/admin' element={<Administrador /> } />
     </Routes>
    </BrowserRouter>
    

    </div>
  );
}

export default App;
