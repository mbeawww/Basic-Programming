function convertToArrayString (arr:number[]) {
const newArray:string [] = [];
for(let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toString());
}

return newArray
}

function convertToArrayStringEz (arr: number[]) {
    return arr.map(function (element, index) {
        return element.toString
    })
}

const items = [
    {product: "Pen",price: 15},
    {product: "Notebook",price: 50},
    {product: "Eraser",price: 5 }
];

const expensiveItems = items.filter(function(element,index) {
    return element.price > 10
}).map(function(element,index) {
    return element.product
})

const fruits =["apple","mango","orange","banana"];
const longfruits = fruits.filter(function(element,index){
    return element.length > 5
}).map (function(element,index){
    return element.toUpperCase()
}).reverse()

const numbers = [1,2,3,4,5,6,7,8,9,10];

const incrementedNumbers = numbers.map(function(element,index){
    return element +1
})

console.log (incrementedNumbers)

const incrementedNumberWithFor: number [] = []
for(let i = 0; i < numbers.length; i++) {
    incrementedNumberWithFor.push(numbers[i] + 1 )
}
console.log(incrementedNumberWithFor)

// const names = ["Art 3D","Au Iphone 16 Pro Max Black Titanium","Bung Jed","Mr M","Kuy Ing"];
// const fullNamesArray: string [] = []
// function cutNameWithWhileLoops0 (names: string[]) {
//     for (let i  = 0; names.length; i++) {
//         const cutName = names [i].split (" ")
//         const fullName = {
//             firstName: cutName [0],
//             lastName: cutName [1]
//         };
//         fullNamesArray.push(fullNameArray);
//     }
// }

function cutNameWithMap(names:string[]) {
    return names.map(function(element,index){
        const cutName = element.split(" ")
        return ({
            firstName: cutName [0],
            lastname:cutName [1]
        })
    })
}

console.log(cutNameWithMap)

const people = [
    {name: "PearWah", age:20, isAdult: true},
    {name: "Mei", age:19, isAdult:true},
    {name: "Pinky", age:17, isAdult:false}
]

const updatePeople = people.map(function(element,index){
    return {
        name: element.name,
        age: element.age,
        isAdult: element.age > 18
    }
})

const person = {
    name: "Alice",
    age: 17,
    checkIsAdult: function () {
        return this.age > 18
    }
};

console.log(person.checkIsAdult())

const Account = {
    balance: 1000,
    deposit: function(amount: number) {
        this.balance += amount;
    },
    withdraw:function (amount:number) {
        if (this.balance < amount) {
            console.log('เงินไม่พอที่จะถอน ยอดเงินปัจจุบันคือ ' + this.balance)
            return
        }
        
        this.balance = this.balance - amount
        console.log ('ถอนเงิน' + amount + 'คงเหลือ' + this.balance)
    }
};
Account.deposit(500)
Account.withdraw(500)