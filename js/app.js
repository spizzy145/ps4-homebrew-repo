const grid = document.getElementById("grid");
const search = document.getElementById("search");

let apps = [];



fetch("repo.json")

.then(response => response.json())

.then(data => {

apps = data.apps;

renderApps(apps);

});





function renderApps(list){


grid.innerHTML="";



list.forEach(app=>{


let card=document.createElement("article");

card.className="card";



card.innerHTML=`

<div class="icon">

<img loading="lazy"
src="${app.icon}"
onerror="this.src='icons/default.png'">

</div>



<div class="content">


<div class="top">


<h2>${app.name}</h2>

<span class="badge">
${app.category}
</span>


</div>



<p class="description">

${app.description}

</p>



<div class="details">


<div>
<b>Version</b>
<span>${app.version}</span>
</div>


<div>
<b>Developer</b>
<span>${app.developer}</span>
</div>


<div>
<b>FW Support</b>
<span>${app.firmware}</span>
</div>


<div>
<b>Title ID</b>
<span>${app.title_id}</span>
</div>


<div>
<b>Content ID</b>
<span>${app.content_id}</span>
</div>


<div>
<b>Size</b>
<span>${app.size}</span>
</div>


<div>
<b>Updated</b>
<span>${app.updated}</span>
</div>


</div>



<a class="download"
href="${app.pkg}">

Download PKG

</a>



</div>

`;


grid.appendChild(card);


});


}





search.addEventListener("input",()=>{


let value =
search.value.toLowerCase();



let result =
apps.filter(app =>

app.name.toLowerCase()
.includes(value)

||
app.category.toLowerCase()
.includes(value)

);



renderApps(result);


});







// DARK MODE DEFAULT


const theme =
document.getElementById("theme");



if(localStorage.getItem("theme") !== "light"){

document.body.classList.add("dark");

theme.textContent="☀";

}




theme.onclick=()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


localStorage.setItem(
"theme",
"dark"
);


theme.textContent="☀";


}

else{


localStorage.setItem(
"theme",
"light"
);


theme.textContent="☾";


}


};
