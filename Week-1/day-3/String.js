//Array.prototype.every()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
//Fill()

const array2=[1,2,3,4]
console.log(array2.fill(0))    