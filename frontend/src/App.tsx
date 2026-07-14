import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing"
import Login from "./pages/login"
import Signup from "./pages/signup"
import UserDashboard from "./pages/userDashboard"
import CoachDashboard from "./pages/coachDashboard"
import AdminDashboard from "./pages/adminDashboard"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app/admin" element={<AdminDashboard />} />
        <Route path="/app/coach" element={<CoachDashboard />} />
        <Route path="/app/user" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
