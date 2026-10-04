const grid = document.getElementById("grid");
const search = document.getElementById("search");
const categories = document.getElementById("categories");
const appCount = document.getElementById("appCount");
const errorBox = document.getElementById("error");
const themeButton = document.getElementById("theme");

let apps = [];
let activeCategory = "All";


// Load repository

async function loadRepo() {

    try {

        const response = await fetch("repo.json");

        if (!response.ok) {
            throw new Error("repo.json failed");
        }


        const data = await response.json();

        if (!data.apps || data.apps.length === 0) {

            throw new Error("No apps found");

        }


        apps = data.apps;

        appCount.textContent = apps.length;

        createCategories();

        renderApps();


    } catch(error) {

        errorBox.innerHTML =
        `
        <div class="card">
        <h2>Failed to load repository</h2>
        <p>${error.message}</p>
        </div>
        `;

    }

}



// Create category buttons

function createCategories(){

    let cats = [
        "All",
        ...new Set(
            apps.map(app => app.category)
        )
    ];


    categories.innerHTML = "";


    cats.forEach(category => {


        let button = document.createElement("div");

        button.className = "category";

        button.textContent = category;


        button.onclick = () => {

            activeCategory = category;

            renderApps();

        };


        categories.appendChild(button);


    });


}



// Render apps

function renderApps(){


    grid.innerHTML="";


    let filtered = apps.filter(app => {


        let text = `

        ${app.name}
        ${app.developer}
        ${app.title_id}
        ${app.content_id}
        ${app.category}

        `.toLowerCase();



        let matchesSearch =
        text.includes(
            search.value.toLowerCase()
        );


        let matchesCategory =
        activeCategory === "All" ||
        app.category === activeCategory;



        return matchesSearch && matchesCategory;


    });



    if(filtered.length === 0){

        grid.innerHTML =
        `
        <div class="card">
        <h2>No apps found</h2>
        </div>
        `;

        return;

    }




    filtered.forEach(app => {


        let card = document.createElement("article");


        card.className="card";


        card.innerHTML =

        `

        <img 
        class="icon"
        src="${app.icon}"
        onerror="this.src='icons/default.png'"
        >


        <h2>${app.name}</h2>


        <div class="category-text">
        ${app.category}
        · v${app.version}
        </div>



        <p class="description">
        ${app.description}
        </p>



        <div class="meta">

        <b>Developer:</b>
        ${app.developer}

        <br>


        <b>Firmware:</b>
        ${app.firmware}

        <br>


        <b>Title ID:</b>
        ${app.title_id}

        <br>


        <b>Content ID:</b>
        ${app.content_id}

        <br>


        <b>Size:</b>
        ${app.size}

        <br>


        <b>Updated:</b>
        ${app.updated}

        </div>



        <a 
        class="download"
        href="${app.pkg}"
        target="_blank"
        >

        Download PKG

        </a>


        `;


        grid.appendChild(card);



    });


}



// Search

search.addEventListener(
"input",
renderApps
);



// Dark / Light mode

themeButton.onclick = () => {


    document.body.classList.toggle("light");


    if(
    document.body.classList.contains("light")
    ){

        themeButton.textContent="☾ Dark";

    }
    else{

        themeButton.textContent="☀ Light";

    }


};



// Start

loadRepo();
