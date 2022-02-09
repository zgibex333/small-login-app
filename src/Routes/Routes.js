import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { Registration } from "../Pages/Registration/Registration";
import { Profile } from "../Pages/Profile";
import { NotExists } from "../Pages/NotExists";

export const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotExists />} />
      </Routes>
    </div>
  );
};
