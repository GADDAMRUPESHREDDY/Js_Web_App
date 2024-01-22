

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});



const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

function bar(){
  const rangeInput = document.getElementById('myRange');
  const circle = document.querySelector('.circle');
  const percentageText = document.querySelector('.percentage');
  
  rangeInput.addEventListener('input', function () {
      const value = this.value;
      const percent = `${value}%`;
  
      percentageText.textContent = percent;
  
      circle.style.setProperty('--angle', `calc(${value} * 3.6deg)`);
  });
  
  }
  bar()





