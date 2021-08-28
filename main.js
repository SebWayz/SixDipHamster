// Loads side navbar & footer on the page to create a template
$(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html"); 
});

var achievementBtn = document.getElementById('invitational');

achievementBtn.addEventListener('click', () => {
    achievementBtn.innerHTML = '<h1> POGGERS </h1>';
});