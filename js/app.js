// To filter items
let myBtn = document.querySelectorAll('button')
let itemStand = document.querySelectorAll('.item')

myBtn.forEach(button => {
    button.addEventListener('click', e => {
        let filter = e.target.textContent.toLowerCase()
        itemStand.forEach(item => {
            if (item.classList.contains(`${filter}`)){
                item.style.display = 'block'
            } else if (item.classList !== `${filter}`){
                item.style.display = 'none'
            }
            if(filter === 'all'){
                item.style.display = 'block'
            }
        })
        e.stopPropagation()
    })
})


//To modal the items img
const itemPicture = document.querySelectorAll('.item-picture')
let modal = document.querySelector('.modal')
let modalPicture = document.querySelector('.modal-bg')
const modalBtnHide = document.querySelector('.fa-times-circle')
const btnModalSlide = document.querySelectorAll('.modal-slide')
let imgArray = []
let imgCount = 0;

itemPicture.forEach(img => {
    imgArray.push(img.alt)
})


itemPicture.forEach(picture =>{
    picture.addEventListener('click', e =>{
        let imgSrc = e.target.alt
        modal.style.display = 'block'
        modalPicture.style.backgroundImage = `url(img/${imgSrc})`
    })
})

modalBtnHide.addEventListener('click', () =>{
    modal.style.display ='none'
})

btnModalSlide.forEach(btnChange =>{
    btnChange.addEventListener('click', e =>{
        if(e.target.classList.contains('fa-angle-right')){
            imgCount++;
            if (imgCount > imgArray.length-1){
                imgCount = 0;
            }
            modalPicture.style.backgroundImage = `url(img/${imgArray[imgCount]})`
        }
        if(e.target.classList.contains('fa-angle-left')){
            imgCount--;
            if (imgCount < 0){
                imgCount = imgArray.length -1;
            }
            modalPicture.style.backgroundImage = `url(img/${imgArray[imgCount]})`
        }
    })
})

// To add and delete items on the cart
let cartListItems = document.querySelector('.item-cart-list')
let cartList = document.querySelector('.item-cart')

cartList.addEventListener('click', () => {
    cartListItems.classList.toggle('active')
})

let totalMoney = []
const countMoney = () => {
    let singleItemPrice = document.querySelectorAll('.singleItemPrice')
    let total = []
    singleItemPrice.forEach(price =>{
        let count = price.textContent.split('')
        count.shift()
        count.shift()
        total.push(parseInt(String(count)))
        let newTotal = 0
        total.forEach(price =>{
            let plus = newTotal += price
            countItems(plus)
        })
    })
}

const countItems = (plus) => {
    let numberOfItems = otherCartList.childElementCount
    let itemsBuyed = document.querySelector('.itemsBuy')

    if (plus === undefined) {
        itemsBuyed.textContent = `${numberOfItems} Items - $ 00.00`
    } else {
        itemsBuyed.textContent = `${numberOfItems} Items - $ ${plus} .00`
    }

}

//Add a item to the cart
let itemsCart = document.querySelectorAll('.addItem')

const delItems = () =>{
    let delItem = document.querySelectorAll('.fa-trash')
    delItem.forEach(item => {
        item.addEventListener('click', (e) =>{
            let upElement = e.target.parentElement
            upElement.remove()
            countItems()
            countMoney()
        })
    })
}

itemsCart.forEach(item => {
    item.addEventListener('click', (e) =>{
        let elementCart = e.target.parentElement.childNodes[3]
        let elementName = elementCart.childNodes[1].textContent
        let elementPrice = elementCart.childNodes[3].textContent
        addItems(elementName, elementPrice)
    })
    delItems()
})

let messageAdded = document.querySelector('.messageAdded')
let otherCartList = document.querySelector('.otherCartList')

const addItems = (elementName, elementPrice) => {
    let singleItem = document.createElement('div')
    singleItem.classList.add('singleItem')
    singleItem.innerHTML = `<h3>${elementName}</h3>
                            <h3 class="singleItemPrice">${elementPrice}</h3>
                            <i class="fas fa-trash"></i>`
    otherCartList.insertBefore(singleItem, otherCartList.childNodes[0])
    alert('The item was added')
    delItems() 
    countItems()
    countMoney()
}

let clearAll = document.querySelector('.clearAll')
clearAll.addEventListener('click', () => {
    otherCartList.textContent = '';
    countItems()
    countMoney()
})