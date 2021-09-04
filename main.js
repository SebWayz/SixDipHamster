// Loads side navbar & footer on the page to create a template
$(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollIndicator(){
    if( $('#eventDesc').is(":visible") ){
        $('#scroll').css("display", "block");
        // alert("EventDesc est visible");
    } else {
        $('#scroll').css("display", "none");
        // alert("EventDesc est pas là Sadge");
    }
}


$('#invitational').click(function () {
    console.log('In function (invitational)');

    console.log('eventDesc visibility : ' + $('#eventDesc').is(':visible'));
    console.log('eventDesc hidden? : ' + $('#eventDesc').is(':hidden'));

    //if there isn't txt -> fade it in
    if ( $('#eventDesc').css("display", "none") ) {
        $('#eventDesc').load("ChuTv_invitational_desc.html").fadeIn('slow', function () {
            console.log('ChuTv_invitational_desc.html loaded in the div.');
            scrollIndicator();
        });
    //else if there is some txt -> hide it then fade in the new content
    } else if ($('#eventDesc').css("display", "block")) {
        console.log('ChuTv_invitational_desc.html loaded in the div.');
        $('#eventDesc').hide().load("ChuTv_invitational_desc.html").fadeIn('slow');
    }
});

$('#brutal').click(function () {
    console.log('In function (BG 2v2)');

    console.log('eventDesc visibility : ' + $('#eventDesc').is(':visible'));
    console.log('eventDesc hidden? : ' + $('#eventDesc').is(':hidden'));

    //if there isn't txt -> fade it in
    if ( $('#eventDesc').css("display", "none") ) {
        $('#eventDesc').load("BG_2v2_desc.html").fadeIn('slow', function () {
            scrollIndicator();
            console.log('BG_2v2_desc.html loaded in the div.');
        });
    //else if there is some txt -> hide it then fade in the new content
    } else if ($('#eventDesc').css("display", "block")) {
        $('#eventDesc').hide().load("BG_2v2_desc.html").fadeIn('slow');
        console.log('BG_2v2_desc.html loaded in the div.');
    }
});

//TODO scroll animation when eventDesc div isn't visible