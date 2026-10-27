// Задание 1


// function FinalСost(bassSale, ProSale, TaxRay) {
//   const calculateTheDiscount = bassSale * ( ProSale  / 100);
//   const PriceAfterDiscount = bassSale - calculateTheDiscount;
//   const tax = PriceAfterDiscount * TaxRay;
//   const FinalPrise = PriceAfterDiscount + tax;
//   return FinalPrise ;
// }
// console.log(FinalСost(100, 10, 0.2));



// Задание 2


// function checkAccess(login, pasword) {

//   if (login === 'admin' && pasword === "123456") {
//     return "Доступ разрешон";
//   } else { 
//     return "Доступ запрщен";
//   }

// }

// console.log(checkAccess("admin", "123456")); 
// console.log(checkAccess("admin", "000000")); 
// console.log(checkAccess("user", "123456"));  


// Задание 3 

// function getTimeOfDay(timeMondey) {
//   const time = +prompt('Ведите время от 0 до 23')

//   if (time <= -1) {
//     alert('Число отрицательное, действие не выполнено')
//   } else if (time <= 10) {
//     alert('Утро')
//   } else if (time <= 16) {
//     alert('День')
//   } else if (time <= 21) {
//     alert('Вечер')
//   } else if (time <= 23) {
//     alert('ночь')
//   } else if (time > 23) {
//     alert('Неккоректное вермя')
//   } else if (isNaN(time)) {
//     alert('Вы ввели буквы')
//   }

// }
// console.log(getTimeOfDay())

// Задание 4


// function findFirstEven(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       return i;
//     }
//   }

//   return "Чётных чисел нет";
// }

// console.log(findFirstEven(3, 8));  
// console.log(findFirstEven(4, 10)); 
// console.log(findFirstEven(5, 5));  



