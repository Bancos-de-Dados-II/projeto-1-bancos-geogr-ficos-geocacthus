import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/sequelize";


class Review extends Model {
    declare rating: number;
    declare comment: string;
    declare userId: string;
    declare touristPlaceID: string;
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
    comment: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [0, 500],
        },
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
    touristPlaceID: {
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