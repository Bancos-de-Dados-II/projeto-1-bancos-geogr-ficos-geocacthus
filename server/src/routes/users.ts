import { Router, Request, Response, NextFunction } from "express";

import UserService from "../services/userService";
import User from "../models/user";

const router = Router();
const userService = new UserService(User);

router.get("/", async (request: Request, response: Response) => {
    try {
        const users = await userService.getAllUsers();
        response.status(200).json({
            message: "Usuários encontrados com sucesso.",
            data: users,
        });
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).json({ message: 'Erro ao buscar usuários.', error: error.message });
        }

        response.status(500).json({ message: 'Erro ao buscar usuários.', error: 'Erro desconhecido' });
    }
});


export default router;