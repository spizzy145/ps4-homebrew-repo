const grid = document.getElementById("grid");


fetch("repo.json")

.then(response => response.json())

.then(data => {


data.apps.forEach(app => {


let card=document.createElement("div");

card.className="card";


card.innerHTML = `


<img src="${app.icon}" 
onerror="this.src='icons/default.png'">


<h2>${app.name}</h2>


<div class="category">
${app.category}
</div>


<div class="version">
Version ${app.version}
</div>



<p class="description">

${app.description}

</p>



<div class="info">

<b>Title ID:</b> ${app.title_id}

<br>

<b>Content ID:</b> ${app.content_id}

<br>

<b>Size:</b> ${app.size}

</div>



<a class="download" 
href="${app.pkg}" 
target="_blank">

Download PKG

</a>


`;


grid.appendChild(card);


});


});



document.getElementById("search").oninput=function(){


let value=this.value.toLowerCase();


document.querySelectorAll(".card")
.forEach(card=>{


card.style.display =
card.innerText.toLowerCase()
.includes(value)
?"block"
:"none";


});


};
