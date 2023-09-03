// header.js


  


  const typewriter = document.getElementById('typewriter');

typewriter.addEventListener('animationend', () => {
  typewriter.style.borderRight = 'none'; // Animasyon tamamlandığında kenarlığı kaldır
});