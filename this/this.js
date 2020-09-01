//Number 1
var data = this;
console.log(data);//The value of the keyword this is the window object.

//Number 2
function logThis(){
    return this;
}
logThis();//This function returns the window object because the keyword this has a default binding to the window object.


//Number 3
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}
instructor.sayHi() //The function returns - Hello! Tim. "this" refers to the object "instructor". This is known as implicit binding

//Number 4
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}
instructor.displayInfo() //This function returns undefined because catOwner on instructor which does not exist. It only exist as a property on "info" which is a property
on instructor.


//Number 5
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() //This function return Oakland because this.data.location refers to instructor.data.location. 



//Number 6
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
    instructor.info.data.logLocation() // We get a typerror here because the displayLocation method was not defined within the data object.



    //Number 7
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName
        }
    }
}
obj.person.sayHi()


//Number 8
//i. The arguments keyword
//ii. DOM node lists



//Number 9
function sumEvenArguments(){
    return (
           [].slice.call(arguments)
           .reduce((acc,val) =>{
               if(val % 2 === 0){
                  acc = acc + val;
               }
               return acc;
           },0)
         )
}


//Number 10
function arrayFrom(args){
    return [].slice.apply(args);
}



//Number 11
function invokeMax(fn,maxAmt){
    let count = 0;
   return function(){
       count++;
       if(count > maxAmt){
           return "Maxed Out!";
       }
      return fn.apply(this,arguments);
   }
}


//Number 12
function guessingGame(amount){
    let answer = Math.floor(Math.random()*11);
    let guesses = 0;
  return function(guess){
      guesses++;
      if(guesses < amount){
         if(guess > answer){
          return "You're too high!";
      }else if(guess < answer){
          return "You're too low!";
      }
      guesses = amount;
      return "You got it!";  
      }else if(guesses === amount){
          return `No more guesses the answer was ${answer}`;
      }
     return "You are all done playing!";
  }
}