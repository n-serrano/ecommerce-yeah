module.exports = function (sequelize, dataTypes) {
    let alias = "Status";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        in_stock: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        in_cart: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        bought: {
            type: dataTypes.INTEGER,
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
        Status.belongsTo(models.status,
            {
                as: "Cart",        
                foreignKey: "id_cart"   
            }),
        Status.hasMany(models.product,
            {
                as: "Product",        
                foreignKey: "id_product"   
            })
        }
    return Status;
}
