const prolist = document.querySelector("#pro-list");
let product = [];
fetch("products.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.map((p) => {
      return prolist.innerHTML += `<div class="col-md-4 mb-3">
      <div class="card h-100">
        <img src="${p.img}" class="card-img-top fixed-img" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Stock: ${p.qty} available</p>
          <p class="price mb-3">$${p.price}</p>
          <button class="btn btn-custom">Add to Cart</button>
        </div>
      </div>
    </div>`;
    });
  });
