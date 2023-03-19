const app = require("./app");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));