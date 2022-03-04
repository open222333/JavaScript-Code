// flat() flatMap()
// 攤平
console.log([1, [2, 3]].flat());
console.log([1, [2, [3]]].flat());
//攤平多層
let a = [1, [2, [3, [4]]]];
console.log(a.flat(1));
console.log(a.flat(2));
console.log(a.flat(3));
console.log(a.flat(4));
// flat().map() = flatMap()
let phrases = ['hello world', 'the definitive guide'];
let words = phrases.flatMap(phrases => phrases.split(" "));
console.log(words);
console.log([-2,-1,1,2].flatMap(x => x < 0 ? [] : Math.sqrt(x)));