module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        admin: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        username: {
            type: dataTypes.STRING(50),
            NotNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        password: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        avatar: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        id_cart: {
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        tableName: "user",
        timestamp: true, 
        underscored: true, 
        paranoid:true
    }

    const User = sequelize.define(alias, cols, config)
    User.associate = (models)=>{
        User.hasMany(models.Cart,
            {
                as: "cart",        
                foreignKey: "id_user"   
            })
    }
    return User;
}
