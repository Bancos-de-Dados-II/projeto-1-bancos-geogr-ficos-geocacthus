import { Model, ModelStatic } from "sequelize";
import User from "../models/user";
import HttpError from "../utils/error/httpError";

class UserService {
    private userModel: ModelStatic<User>;

    constructor(userModel: ModelStatic<User>) {
        this.userModel = userModel;
    }

    async getAllUsers() {
        try {
            const users = await this.userModel.findAll({
                attributes: { exclude: ['password']},
            });

            return users;
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpError("Não foi possível buscar usuários", 500, error);
            }

            throw new HttpError("Erro interno ao tentar buscar usuários.", 500);
        }
    }

    async getUserById(userId: string) {
        try {
            const user = await this.userModel.findOne({ 
                where: { id: userId },
                attributes: { exclude: ['senha'] } 
            })

            if (!user) {
                throw new HttpError("Usuário não encontrado.", 404);
            }
    
            return user;
        } catch (error) {
            if (error instanceof HttpError) {
                throw new HttpError(error.message, error.statusCode);
            }

            throw new HttpError("Erro interno ao buscar usuário.", 500);
        }
    }

    async getUserByEmail(userEmail: string) {
        try {
            const user = await this.userModel.findOne({ 
                where: { email: userEmail },
                attributes: { exclude: ['senha'] }
            });

            if (!user) throw new HttpError("Usuário não encontrado.", 404);

            return user;
        } catch (error) {
            if (error instanceof HttpError) {
                throw new HttpError(error.message, error.statusCode);
            }

            throw new HttpError("Erro interno ao buscar usuário.", 500);
        }
    }
}


export default UserService;