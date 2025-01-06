import { DataTypes, Sequelize } from "sequelize";

const evaluatesTouristLocation = (sequelize: Sequelize) => {
    const EvaluateTouristLocation = sequelize.define('EvaluateTouristLocation', {
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
                model: 'tourist_locations',
                key: 'id',
            },
            primaryKey: true,
        },
    }, {
        tableName: 'evaluates',
        indexes: [{
            unique: true,
            fields: ['userID', 'touristLocationID', 'date'],  // Add composite primary key
        }]
    });

    return EvaluateTouristLocation;
}

export default evaluatesTouristLocation;