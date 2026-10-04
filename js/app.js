const grid = document.getElementById("grid");

fetch("repo.json")
  .then(response => response.json())
  .then(data => {

    data.apps.forEach(app => {

      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <img src="${app.icon}" onerror="this.style.display='none'">

        <h3>${app.name}</h3>

        <span class="badge">${app.category}</span>
        <span class="badge">v${app.version}</span>

        <p>${app.description}</p>

        <p><b>Title ID:</b> ${app.title_id}</p>
        <p><b>Content ID:</b> ${app.content_id}</p>
        <p><b>Size:</b> ${app.size}</p>

        <a class="download-btn" href="${app.pkg}" target="_blank">
          Download PKG
        </a>
      `;

      grid.appendChild(card);

    });

  })
  .catch(error => {
    console.error(error);
    grid.innerHTML = "<p>Failed to load repository.</p>";
  });


const b = document.getElementById("theme");

b.onclick = () => {
  document.body.classList.toggle("light");
};


const s = document.getElementById("search");

s.oninput = () => {

  document.querySelectorAll(".card").forEach(card => {

    card.style.display =
      card.innerText
      .toLowerCase()
      .includes(s.value.toLowerCase())
      ? "block"
      : "none";

  });

};
