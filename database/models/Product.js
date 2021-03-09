module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imgpath: {
            type: dataTypes.STRING(1000),
        },
        name: {
            type: dataTypes.STRING(50),
            NotNull: true
        },
        description: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        stock: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        id_status: {
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        tableName: "product",
        timestamp: true, 
        underscored: true, 
        paranoid:true
    }

    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models)=>{
        // Product.hasMany(models.Image,
        //     {
        //         as: "image",        
        //         foreignKey: "id_product"   
        //     }),
        Product.belongsTo(models.Status,
            {
                as: "status",        
                foreignKey: "id_status"   
            })
    }
    return Product;
}
