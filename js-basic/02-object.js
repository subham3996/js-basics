jsUser = {
    name : "dddd",
    age : 18,
    email : "test@gmail.com"
}

jsUser.greetings = function() {
    console.log("hello user")
} 

jsUser.greetingsTwo = function() {
    console.log(`hello ${jsUser["name"]}`) // string interpolation
} 

// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());

const course = {
    name : 'Hindi',
    price : 999
}

//const { name } = course;
const name = course['name'];
console.log(name)


