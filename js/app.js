let addItem = document.querySelectorAll('#addItem')
let itemName = document.querySelectorAll('.item-name')

for (let i = 0; i < addItem.length; i++) {
    addItem[i].addEventListener('click', () =>{
        alert(`The ${itemName[i].textContent} was added to the cart`)
    });
}

let itemCart = document.querySelector('.items-cart')

itemCart.addEventListener('click', () =>{
    let itemsStand = document.querySelector('.itemsAdded')
    itemsStand.classList.toggle('active')
})