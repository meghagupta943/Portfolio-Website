// TYPED JS

const typed= new Typed('.multiple-text',{
    strings: ['Developer.', 'Student.', 'Tech Enthusiast.', 'Human.'],
    typeSpeed:80,
    backSpeed:80,
    backDelay: 1000,
    loop: true,
});


//                     MIXITUP

const containerEl=document.querySelector('.projects__container');
var mixer = mixitup(containerEl,{
    animation: {
        enable: false
    }
});

mixer.filter('*');    



//                            NAV TOGGLE(small screen)

const navMenu=document.querySelector('.nav__menu')
const navOpenBtn=document.querySelector('.nav__toggleopen')
const navCloseBtn=document.querySelector('.nav__toggleclose')

const openNavHandler= () => {
    navMenu.style.display='flex';
    navOpenBtn.style.display='none';
    navCloseBtn.style.display='inline-block';
}

const closeNavHandler= () => {
    navMenu.style.display='none';
    navOpenBtn.style.display='inline-block';
    navCloseBtn.style.display='none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)


//close nav menu on click of nav link on small screens

const navItems=navMenu.querySelectorAll('a');
if(window.innerWidth<768){
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}



//THEME CONTROL(dark)

const themeBtn =document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click',() => {
    let bodyClass=document.body.className;
    if(!bodyClass){
        bodyClass='dark';
        document.body.className=bodyClass;
        //change toggle icon
        themeBtn.innerHTML="<i class='uil uil-sun'></i>"
        //save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    }else{
        bodyClass='';
        document.body.className=bodyClass;
        //change toggle icon
        themeBtn.innerHTML="<i class='uil uil-moon'></i>"
        //save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    }
})


//save theme to local storage(load prev saved theme on load)

window.addEventListener('load', () => {
    document.body.className=window.localStorage.getItem('theme');
})

