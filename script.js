/*global $*/
/*global show*/

$(document).keydown(function(e) {
    e.preventDefault(); //this may not be necessary
    console.log(e.keyCode);
    if (e.keyCode === 53) {
        Swapper("#ContainerHolder2", ".YouAreDead");
    }
    else if (e.keyCode === 54) {
        Swapper("#ContainerHolder2", ".YouAreDead");
    }
});



$(document).keydown(function(e) {
    e.preventDefault(); //this may not be necessary
    console.log(e.keyCode);
    if (e.keyCode === 51) {
        Swapper("#ContainerHolder", ".YouAreDead");
    }
    else if (e.keyCode === 52) {
        Swapper("#ContainerHolder", "#ContainerHolder2");
    }
});
//Jason was here//
function Swapper(HideCont, ShowCont) {
    $(HideCont).hide();
    $(ShowCont).show();
    console.log("Jason was here");

}

$(document).keydown(function(e) {
    e.preventDefault();
    if (e.keyCode === 49) {
        Swapper("#Container", ".YouAreDead");
        $("#Containerholder2").hide();
    }
    else if (e.keyCode === 50) {
        Swapper("#Container", "#ContainerHolder")
        $("#Containerholder").hide();
    }
});





$(document).ready(function() {

    $("#ContainerHolder").hide();
    $("#ContainerHolder2").hide();


    function collision() {
        var player = $("#player");
        var characterLeft = player.offset().left;
        var enemyLeft = $(".pump").offset().left;
        var characterRight = characterLeft + player.width();
        if (characterRight > enemyLeft) {
            return true;
        }
        else {
            return false;
        }
    }

    $(document).keydown(function(e) {
        console.log("keypressed: " + e.keyCode);
        switch (e.keyCode) {
            case 39:
                if (collision() === false) {
                    $("#player").animate({
                        "marginLeft": "+=30px"
                    });
                    $("#player").css("animation", "Walk 0.7s steps(9) infinite");
                }
                break;

        }
    });
    $(document).keyup(function(e) {
        switch (e.keyCode) {
            case 39:
                $("#player").stop(true, true);
                $("#player").css("animation", "Walk 0.7s steps(9) 0");
                break;

        }
    });

    var dialouge = 0;
    $(".story").on("click", function() {
        dialouge++;
        console.log(dialouge);
    });
    $(".story").click(function() {
        if (dialouge === 1) {
            $("#qwe").html("A pumpkin? I'm Starving!!!!!");
        }
        else if (dialouge === 2) {
            $("#qwe").html("*grabs pumpkin");
        }
        else if (dialouge === 3) {
            $("#qwe").html("CRAP! Press 1 to run, 2 to attack");
        }

    });
    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 49:
                $("body").css("background", "url('https://media2.giphy.com/media/Lopx9eUi34rbq/giphy.gif')");
                break;
            case 50:
                $("audio").html("src=BAG RAIDERS SHOOTING STARS HOME EXTENTED MIX.mp3")
                $("body").css("background", "url('https://media.giphy.com/media/3oEduNAaIxedayonCg/giphy.gif");
                break;
        }
    });
});
