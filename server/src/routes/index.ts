import { Response, Request, Router } from "express";
import dotenv from 'dotenv';

dotenv.config();

import configureUsersRoutes from "./users";
import configureTouristLocationRoutes from "./touristLocation";
import configureHoursRoutes from "./hours";
import configureEvaluatesRoutes from "./evaluates";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        endpoints: {
            users: `http://localhost:${process.env.SERVER_PORT}/api/users`,
            tourist_location: `http://localhost:${process.env.SERVER_PORT}/api/tourists-location`,
            hours: `http://localhost:${process.env.SERVER_PORT}/api/hours`,
            evaluates: `http://localhost:${process.env.SERVER_PORT}/api/evaluates`
        }
    });
});

// Configure the routers
configureUsersRoutes(router);
configureTouristLocationRoutes(router);
configureHoursRoutes(router);
configureEvaluatesRoutes(router);

export default router