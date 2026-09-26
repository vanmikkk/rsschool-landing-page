// меню с товарами

fetchMenuCards("coffee")

function fetchMenuCards(name){
    fetch('../products.json')
        .then(response => response.json())
        .then(products => {
            const menuCards = document.querySelector('.menu_cards');
            menuCards.innerHTML = ""
            let index = 0;

            products.forEach((product) => {
                const card = document.createElement('div');
                card.classList.add('menu_card')

                if(name == product.category){
                    card.innerHTML = `
                        <div class="menu_card_image">
                            <img 
                                src="./images/menu/${product.category}-${index + 1}.jpg" 
                                alt="${product.name}"
                            >
                        </div>
    
                        <div class="menu_card_content">
                            <h3>${product.name}</h3>
    
                            <p>
                                ${product.description}
                            </p>
    
                            <div class="menu_price">
                                $${product.price}
                            </div>
                        </div>
                    `;
    
                    menuCards.appendChild(card);
                    index++;
                }

            })
        })
}

let coffee = document.querySelector('#coffee')
let tea = document.querySelector('#tea')
let dessert = document.querySelector('#dessert')

coffee.addEventListener('click', () => {
    coffee.classList.add('active')
    tea.classList.remove('active')
    dessert.classList.remove('active')
    fetchMenuCards("coffee")
})

tea.addEventListener('click', () => {
    tea.classList.add('active')
    coffee.classList.remove('active')
    dessert.classList.remove('active')
    fetchMenuCards("tea")
})

dessert.addEventListener('click', () => {
    dessert.classList.add('active')
    tea.classList.remove('active')
    coffee.classList.remove('active')
    fetchMenuCards("dessert")
})


let showMore = document.querySelector('.show_more')
showMore.addEventListener('click', () => {
    if(showMore.innerHTML == "Скрыть"){
        let menuCards = document.querySelectorAll('.menu_card')
        menuCards.forEach(menuCard => {
            menuCard.classList.remove('show');
        })
        showMore.innerHTML = "Показать еще"
    } else {
        let menuCards = document.querySelectorAll('.menu_card')
        menuCards.forEach(menuCard => {
            menuCard.classList.add('show');
        })
        showMore.innerHTML = "Скрыть"
    }
})
