export default (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'category',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      parent_category_id: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
        allowNull: false
      }
    },
    {
      underscored: true,
      timestamps: false
    }
  );
  //   Job.associate = (models: ) => {};
  return Category;
};
