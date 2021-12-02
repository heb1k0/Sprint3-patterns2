
class MathsClass {

    constructor(json){
        this.numbers = [];
        this.obj = Object.values(json)
        this.obj.forEach(element => {
            this.numbers.push(element)
        });
    }

    sum() {

        var sum = 0
        this.numbers.forEach(element => {
            // console.log(`${element} + ${sum} = ${element+sum}`)
            sum+=element
        });
        return sum;
        
    }

    rest() {
        var sum = 0
        this.numbers.forEach(element => {
            // console.log(`${element} - ${sum} = ${element-sum}`)
            sum-=element
        });
        return sum;
    }

    multiply() {
        var sum = 1
        this.numbers.forEach(element => {
            // console.log(`${element} * ${sum} = ${element*sum}`)
            sum = sum * element
        });
        return sum;
    }
}

module.exports = MathsClass;