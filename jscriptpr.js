'use strict';
/*/*   *//* for (let i = 1; i <=100; i++){ */
  /*   document.write(i + "<br>"); */
//}

//for (let i = 100; i > 0; i--) { 
    //document.write(i + "<br>");//
//}
/* for (let i = 2; i <= 100; i +=2) { 
   document.write(i + "<br>");
}
 */
/* let arr = ['a','b','c','d'];
  alert (sum arr[0],arr[1]);
 */
function doHomework(subject, callback) {//1.добавляем callback функцию как еще один параметр
  alert(`starting my ${subject} homework.`);
  callback();// 2.обязательно ее вызываем в самой функции
}
doHomework('math', function(){ //3.добавляем эту же функцию как анонимную  
     alert('Finished my homework!!!');
});