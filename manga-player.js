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


// ==============================================================================

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


// ==============================================================================
let right = document.querySelector('.right-slide'),
    left = document.querySelector('.left-slide'),
    cover = document.querySelector('.cover'),
    page1 = document.querySelector('.page1');

    right.addEventListener('click', ()=>{
            cover.style.display = 'none';
            page1.style.display = 'block';
    })
    left.addEventListener('click',()=>{
        cover.style.display = 'block';
        page1.style.display = 'none';
    })
    
    rightArrow = document.querySelector('#right-arrow')
    rightArrow.addEventListener('animationend',()=>{
        rightArrow.style.opacity = '0'
    })