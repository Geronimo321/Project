
import './App.css';
import  Home  from './pages/Home';
import { Login } from './pages/Login';
import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header'


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>

    </div>

  );
}

export default App;
