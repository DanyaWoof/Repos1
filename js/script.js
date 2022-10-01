//















//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
// const number = +prompt('Введите число между 0 и 3', '');
// let message;
// switch (number){
//     case 0:
//         message = 'вы ввели 0';
//         break;
//     case 1:
//         message = 'вы ввели 1';
//         break;
//     case 2:
//         message = 'вы ввели 2';
//         break;
//     case 3:
//         message = 'вы ввели 3';
//         break;
//     default:
//         message = 'вы уебак ';
// }
// alert(message);
//----------------------------------------------------------------------------------------------------
// //simple numbers
// let n = '';
// let cnt = 0;
// joper:for (let i= 2; i<= 10; i++){
//     for (let j= 2; j<= i; j++){
//         if(i == j) {
//             n = n + String(i) + '; ';   
//             cnt++;
//         }
//         else if (i % j == 0)
//         continue joper;
//     }
// }
// alert (n);
// alert (cnt);
//----------------------------------------------------------------------------------------------------
// let inputNum;

// while(true){
//     inputNum = prompt('text bigger than 100','');
//     if (inputNum >=100 || inputNum == null)
//     break;
// }
//----------------------------------------------------------------------------------------------------
// let login = prompt('Login','');
// let pwrd;
// let message = '000';

// if (login === 'admin') {
//     pwrd = prompt('PassWord?','im the head');
//     message = (pwrd === 'im the head')? 'Salamalekum' : (pwrd == null)? 'Aborted' : 'WrongPass';
// }
// else {
//     message = (login == null)? 'Aborted' : 'Who are you?'; 
// }
// alert(message);