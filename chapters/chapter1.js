let pages = [
    {
        status:'blank space',
        page: 0,
        src: ''
    }, 
    {
        status:'blank space',
        page: 1,
        src: '	https://img3.cdnlib.link//manga/one-piece/chapters/1068407/02_sFEG.png'
    }, 
    {
        status:'blank space',
        page: 2,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/03_C6a9.png'
    }, 
    {
        status:'blank space',
        page: 3,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/04_200K.png'
    }, 
    {
        status:'blank space',
        page: 4,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/05_etq8.png'
    }, 
    {
        status:'blank space',
        page: 5,
        src: '	https://img3.cdnlib.link//manga/one-piece/chapters/1068407/06_WHnw.png'
    }, 
    {
        status:'blank space',
        page: 6,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/07_1pqs.png'
    }, 
    {
        status:'blank space',
        page: 7,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/08_eGzy.png'
    }, 
    {
        status:'blank space',
        page: 8,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/09_KcXh.png'
    }, 
    {
        status:'blank space',
        page: 9,
        src: '	https://img3.cdnlib.link//manga/one-piece/chapters/1068407/10_XmPU.png'
    }, 
    {
        status:'blank space',
        page: 10,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/11_OADA.png'
    }, 
    {
        status:'blank space',
        page: 11,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/10-11_Uqhl.png'
    }, 
    {
        status:'blank space',
        page: 12,
        src: '	https://img3.cdnlib.link//manga/one-piece/chapters/1068407/14_e6BL.png'
    }, 
    {
        status:'blank space',
        page: 13,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/15_2dsy.png'
    }, 
    {
        status:'blank space',
        page: 14,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1068407/16-17_By4P.png'
    }, 
    {
        status:'blank space',
        page: 15,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/01_TxeI.png'
    }, 
    {
        status:'blank space',
        page: 16,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/02_RAQD.png'
    }, 
    {
        status:'blank space',
        page: 17,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/12-13_8zc0.png'
    }, 
    {
        status:'blank space',
        page: 18,
        src: '	https://img3.cdnlib.link//manga/one-piece/chapters/1120732/04-05_QT27.png'
    }, 
    {
        status:'blank space',
        page: 19,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/06-07_aR7q.png'
    },
    {
        status:'blank space',
        page: 20,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/08_o2HD.png'
    }, 
    {
        status:'blank space',
        page: 21,
        src: 'https://img3.cdnlib.link//manga/one-piece/chapters/1120732/09_Dr07.png'
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

function fillingDivs(){
    for(i of pages){
        zero++;
        createdDivs[zero].innerHTML = `<div style="background-image: url(${i.src})"></div>`
    }
}
fillingDivs()

createdDivs.forEach(e => e.classList.add('hidden'))

let newZero = 0;

let mangaCover = document.querySelector('.manga-cover')

right.addEventListener('click', ()=>{
    newZero++;
    mangaCover.style.display =  'none'
    if (newZero === createdDivs.length - 2){
        newZero -= 1;
        // document.location.href = "http://127.0.0.1:5501/index.html"
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

    