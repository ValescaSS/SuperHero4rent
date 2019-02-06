$(document).ready(function() {
    // scroll-top arrow only appears after scrolling down half the page
    $(window).scroll(function() {
        if($(window).scrollTop() > $('body').height() / 3) {
            $('.scrollTop').removeClass('hidden');
        }else {
            $('.scrollTop').addClass('hidden');
        }
    });

});

const gallery = document.querySelectorAll('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
    function generateHTML([h, v]) {
        return `
            <div class="item h${h} v${v}">
                <img src="../image/${randomNumber(3)}.jpg">
                <div class="item__overlay">
                <button>View</button>
                </div>
            </div>
        `;
    }

}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
    //console.log(e.currentTarget);
    const src = e.currentTarget.querySelector('img').src;
    //console.log(src);
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}

const digits = Array.from({ length: 15 }, () =>
    [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

const html = digits.map(generateHTML).join('');
console.log(html);
gallery.innerHTML = html;

// const items = document.querySelectorAll('.item');

// items.forEach(item => item.addEventListener('click', handleClick));

// overlayClose.addEve

// for(let i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].addEventListener('click', openOverlay);
// }

// function openOverlay(e) {
//     console.log(e.currentTarget);
//     // overlay.classList.toggle('open');
//     // overlayImage.src = e.target.src;
//     overlayImage.src = e.target.src;
//     overlay.classList.add('open');
// }

// function closeOverlay() {
//     overlay.classList.remove('open');
// }

// thumbnails.addEventListener('click', openOverlay);
// overlayClose.addEventListener('click', closeOverlay);