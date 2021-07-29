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
