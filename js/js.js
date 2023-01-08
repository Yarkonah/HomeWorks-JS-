// //1
// var maxTransSpeedData
// document.write(maxTransSpeedData)
// document.write('<p>\n</p>')
// //2
// var dayOfWeek
// document.write(dayOfWeek)
// document.write('<p>\n</p>')
// //3
// var x
// x=2+6/(1+2)
// document.write(x)
// document.write('<p>\n</p>')
// //4
// var x
// var y
// x=1
// y=13
//
// //5
// var x
// var y
// x=1
// y=2
// //6
// x1=1
// y1=true
// document.write(x1+y1)
// document.write('<p>\n</p>')
// //--
// x2='1'
// y2=2
// document.write(x2+y2)
// document.write('<p>\n</p>')
// //-
// x3='1'
// y3=false
// document.write(x3+y3)
//
// //4
// var x=+prompt('Введіть число X');
// var y=+prompt('Введіть число Y');
// if(x>y)
//     document.write('x>y');
// else if(x<y)
//     document.write('x<y');
// else if(x=y)
//     document.write('x=y');
// else
//     document.write('Помилка');
// //5
// var x=+prompt('Введіть число X');
// if(x>=0 && x<=100)
//     document.write('Належить діапозону від 0 до 100');
// else if(x>=101 && x<=200)
//     document.write('Належить діапозону від 101 до 200');
// else if(x>=201 && x<=300)
//     document.write('Належить діапозону від 201 до 300');
// else
//     document.write('X не належить жодному діапозону');
// //6
// var x=+prompt('Введіть число від 0 до 9');
// if(x>=0 && x<=9){
//     if (x=='0')
//         document.write('нуль');
//     else if (x=='1')
//         document.write('один');
//     else if (x=='2')
//         document.write('два');
//     else if (x=='3')
//         document.write('три');
//     else if (x=='4')
//         document.write('чотири');
//     else if (x=='5')
//         document.write('пять');
//     else if (x=='6')
//         document.write('шість');
//     else if (x=='7')
//         document.write('сім');
//     else if (x=='8')
//         document.write('вісім');
//     else if (x=='9')
//         document.write('девять');
// }else if(typeof(x)!=='Number')
//     document.write('Введене значення не є числом');
// else
//     document.write('Введене число не корректне');
//
//
// // var x=+prompt('Введіть число від 0 до 9');
// // if(x>=0 && x<=9){
// //     switch (x){
// //       case '0':
// //         document.write('нуль');
// //         break;
// //         case '1':
// //         document.write('один');
// //         break;
// //         case '2':
// //         document.write('два');
// //         break;
// //         case '3':
// //         document.write('три');
// //         break;
// //         case '4':
// //         document.write('чотири');
// //         break;
// //         case '5':
// //         document.write('пять');
// //         break;
// //         case '6':
// //         document.write('шість');
// //         break;
// //         case '7':
// //         document.write('сім');
// //         break;
// //         case '8':
// //         document.write('вісім');
// //         break;
// //         case '9':
// //         document.write('девять');
// //         break;
// //     }
// // }else if(typeof(x)!=='Number')
// //     document.write('Введене значення не є числом');
// // else
// //     document.write('Введене число не корректне');
//

// //1
// var x=+prompt('Введіть Ваш вік');
// if (x>=0 && x<=12) alert('Ви дитина')
// else if (x>12 && x<=18) alert('Ви підліток')
// else if (x>18 && x<=60) alert('Ви дорослий')
// else if (x>60 && x<=130) alert('Ви пенсіонер')
// else if (x>130) alert('Стільки не живуть)')
// else alert('не вірно введені дані')
//
// //2
// var x=+prompt('Введіть число від 0 до 9');
// if (x>=0 && x<=9)
//     switch (x){
//         case 0:
//             alert(')');
//             break;
//         case 1:
//             alert('!');
//             break;
//         case 2:
//             alert('@');
//             break;
//         case 3:
//             alert('#');
//             break;
//         case 4:
//             alert('$');
//             break;
//         case 5:
//             alert('%');
//             break;
//         case 6:
//             alert('^');
//             break;
//         case 7:
//             alert('&');
//             break;
//         case 8:
//             alert('*');
//             break;
//         case 9:
//             alert('(');
//             break;
//     }
// else
//     alert('Не вірно введені данні');
//
// //3
// var x=+prompt('Введіть тризначне число');
// if (x>=-999 && x<=999)
// {
//     var x_ost = x%100;
//     var x_1 = (x-x_ost)/100;
//     var x_ost2 = x_ost%10;
//     var x_2 = (x_ost-x_ost2)/10;
//     var x_3 = x_ost2;
// }
// else
//     alert('Не вірно введене число');
// //alert(x_1 + ' ' + x_2 + ' ' + x_3);
// if (x_1==x_2 && x_2==x_3)
//     alert('Всі три цифри однакові')
// else if (x_1==x_2 || x_2==x_3 || x_1==x_3)
//     alert('Дві цифри повторюються');
// else
//     alert('Всі три цифри різні');
//
// //4
// var x=+prompt('Введіть повний рік');
// year_400 = x%400 == 0 ? '1' : '0';
// year_4 = (x%4 == 0 && x%100 !== 0) ? '1' : '0';
// if (year_400 == 1 || year_4 == 1)
//     alert('Рік високосний');
// else
//     alert('Рік не високосний');
//
// //5
// var x=+prompt('Введіть п`ятизначне число');
// var x_ost1 = x%10000;
// var x_1 = ((x - x_ost1)/10000);
// var x_ost2 = x_ost1%1000;
// var x_2 = ((x_ost1 - x_ost2)/1000);
// var x_ost3 = x_ost2%100;
// var x_3 = ((x_ost2 - x_ost3)/100);
// var x_ost4 = x_ost3%10;
// var x_4 = ((x_ost3 - x_ost4)/10);
// var x_5 = (x_ost4);
// //alert(x_1 + ' ' + x_2 + ' ' + x_3 + ' ' + x_4 + ' ' + x_5);
// mes = (x_1 == x_5 && x_2 == x_4) ? 'Число поліном' : 'Число не є поліномом';
// alert(mes);
//
// //6
// var x=+prompt('Введіть кількість баксів, яки ви бажаєте обміняти');
// currency = prompt('Введіть валюти для обміну EUR, UAN или AZN', '');
// switch(currency){
//     case 'EUR':
//         alert('Ви отримаєте ' + x*0.94 + 'евро');
//         break;
//     case 'UAN':
//         alert('Ви отримаєте ' + x*40 + 'гривень');
//         break;
//     case 'AZN':
//         alert('Ви отримаєте ' + x*1.7 + 'манатів');
//         break;
// }
//
//
// //7
// var x=+prompt('Введіть суму покупки');
// var dis = x;
// dis = (x>=200 && x<300) ? (x*0.97) : dis;
// dis = (x>=300 && x<500) ? (x*0.95) : dis;
// dis = (x>=500) ? (x*0.93) : dis;
// alert('До сплати ' + dis + 'грн');
//
// //8
// var x=+prompt('Введіть довжину круга');
// var y=+prompt('Введіть периметр квадрату');
// var diam = x/Math.PI;
// var diag = (y/4) ** (1/2);
// alert((diag > diam) ? 'Так' : 'Ні')
//
// //9
// var x = +prompt('3+2? 4 5 6');
// var y = +prompt('3*3? 12 16 9');
// var z = +prompt('16/8 2 4 8');
// sum = 0;
// sum = (x == '5') ? (sum = sum + 2) : sum;
// sum = (y == '9') ? (sum = sum + 2) : sum;
// sum = (z == '2') ? (sum = sum + 2) : sum;
// alert('Сума балів - ' + sum);
//
// //10
// // var now = new Date();
// // now.setDate(now.getDate() + 1);
// // alert(now);
// var year=prompt('Введіть рік');
// var mon=prompt('Введіть місяць');
// var day=prompt('Введіть день');
// var date = new Date(year, mon-1, day);
// //alert(date);
// date.setDate(date.getDate() + 1);
// alert(date);

// //HW5-6
// //1
// var i=+prompt('Введіть початок діапазону');
// var j=+prompt('Введіть кінець діапазону');
// var sum=0;
// while(i<j+1){
//     sum+=i;
//     i++;
// }
// alert('Сума ряду дорівнює ' + sum);
//
// //2
// var num1=+prompt('Введіть перше число');
// var num2=+prompt('Введіть друге число');
// var i=2;
// var max=0;
// while(i<num1 && i<num2){
//     if(num1%i==0 && num2%i==0){
//         if(i>max)
//             max=i;
//     }
//    i++;
// }
// alert('Найбільший спільний дільник це - ' + max);
//
// //3
// var num=+prompt('Введіть число');
// var i=2;
// var result='Дільники числа ' + num + ' є числа: ';
// while(i<num){
//     if(num%i==0){
//         result+= i+' ';
//     }
//     i++;
// }
// alert(result);
//
// //4
// var num=+prompt('Введіть число');
// var i=0;
// var top_num=1;
// while(num>=top_num){
//     i++;
//     top_num*=10;
// }
// alert('Кількість цифр - ' + i);
//
// //5
// var dod=0;
// var vid=0;
// var nol=0;
// var par=0;
// var nep=0;
// var num=0;
// var i=0;
// do {
//     i++;
//     num = +prompt('Введіть число № ' + i);
//     if(num>0) dod++;
//     if(num<0) vid++;
//     if(num==0) nol++;
//     if(num%2==0)
//         par++;
//     else
//         nep++;
// } while(i<10);
// document.write('Додатніх чисел було - ' + dod);
// document.write('Від’ємних чисел було - ' + vid);
// document.write('Нулів було - ' + nol);
// document.write('Парних чисел було - ' + par);
// document.write('Непарних чисел було - ' + nep);
//
// //6
// var repeat = true;
// var result = 0;
// while(repeat) {
//     var x = +prompt('Введіть число X');
//     var y = +prompt('Введіть число Y');
//     var oper = prompt('Введіть знак операції');
//     if (oper=='+')
//         result = x+y;
//     else if (oper=='-')
//         result = x-y;
//     else if (oper=='*')
//         result = x*y;
//     else if (oper=='/')
//         result = x/y;
//     else
//         result = 'Не вірний знак розрахунку';
//     alert('Результат = ' + result);
//     repeat = confirm('Бажаєте ще раз?');
// }
//
// //7
// var num = +prompt('Введіть число');
// var zmi = +prompt('Введіть на скільки змістити');
// var quan = 1;
// var quad = 10;
// var bul = true;
// var temp = 0;
// var rez = 0;
// while(bul){
//     if(num/quad>1) {
//         quan++;
//         quad*=10;
//     }
//     else {
//         bul=false;
//     }
// }
// //document.write('' + quan); //число цифр
// while(zmi>0){
//     temp = num%10**(quan-1);
//     //document.write('' + temp + ' ');
//     rez = temp*10 + (num - temp)/10**(quan-1);
//     zmi--;
//     //document.write(' ' + rez + ' ');
//     num=rez;
// }
// document.write('Результот ' + rez + ' ');
//
// // //8
// var day = '';
// var date = new Date();
// do {
//     var week_day = date.getDay();
//     if(week_day == 0)
//         day = 'Неділя';
//     else if(week_day == 1)
//         day = 'Понеділок';
//     else if(week_day == 2)
//         day = 'Вівторок';
//     else if(week_day == 3)
//         day = 'Середа';
//     else if(week_day == 4)
//         day = 'Четвер';
//     else if(week_day == 5)
//         day = 'Пятниця';
//     else if(week_day == 6)
//         day = 'Субота';
//     var rez = confirm(day + ', Бажаєте побачити назву наступного дня тижня?');
//     date.setDate(date.getDate() + 1);
// }
// while(rez);
//
// // //9
// for(i = 2; i < 10; i++){
//     document.write('<p>\n</p>')
//     for(j = 1; j < 11; j++){
//         document.write(i * j + '  ');
//     }
// }
//
// // //10
// var x = +prompt('загадайте число від 0 до 100');
// var min_n = 0;
// var max_n = 100;
// var win = 0;
// var quest = '';
// var N = 0;
// var ost_N =0;
// do {
//     N = min_n + (max_n - min_n)/2;
//     // alert('N !!!!' + N);
//     ost_N = (max_n - min_n)%2;
//     if(ost_N > 0) {
//         N = N - ost_N/2;
//         // alert('N - ost_N/2 = ' + N);
//     }
//     if (N == x){
//         win = 1;
//         // alert('win=1');
//         break;
//     }
//     quest = confirm('Ваше число меньше ніж ' + N + '?');
//     //alert('good1');
//     if(quest) {
//         max_n = N;
//     }
//     else {
//         min_n = N;
//
//     }
//     // alert('Нач ' + min_n + ' Кон ' + max_n);
// }
// while(win != 1);
// alert('Ви загадали число - ' + N);


// function input_num(num1, num2, bool){
//     var result = '';
//     var i = 0;
//     for(i=num1; i<=num2; ++i) {
//         if(num1%2==0 && bool) {
//             result = result + num1 + ' ';
//         }
//         else if(num1%2!=0 && bool===false) {
//             result = result + num1 + ' ';
//         }
//     }
//     return result;
// }
//
//
// var num1 = +prompt('Введіть початок діапозону: ');
// var num2 = +prompt('Введіть кінець діапозону діапозону: ');
// var num3 = +prompt('Які значення виводить? 1 - чьотні, 0 - не чьотні');
// if(num3==1) bool = true;
// else bool = false;
// alert(input_num(num1, num2, bool));


////HW7
//1
function return_result(a,b){
if(a < b)
    return -1;
else if (a > b)
    return 1;
else
    return 0;

}

var num1 = +prompt('Введіть перше число: ');
var num2 = +prompt('Введіть друге число: ');
alert(return_result(num1, num2));

//2
function factorial(a){
    var result = 1;
    for(i=2; i<=a; ++i) {
        result = result*i;
    }
    return result;
}
var num = +prompt('Введіть число: ');
alert(factorial(num));

//3
function magic(a,b,c){
    return Number(a+b+c);
}

var num1 = prompt('Введіть перше число: ');
var num2 = prompt('Введіть друге число: ');
var num3 = prompt('Введіть третэ число: ');
alert(magic(num1,num2,num3));
// alert(typeof(magic(num1,num2,num3)));

//4
//
// function func(a,b=0){
// if(b==0) {
//     return a*a;
// }
// else{
//     return a*b;
// }
// }
//
// var num1 = +prompt('Введіть перше число: ');
// var num2 = +prompt('Введіть друге число: ');
// alert(func(num1,num2));

//5
function func(a){
    var result = 0;
    for(i=1; i<a; ++i) {
        if(a%i == 0){
            result = result + i;
            //alert(result);
        }
    }
    if(result == a) {
        return('Число ' + a + ' совершенное')
    }
    else{
        return('Число ' + a + ' не совершенное')
    }
}
var num = +prompt('Введіть число: ');
alert(func(num));

//6
function func1(a){
    var result = 0;
    for(i=1; i<a; ++i) {
        if(a%i == 0){
            result = result + i;
        }
    }
    if(result == a) {
        return(true);
    }
    else{
        return(false);
    }
}
function func(a,b){
    var result = '';
    for(i=a; i<=b; ++i) {
        if (func1(i)){
            result = result + i + ' ';
        }
    }
    return(result);
}
var num1 = +prompt('Введіть початок діапозону: ');
var num2 = +prompt('Введіть кінець діапозону діапозону: ');
alert(func(num1, num2));

//7
function func(a,b,c){
    if (a < 10) a='0'+a;
    if (b < 10) b='0'+b;
    if (c < 10) b='0'+c;
    return(a+':'+b+':'+c);
}
// var hours = +prompt('Введіть години: ');
// var minets = +prompt('Введіть хвилини: ');
// var seconds = +prompt('Введіть секунди: ');
//alert(func(hours,minets,seconds));
var date = new Date();
var hours = date.getHours();
var minets = date.getMinutes();
var seconds = date.getSeconds();
alert(func(hours,minets,seconds))

//8
function func(a,b,c){
    return a*60*60 + b*60 + c;
}
// var date = new Date();
// var hours = date.getHours();
// var minets = date.getMinutes();
// var seconds = date.getSeconds();
var hours = +prompt('Введіть години: ');
var minets = +prompt('Введіть хвилини: ');
var seconds = +prompt('Введіть секунди: ');
alert(func(hours,minets,seconds))

//9
function sec_to_text(a=0,b=0,c=0){
    if (a < 10) a='0'+a;
    if (b < 10) b='0'+b;
    if (c < 10) c='0'+c;
    return (a + ':' + b + ':' + c);
}
function convert_sec(a){
    var sec = a;
    var min = 0;
    var hour = 0;
    if (sec > 60){
        min = parseInt(sec/60);
        sec = parseInt(sec%60);
    }
    if (min > 60){
        hour = parseInt(min/60);
        min = parseInt(min%60);
    }
    return sec_to_text(hour,min,sec);
}

var seconds = +prompt('Введіть секунди: ');
if (seconds >= 86400){
    alert('Введіть значення до 86400')
}
else{
    alert(convert_sec(seconds));
}

//10
function func(a,b,c){
    return a*60*60 + b*60 + c;
}
function sec_to_text(a=0,b=0,c=0){
    if (a < 10) a='0'+a;
    if (b < 10) b='0'+b;
    if (c < 10) c='0'+c;
    return (a + ':' + b + ':' + c);
}
function convert_sec(a){
    var sec = a;
    var min = 0;
    var hour = 0;
    // if (sec < 0) {
    //     sec = 24*60*60 + sec;
    // }
    if (sec > 60){
        min = parseInt(sec/60);
        sec = parseInt(sec%60);
    }
    if (min > 60){
        hour = parseInt(min/60);
        min = parseInt(min%60);
    }
    return sec_to_text(hour,min,sec);
}
var hours = +prompt('Введіть години: ');
var minets = +prompt('Введіть хвилини: ');
var seconds = +prompt('Введіть секунди: ');
var hours1 = +prompt('Введіть години: ');
var minets1 = +prompt('Введіть хвилини: ');
var seconds1 = +prompt('Введіть секунди: ');
var sec = func(hours,minets,seconds);
var sec1 = func(hours1,minets1,seconds1);
if (sec > sec1){
    alert(convert_sec(sec - sec1));
}
else{
    alert(convert_sec(sec1 - sec));
}



