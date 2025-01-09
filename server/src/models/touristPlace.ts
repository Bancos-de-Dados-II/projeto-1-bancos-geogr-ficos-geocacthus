import { CreationOptional, DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/sequelize";
import User from "./user";
import Review from "./review";
import Schedules from "./schedule";


class TouristPlace extends Model {
    declare id: CreationOptional<string>;
    declare name: string;
    declare description: string;
    declare category: string;
    declare image: string;
    declare phone: string;
}

TouristPlace.init({
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING(100),
        allowNull: false, 
        validate: {
            notEmpty: true,
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },
    phone: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [10, 15],
        },
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
}, {
    sequelize: db,
    tableName: 'tourist-places',
    timestamps: true,
})

TouristPlace.belongsTo(User, {
    foreignKey: 'userID',
    as: 'creator',
});

TouristPlace.hasMany(Review, {
    foreignKey: 'touristLocationID',
    as: 'evaluationsLocations',
});

TouristPlace.belongsToMany(User, {
    through: Review,
    foreignKey: 'touristLocationID',
    otherKey: 'userID',
    as: 'evaluators'
});

TouristPlace.hasMany(Schedules, {
    foreignKey: 'touristLocationID',
    as: 'openingHours',
});

export default TouristPlace;
export { TouristPlace };