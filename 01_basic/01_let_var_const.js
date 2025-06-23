const accountId = 23212;
let accoutEmail = "rajan@gamil.com";
var accountPassword = "1223344";
accountCity = "hoshiarpur";  // dont use it is not good program.



//variable const
//account id =2 not allowed to change the one time to declare const variable
console.log(accountId);
// const is a block scope variable it cannot be change or update, and redeclare.


//variable let
// if using let again and redeclare the same varible name it show the error;
//let accountEmail= "rajan.123@gmail.com" the value is update but it cannot be redeclare the  same varible name twice.
console.log(accountEmail);
//let is a block scope variable it value is changed and update but it cannot be redeclare.

// variable var
//var accountPassword="987654";
console.log(accountPassword);
//  the value is update and allowed to redeclare th same variable name.
//var is a globle scope variable it value is chnaged and redecale the same value again.

/*
prefer not to use var
because of issue in block scope and function scope.
*/

//if any variable declare with out let, const  and var it also variable is let varible.


console.table([accountId, accountPassword, accountCity, accoutEmail]); // show the data row and coloumn from using console table .
