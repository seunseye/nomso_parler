//QUESTION 1

var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2,3,5,7,11],
            fibonnaci: [1,1,2,2,5,8,13]
        }, 
        addSnack: function(snack){
            this.snacks.push(snack);
            return this;
        }
    }
};

//1
(function(){
   var nestedData = innerData.numberData.primeNumbers;
    for(var i =0; i<primeNumbers.length; i++){
        console.log(primeNumbers[i])
    }
})

//2
(function(){
    var nestedData = innerData.numberData.fibonnaci;
    for(var i =0; i<fibonnaci.length; i++){
        if(fibonnaci[i] % 2 ==0){
            console.log(fibonnaci[i])
        }
    }
})

//3
(function(){
    var nestedData = innerData.order;
    console.log(order[1])
})

//4
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);





//QUESTION2

var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
//1
function addSpeaker(speaker){
    nestedObject.speakers.push({name:speaker});
    return nestedObject.speakers;
}  

//2
function addLanguages(langu,key,value){
    nestedObject.data.languages[langu] = {[key]:value}
    return nestedObject.data.languages;
}

//3
function addCountry(country,capital,population){
    nestedObject.data.continents.europe.countries[country] = {capital,population}
    return nestedObject.data.continents.europe.countries;
}

//QUESTION3
function rotate(arr,numb){
    for(var i=0;i< numb; i++){
        arr.unshift(arr.pop());
    };
    return arr;
}
console.log(rotate([1,2,3], 1))

//QUESTION4
function makeXOGrid(rows,columns)