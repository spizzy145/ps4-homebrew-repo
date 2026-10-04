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
<<<<<<< HEAD
        <a href="${app.pkg}">Download PKG</a>
=======
        <a href="${app.pkg}" target="_blank">Download PKG</a>
>>>>>>> e318e40 (Load apps from repo.json)
      `;

      grid.appendChild(card);
    });
<<<<<<< HEAD
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
=======
  })
  .catch(error => {
    console.error("Failed to load repo:", error);
    grid.innerHTML = "<p>Failed to load apps.</p>";
  });


const b = document.getElementById("theme");

b.onclick = () => {
  document.body.classList.toggle("light");
};


const s = document.getElementById("search");

s.oninput = () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(s.value.toLowerCase())
      ? "block"
      : "none";
  });
};
>>>>>>> e318e40 (Load apps from repo.json)
