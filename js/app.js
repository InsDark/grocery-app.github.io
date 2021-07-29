let itemsCart = document.querySelector('.items-cart')
let products = document.querySelector('.products').addEventListener('click', e => {
    addToCart(e);
})

const addToCart = e => {
    if (e.target.classList.contains('addItem')){
        let item = e.target.parentElement;
        let itemName = item.childNodes[3].childNodes[1].textContent;
        let itemPrice = item.childNodes[3].childNodes[3].textContent;
        let newItem = document.createElement("div");
        newItem.innerHTML = `<h2>${itemName}</h2> <h2>${itemPrice}</h2><i class="fa fa-trash"></i>`
        itemsCart.appendChild(newItem);
    }
    let delItems = document.querySelector('.fa-trash')
    delItems.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-trash')){
            let itemUp = e.target.parentElement;
            itemsCart.remove(e.target.parentElement);

        }
    })
    e.stopPropagation();
} 
