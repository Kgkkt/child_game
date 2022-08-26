import logo from './logo.svg';
import './App.css';
import ImgGamePage from './Pages/ImgGamePage';
import AddImageElements from './Pages/AddImageElements';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="game" element={<ImgGamePage/>} />
        <Route path="addElements" element={<AddImageElements />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  //
  );
}

export default App;
