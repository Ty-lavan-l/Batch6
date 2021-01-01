// let myName="lavan";
// console.log(typeof myName );
// let no=45;
// console.log(typeof no );
// let unDefined;
// console.log(typeof unDefined );
// let unDefine = true;
// console.log(typeof unDefine );
// let lorem =`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// Id mollitia dignissimos minus excepturi eum deserunt, quidem error enim ab voluptate, vel labore dolores velit dolor consectetur repudiandae, 
// nihil natus recusandae accusantium sint aliquam! Itaque porro dolor non autem sed et laboriosam dolores delectus. 
// Saepe, expedita facilis porro atque dignissimos minus.`
// let empty=null;
// console.log(typeof lorem );
// console.log(typeof empty );
// console.log(`--------------------------------`)
// var age='name';
// console.log(typeof age );


//  age=10;
//  console.log(typeof age );

//  age =unDefined;
//  console.log(typeof age );

//  age=null;
//  console.log(typeof age );

//  age=true;
// console.log(typeof age );




// var b=5**5;
// console.log(b);
// var b= b++;
// console.log(b);
// b += 25;
// console.log(b);
// console.log(`*****************************************`)
// let trainer = 'abc';
// let student ='xyz';
// console.log(`Trainer name is ${trainer} and student name is ${student}`)

// ----------------------------------------------------------------------------------------------------------------
// function power(a,b){
//     return(a**b);
// };
// console.log(power(20,3));



// let trainerName="function expression";
// function trainer(){
//     console.log(trainerName);
// }
// trainer();

// // cannot be acc by another function (IIFE)

// (function(){
//     let trainerName="IIFE"
//     console.log(trainerName);
// }());

// *************************Objects****************************


// var obj = {
//     name:"asus",
//     color:"red",
//     ram:"4gb",
//     1:"name",

//     fun : function(){
//         console.log(                // this key is used to acc data inside the object
//             "laptop brand is :" + this.name,
//             "laptop ram is :" + this.ram,
//             "laptop color is :" + this.color,
//         )
//         console.log(`hello world`);
//     }
// }

// console.log(obj.color);
// console.log(obj.name);
// console.log(obj.ram);
// // [] can also be used as "." operator;
// console.log(obj[1]);
// console.log(obj["ram"]);


// obj.fun();
// delete obj.color;    // del the props
// obj.graphics = "ENVIDA"; //add the props
// console.log(obj);

// let laptopKey = Object.keys(obj); // get the key of the object
// console.log(laptopKey);           // returns array 

// Object.freeze(obj);               // freeze the obj
// // Object.seal(obj);                we can add / change the value but cannot delete
// obj.ram="5gb";                     // not changed
// console.log(obj);


//************************Arrays **************************
//any data types / not fixed / index

// var arra=["name",1,2,"lavan"];
// console.log(arra);
// console.log(arra[1]);
// console.log(arra[0]);

// arra[4]="kumar";
// arra[5]=true;
// arra[100]="rahul";

// console.log(arra[3]);
// console.log(arra);

// console.log(`size of the array is : ${arra.length}`);
// console.log(Array.isArray(arra));


//*********************Control Statements************************

// let a= 10;
// if(a<10){
//     console.log(`a is greater then 10`);
// }else if (a>10){
//     console.log(`a is > 10`);
// }else{
//     console.log(`a=10`)
// }
//************************switch********************************* */
// let day =5;
// switch (day){
//     case 1:
//         console.log("monday");
//         break;
//     case 1:
//         console.log("thusday");
//         break;
//     case 5:
//         console.log("today")
//         break;
//     default:
//         console.log("***********************")
// }

//**************for loop**************** */
// let fruts=['abc',"xyz",1,2,3,4,5]
// for (let i=fruts.length-1;i>=0;i--){
//     console.log('index is '+i+' vlaue is : '+fruts[i])
// }



//**********************For of**************************** */
// only itterate array
// in each iteration it returns the element in the corresponding index 


// var students=[
//     {
//         name:"kumar",
//         age:25,
//         degree:"b-tech"
//     },
//     {
//         name:"pavan",
//         age:26,
//         degree:"b-tech"
//     },
//     {
//         name:"lavan",
//         age:22,
//         degree:"b-tech"
//     }
// ]
// for(var student of students){
//     console.log(student.name,student.degree);
// }
// console.log(students);

// //******************For in************************ */
// // bouth arrays and objects
// // returns index for arrays
// // returns key for objects (unidirectional)

// for(var student of students){
    
//     for (var index in students ){
//         //
// }
    
// }
// console.log(students);

// for (var index in students ){
//     console.log(`for in loop iteration ${+index + 1}`);
//     console.log(students[index])
// }

//for loop:
// 1.Does not work with object
// 2.Does not ignore empty elements
// 3.break statement is supported
// 4.Ignores extra properties which does not have index

// for of:
//1.Does not work with object
//2.Does not ignore empty elements
//3.break statement is supported
//4.Ignores extra properties which does not have index

// for in:
//Works with object and arrays
//Ignores empty elements
//Does not ignore extra properties which does not have index
//********************************************************************************* */
// in JS the array also contain key and value pairs (never prefered to have)
//********************************************************************************* */


// Function closures:

//In JS we can have a fn inside another fn where the prop of the outer fn can be used inside the inner function
// but vise varsa is not possible
// the inner fn can be called in the scope of outer fn but it is not possible to call the inner fn outside the outer fn

//  function outer(){
//      console.log(`i am Inner Function`)
//      var a=100;
//      function inner(){
//          console.log(`inner function started`);
//          var b=200;
//          console.log(a);
//          console.log(b);
//          console.log(`inner function ended`);
//      }
//  //    console.log(b); error cannout acc outside
//      inner();
//      console.log(`outer function ended`)
//  }

//  outer();

//******************function chaining************** */]

// function firstFunction(){
//     console.log(`firstFunction is called`);
//     function secoundFunction(){
//         console.log(`secound function`);
//     }
//     return secoundFunction;
// };

// console.log(firstFunction()());

// **************************Callback function************


// a fn passed as an argument to another fn is called as call fn
// the fn whic acc call back fn is called as HOf()
//the execution of the call back fn will be taken care by HOC(higher order fn)

// function highOrder(){
//     console.log(`Higher order function is called`)

// };

// function passedFn(){
//     console.log(`1st passed function`)
// }; 

// function Notificatio(){
//     console.log(`2nf function passed`)
// };

// highOrder(passedFn() , Notificatio());
//***************************************************************************** */

// var student =[1,2,3,4,5,6]

// for(var x in student){
//  console.log(student[2]);
// }
//************************************************************ */
// function sorting(){
//     var points = [40, 100, 1, 5, 25, 10];
//     document.write( points.sort((a,b) => a-b));
// }
// sorting();

// /************************************************************* */
// function pattern(){
    
// for(m=1; m <= 5; m++)
// {
// for(n=1; n<=m; n++)
// {
// document.write(n);
// if(n == m)
// continue;
// else
// document.write(' ');
// }
// document.write('<br />');
// }
// }

// pattern();

//***************************************************************** */

// function sorting(a){
//    if(a===0){
//         return;
//    }
//    console.log(a+" ");
//    sorting(a-1)
// }
// sorting(20);

//************************************************************************* */

// function fnName(){
//     alert("hello");


//     var x= confirm("confirm ur option");
//     if(x===true){
//       var dob= prompt("Enter Your DOB");
//       var name= prompt("Enter Your Name");
//     }
//     document.write(dob+" "+"your Name is :");
//     document.write(name);

// }
// fnName();



//**********************************Monday********************************************* */



//*********************Array methods************/
// PUSH => To add element in the last
// POP => To remove last element (only 1 element)
// Shift => to remove the first element
// unShift => to add an element in the start
// splice => to remove or add element at any index
// slice => to get the part of array
// foreach=> to iterate the array
//************************************************ */

// var arr=['1','2','3'];
// console.log(arr);
// console.log(`Length of the array is :` + arr.length);

// //PUSH => To add element in the last
// arr.push('4','5');
// console.log(arr);

// // POP => To remove last element (only 1 element)
// arr.pop();
// console.log(arr);

// // Shift => to remove the first element
// arr.shift();
// console.log(arr);

// // unShift => to add an element in the start
// arr.unshift('0','-1');
// console.log(arr);

// arr.unshift('-2');
// console.log(arr);

// // splice('starting index' , no of element to delete, ...element to add)
// // del 2 element starting from index 3
// arr.splice(3,2);
// console.log(arr);

// // add corces spring and hibernet starting from index 4
// arr.splice(4,0,'spring','hibernet');
// console.log(arr);


// // del 2 element starting from index 2 and add jdbc and spring rest
// arr.splice(2,2,'jdbc','spring rest');
// console.log(arr);

// // slice => returns part of an array
// var a = arr.slice(2, 6);
// console.log(a);

// // revers of an array
// var reverse = arr.reverse();
// console.log(reverse);
//*************************************************************** */

// ForEach method

    // var arr=[10,20,22,25,30,35];
    // arr.forEach(function(value,index){
    //         console.log(`value is ${value} and Index is ${index}`)
    // });


//******************************************************************* */

//    Map

//  arr = [10,20,30,40,50];
// var newArray = arr.map(function(value,index){
//     return value+5;
// });
// console.log(newArray);

//******************************************************************** */
// var a=[10,20,30,40,50,60];

// var newArray = a.map(function(c,i){
//     n=10;
//     return{
//         name:c,
//         duration: n +`hrs`
//     }
// });
 
// console.log(newArray);


//********************index of*************************************** */
// indexOf(element , from index);       (gives the index of the element)
//==> if only 1 arg is there it returns firs accuring index

//  var a = [1,2,3,4,5,6,3,8,9];
//   console.log( `index of the element is :`+a.indexOf(3));
//   console.log( a.indexOf(8));
//   console.log( a.lastIndexOf(3));

  /****************************Filter************************************************ */
  // returns a new array
  // true or false

    // var a = [10,11,12,10,14,15,16];
    // var filterArray = a.filter(function(value,index){
    //     return a.indexOf(value) === index;
    // });
    // console.log(filterArray);
/********************************************************************************* */
//  var student =[{
//      name:'kumar',
//      marks:36
//     },
//     {
//         name:'lavan',
//         marks:40
//      },
//      {
//         name:'abc',
//         marks:30
//      }
// ];
//     var result = student.filter(function(student){
//         return student.marks>33;
//     })

// console.log(result);

//*****************sorting************************************************************ */
// var arr=[2,1,5,6,9,8,4,7,5,6]

// var res = arr.sort(function(v1,v2){
//     return v1-v2;
// });
// console.log(res);
//*************************Find********************************* */
// var student = [{
//     id:123,
//     name:'lavan',
//     marks:40
//     },
//     {
//     id:1234,
//     name:'kumar',
//     marks:44
//     },
//     {
//         id:12345,
//         name:'loki',
//         marks:44
//     }
// ]

// var studentId = student.find(function(value,index){
//      return value.id === 123;
// });

// var studentIdIndex = student.findIndex(function(value,index){
//     return value.id === 1234;
// });
// console.log(studentId);
// console.log(studentIdIndex);

//**********************************Reduce************************************************* */
// Addition ,sub,mul,........


// var a = [1,2,3,5,6,9,8,7,4];
// var result = a.reduce(function(value,index){
//     return value+value;
// });
// console.log(result);

//************************************join************************************************ */
// var a = [1,2,3,5,6,9,8,7,4];
// console.log(a.join(' + '))
//****************************************************************************************** */

// //                                    Strings
// var str = 'hello world';
// console.log(`Index of the char is :`+str.charAt(2));
// console.log(`ASCII value of char :`+str.charCodeAt(2));

// //Split a String
// var charArray = str.split('');
// console.log(charArray);

// // rev a String
// var rev = str.split('').reverse().join('');
// console.log(rev);


// var upper = str.toUpperCase();
// console.log(upper);


// var lower = str.toLowerCase();
// console.log(lower);

// // return the index of matching string
// //if not found -1
//     var searchReasult = str.search('o');
//     console.log(searchReasult);

// // returns true if the orginal string contains the value
// console.log(str.includes('o'));

// // starting index to ending index
// var subString = str.substring(1,4);
// console.log(subString)

//******************************************************************************************* */
//                              BOM(Browser Object Module)

// all the variables declerade using var key will be part of window obj

//WINDOW:
//1.Screen ==> Hight and Width
//2.Location ==> find the properties of current URL (location.host // .port  // .pathname)
//3.History ==> (history.backward  // history.forward)
//4.Navigator ==> 
//5.document ==>
//6.LocalStorage ==> (.setItem(key,value)  //   .getItem(key)   // .removeItem(key)  // .length   // .clear() )
//7.Sectional Storage=>     ---------------------//------------------------------------------------
   //                                          {only store String data}         


//    console.log(localStorage.length);
//    localStorage.clear;
//    console.log(localStorage.length);

//    // to store the data
//    localStorage.setItem('name' , 'lavan');

//    // to get the data 
//    localStorage.getItem('name');

//    // to remove a key and value pair
//    localStorage.removeItem('name');
//    console.log(localStorage.getItem('name'));

//    var student = [{
//        name:'lavan',
//        age:22
//    },
// {
//     name:'kumar',
//     age:25
// }]

// localStorage.setItem('student' , JSON.stringify(student));
// console.log(JSON.parse(localStorage.getItem(`student`)) );

//************************************************************************************* */
//                          locatiion

// navigator.geolocation.getCurrentPosition(function(userLocation){
//     console.log(`longitude`+userLocation.coords.longitude);
//     console.log(`latitude`+userLocation.coords.latitude);

// });
//***************************************************************************************** */
// var rev = str.split('').reverse().join('');
// console.log(rev);

// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// console.log(obj);
// var obj = JSON.stringify(obj);
// console.log(obj);
//********************************************************************************************* */


//                                  DOM(Document Object Model)
// (Using Document Object Model we can manuplate the HTML Elements and there prop we can dinamically 
// add the content , del the content or modify the content using document obj model)

// when the HTML file is loaded in the browser it creats DOM where all the HTML element will be forming a tree structure
//                                                  !Document
//                      Head                                                                    Body

//                    title                                                            a                    h1
//                {document}                                                          {google}            {welcome}

// Methods :
//          1. document.getElementById("Id")
//          2.          .getElementByClassName("  ");
//          3.          .getElementByTagName()
//          4.          .getElementByName()
//          5.          .quarySelector()
//          6.          .quarySelectorAll()


  // // title of the page
  // document.title="Demo Page";

  // // to acc the body
  // console.log(document.body);

  // ac  the Html element with id
//   var emailInput = document.getElementById('email');
//   console.log(emailInput);
//   emailInput.style.width = "500px";
//   emailInput.style.height = "35px";

//   function fn(){
//    console.log( emailInput.value);
//    emailInput.value = " "
//   }
  


// // var divEl = document.getElementsByClassName("domo");
// // console.log(divEl);
// // for (var i=0;i< divEl.length ;i++){
// //   divEl[i].innerText = `Element ${i + 1}`;
// //   divEl[i].style.padding = '30px';
// // }



// var ulElement = document.createElement(`ul`);
// console.log(ulElement);

// var liElement1 = document.createElement(`li`);
// liElement1.innerHTML = "HTML";


// var liElement2 = document.createElement(`li`);
// liElement2.innerHTML = "CSS";

// var liElement3 = document.createElement(`li`);
// liElement3.innerHTML = "BOOTSTRAP";


// ulElement.appendChild(liElement1);
// ulElement.appendChild(liElement2);
// ulElement.appendChild(liElement3);
// console.log(ulElement)

// var courseList = document.getElementById(`cource-list`);
// courseList.appendChild(ulElement)

// var btn = document.getElementById(`btn`);
// btn.addEventListener(`mouseover`,function(){
//   console.log(`working`)
// })





// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name");
//     return false;
//   }
// }


//****************************JSON************************************ */
  //                  (Java Object Notation)
  //        1. the key should be a string 
  //        2. data will be in the form of key and value pairs
  //        3. light in weight
  //        4. Readbility


//******************************************************************************* */

// (function(){
//   // check whether employees array is avilable in local Storage
//   if (Array.isArray(getEmployees())){
//     displayEmployees();
//   }else {
//     //if employees array is not avilable set it to empty array
//     setEmployees([]);
//   }
// })();


// // Getter function to get employees array from local storage
// function getEmployees(){
//   return JSON.parse(localStorage.getItem(`employees`));
// }

// // setter function to store employees array in local storage

// function setEmployees(employees){
//   localStorage.setItem(`employees`,JSON.stringify(employees));
// }


// function displayEmployees(){
//   var employeeData = getEmployees();
//   var tableBody = "";
//   employeeData.forEach(function (employee , index){
//     tableBody +=`
//       <tr>
//         <td>${index + 1} </td>
//         <td>${employee.name} </td>
//         <td>${employee.email} </td>      
//       </tr>
//     `;
//   });
//     document.getElementById(`table-body`).innerHTML = tableBody;
// }

// function onSubmit(){
//   var form = document.employeeForm;
//   var employee = {
//     name : form.name.value,
//     email:form.email.value
//   }
//   var employeeData = getEmployees();
//   employeeData.push(employee);
//   setEmployees(employeeData);
//   displayEmployees();
// }

//*****************************Assigment**************************************** */

// (function(){
//   if (Array.isArray(getEmployees())){
//     displayEmployees();
//   }else {
//     setEmployees([]);
//   }
// })();


// function getEmployees(){
//   return JSON.parse(localStorage.getItem(`employees`));
// }


// function setEmployees(employees){
//   localStorage.setItem(`employees`,JSON.stringify(employees));
// }


// function displayEmployees(){
//   var employeeData = getEmployees();
//   var tableBody = "";
//   employeeData.forEach(function (employee , index){
//     tableBody +=`
//     <div class="card" style="width: 18rem;">
//     <div class="card-body">
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item">Product  ${index + 1} :</li>
//     <img src="https://picsum.photos/200" class="card-img-top">
//     <li class="list-group-item">Product Name : ${employee.productname}</li>
//     <li class="list-group-item">Product Price : ${employee.productprice}</li>
//     <li class="list-group-item"> Product Quantity : ${employee.productquantity}</li>
//     <li class="list-group-item"> Product Description: ${employee.productdescription}</li>
//   </ul>
//   <button class="btn btn-primary float-xl-end" onclick="gfg_Run()">
//   Delete ${index + 1}
// </button>
//   </div>
//   </div>
//     `;
//   });
//     document.getElementById(`table-body`).innerHTML = tableBody;
// }

// function onSubmit(){
//   var form = document.employeeForm;
//   var employee = {
//     productname : form.productname.value,
//     productprice : form.productprice.value,
//     productquantity : form.productquantity.value,
//     productdescription : form.productdescription.value,
//   }
//   var employeeData = getEmployees();
//   employeeData.push(employee);
//   setEmployees(employeeData);
//   displayEmployees();
// }

// function gfg_Run(i) { 
//   var dele = getEmployees();
  
//   dele.splice(i,1);
//   localStorage.setItem("employees",JSON.stringify(dele));
//   displayEmployees();
// } 
/************************************************************************ */
//                        ES-6 Features
// 1. Fat Arrow Function
// 2.Let and Const:

//  var:                                                                     let/Const:
//1. Re-declarition of some var is allowed                                Re-declarition is not allowed /  (Static)
//2. var declared part of window object                                   var declared are not part of window object
//3. Functional Scope                                                     Block Scope



// console.log("***********************Let&Const*******************") ;
// var a = 10;
// var a = 20;
// console.log(a);

// // Re-declaration is not possible in Let
// // let a =10;
// // console.log(a);

// function fn(){
//   var myName = "lavan";
//   let company = "TY"
//   console.log(`My name inSide the block ` + myName);
//   console.log(`My Company inSide the block ` + company);
// }
// fn();

// //console.log(`my name outside the block` +myName );  // var is functional scoped
// //console.log(`my company outside the block` +company );  // let is block scoped

// if(true){
//   var yourName ="abc";
//   let age =123;
//   console.log(yourName);
//   console.log(age);
// }
// console.log(yourName);
// // console.log(age);

// const pi = 3.14;  // cannot Re-declare
// console.log(pi);
// console.log("*****************************************************") ;


//****************************Spread & Rest*****************************  **/

// var cources = ["html","css","bootstrap","java"];

// var completeCorce = [...cources,"spring","hibernet"]; // expand
// console.log(completeCorce);
// var copy = [...completeCorce]   // copy
// console.log(copy);

// var adharDetails = {
//   no : 123456789,
//   name : "zxcv",
//   age : "12"
// }

// var empDetails = {
//   ...adharDetails,
//   empId : 256,
//   salary : 10000,
//   position : "se"
// }
// console.log(empDetails.no);
// console.log(empDetails.empId);

// //***********************************Rest******************************* */

// function sum(...args){
//   return args.reduce(function(v1,v2){
//     return v1 + v2;
//   });
// }
// console.log(sum(1,8,45,6,5,4,5,6,4));

//*****************************DeStructuring******************************* */

// var student = {                               //objects
//   name:"dinga",
//   age :20,
//   firstClass : 45,
//   puc : 55,
// };

// var {name,age,puc} = student;
// console.log(age);


// // array
// var corces = ["html" ,"css" , "bootstrap"];
// var[c1,c2,...rest] = corces;
// console.log(`Corce 1 :`+c1);

//******************************Arrow Function*********************************** */


// //basic function
// let a = () => {
//    console.log("Hello")
// }
// a();

// // with 1 argument
//  let demo = a =>{
// console.log(a)
//  }
//  demo(5);

//  // single line with return Statement
//  let sum = (a,b) => a+b;
//  console.log(sum(5,6));

 // we can use them for call back function


 //*****************************Set Interval************************************ */
//  
// console.log("hello");
// let i =0;
// setInterval( () => {                                 // call back function executed once after the time delay
//    console.log(`*******${i++}`)
//  },2000);
//  console.log("last line");


//  setTimeout(()=>{                                        // call back function executes every interval of time delay
//     console.log(`********`);
//  },3000);

//*************************************************************************************************** */
// By default it is Synchronoue but when worked on API it will be As-Synchronous
//  synchronous : line by line execution
//  As-Synchronous : Skips the line

// Web API : 
// 1. setTimeout()
// 2. setInterval()
// 3. Promises

//              JavaScript Call Stack                                  
//1.Stack ::
//     The Stack will exectue the fn in LIFO order
//     if it finds any web Api it will be pushed into web API section
// 2.web API :
//    All the Asynchronous fn (web API) will be awaiting hear untill they get proper responce
// once it has the responce the corresponding call back fn will be pushed into the call back queue
// 3. Call Back Queue :
//    all the call back fn will be stored under call back queue after comming from web Api's 
//    the call  back queue works in FIFO order
// 4.Event loop:
//    The duty of event loop is to check when the stack is empty and push the call back fn from the call back QUeue to the stack


// THe call bAck fn are actually used to execute the Asynchronous code in a synchronous faction

// function one(){
//   console.log("first code");
// }

// function sec(a){
//   setTimeout (()=>{
//     console.log(`Secound code`);
//     a();
//   },3000)
// }

// function three (){
//   console.log(`three`)
// }


// one();
// sec(three);

//***********************Promises******************************* */
  //  var assGift = "Iphone";

  //  var myPromice = new Promise ((resolve,reject)=>{
  //    setTimeout(()=>{
  //      if(assGift === "Iphone"){
  //        resolve(`connected`)
  //      }else {
  //        reject(`disconnect`)
  //      }
  //    },2000)
  //  });


  //  myPromice.then(data => {
  //    console.log(data);
  //  })
 


  //  var statusCode = 400;
  //  var getCorce = new Promise ((resolve,reject)=>{
  //   setTimeout(()=>{
  //     if(statusCode === 400){
  //       resolve(["html","css", "bootstrap"])
  //     }else {
  //       reject(`disconnect`)
  //     }
  //   },2000)
  // });                                              //photo
  //************************************************************************* */





// (function(){
//   // check whether employees array is avilable in local Storage
//   if (Array.isArray(getEmployees())){
//     displayEmployees();
//   }else {
//     //if employees array is not avilable set it to empty array
//     setEmployees([]);
//   }
// })();


// // Getter function to get employees array from local storage
// function getEmployees(){
//   return JSON.parse(localStorage.getItem(`employees`));
// }

// // setter function to store employees array in local storage

// function setEmployees(employees){
//   localStorage.setItem(`employees`,JSON.stringify('employees'));
// }


// function displayEmployees(){
//   var employeeData = getEmployees();
//   var tableBody = "";
//   employeeData.forEach(function (employee , index){
//     tableBody +=`
//       <tr>
//         <td>${index + 1} </td>
//         <td>${employee.name} </td>
//         <td>${employee.username} </td>
//         <td>${employee.email} </td> 
//         <td>${employee.address} </td>      
//         <td>${employee.phone} </td>      
//         <td>${employee.website} </td>      
//         <td>${employee.company} </td>           
//       </tr>
//     `;
//   });
//     document.getElementById(`table-body`).innerHTML = tableBody;
// }

// // function onSubmit(){
// //   var form = document.employeeForm;
// //   var employee = {
// //     name : form.name.value,
// //     email:form.email.value,
// //     username:form.username.value,
// //   }
// //   var employeeData = getEmployees();
// //   employeeData.push(employee);
// //   setEmployees(employeeData);
// //   displayEmployees();
// // }



// let employees =  fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))




//   function displayEmployees(){
//     var employeeData = getEmployees();
//     var tableBody = "";
//     employeeData.forEach(function (employee , index){
//       tableBody +=`
//         <tr>
//           <td>${index + 1} </td>
//           <td>${employee.name} </td>
//           <td>${employee.username} </td>
//           <td>${employee.email} </td> 
//           <td>${employee.address} </td>      
//           <td>${employee.phone} </td>      
//           <td>${employee.website} </td>      
//           <td>${employee.company} </td>           
//         </tr>
//       `;
//     });
//       document.getElementById(`table-body`).innerHTML = tableBody;
//   }
  

//******************************************************************************************** */



let jsonFile =  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    localStorage.setItem('jsonFile', JSON.stringify(json));
  });


  function displayEmployees(){
    var employeeData = JSON.parse(localStorage.getItem(`jsonFile`));
    var tableBody = "";
    employeeData.forEach(function (employee , index){
      tableBody +=`
        <tr>
          <td>${index + 1} </td>
          <td>${employee.name} </td>
          <td>${employee.username} </td>
          <td>${employee.email} </td> 
          <td>${employee.address} </td>      
          <td>${employee.street} </td>      
          <td>${employee.website} </td>      
          <td>${employee.company} </td>           
        </tr>
      `;
    });
      document.getElementById(`table-body`).innerHTML = tableBody;
  };
  displayEmployees();
