import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
