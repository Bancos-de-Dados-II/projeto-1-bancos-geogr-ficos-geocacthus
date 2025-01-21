import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
// import Profile  from "../pages/Profile/Profile";

const AgentRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={"/home"} />} />

            <Route path="/home" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
    );
}

export default AgentRoutes