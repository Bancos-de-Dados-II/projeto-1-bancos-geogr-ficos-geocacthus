import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import CreateTouristLocation from "../../Agent/pages/CreateTuristLocation/CreateTouristLocation";
import Profile  from "../pages/Profile/Profile";

const AgentRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={"/home-agent"} />} />

            <Route path="/home-agent" element={<Home />} />
            <Route path="/create/tourist-place" element={<CreateTouristLocation />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default AgentRoutes