// mobileheader.js dosyası
document.addEventListener("DOMContentLoaded", function() {
    // Burada mobileheader.js dosyasının geri kalanı için kodlarınız olabilir.
    // Örnek olarak, navLinks değişkenini kullanmak istediğiniz bir yer varsa,
    // burada kullanabilirsiniz.
  
    // Örnek olarak, navLinks değişkenini kullanarak menü öğelerine tıklamayı
    // işlemek istiyorsanız, aşağıdaki gibi kullanabilirsiniz:
  
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Linklere tıklandığında menüyü kapatarak açılır menüyü kapat
        const checkbox = document.getElementById('click');
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });
  });
  