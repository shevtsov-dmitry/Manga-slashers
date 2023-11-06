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

let icons = document.querySelectorAll('.icon');
let MWI = document.getElementById('mutual-wrapper-icon');

// icons fade out animation
MWI.addEventListener('animationend',()=>{
    MWI.style.animation = 'none'
})
MWI.addEventListener('click',()=>{
    MWI.style.display = 'none'
    let closeIcons = document.createElement('div')
    closeIcons.classList.add('close-icons')
    MWI.insertAdjacentElement('beforebegin', closeIcons)

    for (const i of icons) {
        i.style.opacity = '1';
    }
    
    icons[0].style.transition = "opacity 0.5s ease-in";
    icons[1].style.transition = "opacity 0.8s ease-in";
    icons[2].style.transition = "opacity 1s ease-in";
    icons[3].style.transition = "opacity 1.25s ease-in";
    icons[4].style.transition = "opacity 1.5s ease-in";

    closeIcons.addEventListener('click',()=>{
        for (const i of icons) {
            i.style.opacity = '0';
        }
        icons[0].style.transition = "opacity 1.5s ease-in";
        icons[1].style.transition = "opacity 1.25s ease-in";
        icons[2].style.transition = "opacity 1s ease-in";
        icons[3].style.transition = "opacity 0.8s ease-in";
        icons[4].style.transition = "opacity 0.5s ease-in";

        // closeIcons.style.transition = 'all 0.5s linear 1.5s'
        // closeIcons.style.opacity = 0;
            closeIcons.style.display = 'none'
            MWI.style.display = 'block'
    })
})

let MWIcolor = document.querySelector('.icons-wrapper-color')

MWI.addEventListener('mouseenter',()=>{
    
    MWI.classList.add('icons-wrapper-color')
    MWI.style.transition = 'all 0.3s'
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
