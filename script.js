

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');
    

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // loginform.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginform.classList.add('active');
});

formclose.addEventListener('click', () => {
    loginform.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click',() => 
    {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src =btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    }); 

});
// function pqrs()
//                 {
//                     var x=document.getElementById("search").value;
        
//                     if(x === "kerela")
//                     {
//                         window.open("2.html");
//                     }
//                     if(x === "gujarat")
//                     {
//                         window.open("6.html");
//                     }
//                     if(x === "manali")
//                     {
//                         window.open("3.html");
//                     }
//                 }
