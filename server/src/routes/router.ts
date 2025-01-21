import { Response, Request, Router } from "express";
import dotenv from 'dotenv';

import authRouter from "./authentication";
import userRouter from "./users";
import touristPlaceRouter from "./touristPlace";

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

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/tourist-place', touristPlaceRouter);

export default router;