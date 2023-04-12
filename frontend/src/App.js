import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { PagesLayout } from './pages/PagesLayout';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<PagesLayout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;