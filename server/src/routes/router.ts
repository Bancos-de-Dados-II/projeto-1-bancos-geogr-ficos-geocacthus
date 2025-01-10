import { Response, Request, Router } from "express";
import dotenv from 'dotenv';
import configureUsersRoutes from "./users";
import configureTouristLocationRoutes from "./touristLocation";
import configureHoursRoutes from "./hours";
import configureEvaluatesRoutes from "./evaluates";
import authRouter from "./authentication";

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

configureUsersRoutes(router);
configureTouristLocationRoutes(router);
configureHoursRoutes(router);
configureEvaluatesRoutes(router);

export default router;