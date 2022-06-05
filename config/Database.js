import { Sequelize } from "sequelize";
 
const db = new Sequelize('blogs', 'root', '', {
    host: "localhost",
    dialect: "mysql",
		password: "Pict@123"
});
 
export default db;
