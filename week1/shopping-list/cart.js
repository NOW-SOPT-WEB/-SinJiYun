
// navBar 버튼
const sideBtn = document.querySelector(".sidebarBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideBar = document.querySelector(".sideBar");

// localStorage 불러오기
const cartItems = JSON.parse(localStorage.getItem('cartitems'));
const tableClass = document.querySelector(".table");

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
    <td><img src="${item.image}" style="width: 3rem;"></td>
    <td>${item.title}</td>
    <td>${item.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
    <td>${item.category}</td>
    <td><button class="button">삭제</button></td>
    </tr>
    `
});

tableClass.innerHTML += cartItemCard.join('');
