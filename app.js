
const linkCategory = document.querySelector("#linkCategory");
const addButton = document.querySelector("#addButton");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");


let linkCategories = [];
let links = [];



addButton.addEventListener('click', e => {
    toggleFormHidden();
})

cancelButton.addEventListener('click', e => {
    e.preventDefault();
    toggleFormHidden();
})

linkCategory.addEventListener('keydown', function(e){
    if(e.keyCode == 188){   /* Comma*/
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        linkCategory.value = '';

        displayLinkCategories();
    }
});


function toggleFormHidden(){
    addLinkPanel.classList.toggle('hidden');
}

function displayLinkCategories(){
    
}

submitButton.addEventListener('click', function(e){
    e.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }

    links.push(newLink);

    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory = '';
    linkCategories = [];

    displayLinkCategories();
    toggleFormHidden();
})