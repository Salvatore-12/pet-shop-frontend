
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Homepage from './components/Home';
import MyNavbar from './components/MyNavbar';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
