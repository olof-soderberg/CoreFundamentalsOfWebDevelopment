
const linkCategory = document.querySelector("#linkCategory");

let linkCategories = [];

linkCategory.addEventListener('keydown', function(e){
    if(e.keyCode == 188){   /* Comma*/
        event.preventDefault();
        linkCategories.push(linkCategory);
        linkCategory.value = '';

        displayLinkCategories();
    }
});

function displayLinkCategories(){
    
}