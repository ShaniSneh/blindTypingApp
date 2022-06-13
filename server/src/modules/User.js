module.exports = (sequelize, DataTypes) => {

    sequelize.define('User', {
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unnique: true
        },
        password: DataTypes.STRING,
        info: DataTypes.STRING
    }
}
