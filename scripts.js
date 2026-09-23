const menu = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterVegan = document.querySelector('.filter-vegan')

function formatCurrency(value) {
    return newValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">${formatCurrency(product.price)}</p>
                    </li>
             `
    })

    menu.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    menu.innerHTML = `
        <li>
            <p>A soma de todos <br>
            os itens do <br> 
            menu é: <br>
            ${formatCurrency(totalValue)}</p>
        </li>
        `
}

function filterAllVegan() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterVegan.addEventListener('click', filterAllVegan)