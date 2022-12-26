const alls = document.getElementById("all") 
 
const movieser = document.getElementById("movies") 
const books = document.getElementById("books") 
const games = document.getElementById("games") 
const res = document.querySelector(".result") 

const moviedata = [ 
    { 
      title: "Harry Poter", 
      type: "film", 
    }, 
    { 
      title: "God of war", 
      type: "game", 
    }, 
    { 
      title: "Production Ready - Microservices", 
      type: "book", 
    }, 
    { 
      title: "Avatar", 
      type: "film", 
    }, 
    { 
      title: "Elden Ring", 
      type: "game", 
    }, 
    { 
      title: "Capital", 
      type: "book", 
    }, 
  ]; 
function all(){ 
    res.textContent = "" 
    
    for(let i = 0;i<moviedata.length;i++){ 
res.innerHTML += `<div id="d1">title:${moviedata[i].title}</div><br> 
<div id="d2">type:${moviedata[i].type}</div> 
<hr> 
` 

    } 
} 
function movies(){
    res.textContent = "" 
    
    for(let i = 0;i<moviedata.length;i++){ 
        if(moviedata[i].type == "film")
res.innerHTML += `<div id="d1">title:${moviedata[i].title}</div><br> 
<div id="d2">type:${moviedata[i].type}</div> 
<hr> 
` 

    } 
}
function book(){
    res.textContent = "" 
    
    for(let i = 0;i<moviedata.length;i++){ 
        if(moviedata[i].type == "book")
res.innerHTML += `<div id="d1">title:${moviedata[i].title}</div><br> 
<div id="d2">type:${moviedata[i].type}</div> 
<hr> 
` 

    } 
}
function gamer(){
    res.textContent = "" 
    
    for(let i = 0;i<moviedata.length;i++){ 
        if(moviedata[i].type == "game")
res.innerHTML += `<div id="d1">title:${moviedata[i].title}</div><br> 
<div id="d2">type:${moviedata[i].type}</div> 
<hr> 
` 

    } 
}
alls.addEventListener("click", all);
movieser.addEventListener("click", movies);
books.addEventListener("click", book);
games.addEventListener("click", gamer);