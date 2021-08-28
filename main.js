// Loads side navbar & footer on the page to create a template
$(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

var achievementBtn = document.getElementById('invitational');
var brutalTourneyBtn = document.getElementById('brutal');
var eventSection = document.getElementById('event');

$('#invitational').click(function () {
    $('#event').load("ChuTv_invitational_desc.html").fadeIn('slow');
});

$('#brutal').click(function () {
    $('#event').load("BG_2v2_desc.html").fadeIn('slow');
});