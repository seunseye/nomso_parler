// NUMBER 1
let person = {
    fullName: "Harry Potter",
    sayHi: () => {
        setTimeout(function(){
            console.log(`Your name is ${this.fullName}`)
        }.bind(this),1000)
    }
}

// Number 2
let name = "Josie"
console.log(`When ${name} comes home, so good`);


// Number 3
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;


// Number 4
let arr = [1,2]
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp


// Number 5
const double = arr => {
    return arr.map(val => val*2)
   }


   // Number 6
   const obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

let {numbers:{a,b}} = obj;

// Number 7
const add = (a,b) => {
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }

  // Number 8
  //array.from
  //The Array.from() method returns an Array object from any object with a length property or an iterable object.

  //object.assign 
  //Object.assign() is an inbuilt function that used to copy the values of all own enumerable properties from one or more source objects to the target object. The Object. assign() method will return a target object. The method is used for cloning an object.

  //array.includes
  // The includes() method determines whether an array contains a specified element. This method returns true if the array contains the element, and false if not. Note: The includes() method is case sensitive.

  //string.startsWith
  //The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters, and false if not