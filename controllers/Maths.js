
class Maths {

    add(result) {

        var sum = 0
        let resultToArray = Object.values(result)
        resultToArray.forEach(element => {
            // console.log(`${element} + ${sum} = ${element+sum}`)
            sum+=element
        });
        return sum;
        
    }

    subtract(result) {
        var sum = 0
        let resultToArray = Object.values(result)
        resultToArray.forEach(element => {
            // console.log(`${element} - ${sum} = ${element-sum}`)
            sum-=element
        });
        return sum;
    }

    multiply(result) {
        var sum = 1
        let resultToArray = Object.values(result)
        resultToArray.forEach(element => {
            // console.log(`${element} * ${sum} = ${element*sum}`)
            sum = sum * element
        });
        return sum;
    }
}

module.exports = Maths;