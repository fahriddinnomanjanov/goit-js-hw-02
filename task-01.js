"use strict";

const logItems = function(array) {
  // мой код создаю цикл for и внутри скобки даю имя переменный j на let и сравниваю на 0 потом
  // если j меньше array.length то на переменный j пилюсуем ++ что бы доставить все строки и номера

  for (let j = 0; j < array.length; j = j + 1) {
    const count = j + 1;
    const value = array[j];
    console.log(count + "-" + value);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// console.log(`${j + 1} - ${array[j]}`);
