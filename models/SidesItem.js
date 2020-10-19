module.exports = function (sequelize, DataTypes) {
    const SidesItem = sequelize.define("SidesItem", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                min: 10
            }           
        },
        allergens: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                min: 2
            }           
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return SidesItem;

};