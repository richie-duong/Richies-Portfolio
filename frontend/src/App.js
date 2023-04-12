import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { PagesLayout } from './pages/PagesLayout';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Richies-Portfolio">
      <Navbar />
        <Routes>
          <Route exact path='/Richies-Portfolio' element={<PagesLayout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;