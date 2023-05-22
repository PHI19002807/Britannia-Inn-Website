/*Dark Mode*/
function changeCSS(){
    var theme = document.getElementById("theme");
    var themeName = theme.getAttribute("href");
    if(themeName == "light.css"){
        theme.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark");
    }
    else{
        theme.setAttribute("href", "light.css");
        localStorage.setItem("theme", "light");
    }
}

var savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    document.getElementById("theme").setAttribute("href", "dark.css");
}


/*Change Font*/

function largeText(){
    var textToChange = document.getElementById("content");
    textToChange.classList.add("large-text");
    textToChange.classList.remove("medium-text");
    textToChange.classList.remove("small-text");
}

function mediumText(){
    var textToChange = document.getElementById("content");
    textToChange.classList.remove("large-text");
    textToChange.classList.add("medium-text");
    textToChange.classList.remove("small-text");
}

function smallText(){
    var textToChange = document.getElementById("content");
    textToChange.classList.remove("large-text");
    textToChange.classList.remove("medium-text");
    textToChange.classList.add("small-text");
}