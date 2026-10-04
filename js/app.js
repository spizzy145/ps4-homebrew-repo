const grid = document.getElementById("grid");
const search = document.getElementById("search");


let apps = [];


fetch("repo.json")
.then(res => res.json())
.then(data => {

apps = data.apps;

displayApps(apps);

});



function displayApps(list){

grid.innerHTML="";


list.forEach(app=>{


let card=document.createElement("div");

card.className="card";


card.innerHTML=`

<div class="icon-box">

<img src="${app.icon}" 
onerror="this.src='icons/default.png'">

</div>


<div class="info">

<h2>${app.name}</h2>


<span class="category">
${app.category}
</span>


<span class="version">
v${app.version}
</span>


<p>
${app.description}
</p>


<div class="details">

<div>
<b>Developer</b>
${app.developer}
</div>


<div>
<b>Firmware</b>
${app.firmware}
</div>


<div>
<b>Title ID</b>
${app.title_id}
</div>


<div>
<b>Content ID</b>
${app.content_id}
</div>


<div>
<b>Size</b>
${app.size}
</div>


<div>
<b>Updated</b>
${app.updated}
</div>


</div>


<a class="download" href="${app.pkg}">
Download PKG
</a>


</div>

`;


grid.appendChild(card);


});


}



search.oninput=()=>{


let value=search.value.toLowerCase();


let filtered=apps.filter(app=>

app.name.toLowerCase().includes(value)

);


displayApps(filtered);


};
