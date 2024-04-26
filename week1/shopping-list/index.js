import { WISH_LIST} from "./constants.js"

// navBar 버튼 연결
const navBtnAll = document.querySelector(".nav_all");
const navBtnMeal = document.querySelector(".nav_meal");
const navBtnDessert = document.querySelector(".nav_dessert");
const navBtnDrink = document.querySelector(".nav_drink");

// sideBar
const sideBtn = document.querySelector(".sidebarBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideBar = document.querySelector(".sideBar");

// section
const itemSection = document.querySelector(".section");

// 전체 선택
const allItem = function() {
    const itemCards = WISH_LIST.map(item => {
        return `
        <article class="item">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${Number(item.price).toLocaleString('ko-KR')}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    itemSection.innerHTML = itemCards.join('');
};


// 일부 선택
const filterItem = function(category) {
    let newItem = WISH_LIST.filter(function(item) {
        return (item.category === category);
    });

    const newItemCard = newItem.map(item => {
        return `
        <article class="item">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.price}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    itemSection.innerHTML = newItemCard.join('');
}

allItem();

navBtnAll.addEventListener("click", () => {allItem()});
navBtnMeal.addEventListener("click", () => {filterItem("meal")});
navBtnDessert.addEventListener("click", () => {filterItem("dessert")});
navBtnDrink.addEventListener("click", () => {filterItem("drink")});


// 사이드바
sideBtn.addEventListener("click", () => {
    sideBar.classList.remove("sideBarClose");   // 먼저 삭제해야 함!
    sideBar.classList.add("sideBarOpen");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("sideBarOpen");
    sideBar.classList.add("sideBarClose");
});

// localStorage에 추가
let itemCart = JSON.parse(localStorage.getItem('cartitems')) || []; 

itemSection.addEventListener("click", event => {
    const evTarget = event.target;
    if (evTarget.classList.contains("item")){

        const itemTitle = evTarget.querySelector("h4").textContent;
        const itemInfo = WISH_LIST.find(item => item.title === itemTitle);

        // alert
        const confirmed = confirm(`
        ${itemTitle}를 장바구니에 추가하시겠습니까?
        `);

        if (confirmed) {
            itemCart.push(itemInfo);
            localStorage.setItem('cartitems', JSON.stringify(itemCart));
        } else {
        }
    }
});