const middleware = require("./middlewares/Middleware");
const MathsClass = require("./controllers/MathsFixed");
const NewMaths = require("./controllers/NewMaths");;

const ArchiveJSON = require("./json/nums.json");

const calculator = new MathsClass(ArchiveJSON);

// var sumar = calculator.sum()
// var resta = calculator.rest();
// var multiplicar = calculator.multiply();


middleware.use(function(next) {
      this.sumar = calculator.sum()
      next();
  });

  
middleware.use(function(next) {
    this.restar = calculator.rest();
    next();
});

middleware.use(function(next) {
    this.multiplicar = calculator.multiply();
    next();
});

middleware.use(function(next) {
    this.cuadrado = NewMaths.cuadrado(this.sumar)
    next();
});

middleware.use(function(next) {
    this.division = NewMaths.division(this.sumar,this.restar)
    next();
});
  

middleware.go(function() {
    console.log(this.sumar); // true
    console.log(this.restar); // true
    console.log(this.multiplicar); // true
    console.log(this.cuadrado); // true
    console.log(this.division);
});

