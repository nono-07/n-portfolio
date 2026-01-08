//メニューボタンの設定
const btn = document.querySelector('.btn-menu'); 
const nav = document.querySelector('.main-nav'); 
btn.addEventListener('click', () => { nav.classList.toggle('open-menu'); 
  const img = btn.querySelector('img'); if (nav.classList.contains('open-menu')) { 
    img.src = 'images/close.svg'; 
  }else { 
    img.src = 'images/menu.svg'; 
  } 
}); 
  
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".grid-gallery");

  new LuminousGallery(links, 
    {
      closeButton: true,
      arrowNavigation: true
    }, 
    {
      caption: function(trigger) {
        const img = trigger.querySelector('img');
        return img ? img.getAttribute('alt') : '';
      }
    }
  );
});

    
/* Fadeup Animation AOS */ // 
AOS.init();
AOS.init({ duration: 1000 });