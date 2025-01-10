import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/sequelize";
import TouristPlace from "./touristPlace";

class Schedules extends Model {
    declare day: string;
    declare firstHours: string;
    declare lastHours: string;
    declare touristLocationID: string;
}

Schedules.init({
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
            model: 'tourist-places',
            key: 'id',
        },
        primaryKey: true,
    },
}, {
    sequelize: db,
    tableName: 'schedules',
    timestamps: false,
})

Schedules.belongsTo(TouristPlace, {
    foreignKey: 'touristLocationID',
    as: 'touristLocation',
});


export default Schedules;
export { Schedules };