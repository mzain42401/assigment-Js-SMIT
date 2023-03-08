
// ===================== Question No. 01


// var userCity = prompt("Write your city name.").toLowerCase();
// if (userCity === "karachi") {
//     alert("Welcome to city of lights");
// }




// =======================Question No.02




// var userGender = prompt("Write your gender. ( Male / Female )").toLowerCase();
// if (userGender === "male") {
//     alert("Good Morning Sir")
// }
// else if (userGender === "female") {
//     alert("Good Morning Mam")
// }




// ========================Question No.03




// var userColor = prompt("Write color of road traffic signal ( Red / Yellow / Green ).").toLowerCase();
// if (userColor === "red") {
//     alert("Must Stop")
// }
// else if (userColor === "yellow") {
//     alert("Ready to move")
// }
// else if (userColor === "green") {
//     alert("Move now")
// }





// =========================Question No.04




// var userFuel=+prompt("Write remaining fuel in liters");
// if(userFuel<0.25){
// alert("please refill the fuel in your car")
// }



var totalNum = +prompt("write total number")
var mathNum = +prompt("write your maths number")
var engNum = +prompt("write your english number")
var urduNum = +prompt("write your urdu number")
var obtainNum=mathNum +engNum +urduNum;
var percentage=obtainNum/totalNum*100;
var totalMarks=document.getElementById("totalMarks")
if(percentage>=80){
totalMarks.innerHTML=totalNum
}
else if(percentage>=70){
    

}
else if(percentage>=60){
    
    

}
else{
    

}






