import { Sequelize } from 'sequelize';
import sequelize from '../config/sequelize';

import userModel from './user';
import touristLocationModel from './touristLocation';
import evaluatesModel from './evaluatesTouristLocation';
import hoursModel from './hours';

const user = userModel(sequelize);
const touristLocation = touristLocationModel(sequelize);
const evaluates = evaluatesModel(sequelize);
const hours = hoursModel(sequelize);

// Define association fk_user-touristLocation
user.hasMany(touristLocation, {
    foreignKey: 'userID',
    as: 'createdLocations',
});

touristLocation.belongsTo(user, {
    foreignKey: 'userID',
    as: 'creator',
});

// Define association fk_user-touristLocation-evaluates
user.hasMany(evaluates, {
    foreignKey: 'userID',
    as: 'evaluationsUser',
});

touristLocation.hasMany(evaluates, {
    foreignKey: 'touristLocationID',
    as: 'evaluationsLocations',
});

user.belongsToMany(touristLocation, {
    through: evaluates,
    foreignKey: 'userID',
    otherKey: 'touristLocationID',
    as: 'evaluatedLocations'
});

touristLocation.belongsToMany(user, {
    through: evaluates,
    foreignKey: 'touristLocationID',
    otherKey: 'userID',
    as: 'evaluators'
});

// Define association fk_touristLocation-hours
touristLocation.hasMany(hours, {
    foreignKey: 'touristLocationID',
    as: 'openingHours',
});

hours.belongsTo(touristLocation, {
    foreignKey: 'touristLocationID',
    as: 'touristLocation',
});


// sequelize.sync();

export { user, touristLocation, evaluates, hours };