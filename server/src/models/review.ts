import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/sequelize";


class Review extends Model {
    declare rating: number;
    declare date: Date;
    declare userId: string;
    declare touristLocationID: string;
}

Review.init({
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        primaryKey: true,
    },
    touristLocationID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tourist-places',
            key: 'id',
        },
        primaryKey: true,
    },
}, {
    sequelize: db,
    tableName: 'reviews',
})


export default Review;
export { Review };