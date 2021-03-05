module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        orderNum: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        totalToPay: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        id_status: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true
        }
        
    }

    let config = {
        tableName: "cart",
        timestamp: true, 
        underscored: true, 
        paranoid:true
    }

    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = (models)=>{
        Cart.hasMany(models.status,
            {
                as: "Status",        
                foreignKey: "id_status"   
            }),
        Cart.hasMany(models.product,
            {
                as: "Product",        
                foreignKey: "id_product"   
            }),
        Cart.hasMany(models.user,
            {
                 as: "User",        
                foreignKey: "id_user"   
            })
    }
    return Cart;
}
