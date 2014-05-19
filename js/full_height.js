// jQuery pour height 100%

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() - $("#header").height() - $("#footer").height() + "px";
    $("#content").css("height", newHeight);
}