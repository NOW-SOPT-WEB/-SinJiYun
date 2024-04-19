import { WISH_LIST} from "./constants.js"

const itemSection = document.querySelector(".section");
const sideBar = document.querySelector(".sideBarOpen");
const closeBtn = document.querySelector(".closeBtn");

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

navBtnAll.addEventListener("click", () => {allItem()});
navBtnMeal.addEventListener("click", () => {filterItem("meal")});
navBtnDessert.addEventListener("click", () => {filterItem("dessert")});
navBtnDrink.addEventListener("click", () => {filterItem("drink")});

// 사이드바 1
sideBar.addEventListener("click", () => {
    sideBar.classList.remove("sideBarClose");   // 먼저 삭제해야 함!
    sideBar.classList.add("sideBarOpen");
    console.log("사이드바 열음");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("sideBarOpen");
    sideBar.classList.add("sideBarClose");
    console.log("사이드바 닫음");
});

// // 사이드바 2

// function openMenu() {
//     document.getElementById("main").style.marginRight = "250px";
//     document.querySelector('.sideBar').style.width = "250px";
//     document.querySelector('.sideBarOpen').style.display = 'none';
//     console.log("사이드바 열음");
// }

// function closeMenu() { 
//     document.getElementById("main").style.marginLeft= "0";
//     document.querySelector('.sideBar').style.width = "0";
//     document.querySelector('.sideBarOpen').style.display = 'block';
// }

// sideBar.addEventListener("click", () => {openMenu()});
// closeBtn.addEventListener("click", () => {closeMenu()});