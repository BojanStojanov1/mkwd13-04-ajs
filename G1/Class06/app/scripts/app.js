const urls = {
    category: 'https://fakestoreapi.com/products/categories'
};

// get all categories

function getAllCategories() {
    fetch(urls.category)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showCategoriesDropDown(data);
        });
}

function showCategoriesDropDown(data) {
    let btn = `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories</button>`;
    let ul = '<ul class="dropdown-menu">';
    for(let category of data) {
        let li = `<li><button class="dropdown-item" value="${category}">${category}</button></li>`
        ul += li;
    }
    ul += '</ul>';
    let html = `<div class="dropdown">
        ${btn} ${ul}
    </div>`;
    document.getElementById('category-filter')
        .innerHTML = html;
}

getAllCategories();