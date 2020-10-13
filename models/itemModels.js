//  INITIAL INVENTORY CREATION
module.exports = function(sequelize, Datatypes){

    const Item = sequelize.define("inventory_item",  {
        unit_name:{
            type: Sequelize.STRING,
            allowNull: false
        }, 
        unit_category:{
            type: Sequelize.STRING,
            allowNull: false
        }, 
        unit_distributor:{
            type: Sequelize.STRING,
            allowNull: false
        },
        unit_price:{
            type: Sequelize.INTEGER,   // change to decimal?
            allowNull: false
        },  
        unit_par:{
            type: Sequelize.DECIMAL (10,2),
            allowNull: true
        },
        item_count_par:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        item_count:{
            type: Sequelize.DECIMAL (10,2),
            allowNull: false
        },
        item_count_type:{               // possibly replace with measurement?
            type: Sequelize.STRING,
            allowNull: false
        },
        item_price:{
            type: Sequelize.INTEGER,
            allowNull: false
        },

        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true},
        // INVENTORY TABLE id should be auto-incrementing, but only used as a reference, should not necessarily be more than one reference table for MVP
    },{
        timestamps: false,            // CAN REMOVE once not using seed data
    });
    Item.associate = function (models){
        User.belongsToMany(models.item, {
            through:"userItem",// <----------- be careful to call this whatever is being exported (ESPECIALLY WHEN DIFFERENT FROM MODEL FILE NAME)
            foreignKey: "userId"
        });
    }
    return Item

}

