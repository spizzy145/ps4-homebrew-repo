const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

toggle.textContent="☀️";

}

toggle.onclick=()=>{

document.body.classList.toggle("dark");

const dark=document.body.classList.contains("dark");

toggle.textContent=dark?"☀️":"🌙";

localStorage.setItem("theme",dark?"dark":"light");

};

const search=document.getElementById("search");

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

});
