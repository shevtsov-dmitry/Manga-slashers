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

    right.addEventListener('click', ()=>{
        zero++;
        console.log(zero)
        pageCounter.textContent = `${zero+1}/${createdDivs.length}`

        createdDivs[zero].innerHTML = `<div style="background-image: url(${pages[zero].src})"></div>`
        createdDivs[zero - 1].innerHTML = ''
       if (zero === createdDivs.length){
        document.location.href = "http://127.0.0.1:5501/index.html"
       }
        mangaCover.style.display =  'none'
    })

    left.addEventListener('click',()=>{
        zero--;
        console.log(zero)
        createdDivs[zero].innerHTML = `<div style="background-image: url(${pages[zero].src})"></div>`
        if (zero < 0){
            // mangaCover.style.display =  'block'
            zero += 2;
        }
        createdDivs[zero + 1].innerHTML = ''
        pageCounter.textContent = `${zero+1}/${createdDivs.length}`
    })
    pageCounter.textContent = `${zero+1}/${createdDivs.length}`
    // function lovely(){if (zero === -1) return console.log('hi')}
    // lovely()
    // {
        // mangaCover.style.display =  'block'
    // }

    rightArrow = document.querySelector('#right-arrow')
    rightArrow.addEventListener('animationend',()=>{
        rightArrow.style.opacity = '0'
    })