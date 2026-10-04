const grid = document.getElementById("grid");
const search = document.getElementById("search");

let apps = [];



fetch("repo.json")

.then(response => response.json())

.then(data => {

apps = data.apps;

render(apps);

});





function render(list){


grid.innerHTML="";



list.forEach(app=>{


const card=document.createElement("div");

card.className="card";



card.innerHTML=`

<div class="icon">

<img src="${app.icon}"
onerror="this.src='icons/default.png'">

</div>



<div class="content">


<div class="title">

<h2>${app.name}</h2>

<span>${app.category}</span>

</div>



<p class="description">

${app.description}

</p>



<div class="info">


<p>
<b>Version</b>
${app.version}
</p>


<p>
<b>Developer</b>
${app.developer}
</p>


<p>
<b>Firmware</b>
${app.firmware}
</p>


<p>
<b>Title ID</b>
${app.title_id}
</p>


<p>
<b>Content ID</b>
${app.content_id}
</p>


<p>
<b>Size</b>
${app.size}
</p>


<p>
<b>Updated</b>
${app.updated}
</p>


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




search.oninput=()=>{


let text=search.value.toLowerCase();



render(

apps.filter(app=>

app.name.toLowerCase()
.includes(text)

)

);


};





// Dark mode


const button=document.getElementById("theme");



if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

button.textContent="☀";

}



button.onclick=()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


localStorage.setItem("theme","dark");

button.textContent="☀";


}

else{


localStorage.setItem("theme","light");

button.textContent="☾";


}


};
