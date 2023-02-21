import "./App.css";
import Panel from "./pages/Panel/Panel";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="panel" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
