// слайдер

let slides = [
    {
        image: './images/coffee-slider-1.png',
        title: 'S’mores Frappuccino',
        description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
        price: '$5.50'
    },
    {
        image: './images/coffee-slider-2.png',
        title: 'Caramel Macchiato',
        description: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
        price: '$5.00'
    },
    {
        image: './images/coffee-slider-3.png',
        title: 'Ice coffee',
        description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
        price: '$4.50'
    }
];

let coffeeImage = document.querySelector('.coffee .img img');
let coffeeTitle = document.querySelector('.coffee h3');
let coffeeDescription = document.querySelector('.coffee > p:not(.price)');
let coffeePrice = document.querySelector('.coffee .price');

let previousButton = document.querySelector('.swap_prewious');
let nextButton = document.querySelector('.swap_next');

let indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;


function showSlide(index) {
    let coffee = document.querySelector('.coffee');

    coffee.classList.add('fade');

    setTimeout(() => {
        currentSlide = index;

        coffeeImage.src = slides[currentSlide].image;
        coffeeTitle.textContent = slides[currentSlide].title;
        coffeeDescription.textContent = slides[currentSlide].description;
        coffeePrice.textContent = slides[currentSlide].price;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });

        coffee.classList.remove('fade');
    }, 300);
}


function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}


function previousSlide() {
    const previousIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(previousIndex);
}


nextButton.addEventListener('click', nextSlide);
previousButton.addEventListener('click', previousSlide);


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});