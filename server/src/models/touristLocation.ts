import { DataTypes, Sequelize } from "sequelize";

const touristLocation = (sequelize: Sequelize) => {
    const TouristLocation = sequelize.define('TouristLocation', {
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
            allowNull: false,  // Add validation for image URL format (e.g., https://example.com/image.jpg)
            validate: {
                isUrl: true,
            },
        },
        phone: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [10, 15], // Add validation for phone number length (e.g., 123-456-7890)
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
        tableName: 'tourist_locations',
        timestamps: true, // Ativa os campos `createdAt` e `updatedAt`
    });

    return TouristLocation;
}

export default touristLocation;