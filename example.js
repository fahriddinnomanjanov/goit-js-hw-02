'use strict';

const users = ['aNn', 'SeRg', 'LoliTa', 'Liza', 'dog'];

function foo(arr){
    const rez=[];

    for(let i = 0; i < arr.length; i++) {
        const user = arr[i];
        rez.push(user[0].toUpperCase() + user.slice(1).toLowerCase());
    }

    return rez;
}

console.log(foo(users));















































// const quantityStudents = 15;
// const isOk = confirm('Рандом студентов')

// if(isOk){
//     console.log(Math.ceil(Math.random()*(quantityStudents)));
// }
// else{
//     alert('Отменено пользователем')
// }

// const OPERATIONS="+-/*";
// let firstNumber;
// let secondNumber;

// do {
//     firstNumber = prompt("Enter the first number");
// }
// while(Number.isNa(Number(firstNumber)));

// do {
//     secondNumber = prompt("Enter the second number");
// }
// while(Number.isNa(Number(secondNumber)));


// {
//     alert('Please enter the number');
// }


// let sum = 0;
// let p = 0;

// while(p<=10){
//     sum = sum + p;
//     p++;
// }

// console.log('sum =' + sum);   

// let out = document.querySelector('#out');

// p=0;
// let outStr = ' ';

// while(p<4) {
//     outStr +='*';
//     p++;
// }
// outStr.innerHTML=out;