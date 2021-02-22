module.exports = function(sequelize, dataTypes) {
    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        password: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        avatar: {
            type: dataTypes.STRING(100),
            notNull: true,
        }
    }
    
    let config = {
        tableName: 'users',
        timestamps: true,
        underscored: true,
        paranoid:true        
    }

    const Users = sequelize.define(alias, cols, config)
    return Users
}