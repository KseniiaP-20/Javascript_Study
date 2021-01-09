// Дата/время

/* задание 1
Дана дата, содержащая месяц и день. Определите знак Зодиака, на который приходится эта
 дата.*/
 
let date = '06-09';
if (date <= '01-20') {
  console.log('козерог')
} else if (date > '01-20' & date <= '02-19') {
  console.log('водолей')
} else if (date > '02-19' & date <= '03-20') {
  console.log('рыбы')
} else if (date > '03-20' & date <= '04-20') {
  console.log('овен')
} else if (date > '04-20' & date <= '05-21') {
  console.log('телец')
} else if (date > '05-21' & date <= '06-21') {
  console.log('близнецы')
} else if (date > '06-21' & date <= '07-22') {
  console.log('рак')
} else if (date > '07-22' & date <= '08-21') {
  console.log('лев')
} else if (date > '08-21' & date <= '09-23') {
  console.log('дева')
} else if (date > '09-23' & date <= '10-23') {
  console.log('весы')
} else if (date > '10-23' & date <= '11-22') {
  console.log('весы')
} else if (date > '11-22' & date <= '12-22') {
  console.log('стрелец')
} else {
  console.log('козерог')
};

/* задание 2
Напишите код, который будет находить предыдущий и следующий високосный год.*/

let date1 = new Date();
let year = date1.getFullYear();
if (year % 4 == 0) {
  console.log((year - 4), year, (year + 4));
} else if ((year - 1) % 4 == 0) {
  console.log((year - 3), (year + 1));
} else if ((year - 2) % 4 == 0) {
  console.log((year - 2), (year + 2));
} else {
  console.log((year - 1), (year + 3));
};

/* задание 3
Получите объект с датой, содержащий текущий момент времени. Получите объект с датой,
содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже
полдень или нет.*/

let now = new Date();
let noon = new Date(2020, 5, 10, 12, 0, 0);
let diff = now.getTime() - noon.getTime();
if (diff > 0) {
  console.log('Полдень уже был');
} else {
  console.log('Полдень еще не наступил');
};