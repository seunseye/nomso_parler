// number1
$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
 })

 // number2
 $(function() {
     $("img").addClass("image-center");

     //number3
     $("article").find("p").eq(length -1).remove();

     //number4
     $("#title").css("font-size",`${Math.floor(Math.random() * 101)}px`);

    //number5
    let $li = $("<li>", {
        text: "Awesome God!!",
        css: {
            color: "yellow",
        }
    })
    $("ol").append($li);

    //number6
    $("aside").empty().append($("<p>",{
        text: "apologizing"
    }))

    //number7
    $("input").on("change",function(){
    	let $red = $("input").eq(0).val();
        let $blue = $("input").eq(1).val();
        let $green = $("input").eq(2).val();

         $("body").css("background-color",`rgb(${$red},${$green},${$blue})`)
    })


    //number8
    $("img").on("click", function() {
        this.remove();
    })
 })