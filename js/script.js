const toggle =  document.getElementById('toggle');
//show nav
toggle.addEventListener('click', 
() => document.body.classList.toggle('show-nav'));

const signup = document.getElementById('signup');
//show modal
signup.addEventListener('click', 
() => modal.classList.add('show-modal'));

const close = document.getElementById('close');
//hide modal
close .addEventListener('click', () => modal.classList.remove('show-modal'));

 