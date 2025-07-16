let body = document.body;

let profile = document.querySelector(".header .flex .profile");
let searchForm = document.querySelector(".header .flex .search-form");

document.querySelector("#user-btn").addEventListener("click", () => {
    profile.classList.toggle("active");
    searchForm.classList.remove("active");
});

document.querySelector("#search-btn").addEventListener("click", () => {
    searchForm.classList.toggle("active");
    profile.classList.remove("active");
});

let sidebar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").addEventListener("click", () => {
    sidebar.classList.toggle("active");
    body.classList.toggle("active");
});

document.querySelector(".side-bar .close-side-bar").addEventListener("click", () => {
    sidebar.classList.remove("active");
    body.classList.remove("active");
});

window.onscroll = () => {
    profile.classList.remove("active");
    searchForm.classList.remove("active");
    // sidebar.classList.remove("active");
    // body.classList.remove("active");

    if(window.innerWidth < 1200){
        sidebar.classList.remove("active");
        body.classList.remove("active");
    }
}

let toggleBtn = document.querySelector("#toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = ()=>{
    toggleBtn.innerHTML = `<img src="images/moon.svg">`;
    body.classList.add("dark");
    localStorage.setItem('dark-mode' , 'enabled');
}

const disableDarkMode = ()=>{
    toggleBtn.innerHTML = `<img src="images/sun.svg">`;
    body.classList.remove("dark");
    localStorage.setItem('dark-mode' , 'disabled');
}

if(darkMode === "enabled"){
    enableDarkMode();
}

toggleBtn.onclick = (e)=>{
    let darkMode = localStorage.getItem("dark-mode");

    if(darkMode==="disabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
}