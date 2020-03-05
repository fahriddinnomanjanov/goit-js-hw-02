"use strict";

// const calculateEngravingPrice = function(message, pricePerWord) {

// // Цель - вернуть результат переумножение количество строке на цену за слова
// // пункт 1) найти количество слов в строке
// //1.1) изучить методы работы со строками и найти подходяший метод который позволить решит задачу (split)
// //1.2) найти длину полученного массива
// // Пункт 2) вернуть результат переумножение длины найденного в пункте 1 массива на цену за слова

// const calculateEngravingPrice =(message, pricePerWord) => message.split(" ").length * pricePerWord

const calculateEngravingPrice = function(message, pricePerWord) {
  
  const word = message.split(" ");
  const length = word.length;
  const value = length * pricePerWord;
  return value;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
    )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
  ); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  ); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

  // return message.split(" ").length * pricePerWord;
  // // твой код
  
  // let message1 = message.split(" ");
  // return message1.length*pricePerWord;