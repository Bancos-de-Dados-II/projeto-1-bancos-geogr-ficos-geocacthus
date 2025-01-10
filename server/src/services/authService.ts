import { ModelStatic, ValidationError, ValidationErrorItem } from "sequelize";
import User from "../models/user";
import HttpError from "../utils/error/httpError";
import bcrypt from 'bcrypt';

class AuthService {
    private userModel: ModelStatic<User>;
    private secretKey: string;

    constructor(userModel: ModelStatic<User>, secretKey: string) {
        this.userModel = userModel;
        this.secretKey = secretKey;
    }

    async createUser(userDTO: User) {
        const { name, email, password } = userDTO;
    
        if (!email || !name || !password) {
            throw new HttpError("Todos os campos são obrigatórios.", 400);
        }

        const usuarioExiste = await this.userModel.findOne({ where: { email } });

        if (usuarioExiste) {
            throw new HttpError("E-mail já cadastrado.", 400);
        }
    
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const novoUsuario = await this.userModel.create({
                name,
                email,
                password: hashedPassword,
            });
    
            return { status: 201, message: "Usuário criado com sucesso!", data: novoUsuario };
        } catch (error) {    
            if (error instanceof ValidationError) {
                const errors = error.errors.map((err: ValidationErrorItem) => err.message);
                throw new HttpError(`Erro de validação.`, 400, new Error(errors.join(", ")));
            }
    
            throw new HttpError("Erro interno ao criar usuário.", 500);
        }    
    }
}


export default AuthService;