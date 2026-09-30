// меню с товарами


let showMore = document.querySelector('.show_more')

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
                    card.onclick = () => openModal(product.name)
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
            if(index <= 4){
                showMore.classList.add('hide_show_more')
                console.log(index)
            } else {
                showMore.classList.remove('hide_show_more')
                console.log(index)
            }
        })
}

let coffee = document.querySelector('#coffee')
let tea = document.querySelector('#tea')
let dessert = document.querySelector('#dessert')

coffee.addEventListener('click', () => {
    coffee.classList.add('active')
    tea.classList.remove('active')
    dessert.classList.remove('active')
    showMore.innerHTML = "Показать еще"
    fetchMenuCards("coffee")
})

tea.addEventListener('click', () => {
    tea.classList.add('active')
    coffee.classList.remove('active')
    dessert.classList.remove('active')
    showMore.innerHTML = "Показать еще"
    fetchMenuCards("tea")
})

dessert.addEventListener('click', () => {
    dessert.classList.add('active')
    tea.classList.remove('active')
    coffee.classList.remove('active')
    showMore.innerHTML = "Показать еще"
    fetchMenuCards("dessert")
})

// показать еще

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

// модалка

let modalWindow = document.querySelector(".menu_modal")
let modalClose = document.querySelector(".modal_close")

let modalName = document.querySelector(".modal_content h3")
let modalDesc = document.querySelector(".modal_content p")
let modalImg = document.querySelector(".modal_image img")
let sizeS = document.querySelector(".sizeS")
let sizeM = document.querySelector(".sizeM")
let sizeL = document.querySelector(".sizeL")
let sizeS_btn = document.querySelector('.sizeS_btn')
let sizeM_btn = document.querySelector('.sizeM_btn')
let sizeL_btn = document.querySelector('.sizeL_btn')
let priceModal = document.querySelector(".price")

let additives = document.querySelector(".additives")

modalClose.addEventListener('click', () => {
    modalWindow.style.display = "none"
    document.body.style.overflowY = "auto"
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalWindow.style.display == "flex") {
    modalWindow.style.display = "none"
    document.body.style.overflowY = "auto"
  }
});

modalWindow.addEventListener('click', () => {
    if(event.target === modalWindow){
        modalWindow.style.display = "none"
        document.body.style.overflowY = "auto"
    }
})

let price = 0;

function openModal(name){
    document.body.style.overflowY = "hidden"
    modalWindow.style.display = "flex"

    fetch('../products.json')
        .then(response => response.json())
        .then(products => {

            const product = products.find(product => product.name === name)

            if(!product) return

            modalName.innerHTML = product.name
            modalDesc.innerHTML = product.description
            sizeS.innerHTML = product.sizes.s.size
            sizeM.innerHTML = product.sizes.m.size
            sizeL.innerHTML = product.sizes.l.size
            modalImg.src = `./images/menu/${product.img}`

            additives.innerHTML = ""

            product.additives.forEach((additive, index) => {
                additives.innerHTML += `
                    <button class="modal_button" data-name="${additive.name}">
                        <span>${index + 1}</span>
                        ${additive.name}
                    </button>
                `
            })

            let sizePriceCharge = 0
            let additivePriceCharge = 0

            sizeS_btn.classList.add('active')
            sizeM_btn.classList.remove('active')
            sizeL_btn.classList.remove('active')

            price = Number(product.price)
            priceModal.innerHTML = `$${price.toFixed(2)}`

            function updatePrice(){
                price = Number(product.price) + Number(sizePriceCharge) + Number(additivePriceCharge)
                priceModal.innerHTML = `$${price.toFixed(2)}`
            }

            sizeS_btn.onclick = () => {
                sizeS_btn.classList.add('active')
                sizeM_btn.classList.remove('active')
                sizeL_btn.classList.remove('active')
                sizePriceCharge = product.sizes.s["add-price"]
                updatePrice()
            }

            sizeM_btn.onclick = () => {
                sizeS_btn.classList.remove('active')
                sizeM_btn.classList.add('active')
                sizeL_btn.classList.remove('active')
                sizePriceCharge = product.sizes.m["add-price"]
                updatePrice()
            }

            sizeL_btn.onclick = () => {
                sizeS_btn.classList.remove('active')
                sizeM_btn.classList.remove('active')
                sizeL_btn.classList.add('active')
                sizePriceCharge = product.sizes.l["add-price"]
                updatePrice()
            }

            const additiveButtons = additives.querySelectorAll('.modal_button')

            additiveButtons.forEach(button => {
                button.onclick = () => {
                    button.classList.toggle('active')
                    additivePriceCharge = 0
                    additiveButtons.forEach(button => {
                        if(button.classList.contains('active')){
                            const additiveName = button.dataset.name
                            const additive = product.additives.find(
                                additive => additive.name === additiveName
                            )
                            additivePriceCharge += Number(additive["add-price"])
                        }
                    })
                    updatePrice()
                }
            })
        })
}


