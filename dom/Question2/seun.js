var startButton = document.querySelector("button");
var car1 = document.querySelector(".car1");
var car2 = document.querySelector(".car2");

startButton.addEventListener('click',startRace);

function startRace(){
    let pageWidth = document.body.offsetWidth;
    let carDrive =[{transform: `translate(${pageWidth-50}px,0)`}];
    let car1Duration = Math.floor(Math.random() *(4500 - 4000 + 1)) + 4000;
    let car2Duration = Math.floor(Math.random() *(4500 - 4000 + 1)) + 4000;

           car1.animate(
               carDrive,
               {duration: car1Duration}
           );

           car2.animate(
               carDrive,
               {duration: car2Duration}
           );

             startButton.disabled = true;

        setTimeout(function(){
            if (car1Duration < car2Duration) {
                alert("car1 is the winner");
            }else{
                alert("car2 is the winner");
            }
            startButton.disabled = false;
        },4550)
} 