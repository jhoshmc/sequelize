require("dotenv").config();
const { sequelize } = require("./src/db");
const server = require("./server");
const PORT = process.env.PORT;

async function main() {
  try {
    server.listen(PORT, () => {
      console.log("se inicializo en el puerto: " + PORT);
      sequelize.sync({ force: true });
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
