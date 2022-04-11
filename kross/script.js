'use strict';
// Поиск
const searchBtn = document.querySelector('.search');
const searchBlock = document.querySelector('.block__search');
const closeSearchbtn = document.querySelector('.close__search');
const body = document.body;
const openSearch = function(e){
    e.preventDefault();
    searchBlock.classList.add('hover')
    body.classList.add('disable-scroll')
}
const closeSearch = function(e){
    e.preventDefault();
    searchBlock.classList.remove('hover')
    body.classList.remove('disable-scroll')
}
searchBtn.addEventListener('click', openSearch)
closeSearchbtn.addEventListener('click', closeSearch)
//////////////////////////////////////////////////////////////////////////

// корзина

const corzinaBlock = document.querySelector('.corzina__block');
const closeCorzinBtn  = document.querySelector('.close__corzina');
const corzinaBtn = document.querySelector('.corzina');
const productCorzina = document.querySelector('.cor__product')
const cardWrapper = document.querySelector('.corzina__main');
const openCorzin = function(e){
    e.preventDefault();
    corzinaBlock.classList.add('hover')
    body.classList.add('disable-scroll')
}
const closeCorzin = function(e){
    e.preventDefault();
    corzinaBlock.classList.remove('hover')
    body.classList.remove('disable-scroll')
}
corzinaBtn.addEventListener('click', openCorzin)
closeCorzinBtn.addEventListener('click', closeCorzin)

window.addEventListener('click', function (event){;
    event.preventDefault();
    // Находим карточку с товаром, внутри котрой был совершен клик
    
if(event.target.querySelectorAll('.icon__cor')){

    const card = event.target.closest('.col');

    const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.img__product').getAttribute('src'),
        title: card.querySelector('.ttl').innerText,
        price: card.querySelector('.product__price').innerText
    };

    

    // Собранные данные подставим в шаблон для товара в корзине
    const cartItem = `
            <div class="cor__product" data-id="${productInfo.id}">
                  <img class="img__product" src="${productInfo.imgSrc}" alt="">
                <div class="info__prod">
                  <span class="cor__ttl">${productInfo.title}</span>
                  <p class="cor__price">${productInfo.price}</p>
                </div> 
                <button class="btn__delete" data-id="${productInfo.id}"><i class="bi bi-trash3"></i></button> 
            </div>
    `;
    // Отобразим товар в корзине
    cardWrapper.insertAdjacentHTML('beforeend', cartItem); 
    document.querySelector('.corzin').classList.add('hot')
    calcCartPriceAndDelivery();
    const delets = document.querySelector('.btn__delete');
    delets.addEventListener('click',function(e){
        e.target.closest('.cor__product').remove();
        calcCartPriceAndDelivery();
    })

    
}
})



////////////////////////////////////////////////////////////////////////////////

// Почта

const singBlock = document.querySelector('.sing__in');
const closeSingBtn = document.querySelector('.close__sing')
const btnSing = document.querySelector('.sing__s');
const openSing = function(e){
    e.preventDefault();
    singBlock.classList.add('hover')
    body.classList.add('disable-scroll')
}
const closeSing = function(e){
    e.preventDefault();
    singBlock.classList.remove('hover')
    body.classList.remove('disable-scroll')
}
btnSing.addEventListener('click', openSing)
closeSingBtn.addEventListener('click', closeSing)

// Регис

const regisBlock = document.querySelector('.sing__up');
const btnUp = document.querySelector('.zareg')
const btnRegis = document.querySelector('.sing-left');

const openRegis = function(e){
    e.preventDefault();
    regisBlock.classList.add('hover')
    body.classList.add('disable-scroll')
}
const closeRegis = function(e){
    e.preventDefault();
    regisBlock.classList.remove('hover')
    body.classList.remove('disable-scroll')
}
btnUp.addEventListener('click', openRegis)
btnRegis.addEventListener('click', closeRegis)

