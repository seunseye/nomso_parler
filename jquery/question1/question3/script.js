class Favorite{
    constructor(){
        this.favList =  JSON.parse(localStorage.getItem("FAV")) || [];
        this.loadHtml();
    }
    loadHtml(){
        localStorage.setItem("FAV",JSON.stringify(this.favList));
        let displayHtml = this.favList.reduce((html,task,index)=>{
             return html += this.generateHtml(task,index);
        },"")
        $("tbody").html(displayHtml);
    }
    generateHtml(task,index){
        return ` <tr>   
        <td>${task.title}</td>
        <td>${task.rating}</td>
        <td><button type="button" class="btn btn-danger btn-sm btn-block delete-btn" onclick="favs.deleteItem(${index})">Delete</button></td>
      </tr>`
    }
    deleteItem(index){
       this.favList.splice(index,1);
       this.loadHtml();
    }
    addNewItems(title,rating){
        $("#title-input").val("");
        $("#rating-input").val("");
        this.favList.push({title,rating});
        this.loadHtml();
    }
    sortByTitle(){
        if(sortTitle){
            this.favList.sort(function(a, b) {
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
              });
        }else{
            this.favList.sort(function(a, b) {
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA > nameB) {
                  return -1;
                }
                if (nameA < nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
              });
        }
        this.loadHtml();
      sortTitle = !sortTitle;
    }
    sortByRating(){
      if(sortRating){
          this.favList.sort(function(a,b){
              return a.rating - b.rating;
          });
       
      }else{
        this.favList.sort(function(a,b){
            return b.rating - a.rating;
        });
      }
      this.loadHtml();
      sortRating = !sortRating;
    }
}
​
let favs;
let sortTitle = false;
let sortRating = false;
​
$(()=>{
   favs = new Favorite();
   $("#add-btn").on('click',()=>{
       let inputValue = $("#title-input").val();
       let ratingValue = $("#rating-input").val();
       if(inputValue.length > 2 && ratingValue !== "" && ratingValue >=0 && ratingValue <=10){
           console.log(ratingValue);
        favs.addNewItems(inputValue,ratingValue);
     }
        
   })
   $("#sort-rating").on('click',()=>{
       favs.sortByRating();
   })
   $("#sort-title").on('click',()=>{
       favs.sortByTitle();
   })
})
