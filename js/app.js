const grid = document.getElementById("grid");

fetch("repo.json")
  .then(response => response.json())
  .then(data => {
    data.apps.forEach(app => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <h3>${app.name}</h3>
        <p>${app.category}</p>
        <p>Version: ${app.version}</p>
        <a href="${app.pkg}">Download PKG</a>
      `;

      grid.appendChild(card);
    });
  });

const b = document.getElementById("theme");
b.onclick = () => document.body.classList.toggle("light");

const s = document.getElementById("search");
s.oninput = () => {
  document.querySelectorAll(".card").forEach(c => {
    c.style.display =
      c.innerText.toLowerCase().includes(s.value.toLowerCase())
      ? "block"
      : "none";
  });
};
