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
//----------------------------------------------------------------------------//

let CI1 = document.querySelector('.CI1');
let CI2 = document.querySelector('.CI2');
let CI3 = document.querySelector('.CI3');
let CI4 = document.querySelector('.CI4');
let CI5 = document.querySelector('.CI5');
let CI6 = document.querySelector('.CI6');
let CI7 = document.querySelector('.CI7');
let CI8 = document.querySelector('.CI8');

CI1.addEventListener("mouseenter", ()=> {
    let CI1ID = document.createElement ("div")
    CI1ID.classList.add('gog')
    CI1.style.marginTop = "-30px"
    CI1.style.transition = "margin-top 0.3s linear"
    CI1.insertAdjacentElement('afterBegin', CI1ID)
    CI1.addEventListener("mouseleave", ()=> {
        CI1ID.remove("div")
        CI1.style.marginTop = "0px"
        CI1.style.transition = "margin-top 0.15s linear"
    })
})
CI2.addEventListener("mouseenter", ()=> {
    let CI2ID = document.createElement ("div")
    CI2ID.classList.add('gog')
    CI2.style.marginTop = "-30px"
    CI2.style.transition = "margin-top 0.3s linear"
    CI2.insertAdjacentElement('afterBegin', CI2ID)
    CI2.addEventListener("mouseleave", ()=> {
        CI2ID.remove("div")
        CI2.style.marginTop = "0px"
        CI2.style.transition = "margin-top 0.15s linear"
    })
})
CI3.addEventListener("mouseenter", ()=> {
    let CI3ID = document.createElement ("div")
    CI3ID.classList.add('gog')
    CI3.style.marginTop = "-30px"
    CI3.style.transition = "margin-top 0.3s linear"
    CI3.insertAdjacentElement('afterBegin', CI3ID)
    CI3.addEventListener("mouseleave", ()=> {
        CI3ID.remove("div")
        CI3.style.marginTop = "0px"
        CI3.style.transition = "margin-top 0.15s linear"
    })
})
CI4.addEventListener("mouseenter", ()=> {
    let CI4ID = document.createElement ("div")
    CI4ID.classList.add('gog')
    CI4.style.marginTop = "-30px"
    CI4.style.transition = "margin-top 0.3s linear"
    CI4.insertAdjacentElement('afterBegin', CI4ID)
    CI4.addEventListener("mouseleave", ()=> {
        CI4ID.remove("div")
        CI4.style.marginTop = "0px"
        CI4.style.transition = "margin-top 0.15s linear"
    })
})
CI5.addEventListener("mouseenter", ()=> {
    let CI5ID = document.createElement ("div")
    CI5ID.classList.add('gog')
    CI5.style.marginTop = "-30px"
    CI5.style.transition = "margin-top 0.3s linear"
    CI5.insertAdjacentElement('afterBegin', CI5ID)
    CI5.addEventListener("mouseleave", ()=> {
        CI5ID.remove("div")
        CI5.style.marginTop = "0px"
        CI5.style.transition = "margin-top 0.15s linear"
    })
})
CI6.addEventListener("mouseenter", ()=> {
    let CI6ID = document.createElement ("div")
    CI6ID.classList.add('gog')
    CI6.style.marginTop = "-30px"
    CI6.style.transition = "margin-top 0.3s linear"
    CI6.insertAdjacentElement('afterBegin', CI6ID)
    CI6.addEventListener("mouseleave", ()=> {
        CI6ID.remove("div")
        CI6.style.marginTop = "0px"
        CI6.style.transition = "margin-top 0.15s linear"
    })
})
CI7.addEventListener("mouseenter", ()=> {
    let CI7ID = document.createElement ("div")
    CI7ID.classList.add('gog')
    CI7.style.marginTop = "-30px"
    CI7.style.transition = "margin-top 0.3s linear"
    CI7.insertAdjacentElement('afterBegin', CI7ID)
    CI7.addEventListener("mouseleave", ()=> {
        CI7ID.remove("div")
        CI7.style.marginTop = "0px"
        CI7.style.transition = "margin-top 0.15s linear"
    })
})
CI8.addEventListener("mouseenter", ()=> {
    let CI8ID = document.createElement ("div")
    CI8ID.classList.add('gog')
    CI8.style.marginTop = "-30px"
    CI8.style.transition = "margin-top 0.3s linear"
    CI8.insertAdjacentElement('afterBegin', CI8ID)
    CI8.addEventListener("mouseleave", ()=> {
        CI8ID.remove("div")
        CI8.style.marginTop = "0px"
        CI8.style.transition = "margin-top 0.15s linear"
    })
})

    // ------------------------NAV-PANEL PRESS ANIMATION--------------------------------

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

    // section1.addEventListener('mouseenter', ()=>{
        // activeAnimation[0].classList.add('black-background')
            // section1.addEventListener('mouseleave', ()=>{
            // activeAnimation[0].classList.remove('black-background')
        // })
    // }) 

