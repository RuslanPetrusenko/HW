// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1;
// while (i < 11){
// result = result *2
// i++
// }
// console.log(result)

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// const power = function(num) {
//     let result = 1;
//     for (let  i= 1; i <= num; i++){
//         result = result *2
//     }
//     return result
// }
// console.log(power(10))

// Вариант 2

const power2 = function(num){
    return Math.pow(2,num)
}
console.log(power2(10))

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)"
let result2 = ""
for(let i=1; i<=5; i++){
    result2+=word
    console.log(result2)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    let result = '';
    for (let i =1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)
    }
}
printSmile('=)', 5)

// Вариант номер 2

function printSmile(stroka, numberOfRows){
    for (let i =1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile('=(', 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    const vowels = 'aeiouy'.split('')
    const constants = 'bcdfghjklmnopqrsrvwxz'
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    for (char of word.toLowerCase()){
        if (vowels.includes(char)) numberOfVowels++;
        if (constants.includes(char)) numberOfConsonants++;
    }
    console.log (`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных букв`)
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')