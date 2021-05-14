// Consumir API
const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// Dibujar cards de personajes
const dibujarData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class ="col-md-3  ">';
    html += '<div class="card" style="width: 18rem;">';
    html += `<img class="card-img-top" src="${pj.image}" alt="Card image cap">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">${pj.gender}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPJ").innerHTML = html;
};

// Paginación
const paginacion = (data) => {
  let html = "";
  html += `<li class="page-item ${
    data.prev ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${data.prev}')"> Previus</a></li>`;
  html += `<li class="page-item ${
    data.next ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${data.next}')"> Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

// Ejecutar getData
getData(API);
