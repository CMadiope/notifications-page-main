const toggleBtn = document.getElementById('mark')
const hidden = document.querySelectorAll(".hidden");

toggleBtn.addEventListener('click', () => {
  hidden.forEach(el => {
    el.classList.toggle('off')
  })
})


