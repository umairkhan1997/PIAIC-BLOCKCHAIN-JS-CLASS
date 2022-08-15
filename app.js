// // // // var num = 1;

// // // // var newOperator = 10;

// // // // var res = num + newOperator;

// // // // alert(res);


// // // // var num = 1;

// // // // var newOperator = 10;

// // // // var res = num * newOperator;

// // // // alert(res);

// // // // var num = 10;

// // // // var newOperator = 3;

// // // // var res = num % newOperator;

// // // // alert(res);


// // // // var num = 10;

// // // // var newOperator = 3;

// // // // var newNum = 20;
// // // // var res = num + newOperator + newNum;

// // // // alert(res);

// // // // var num = 10;

// // // // num = num + 1;

// // // // num+1;
// // // // num++;

// // // ///increment
// // // // num++;

// // // ///decrement

// // // // num = num - 1;
// // // // num--;

// // // // alert(num);

// // // //// Post Increment and Pre Increment 

// // // //// Post decrement and Pre decrement 


// // // // var num = 10;

// // // // ///post increment 
// // // // var res = num++;  //  assign or num increment 

// // // // alert("res : "+ res + "  num : "+num);


// // // // var num = 10;

// // // // ///pre increment 
// // // // var res = ++num;  //   num increment or assign  

// // // // alert("res : "+ res + "  num : "+num);


// // // // var num = 10;

// // // // ///pre decrement 
// // // // var res = --num;  //   num decrement or assign  

// // // // alert("res : "+ res + "  num : "+num);


// // // // var num = 10;

// // // // ///post decrement 
// // // // var res = num--;  //    assign or num decrement   

// // // // alert("res : "+ res + "  num : "+num);


// // // // var num = 1 + 3 * 4;

// // // // alert(num);


// // // // var num = (1 + 3) * 4;

// // // // alert(num);


// // // var resultOfComputation = (2 * 4) * (4 + 2);

// // // // var resultOfComputation = (8) * (6);

// // // alert(resultOfComputation);





















// // var city1 = "karachi";
// // var city2 = "lahore";

// // var arr = ["karachi","lahore",3,true,[]];

// // //index , length


// // ///Loop

// // ////
// // ///Initialization --- condition --- Updating
// // //terminate 
// // // for(var i=0;i<5;i++){

// // //     alert("hello world")

// // // }

// // // var arr = ["karachi","lahore","hyderabad","quetta","peshawar"];

// // // var cityToCheck = "hyderabad";
// // // var matchFound = "no";

// // // for(var i =0;i<arr.length;i++){
// // //     if(cityToCheck == arr[i]){
// // //         alert("condition match "+i);
// // //         matchFound="yes";
// // //         break;
// // //     }else{
// // //         alert("not found"+i)
// // //     }
// // // }

// // // if(matchFound == "no"){
// // //     alert("match not found");
// // // }



// // // var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// // // var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];


// // // for(var i=0;i<5;i++){

// // //     for(var j=0;j<5;j++){
// // //         console.log("i = "+ i , "j = "+j);
// // //     }

// // // }


// // // var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// // //  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// // //  var fullNames = [];
// // //  for (var i = 0; i < firstNames.length; i++) {
// // //  for (var j = 0; j < lastNames.length; j++) {
// // //  fullNames.push(firstNames[i] + lastNames[j]);
// // //  }
// // //  }

// // //  console.log(fullNames);


// // // var res = prompt("enter your age");
// // // alert(typeof res);
// // // var result = res - 10
// // // alert(typeof result);

// // // var num = 100;
// // // var userName = "asdas"
// // // alert(typeof (num+userName));

// // // var num = 1.977;

// // // alert(parseInt(num))


// // // var num = "1.977";

// // // alert(parseFloat(num))

// // // var num = "asdasd";
// // // ////Not a Number NaN
// // // alert(parseFloat(num))

// // // var num = "1.977";

// // // alert(Number(num))


// // ///its a method of Number data type
// // /// 2 kaam karta hain , first decimal numbers kum karta hain
// // /// second decimal ko round of karta hain 

// // var num1 = 1.9776786;

// // console.log(num1.toFixed(2))

// // var num = 1.9776786;

// // console.log(num.toFixed())


// // // var num;
// // // var num;

// // // let num;
// // // let num;

// // // console.log(num)


// // // var currDate = new Date();
// // // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


// // // console.log("Day : "+ currDate.getDay() + " Day Name : " + dayNames[currDate.getDay()]);
// // // console.log("Month : "+currDate.getMonth());
// // // console.log("Date : "+currDate.getDate());




// // // var currDate = new Date();
// // // currDate.setMonth(9);
// // // currDate.setHours(20)
// // // console.log(currDate)


// // ///// specilities of function 

// // /// it runs when you call its name
// // //it can run again and again , 
// // ///dont have to repeat the code




 

// // //// the curly bracket is the block of function .

// // // function getDate(){
// // //     var now = new Date();
// // //     var theHr = now.getHours();
// // //     var theMin = now.getMinutes();
// // //     console.log("time: " + theHr + ":" + theMin);
// // // }

// // // getDate();
// // // getDate();



// // /// static output
// // // function runTable(){
// // //     for(var i=1;i<=10;i++){
// // //         console.log(2 + "x" + i + "=" + i*2);
// // //     }
// // // }

// // // runTable()
// // // runTable()


// // // /// the data we passed will get in actual function , called it "Parameter"
// // function runTable(val){
// //     for(var i=1;i<=10;i++){
// //         console.log(val + " x " + i + " = " + i*val);
// //     }
// // }

// // // ////data always pass in calling function , that we called it "Argument" 
// // runTable(3)

// // // runTable(7)


// // ////Multiple parameters
// // ///parameter , local variables
// // // function showUserData(uName, ag, add){
// // // console.log(uName,ag,add);
// // // }

// // // var userName = prompt("Enter your Name");
// // // var age = prompt("Enter your age");
// // // var address = prompt("Enter your address");

// // // showUserData(userName,age,address)

// // //whenever want to get data back from function use return 
// // function showUserData(uName){
// //     // console.log(uName,ag,add);

// //     return uName;
// //     }
    
// // /// to get data from function , create a variable and store the calling function

// //    var res =  showUserData("umair")

// //    ///propmt is a pre-define function  
// // var userName = prompt("ENter your name");
// //    console.log(res,"res")



// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 

// // var arr1 = [1,"karachi","umair",true,];

// // var arr2 = new Array("quetta",'abtabad','islamabad');
// // ///instance /// 

// // console.log(cities);
// // console.log(arr1);
// // console.log(arr2);

// // // var num;
// // // console.log(num);


// // var arr3 = new Array(10);
// // var arr4 = [10];

// // console.log(arr3);
// // console.log(arr4);



// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 
// // cities[1] = "islamabad"
// // cities[-1] = "quetta"

// // /// 2 conditions , when you gave negative value  or that index which is not defined
// // console.log(cities[-1]);

// // console.log(cities.length);

// // var cities = ["karachi","lahore","peshawar","hyderabad","karachi","lahore","peshawar","hyderabad","karachi","lahore","peshawar","hyderabad"]; 

// // console.log(cities[cities.length - 1]);


// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 

// // cities[7]= "quetta";

// // cities.push("abtabad");
// // console.log(cities);
// // console.log(cities[6]);




// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 

// // cities.splice(1,2);

// // cities.splice(2,0,"abtabad","quetta")
// // cities.splice(0,1,"abtabad","quetta")
// // console.log(cities)

// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 
// // var cities2  = ["Quetta","abtabad"];

// // var cities3 = cities.concat(cities2);

// // var cities4 = cities3.concat("islamabad","gilgit");

// // console.log(cities4)

// // var cities = ["karachi","lahore","peshawar","hyderabad"]; 

// // delete cities[cities.length - 1];

// // console.log(cities[3]);

// var cities = ["karachi","lahore","peshawar","hyderabad"]; 

// function userName(para1,para2){
// console.log(para1);
// }

// userName(function(){},"khan")


// //// function //// callback function /// anonymous function  
// var res = cities.find( function(val,ind){ 
//     // console.log(val,ind)

//     return val == "quetta"
// })

// var num1 = [76,45,98,45];

// var res1 = num1.find(function(val,ind,val1){
//     console.log(val1);
//     return val > 60;
// })
// console.log(res1);