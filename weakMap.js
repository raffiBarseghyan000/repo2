let john = { name: "John" };

let weakMap = new WeakMap();
let map = new Map();
weakMap.set(john, "aaa");
map.set(john, "aaa");

john = null;

console.log(`value in weak map - ${weakMap.get(john)}`)
console.log(`value in weak map - ${map.keys()}`)