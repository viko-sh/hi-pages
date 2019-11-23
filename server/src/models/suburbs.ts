export default (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'suburbs',
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
      postcode: {
        type: DataTypes.STRING(4),
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );
  //   Job.associate = (models: ) => {};
  return Category;
};
