                             PART 1
   1

function printEmails(){
  users.forEach(function(items){
    console.log(items.email);
     })
}
 printEmails();

    2
 
 function printHobbies(){
  users.reduce((acc,current) =>{
    return acc = acc.concat(current.hobbies);
  },[]).forEach(hobby => console.log(hobby));
}
printHobbies();
    
     3

function findHometownByState(state){
  return users.find(function(items){
      return items.hometown.state == state
    })
}
findHometownByState("CA");

       4
    function allLanguages(){
        return users.reduce((acc,current)=>{
           return acc = acc.concat(current.favoriteLanguages);
        },[])
      }
      allLanguages();

           5
      function hasFavoriteEditor(value){
        return users.some(function(val){
       return val["favoriteEditor"] === value})};
               
             6
    function findByUsername(str){
      return users.filter(function(val){
        return val["username"] === str})};
                

Part 2 
                   1  
function vowelCount(vowel){
    vowel = vowel.split("");
    return vowel.reduce((acc,current) =>{
         if(["a","e","i","o","u"].indexOf(current) >= 0){
            !acc[current] ? acc[current] = 1 : ++acc[current];
         }
         return acc;
     },{})
  }
  vowelCount("awesome");
                     2
    function removeVowels(str){
        str = str.toLowerCase();
        let vowels = ['a',"e","i","o","u"];
        let result = [];
         for(let i = 0; i<str.length; i++){
           if(["a","e","i","o","u"].indexOf(str[i]) < 0){
               result.push(str[i]);
           }
         }     
      return result;
      }
      removeVowels("fun");


                             
                              
    