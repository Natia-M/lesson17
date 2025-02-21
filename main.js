//1.
for (let i = 0; i <= 15; i++) {
  console.log(i);
}

//2.
let j = 0; // შეცვალე `i` სხვა სახელით (მაგალითად, `j`)
while (j <= 20) {
  console.log(j);
  j++;
}

//3.
let k = 0; // კიდევ ერთი სხვადასხვა ცვლადი
do {
  console.log(k);
  k++;
} while (k <= 25);

//4.
const numbers = [4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 29];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

//5.
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("უცნობი დღე");
}
