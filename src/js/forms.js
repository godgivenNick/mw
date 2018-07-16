const forms = document.querySelectorAll('.form__field');

forms.forEach(function(elem) {
  elem.children[0].addEventListener('change', checkValue);
})

function checkValue(e) {
  if(e.target.value) {
    e.target.parentNode.classList.add('form__field--filled');
  } else {
    e.target.parentNode.classList.remove('form__field--filled');
  }
}