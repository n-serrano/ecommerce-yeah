module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(50),
            NotNull: true
        },
        description: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        stock: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        id_image: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        id_status: {
            type: dataTypes.INTEGER,
            primaryKey: true
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
        Product.hasMany(models.image,
            {
                as: "Image",        
                foreignKey: "id_image"   
            }),
        Product.hasMany(models.status,
            {
                as: "Status",        
                foreignKey: "id_status"   
            })
    }
    return Product;
}
