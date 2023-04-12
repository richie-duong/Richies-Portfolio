import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { PagesLayout } from './pages/PagesLayout';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Routes>
          <Route exact path='/' render={() => <PagesLayout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;