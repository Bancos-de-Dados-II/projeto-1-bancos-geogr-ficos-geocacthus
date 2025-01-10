import { Model, ModelStatic } from "sequelize";
import User from "../models/user";

class UserService {
    private userModel: ModelStatic<User>;

    constructor(userModel: ModelStatic<User>) {
        this.userModel = userModel;
    }   
}