function myFunc(num){
    let flag = true;
num= +prompt('Введите значение до тысячи включительно');
if (num<=1000 && num>1){ // если число попадает под условия
    for(let i = 2; i < num; i++){    // проверка деления числа на 2,3 и тд
       if(num % i === 0){             // если остаток от деления  равен 0
       flag = false;                 // значит число составное и флаг = ложь
        break;               // выход из цикла
    }
}
    if (flag ==false) // если флаг  
         {alert (`${num} -составное число  `);} // вывод составного
    else if (flag ==true)
         {alert (`${num} - простое число`);} // вывод простого
}
else if (num > 1000) {     
    alert("Вы ввели число больше 1000");
     }  
 else if (num <= 1){
    alert("Введите число больше единицы");}
}
myFunc();