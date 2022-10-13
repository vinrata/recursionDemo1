

function printNumbers(index,arr) {

if (index === arr.length) return;
console.log(arr[index]);
printNumbers(index + 1, arr);

}

printNumbers(0, [1,2,3,4]);
