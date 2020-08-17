var section = document.getElementById("container");
var section2 = document.querySelector("#container");
var li = document.querySelectorAll(".second");
var thirdLi = document.querySelector("ol .third");
var par = document.createElement("p");
par.innerText = "Hello";
section.appendChild(par);
var footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");
var li = document.createElement("li");
li.innerHTML = "four"
var ul = document.querySelector("ul");
ul.append('ol')
var olli = document.querySelectorAll("ol li");
    for (var i =0; i < olli.length; i++){
        olli[i].style["background-color"] = "green";
    }
    footer.remove()
