import { Route, Routes } from "react-router-dom"

import AgentRoutes from "./apps/Agent/routes"
import TuristRoutes from "./apps/Turist/routes"

const AppRoutes = () => {
    return (
        <Routes>
            {/* 
            <Route index element={<Navigate to={"/account/login"} />} />

            <Route path={"/account/login"} element={<SignIn />} />
            <Route path={"/account/register"} element={<SignUp />} />
             */}

            <Route path={"/*"} element={<TuristRoutes />} />
            <Route path={"/*"} element={<AgentRoutes />} />
        </Routes>
    )
}

export default AppRoutes