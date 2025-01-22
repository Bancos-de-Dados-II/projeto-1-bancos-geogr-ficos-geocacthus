import { Navigate, Route, Routes } from "react-router-dom"

import AgentRoutes from "./apps/Agent/routes"
import TuristRoutes from "./apps/Turist/routes"

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={"/home"} />} />
            {/* 

            <Route path={"/account/login"} element={<SignIn />} />
            <Route path={"/account/register"} element={<SignUp />} />
             */}

            <Route path={"/*"} element={<TuristRoutes />} />
            <Route path={"/agent/*"} element={<AgentRoutes />} />
        </Routes>
    )
}

export default AppRoutes