import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { PagesLayout } from './pages/PagesLayout';
import { ErrorPage } from './pages/ErrorPage'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/Richies-Portfolio' element={<PagesLayout />}/>
          <Route path='/Richies-Portfolio/*' element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;