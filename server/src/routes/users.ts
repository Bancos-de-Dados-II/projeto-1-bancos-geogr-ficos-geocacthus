import { Router, Request, Response, NextFunction } from "express";

import UserService from "../services/userService";
import User from "../models/user";
import authenticateToken from "../utils/middlewares/authenticateToken";
import HttpError from "../utils/error/httpError";

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

router.get("/:id", async (request: Request, response: Response) => {
    const { id } = request.params;
    
    try {
        const user = await userService.getUserById(id);
        response.status(200).json({
            message: "Usuário encontrado com sucesso.",
            data: user,
        });
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).json({ message: 'Erro ao buscar usuário.', error: error.message });
        }

        response.status(500).json({ message: 'Erro ao buscar usuário.', error: 'Erro desconhecido' });
    }
});

router.delete('/', authenticateToken, async (request: Request, response: Response, next: Function) => {
    try {
        const userAuth = request.user;

        if (!userAuth) {
            throw new HttpError("Usuário não encontrado.", 404);
        }

        const user = await userService.getUserByEmail(userAuth.email);

        const result = await userService.deleteUser(userAuth);

        response.status(200).json({
            message: "Usuário deletado com sucesso."
        });
    } catch (error) {
        next(error);
    }
});


export default router;