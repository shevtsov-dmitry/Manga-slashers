// ------------------------MANGA-BUTTON--------------------------------
let manga = document.querySelector('.manga-invisible');
let forMangaPlayer = document.querySelector('.for-manga-pannel');
let liM = document.getElementsByClassName('liM');

manga.addEventListener('mouseenter',()=>{
    manga.classList.add('manga-button')
    forMangaPlayer.classList.add('mangaPanel')
    forMangaPlayer.style.transition = 'all 1s'

    liM[0].style.transition = 'all 0.3s ease-out 0.3s'
    liM[1].style.transition = 'all 0.3s ease-out 0.3s'
    liM[2].style.transition = 'all 0.3s ease-out 0.3s'

    manga.addEventListener('mouseleave',()=>{
        liM[0].style.transition = 'all 0.2s ease-in'
        liM[1].style.transition = 'all 0.2s ease-in'
        liM[2].style.transition = 'all 0.2s ease-in'
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


// =================================================================

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


// ===========================PAGE-SWITCHING======================================


    // -------DATA---------

let pages = [
    {
        page: 1,
        src: 'imgs/manga/page1.jpeg'
    }, 
    {
        page: 2,
        src: 'imgs/manga/2page.jpeg'
    },
    {
        page: 3,
        src: 'imgs/manga/3page.jfif'
    },
    {
        page: 4,
        src: 'imgs/manga/4page.jpeg'
    },
    {
        page: 5,
        src: 'imgs/manga/5page.jfif'
    },
    {
        page: 6,
        src: 'imgs/manga/6page.jpeg'
    },
    {
        page: 7,
        src: 'imgs/manga/7page.jpeg'
    },
    {
        page: 8,
        src: 'imgs/manga/8page.jpeg'
    },
    {
        page: 9,
        src: 'imgs/manga/9page.jfif'
    }
]
// -------DIVS----------

const mangaImgs = document.querySelector('.manga-imgs')
let next = 0,
    prev = 0;

function createDivs(){
    for (i=0; i<pages.length; i++){
        let divs = document.createElement('div')
        mangaImgs.insertAdjacentElement('afterbegin', divs)
        divs.innerHTML = `<div style="background-image:url(${addImgsToDivs()})"></div>`
    }
}
createDivs()

function addImgsToDivs(){
    let newArray = []
        pages.forEach(e =>{
        newArray.push(e.src)
    })
    return newArray
}

console.log(addImgsToDivs())

// addImgsToDivs()

// -------SWITCH----------

let right = document.querySelector('.right-slide'),
    left = document.querySelector('.left-slide');

    right.addEventListener('click', ()=>{
    })
    left.addEventListener('click',()=>{

    })
    
    rightArrow = document.querySelector('#right-arrow')
    rightArrow.addEventListener('animationend',()=>{
        rightArrow.style.opacity = '0'
    })