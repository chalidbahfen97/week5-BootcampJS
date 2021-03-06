const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('ord_id'),
      primaryKey: true
    },
    order_created_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    order_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    order_tax: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_total_due: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_total_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_trx_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    order_city: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    order_address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    order_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "order_name" },
        ]
      },
    ]
  });
};
