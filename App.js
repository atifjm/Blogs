import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import Settings from './pages/Settings.jsx';
import './App.css';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import {BrowserRouter, Routes,  Route, Link} from 'react-router-dom';

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={ user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single /> } />
        </Routes> 
      </BrowserRouter>
                 
    </div>
  );
}

export default App;
