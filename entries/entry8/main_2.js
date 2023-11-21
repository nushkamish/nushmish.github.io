 // Referenced from ChatGPT
 document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var previousScroll = window.scrollY;

      window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var scrollDirection = (scrollPosition > previousScroll) ? 'down' : 'up';
        var targetColor = getColorFromScrollPosition(scrollPosition);

       
        body.style.background = targetColor;

      
        previousScroll = scrollPosition;
      });

      function getColorFromScrollPosition(scrollPosition) {
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercentage = scrollPosition / maxScroll;
        var startColor = [33, 34, 27]; 
        var endColor = [25, 100, 126]; 

       
        var currentColor = startColor.map((start, i) => {
          var end = endColor[i];
          return Math.round(start + scrollPercentage * (end - start));
        });

        return `rgb(${currentColor.join(',')})`;
      }
    });

 let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}