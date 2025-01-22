import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import CreateTouristLocation from "../pages/CreateTuristLocation/CreateTouristLocation";

const TuristRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={"/home"} />} />

            <Route path="/home" element={<Home />} />
            <Route path="/create/tourist-place" element={<CreateTouristLocation />} />
        </Routes>
    );
}

export default TuristRoutes