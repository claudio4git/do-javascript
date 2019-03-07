const arr = [1, 2, 4, 5, 6, 8, 9];

const newArr = arr.map(function(item, index) {
    return item * index;
})

//console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
})

//console.log(sum);

const pair = arr.filter(function(item) {
    return item % 2 === 0;
})

//console.log(pair);

const findNumber = arr.find(function(item) {
    return item === 4;
});

//console.log(findNumber);