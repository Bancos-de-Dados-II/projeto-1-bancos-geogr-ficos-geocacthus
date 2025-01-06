import { DataTypes, Sequelize } from "sequelize";

const hours = (sequelize: Sequelize) => {
    const Hours = sequelize.define('Hours', {
        day: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
                isIn: [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
            },
            primaryKey: true,
        },
        firstHours: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        lastHours: {
            type: DataTypes.TIME,
            allowNull: false,
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
        tableName: 'hours_tour',
        timestamps: false,
    });

    return Hours;
}

export default hours;