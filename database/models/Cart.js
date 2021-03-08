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
        },
        id_product: {
            type: dataTypes.INTEGER,
        },
        id_user: {
            type: dataTypes.INTEGER,
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
        Cart.belongsTo(models.Product,
            {
                as: "product",        
                foreignKey: "id_product"   
            }),
        Cart.belongsTo(models.User,
            {
                 as: "user",        
                foreignKey: "id_user"   
            })
    }
    return Cart;
}
