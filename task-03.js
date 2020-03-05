"use strict";

// // Цель 1 я должен найти в строке  самое длинное слова
// // 1.1 преоброзовать строку в массив
// // 1.2 в цикле перебрать массив из пункта 1.1
// // 1.2.1 выучить и рассказать все циклы в JS
// // 1.3 создать переменную самого длинного слова и определить внее первое слово из массива
// // 1.4 на каждой иторации (это единичное выполнение тела цикла ) сравнивать длину слова из пункта 1.3 и с длиной каждого элемента массива
// // 1.5 Если длина слова из пункта 1.3 меньше длины слова на каждой иторации то в переменную самого длинного слова записать эту слова с иторации
// // 1.6 вернуть из функции переменную из функции 1.3

const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;
    const longestWordLength = longestWord.length;

    if (currentWordLength > longestWordLength) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

// let str = string.split(" ");
// let longestWord = 0;
// let word;

// for (let i = 0; i < str.length; i++) {
//   if (longestWord < str[i].length) {
//     longestWord = str[i].length
//     word = str[i];
//   }
// }
// return word;
