module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('burger', {
        burgerName: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    return Model;
}