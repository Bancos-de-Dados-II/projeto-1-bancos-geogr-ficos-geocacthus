import 'dotenv/config';
import { Router, Request, Response, NextFunction } from "express";
import AuthService from '../services/authService';
import User from '../models/user';


const SECRET_KEY: string = process.env.SECRET_KEY || 'default_secret_key';
const router = Router();
const authService = new AuthService(User, SECRET_KEY)

router.post("/register", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userDTO = request.body;
        const newUser = await authService.createUser(userDTO);

        response.status(201).json({
            message: "Usuário criado com sucesso.",
            data: newUser,
        });
    } catch (error) {
        next(error)
    };
});


export default router;