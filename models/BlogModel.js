import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
// import Admin from './UserModel';

const { DataTypes } = Sequelize;

const Blogs = db.define(
  'blogs',
  {
    title: {
      type: DataTypes.STRING,
    },
    adminId: {
      type: DataTypes.UUID,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.INTEGER,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

// Blogs.hasOne(Admin, {foreignKey: 'id', sourceKey: 'adminId'});

(async () => {
  await db.sync();
})();

export default Blogs;
