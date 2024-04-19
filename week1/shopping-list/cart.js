
// navBar 버튼
const sideBtn = document.querySelector(".sidebarBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideBar = document.querySelector(".sideBar");

// localStorage 불러오기
const cartItems = JSON.parse(localStorage.getItem('cartitems'));
const tableClass = document.querySelector(".table");

// 구매하기 버튼
const buyBtn = document.querySelector(".buyBtn");

// 모달
const buyModal = document.querySelector(".buyModal");
const buyModalClose = document.querySelector(".modalClose");
const buyItem = document.querySelector(".modalItem");

// 사이드바 
sideBtn.addEventListener("click", () => {
    sideBar.classList.remove("sideBarClose");   // 먼저 삭제해야 함!
    sideBar.classList.add("sideBarOpen");
    console.log("사이드바 열음");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("sideBarOpen");
    sideBar.classList.add("sideBarClose");
    console.log("사이드바 닫음");
});

//  장바구니 table
let cartItemCard = cartItems.map(item => {
    return `
    <tr>
    <td><input type="checkbox" class="checkbox"></td>
    <td><img src="${item.image}" style="width: 4rem;"></td>
    <td>${item.title}</td>
    <td>${item.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
    <td>${item.category}</td>
    <td><button class="delete">삭제</button></td>
    </tr>
    `
});

tableClass.innerHTML += cartItemCard.join('');

// 삭제 버튼
const deleteBtns = document.querySelectorAll('.delete');

// 삭제
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
        cartItems.splice(index, 1); 
        localStorage.setItem('cartitems', JSON.stringify(cartItems));
        // 아이템 삭제 화면에 반영
        location.href='./cart.html';
    });
});

// 구매
buyBtn.addEventListener("click", () => {
    buyModal.classList.remove("buyModalClose");   // 먼저 삭제해야 함!
    buyModal.classList.add("buyModalOpen");
    console.log("모달 열음");
});

// 모달 닫기
buyModalClose.addEventListener("click", () => {
    buyModal.classList.remove("buyModalOpen");   // 먼저 삭제해야 함!
    buyModal.classList.add("buyModalClose");
    console.log("모달 닫음");
});

let buyItems = cartItems.map(item => {
    return `
    <article class="buyItem">
        <img src="${item.image}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.price}원</p>
    </article>
    `;
});

buyItem.innerHTML += buyItems.join('');