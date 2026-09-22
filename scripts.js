const menu = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">R$ ${product.price}</p>
                    </li>
             `
    })

    menu.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll)