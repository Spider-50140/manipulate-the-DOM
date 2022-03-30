var multiply = function (x, y) {
  console.log(x * y)
}

var multiply_by_2 = multiply.bind(this, 2)
var multiply_by_5 = multiply.bind(this, 5)
var multiply_by_10 = multiply.bind(this, 10)
multiply_by_2(5)
multiply_by_5(5)
multiply_by_10(5)

let divide = function (n1) {
  return function (n2) {
    console.log(n1 / n2)
  }
}

var task1 = divide(50)
task1(10)
