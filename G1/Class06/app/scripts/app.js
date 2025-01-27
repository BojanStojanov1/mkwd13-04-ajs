const urls = {
    category: 'https://fakestoreapi.com/products/categories',
    allProducts: 'https://fakestoreapi.com/products'
};

let categoryHeader = document.getElementById('category-title');

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

}

getAllCategories();

document.getElementById('category-filter')
    .addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON' && e.target.name === 'category') {
            categoryHeader.innerText = e.target.value;
        }
    });

