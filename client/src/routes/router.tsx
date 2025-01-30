import { Navigate, Route, Routes } from "react-router-dom"

import ProtectedRoute from "../components/ProtectedRoute";

import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import Home from "../screens/HomeTurist/Home";
import HomeAgent from "../screens/Home/Home";
import CreateTouristLocation from "../screens/CreateTuristLocation/CreateTouristLocation";
import Profile  from "../screens/Profile/Profile";

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

            <Route path="/home-agent" element={<HomeAgent />} />
            <Route path="/create/tourist-place" element={<CreateTouristLocation />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes