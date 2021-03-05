module.exports = function (sequelize, dataTypes) {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imgpath: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true
        }  
    }

    let config = {
        tableName: "image",
        timestamp: true, 
        underscored: true, 
        paranoid:true
    }

    const Image = sequelize.define(alias, cols, config)
    Image.associate = (models)=>{
        Image.hasMany(models.product,
            {
                as: "Product",        
                foreignKey: "id_product"   
            })
    }
    return Image;
}
