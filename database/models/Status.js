module.exports = function (sequelize, dataTypes) {
    let alias = "Status";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: dataTypes.STRING(20),
            NotNull: true
        }
    }

    let config = {
        tableName: "status",
        timestamp: true, 
        underscored: true, 
        paranoid:true
    }

    const Status = sequelize.define(alias, cols, config)
    Status.associate = (models)=>{
        Status.belongsTo(models.Cart,
            {
                as: "cart",        
                foreignKey: "id_cart"   
            }),
        Status.hasMany(models.Product,
            {
                as: "product",        
                foreignKey: "id_product"   
            })
        }
    return Status;
}
