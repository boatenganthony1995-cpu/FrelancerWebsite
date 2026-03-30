// Styling the java script section

const humbergerMenu = document.getElementById("humberger");
const closeBtn = document.getElementById('close')

// Adding Action Listerner
humbergerMenu.addEventListener('click',()=>
{
  navlinks.classList.add('active')
});

// Adding the closing Button 
closeBtn.addEventListener('click',()=>
{
  navlinks.classList.remove('active')
});








