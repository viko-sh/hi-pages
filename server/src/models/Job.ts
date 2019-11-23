export default (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: DataTypes.STRING(50),
        defaultValue: 'new',
        allowNull: false
      },
      suburb_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      contact_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      contact_email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER(3),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );
  Job.associate = models => {
    Job.hasOne(models.category, { as: 'category', foreignKey: 'id' });
  };
  return Job;
};
