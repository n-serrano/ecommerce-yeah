module.exports = function (sequelize, dataTypes) {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING(20),
            NotNull: true
        }
       
    }

    let config = {
        tableName: "category",
        timestamp: true,
        underscored: true,
    }

    const Category = sequelize.define(alias, cols, config)
    Category.associate = (models)=>{
        Category.hasMany(models.Product,
            {
                as: "product",        
                foreignKey: "id_category"   
            })
        }
    return Category;
}
