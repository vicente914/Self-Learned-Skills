const date1 = new Date();

console.log(date1);

//We can modify the format of our date
//Format: YEAR, MONTH, DAY, HOUR, MIN
const date2 = new Date(2026, 6, 23, 21, 9);
console.log(date2);

//FORMAT: YEAR-MONTH-DAY T HOUR:MINUTE
const date3 = new Date("2026-07-23T21:11");
console.log(date3);

//Milisenconds
const date4 = new Date(1700000000000);
console.log(date4);

//
const date5 = new Date();

const year = date5.getFullYear();
const month = date5.getMonth();
const day = date5.getDate();
const hour = date5.getMinutes();
const second = date5.getSeconds();
const dayOfWeek = date5.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(second);
console.log(dayOfWeek);






const date6 = new Date();
date6.setFullYear(2026);
date6.setMonth(0);
date6.setDate(1);
date6.setHours(3);
date6.setMinutes(3);
date6.setSeconds(3);



const date7 = new Date("2023-1-1");
const date8 = new Date("2022-12-31");

if(date7 > date8){
    console.log("HAPPY NEW YEAR!!");
}