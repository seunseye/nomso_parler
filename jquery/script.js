//create a class
class TodoClass {
    //set the properties for the object that will be created from this class
    constructor(){
        //if localStorage has the item "Tasks" return it, else return an empty array
        this.tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
        //immediately run the loadTask method once we create the object from the this class 
        this.loadTask();
    }
    loadTask(){
        //sets items to the local storage
        localStorage.setItem("Tasks",JSON.stringify(this.tasks));
        //use reduce to loop through the this.tasks array to generate the HTML
        let htmlTask = this.tasks.reduce((html,task,index)=>{
            return html+= this.generateHtml(task,index);
        },"");
        //append the newly created "li" to the parent "ul"
        $("ul").html(htmlTask);
    }
    //method for generating the html, pass in each item in the this.tasks array which is an object and also the index(so that we can easily access items when it comes to deleting items)
    generateHtml(task,index){
        return ` <li class="list-group-item checkbox">
        <div class="row">
            <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1">
                <label><input type="checkbox" onchange="todo.toggleStatus(${index})" ${task.isComplete ?"checked":""}></label>
            </div>
            <!-- text for the checkbox -->
            <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10">
                ${task.title}
            </div>
            <!-- end of text -->
            <!-- delete icon -->
            <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1">
                <i class="fa fa-trash" onclick="todo.deleteItem(${index})"></i>
            </div>
            <!-- end of delete icon -->
        </div>
    </li> `
    }
    //method receives the index from above and finds the position in the this.tasks array and splices it out and then reload the DOM
    deleteItem(index){
        this.tasks.splice(index,1);
        this.loadTask();
    }
    //method takes in the index too and toggles the state of the checkbox to true or false using the onchange method specified in the above html code.....if true, change to false and if false, change to true-----
    toggleStatus(index){
        this.tasks[index].isComplete =  !this.tasks[index].isComplete;
        //and then also add the update to the local storage
        localStorage.setItem("Tasks",JSON.stringify(this.tasks));
    }
//method responsible for grabbing the value from the input, calling the addTask method and passing the input value to it and finally resetting the input field empty
     addTaskClick(){
        let inputValue = $("#input").val();
        this.addTask(inputValue);
        $("#input").val("");
     }
//method takes in the input value as described above-------  
    addTask(input){
        //and creates an object with the necessary properties and value and then pushes the object to the this.tasks array above-----isComplete will always be false by default cos we assume the checkbox should always be unchecked whhen it's first created
       this.tasks.push({title:input,isComplete:false});
       //call the load method from above---
       this.loadTask();
    }
}
//declare a variable outside...so that it's accessible from anywhere in this code
let todo;
​
//jquery method for waiting for DOMcontent to load ---- $(()=>{}) or $(function(){})
$(()=>{
 //instantiate a new class(creates a new object from the TodoClass called todo which has access to all the above methods in the TodoClass above..that's why you can see me sometimes use todo.someRandomMethod in some places)
todo = new TodoClass();
   //jquery way of adding an event listener to the submit button.....
   $("#submit-btn").on('click',()=>{
       //we're checking if the users enter a total character more than 5, if less than 5 characters we do not do anything...if more that 5 characters as done below, we run the addTaskClick() method.....
       if($("#input").val().length > 5){
           todo.addTaskClick();
       }
   });
​
})
