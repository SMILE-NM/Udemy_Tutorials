//INFO: Lesson 19











function getTimeFromMinutes(minute) {
  if (minute < 0) return 'Ошибка, проверьте данные';
  let hour = Math.floor(minute / 60);
  minute -= hour * 60;
  let hourWord = 20;

  switch (hour) {
    case 0: hourWord = 'часов';
      break;
    case 1: hourWord = 'час';
      break;
  }
  if (hour > 4) hourWord = 'часов';

  return `Это ${hour} ${hourWord} и ${minute} минут`;
}
getTimeFromMinutes(0);

for (let i = 0; i <= 600; i += 60) getTimeFromMinutes(i);





function findMaxNumber(num1, num2, num3, num4) {

  let arr = [num1, num2, num3, num4];
  let maxNum = num1;
  for (let i = 0; i < arr.length; i++) {
    if (undefined === arr[i] || typeof arr[i] === 'string') return 0;
    maxNum = Math.max(arr[i], maxNum);
  }

  return maxNum;
}

console.log(findMaxNumber(10, 20, 30, 40));
console.log(findMaxNumber(10, 20, 30));
console.log(findMaxNumber(10, 70, 30, 40));
console.log(findMaxNumber(10, 20, 100, 40));

function fib(num) {
  if (typeof num === 'string' || num === 0) return '';

  let f1 = 0;
  let f2 = 1;
  let f3 = 1;
  let result = '';
  for (let i = 0; i < num; i++) {

    result += f1.toString();

    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;

    if (num - 1 > i) result += ' ';
  }

  return result;
}


for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}
