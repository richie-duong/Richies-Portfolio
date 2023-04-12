import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { PagesLayout } from './pages/PagesLayout';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<PagesLayout />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;