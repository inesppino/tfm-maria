"use strict";let slides=document.querySelectorAll(".carrousel .slide"),currentSlide=0;function playSlideshow(){setInterval(nextSlide,3e3)}function nextSlide(){goToSlide(currentSlide+1)}function goToSlide(e){slides[currentSlide].classList.remove("showing"),currentSlide=(e+slides.length)%slides.length,slides[currentSlide].classList.add("showing")}function addClassLit(){const e=document.getElementById("li-cant");e.classList.toggle("content-lithica"),e.classList.toggle("lithica")}function addClassLif(){const e=document.getElementById("li-nat");e.classList.toggle("content-natura"),e.classList.toggle("natura")}function showImg(e){const t=document.getElementById(e);t.classList.remove("mapa-detail"),"map-viv-det"===e?t.classList.add("map-viv"):t.classList.add("map-pal")}function hideImg(e){const t=document.getElementById(e);t.classList.add("mapa-detail"),"map-viv-det"===e?t.classList.remove("map-viv"):t.classList.remove("map-pal")}function playGif(){document.querySelector(".img-gif").style.opacity=1}function stopGif(){document.querySelector(".img-gif").style.opacity=0}playSlideshow();let pasarela=document.querySelectorAll(".carrousel-pasarela .slide-p"),currentPasarela=0;function playPasarelaSlide(){setInterval(nextPasarelaSlide,2e3)}function nextPasarelaSlide(){goToASlide(currentPasarela+1)}function goToASlide(e){pasarela[currentPasarela].classList.remove("showing"),currentPasarela=(e+pasarela.length)%pasarela.length,pasarela[currentPasarela].classList.add("showing")}playPasarelaSlide();let palmarium=document.querySelectorAll(".carrousel-palmarium .slide-palma"),currentPalmarium=0;function playPalmariumSlide(){setInterval(nextPalmariumSlide,2e3)}function nextPalmariumSlide(){goToPalmSlide(currentPalmarium+1)}function goToPalmSlide(e){palmarium[currentPalmarium].classList.remove("showing"),currentPalmarium=(e+palmarium.length)%palmarium.length,palmarium[currentPalmarium].classList.add("showing")}playPalmariumSlide();let stat=document.querySelectorAll(".carousel-stat .pic-slide"),currentstat=0;function playstatSlide(){setInterval(nextstatSlide,2e3)}function nextstatSlide(){goToStatSlide(currentstat+1)}function goToStatSlide(e){stat[currentstat].classList.remove("showing"),currentstat=(e+stat.length)%stat.length,stat[currentstat].classList.add("showing")}playstatSlide();