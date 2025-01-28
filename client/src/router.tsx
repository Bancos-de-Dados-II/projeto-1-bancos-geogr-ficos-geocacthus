import { Navigate, Route, Routes } from "react-router-dom"

import Home from "./pages/HomeTurist/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home/Home";
import CreateTouristLocation from "./pages/CreateTuristLocation/CreateTouristLocation";
import Profile  from "./pages/Profile/Profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to="/signin" />} />

            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route index element={<Navigate to={"/home-agent"} />} />

            <Route path="/home-agent" element={<Home />} />
            <Route path="/create/tourist-place" element={<CreateTouristLocation />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes