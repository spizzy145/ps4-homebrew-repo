const grid=document.getElementById("grid");


fetch("repo.json")

.then(r=>r.json())

.then(data=>{


data.apps.forEach(app=>{


let card=document.createElement("article");

card.className="card";


card.innerHTML=`

<img src="${app.icon || 'icons/default.png'}">


<h2>${app.name}</h2>


<span class="badge">
${app.category}
</span>

<span class="badge">
v${app.version}
</span>


<p class="info">

${app.description}

<br><br>

<b>Title ID:</b> ${app.title_id}

<br>

<b>Content ID:</b> ${app.content_id}

<br>

<b>Size:</b> ${app.size}

</p>


<a class="download" href="${app.pkg}">
Download PKG
</a>

`;


grid.appendChild(card);


});


});



document.getElementById("theme").onclick=()=>{

document.body.classList.toggle("light");

};



document.getElementById("search").oninput=e=>{


document.querySelectorAll(".card").forEach(card=>{


card.style.display=

card.innerText
.toLowerCase()
.includes(e.target.value.toLowerCase())

?"block":"none";


});


};
