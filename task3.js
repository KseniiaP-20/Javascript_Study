// задание 1
let access = prompt('Вам уже есть 18 лет?');
if (access == 'да' || access == 'Да' || access == 'Да!' || access == 'да!') {
alert('Размечтался')
} else {
alert('Маленький ещё');
}

// задание 2
let test = 10;
if (test == 10) {
alert('верно')
}

// задание 3
let test1 = 4, test2 = 6;
if (test1 > test2) {
alert('Переменная test1 больше, чем переменная test2');
} else if (test1 == test2) {
alert('Переменная test1 равна по значению переменной test2');
} else {
alert('Переменная test1 меньше, чем переменная test2');
}

// задание 4
let month = 1;
if (month >= 1 && month <= 2 || month == 12) {
alert('зима');
} else if (month >=3 && month <= 5) {
alert('весна');
} else if (month >=6 && month <= 8) {
alert('лето');
} else if (month >=9 && month <= 11) {
alert('осень');
} else {
alert('введено неверное число');
}

// задание 5
let a = 123456;
if (a[0]+a[1]+a[2] == a[3]+a[4]+a[5]) {
alert('да');
} else {
alert('нет');
}

// задание 6
let arr = [1, 10, 125];
if (arr.length == 3) {
alert(arr[0] + arr[1] + arr[2]);
} else {
alert('Количество элементов не соответствует заданному условию');
}
