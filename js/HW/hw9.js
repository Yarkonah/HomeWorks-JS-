
// //1
// const a = 10;
// const b = 15;
// console.log(a>b ? a : b);
//
// //2
// const year = +prompt("Введіть ваш рік народження");
// let res = 2023 - year;
// alert('Вам ' + res + ' років');

////3
// const name1 = "Igor";
// const name2 = "Oleg";
// const name3 = "Olena";
// const name4 = "Nastya";

// let stop = 0;
// while(stop < 1){
//     let usrName = prompt('Введіть ім\'я');
//     if (usrName === null) stop = 1;
//     switch(usrName){
//         case 'Igor':
//         case 'Oleg':
//             console.log('men');
//             break;
//         case 'Olena':
//         case 'Nastya':
//             console.log('women');
//             break;
//         default:
//             console.log('unknown name');
//     }
// }

//4
let i = +prompt('Введіть довжину масиву');
let array = [];
let new_array = [];
for (let j = 0; j < i; j++) {
    let el = +prompt('Введіть число');
    array.push(el);
    new_array.unshift(el);
}
console.log('Початковий массив: ' + array);
console.log('Кінцевий массив: ' + new_array);

