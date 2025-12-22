import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />}></Route>

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}
