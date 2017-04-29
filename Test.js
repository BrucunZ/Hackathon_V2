/*global $*/

function SwapperA(HideCont, ShowCont) {
    $(HideCont).hide();
    $(ShowCont).show();
}
$(".YouAreDead").hide();
$(document).keydown(function(e) {
    e.preventDefault(); //this may not be necessary
    console.log(e.keyCode);
    if (e.keyCode === 49) {
        SwapperA("#container", "#You'reDead");
    }
    else if (e.keyCode === 50) {
        SwapperA("#Container", "#ContainerHolder");
    }
});
