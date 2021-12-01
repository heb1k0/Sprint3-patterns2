const Middleware = require("./middlewares/Middleware");
const Maths = require("./controllers/Maths");
const ReadJson = require("./controllers/ReadJson");

const ArchiveJSON = require("./json/nums.json");

const calculator = new Maths();
const app = new Middleware(calculator);
console.log(app.add(ArchiveJSON));
console.log(app.subtract(ArchiveJSON));
console.log(app.multiply(ArchiveJSON));







