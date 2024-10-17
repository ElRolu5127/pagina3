
const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get("page");
const btnsSide = document.getElementsByClassName("side-btn");
const pageHome = document.getElementById("pageHome");
const pageUserList= document.getElementById("pageUserList");
if (!page){
    btnsSide[0].classList.remove("page");
    btnsSide[1].classList.remove("page");
    btnsSide[2].classList.remove("page");
    btnsSide[3].classList.remove("page");
    btnsSide[4].classList.remove("page");
    btnsSide[1].classList.add("page");
    pageHome.classList.remove("dis");
}else if (page == "home"){
    btnsSide[0].classList.remove("page");
    btnsSide[1].classList.remove("page");
    btnsSide[2].classList.remove("page");
    btnsSide[3].classList.remove("page");
    btnsSide[4].classList.remove("page");
    btnsSide[1].classList.add("page");
    pageHome.classList.remove("dis");
}else if (page == "userList"){
    btnsSide[0].classList.remove("page");
    btnsSide[1].classList.remove("page");
    btnsSide[2].classList.remove("page");
    btnsSide[3].classList.remove("page");
    btnsSide[4].classList.remove("page");
    btnsSide[2].classList.add("page");
    pageHome.classList.add("dis");
    pageUserList.classList.remove("dis");
}else if (page == "quotes"){
    btnsSide[0].classList.remove("page");
    btnsSide[1].classList.remove("page");
    btnsSide[2].classList.remove("page");
    btnsSide[3].classList.remove("page");
    btnsSide[4].classList.remove("page");
    btnsSide[3].classList.add("page");
    pageHome.classList.add("dis");
}else if (page == "blog"){
    btnsSide[0].classList.remove("page");
    btnsSide[1].classList.remove("page");
    btnsSide[2].classList.remove("page");
    btnsSide[3].classList.remove("page");
    btnsSide[4].classList.remove("page");
    btnsSide[4].classList.add("page");
    pageHome.classList.add("dis");
}



document.getElementById("changeSideNav").addEventListener("click", (e) => {
    let sideNav = document.getElementById("sideNav");
    sideNav.classList.toggle("active");
    let textSide = document.getElementsByClassName("text-btn-side");
    textSide[0].classList.toggle("active");
    textSide[1].classList.toggle("active");
    textSide[3].classList.toggle("active");
    textSide[2].classList.toggle("active");
    let btnSide = document.getElementsByClassName("side-btn");
    btnSide[0].classList.toggle("active");
    btnSide[1].classList.toggle("active");
    btnSide[3].classList.toggle("active");
    btnSide[2].classList.toggle("active");
    btnSide[4].classList.toggle("active");

    let iconChange1 = document.getElementsByClassName("iconActive");
    iconChange1[0].classList.toggle("active");
});


document.getElementById("btnChangeUser").addEventListener("click", (e) => {
    let submenu = document.getElementById("submenuUser");
    submenu.classList.toggle("active");
});