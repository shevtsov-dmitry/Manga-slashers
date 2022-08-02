// By default, swipe is enabled.
$('section').horizon();

// If you do not want to include another plugin, TouchSwipe, you can set it to false in the default options by passing in the option as false.
//  $('section').horizon({swipe: false});

$(document).on('click','.scroll1', function () {
    $(document).horizon('scrollTo', 'section-section1');
});
$(document).on('click','.scroll2', function () {
    $(document).horizon('scrollTo', 'section-section2');
});
$(document).on('click','.scroll3', function () {
    $(document).horizon('scrollTo', 'section-section3');
});
$(document).on('click','.scroll4', function () {
    $(document).horizon('scrollTo', 'section-section4');
});
$(document).on('click','.scroll5', function () {
    $(document).horizon('scrollTo', 'section-section5');
});

// ------------------------------------------------------- // 

let icons = document.querySelector('.icons');
let MWI = document.getElementById('mutual-wrapper-icon');
let closeId = document.querySelector('#close-icon');
let idTwitter = document.getElementById('idTwitter');
let idInstagram = document.getElementById('idInstagram');
let idOpensea = document.getElementById('idOpensea');
let idRarible = document.getElementById('idDiscord');
let idTelegram = document.getElementById('idTelegram');

// icons fade out animation

MWI.addEventListener('click',()=>{
    icons.style.cursor = 'pointer';
    idTwitter.style.opacity = "100";
    idInstagram.style.opacity = "100%";
    idOpensea.style.opacity = "100%";
    idRarible.style.opacity = "100%";
    idTelegram.style.opacity = "100%";

    idTwitter.style.transition = "opacity 1.5s ease-in";
    idInstagram.style.transition = "opacity 1.25s ease-in";
    idOpensea.style.transition = "opacity 1s ease-in";
    idRarible.style.transition = "opacity 0.8s ease-in";
    idTelegram.style.transition = "opacity 0.5s ease-in";

    MWI.style.opacity = "0";
    MWI.style.transition = "opacity 0.1 linear";
    closeId.style.opacity = '100';
    closeId.style.display = 'initial';
    closeId.classList.add('pop-goes', 'display-something');
})

closeId.addEventListener('click',()=>{
    icons.style.cursor = 'initial';
    idTwitter.style.opacity = "0%";
    idInstagram.style.opacity = "0%";
    idOpensea.style.opacity = "0%";
    idRarible.style.opacity = "0%";
    idTelegram.style.opacity = "0%";

    idTwitter.style.transition = "opacity 0.5s ease-in";
    idInstagram.style.transition = "opacity 0.8s ease-in";
    idOpensea.style.transition = "opacity 1s ease-in";
    idRarible.style.transition = "opacity 1.25s ease-in";
    idTelegram.style.transition = "opacity 1.5s ease-in";

    MWI.style.opacity = "100";
    closeId.style.display = 'none';
    
})

let MWIcolor = document.querySelector('.icons-wrapper-color')

MWI.addEventListener('mouseenter',()=>{
    
    MWI.classList.add('icons-wrapper-color')   
    MWI.addEventListener('mouseleave',()=>{
        MWI.classList.remove('icons-wrapper-color')
        
    })
    
})
//------------------------------COLLECTION-IMGS-----------------------------//

let collectionItem = document.querySelectorAll('.collection-item')

let collectionObjects = [
    {
        n: 1,
        src:'/imgs/WizardIsHoldingGuy.jpg'
    },
    {
        n: 2,
        src:'/imgs/BoyWithGutsAndDeads.jpeg'
    },
    {
        n: 3,
        src:'/imgs/divaWithTheSword.jpg'
    },
    {
        n: 4,
        src:'/imgs/DriverManga.jpeg'
    },
    {
        n: 5,
        src:'/imgs/dudeWithCigaretteInTheHospital.jpeg'
    },
    {
        n: 6,
        src:'/imgs/MangaBoyWithRedFaceBackground.jpeg'
    },
    {
        n: 7,
        src:'/imgs/SadakoOnSemetary.jpg'
    },
    {
        n: 8,
        src:'/imgs/BatmanWithDogs.jpg'
    },
]


//  ----------------PULL UP ANIMATION--------------------
let plusPlus = -1;

for (const i of collectionItem) {
    i.addEventListener('mouseenter', ()=>{
        let iDiv = document.createElement('div')
        iDiv.classList.add('gog')
        i.style.marginTop = "-30px"
        i.style.transition = "margin-top 0.3s linear"
        i.insertAdjacentElement('afterBegin', iDiv)
        i.addEventListener('mouseleave', ()=>{
            iDiv.remove("div")
            i.style.marginTop = "0px"
            i.style.transition = "margin-top 0.15s linear"
        })
    })

    plusPlus++;
    i.style.backgroundImage = `url(${collectionObjects[plusPlus].src})`
}

    // ----------------NAV-PANEL PRESS ANIMATION--------------------

let activeAnimation = document.getElementsByClassName('nav-button')

for (const i of activeAnimation) {
    i.addEventListener('click',()=>{
        i.style.animation = "active 0.3s ease";
        i.addEventListener('animationend',()=>{
            i.style.animation = ""
        })
    })
}
// ------------------------MANGA-BUTTON--------------------------------
let manga = document.querySelector('.manga-invisible')

manga.addEventListener('mouseenter',()=>{
    manga.classList.add('manga-button')
    
    manga.addEventListener('mouseleave',()=>{
        manga.classList.remove('manga-button')
        
    })
    manga.addEventListener('animationend',()=>{
        
    })
})
let section1 = document.querySelector('#section-section1'),
    section2 = document.querySelector('#section-section2'),
    section3 = document.querySelector('#section-section3'),
    section4 = document.querySelector('#section-section4'),
    section5 = document.querySelector('#section-section5');

