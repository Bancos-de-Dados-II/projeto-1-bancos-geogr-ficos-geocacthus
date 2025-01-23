import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ProtectedRoute from "../components/ProtectedRoute";
// import CreateTouristLocation from "../pages/";

const TuristRoutes = () => {
    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route index element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/create/tourist-place" element={<CreateTouristLocation />} /> */}
        </Routes>
    );
}

export default TuristRoutes