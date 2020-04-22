// document ready waits for full load of HTML page
var frameHit = false;
var frameName = "";

function frameDisplaySwitch(pFrame) {
    child = $(pFrame).children(".framebox");
    brothers = $(pFrame).siblings();
    console.log(pFrame + "." + child.attr("class") + " targetted");
    if ($(child).is(":visible")) {
        // $(child).css("display", "none");             --> OK
        // $(child).hide(""|"fast"|"slow"|"msec");      --> OK
        // $(child).toggle(""|"fast"|"slow"|"msec");    --> OK
        // $(pFrame).css("background", "transparent")   --> OK
        $(child).fadeOut();
        $(pFrame).css("background-size", "0");
        console.log("." + pFrame + "." + child.attr("class") + " hidden");
    } else {
        // $(child).css("display", "block");            --> OK
        // $(child).show(""|"fast"|"slow"|"msec");      --> OK
        // $(child).toggle(""|"fast"|"slow"|"msec");    --> OK
        // $(pFrame).css("background", "")              --> KO !
        // $(pFrame).removeAttr("background");          --> KO !
        $(child).fadeIn();
        $(pFrame).css("background-size", "auto");
        $(pFrame).siblings().css("background-size", "0");
        console.log("." + pFrame + "." + child.attr("class") + " visible");
    }
}

$(document).ready(function() {

    $(".frame1, .box1").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".box1");
    });

    $(".frame2, .box2").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".box2");
    });

    $(".frame3, .box3").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".box3");
    });

    $(".frame4, .box4").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".box4");
    });

    $(".frame5, .box5").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".box5");
    });

    $(".framebox").children(".frame1").click(function() {
        console.log($(this).attr("class") + " Hit");
        frameDisplaySwitch(".framebox");
    });

    $(".box1, .box2, .box3, .box4, .box5").on({
        mouseover: function() {
            console.log("." + $(this).attr("class") + " on().mouseover");
            frameDisplaySwitch("." + $(this).attr("class"));
        },
        mouseout: function() {
            console.log("." + $(this).attr("class") + " on().mouseout");
            frameDisplaySwitch("." + $(this).attr("class"));
        }
    });
});