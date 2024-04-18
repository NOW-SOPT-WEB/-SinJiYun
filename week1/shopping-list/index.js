import { WISH_LIST} from "./constants.js"

const itemSection = document.querySelector(".section");

// 전체 선택
const allItem = function() {
    const itemCards = WISH_LIST.map(item => {
        return `
        <article class="item item-skin">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.price}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    itemSection.innerHTML = itemCards.join('');
    console.log("전체 선택")
};

allItem();

const filterItem = function(category) {
    let newItem = WISH_LIST.filter(function(item) {
        return (item.category === category);
    });

    const newItemCard = newItem.map(item => {
        return `
        <article class="item item-skin">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.price}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    itemSection.innerHTML = newItemCard.join('');
}

// 버튼 연결

const navBtnAll = document.querySelector(".nav_all");
const navBtnMeal = document.querySelector(".nav_meal");
const navBtnDessert = document.querySelector(".nav_dessert");
const navBtnDrink = document.querySelector(".nav_drink");

const meal = "meal";
const dessert = "dessert";
const drink = "drink";

navBtnAll.addEventListener("click", () => {allItem()});
navBtnMeal.addEventListener("click", () => {filterItem(meal)});
navBtnDessert.addEventListener("click", () => {filterItem(dessert)});
navBtnDrink.addEventListener("click", () => {filterItem(drink)});

