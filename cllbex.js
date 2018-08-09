// 1
function add(x, y, callback1) {
    var result = x + y; 
    callback1(result)
}

add(2, 3, function(result){
    console.log(result);
})


// 2
function subtract(x, y, callback2) { 
    var result2 = x - y;
    callback2(result2);
} 

subtract(1, 7, function(element){
    console.log(element);
})


// 3
function greeting(person, callback3) { 
    var greet = 'Hola, ' + person + '!';
    callback3(greet); 
} 

greeting("Melissa", function(greetings){
    console.log(greetings);
})


// 4 
function product(numbers, callback4) { 
    callback4(numbers)
}

product([3,4,5], function(numbers){
    console.log(numbers.reduce(function(a, b){
        return a * b;
    }, 1))
})