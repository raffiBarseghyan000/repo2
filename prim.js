let str1 = "aaa";

let str2 = {
    value: "aaa"
};

str1.test = 5;
str2.test = 5;


console.log(`property of primitive type - ${str1.test}`);
console.log(`property of object type - ${str2.test}`);