// 1
function add(x, y, callback1) {
    setTimeout(function(){
        var result = x + y; 
        callback1(result)
    }, 1000)
}

add(2, 3, function(result){
    console.log(result);
})


// 2
function subtract(x, y, callback2) {
    setTimeout(function(){
        var result2 = x - y;
        callback2(result2);
    }, 1000)
} 

subtract(1, 7, function(element){
    console.log(element);
})


// 3
function greeting(person, callback3) { 
    setTimeout(function(){
        var greet = 'Hola, ' + person + '!';
        callback3(greet);
    }, 1000) 
} 

greeting("Melissa", function(greetings){
    console.log(greetings);
})


// 4 
function product(numbers, callback4) {
    setTimeout(function(){
        callback4(numbers)
    }, 1000)
}

product([3,4,5], function(numbers){
    console.log(numbers.reduce(function(a, b){
        return a * b;
    }, 1))
})