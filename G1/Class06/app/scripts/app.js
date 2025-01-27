const urls = {
    category: 'https://fakestoreapi.com/products/categories',
    allProducts: 'https://fakestoreapi.com/products'
};

let categoryHeader = document.getElementById('category-title');
let productsDiv = document.getElementById('show-products');

// get all categories

function getAllCategories() {
    fetch(urls.category)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showCategoriesDropDown(data);
        });
}

function getAllProducts() {
    fetch(urls.allProducts)
        .then(res=>res.json())
        .then(products => {
            showProducts(products);
        });
}

getAllProducts();

function showCategoriesDropDown(data) {
    let btn = `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories</button>`;
    let ul = '<ul class="dropdown-menu">';
    for(let category of data) {
        let li = `<li><button name='category' class="dropdown-item" value="${category}">${category}</button></li>`
        ul += li;
    }
    ul += '</ul>';
    let html = `<div class="dropdown">
        ${btn} ${ul}
    </div>`;
    document.getElementById('category-filter')
        .innerHTML = html;
}
function showProducts(products) {
    let html = '';
    for(let product of products) {
        let card = `<div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">Price: ${product.price} $</p>
                  <button class="btn btn-primary">Add to cart</button>
                </div>
              </div>`;
        html += card;
    }
    productsDiv.innerHTML = html;
}

getAllCategories();

document.getElementById('category-filter')
    .addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON' && e.target.name === 'category') {
            categoryHeader.innerText = e.target.value;
        }
    });

