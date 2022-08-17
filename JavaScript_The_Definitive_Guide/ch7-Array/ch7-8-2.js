// flat() flatMap()
// 攤平
console.log([1, [2, 3]].flat()); // [ 1, 2, 3 ]
console.log([1, [2, [3]]].flat()); // [ 1, 2, [ 3 ] ]
// 攤平多層
let a = [1, [2, [3, [4]]]];
console.log(a.flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log(a.flat(2)); // [ 1, 2, 3, [ 4 ] ]
console.log(a.flat(3)); // [ 1, 2, 3, 4 ]
console.log(a.flat(4)); // [ 1, 2, 3, 4 ]
// flat().map() = flatMap()
let phrases = ['hello world', 'the definitive guide'];
let words = phrases.flatMap(phrases => phrases.split(" "));
console.log(words); // [ 'hello', 'world', 'the', 'definitive', 'guide' ]
console.log([-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))); // [ 1, 1.4142135623730951 ] = [1, 2**0.5]