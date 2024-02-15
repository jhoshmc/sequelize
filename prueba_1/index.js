require("dotenv").config();
const server = require("./server");
const { sequelize } = require("./src/db");
const PORT = process.env.PORT;

async function main() {
  try {
    server.listen(PORT, () => {
      console.log(`servidor conectado en: ${PORT}`);
      sequelize.sync({ force: false });
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();

module.exports = server;
