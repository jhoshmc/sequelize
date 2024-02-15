require("dotenv").config;
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const proyectModel = require("./models/proyect");
const taskModel = require("./models/task");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  { logging: false }
);
proyectModel(sequelize);
taskModel(sequelize);

const { Proyect, Task } = sequelize.models;

//* un proyecto tiene muchas tareas
//* tambien se le puede poner un objeto especificando donde es que se va a crear la relacion
Proyect.hasMany(Task, {
  //* nombre de la columna a crear
  foreignKey: "proyectId",
  //* a donde lo va a enlazar
  sourceKey: "id",
});

Task.belongsTo(Proyect, {
  //* nombre de la columna a crear
  foreignKey: "proyectId",
  //* enlasando a la tabla padre
  targetId: "id",
});

module.exports = { ...sequelize.models, sequelize };
