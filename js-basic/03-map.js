const myArry = [1,2,3,4,5,6,7,8,9];
const newArry = myArry.map( (item) => item += 3)
console.log(myArry);
console.log(newArry);
const addToCart = [
    {
        item : "book1",
        price : 100
    },
    {
        item : "book2",
        price : 200
    },
    {
        item : "book3",
        price : 300
    },
    {
        item : "book4",
        price : 400
    },
    {
        item : "book5",
        price : 500
    },
]

total = addToCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(total)
