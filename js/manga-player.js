// ------------------------MANGA-BUTTON--------------------------------
let manga = document.querySelector('.manga-invisible');
let forMangaPlayer = document.querySelector('.for-manga-pannel');
let liM = document.getElementsByClassName('liM');

manga.addEventListener('mouseenter',()=>{
    manga.classList.add('manga-button')
    forMangaPlayer.classList.add('mangaPanel')
    forMangaPlayer.style.transition = 'all 1s'
    for(i of liM){
        i.style.transition = 'all 0.3s ease-out 0.3s'
    }

    manga.addEventListener('mouseleave',()=>{
        for(i of liM){
            i.style.transition = 'all 0.2s ease-in'
        }
        manga.classList.remove('manga-button')
        forMangaPlayer.classList.remove('mangaPanel')
    })    
})
forMangaPlayer.addEventListener('mouseenter',()=>{
    forMangaPlayer.classList.add('mangaPanel')

    forMangaPlayer.addEventListener('mouseleave',()=>{
        forMangaPlayer.classList.remove('mangaPanel');
        chaptersBasic.classList.remove('content');
    })
})


// ================== SHOW CHAPTERS ============================

let chaptersBasic = document.querySelector('.contentBasic');
let chapters = document.querySelector('.content');

liM[2].addEventListener('click', ()=>{
    chaptersBasic.classList.toggle('content')
    
})
chaptersBasic.addEventListener('mouseenter', ()=>{
    chaptersBasic.classList.add('content');
    forMangaPlayer.classList.add('mangaPanel');
    chaptersBasic.addEventListener('mouseleave', ()=>{
        chaptersBasic.classList.remove('content');
        forMangaPlayer.classList.remove('mangaPanel');
    })
})

chaptersBasic.style.transition = 'all 0.8s'


// =====================PAGE-SWITCHING===========================


    // -------DATA 1 Chapter---------

let pages = [
    {
        status:'blank space',
        page: 0,
        src: 'imgs/blank-space.jpg'
    }, 
    {
        page: 1,
        src: 'imgs/manga/page1.jpeg'
    }, 
    {
        page: 2,
        src: 'imgs/manga/2page.jpg'
    },
    {
        page: 3,
        src: 'imgs/manga/3page.jfif'
    },
    {
        page: 4,
        src: 'imgs/manga/4page.jpg'
    },
    {
        page: 5,
        src: 'imgs/manga/5page.jfif'
    },
    {
        page: 6,
        src: 'imgs/manga/6page.jpg'
    },
    {
        page: 7,
        src: 'imgs/manga/7page.jpg'
    },
    {
        page: 8,
        src: 'imgs/manga/8.jpg'
    },
    {
        page: 9,
        src: 'imgs/manga/9page.jfif'
    },
    {
        page: 10,
        src: 'https://img3.cdnlib.link//manga/dorohedoro/chapters/1-1/013.png'
    },
    {
        page: 11,
        src: 'https://img3.cdnlib.link//manga/dorohedoro/chapters/1-1/014.png'
    },
    {
        page: 12,
        src: 'https://img3.cdnlib.link//manga/dorohedoro/chapters/1-1/015.png'
    },
    {
        page: 13,
        src: 'https://img3.cdnlib.link//manga/dorohedoro/chapters/1-1/016.png'
    },
    {
        page: 14,
        src: 'https://img3.cdnlib.link//manga/dorohedoro/chapters/1-1/017.png'
    },

    // INSERT IMGS ABOVE
    // BLANK SPACES BELOW
    {
        page: "doesn't matter",
        status:'blank space',
        src: 'imgs/blank-space.jpg'
    },
    {
        page: "doesn't matter",
        status:'blank space',
        src: 'imgs/blank-space.jpg'
    } 
]
// -------DIVS----------

const mangaImgs = document.querySelector('.manga-imgs')

let zero = -1;

for (i=0; i<pages.length; i++){
    let divs = document.createElement('div')
    divs.classList.add('select-me')
    mangaImgs.insertAdjacentElement('afterbegin', divs)
}

let createdDivs = document.querySelectorAll('.select-me')

// -------SWITCH----------

let right = document.querySelector('.right-slide'),
    left = document.querySelector('.left-slide');

let rightAdd = document.querySelector('.right-slide-additional'),
    leftAdd = document.querySelector('.left-slide-additional');

let pageCounter = document.querySelector('.page-counter')

let mangaCover = document.querySelector('.manga-cover')

    
function fillingDivs(){
    for(i of pages){
        zero++;
        createdDivs[zero].innerHTML = `<div style="background-image: url(${i.src})"></div>`
    }
}
fillingDivs()

createdDivs.forEach(e => e.classList.add('hidden'))

let newZero = 0;

right.addEventListener('click', ()=>{
    newZero++;
    mangaCover.style.display =  'none'
    if (newZero === createdDivs.length - 2){
        newZero -= 1;
        document.location.href = "../chapters/chapter1.html"
       }

    pageCounter.textContent = `${newZero}/${createdDivs.length-3}`
    
    createdDivs[newZero + 1].classList.remove('hidden')
    createdDivs[newZero + 2].classList.remove('hidden')
    createdDivs[newZero + 1].style.opacity = '0'
    createdDivs[newZero + 2].style.opacity = '0'
    createdDivs[newZero + 1].style.zIndex = '0'
    createdDivs[newZero + 2].style.zIndex = '0'

    createdDivs[newZero - 1].classList.remove('hidden')
    createdDivs[newZero - 1].style.opacity = '0'
    createdDivs[newZero - 1].style.zIndex = '0'

    createdDivs[newZero].classList.remove('hidden')
    createdDivs[newZero].style.opacity = '1'
    createdDivs[newZero].style.zIndex = '1'

    
    createdDivs[newZero - 1].classList.add('hidden')
    console.log(newZero)
})
 
    left.addEventListener('click',()=>{
        newZero--;
        if (newZero < 1){
            newZero += 1;
        }
        createdDivs[newZero + 2].classList.add('hidden')
        createdDivs[newZero + 3].classList.add('hidden')

        createdDivs[newZero + 1].classList.remove('hidden')
        createdDivs[newZero + 1].style.opacity = '0'
        createdDivs[newZero + 1].style.zIndex = '0'

        createdDivs[newZero].classList.remove('hidden')
        createdDivs[newZero].style.opacity = '1'
        createdDivs[newZero].style.zIndex = '1'

        pageCounter.textContent = `${newZero}/${createdDivs.length-3}`

        console.log(newZero)
    })
    pageCounter.textContent = `${newZero}/${createdDivs.length-3}`

    rightArrow = document.querySelector('#right-arrow')
    rightArrow.addEventListener('animationend',()=>{
        rightArrow.style.opacity = '0'
    })