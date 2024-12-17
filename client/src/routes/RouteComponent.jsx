import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import House from "../components/House/House";
import UserDashboard from "../components/Reserva/ReservationCard";
import AdminDashboard from "../components/admin/AdminDashboad";
import Dashboard from "../components/admin/Dashboard";


const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/desc" element={<House/>}/>
        <Route path="/reserv" element={<UserDashboard/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
