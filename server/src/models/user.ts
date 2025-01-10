import { CreationOptional, DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/sequelize";
import TouristPlace from "./touristPlace";
import Review from "./review";


class User extends Model {
    declare id: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare password: string;
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false, 
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'users',
});

User.hasMany(TouristPlace, {
    foreignKey: 'userID',
    as: 'createdLocations',
});

User.hasMany(Review, {
    foreignKey: 'userID',
    as: 'evaluationsUser',
});

User.belongsToMany(TouristPlace, {
    through: Review,
    foreignKey: 'userID',
    otherKey: 'touristLocationID',
    as: 'evaluatedLocations'
});

export default User;
export { User };