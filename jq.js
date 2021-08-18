$(document).ready(function () {
    $("#div4").draggable();
    $("#accordion").accordion();

    $("button#hide-button").click(function () {
        $("p").toggle(2000);
    });

    $("p.intro").mouseenter(function () {
        console.log($("p.intro").text());
    }).mouseleave(function () {
        console.log("I am leaving now...");
    });

    $("p.another").mousedown(function () {
        console.log("Mouse down");
    }).mouseup(function () {
        console.log("Mouse up");
    });

    $("#text").click(function() {
        console.log($(".intro").text());
    });
    $("#html").click(function() {
        console.log($(".intro").html());
    });
    $("#value").click(function() {
        console.log($("input").val());
    });
    $("#attr").click(function() {
        console.log($("a#alink").attr("href"));
    });


    $("p").on({
        "dblclick": function () {
            $(this).hide(1500, switcher);
        },
    });
    $("button#show-blocks").on({
        "click": function () {
            $("#div1").fadeIn();
            $("#div2").fadeIn(2000);
            $("#div3").fadeToggle(3000);
            $("#div4").fadeTo(4000, 0.50)
                      .css("background", "blue");

        }
    });
    $("button#proceed").click(function () {
        console.log("animate");
        $(this).animate({left: "+=200px", opacity: .50, height: "+=20px"}, 1500, function () {
            {
                // animate needs position: absolute!
                $(this).animate({left: "-=200px", opacity: 1, height: "-=20px"}, 3000);
            }
        });
    });
    $("button#toggle").on({
        "click": function () {
            $("p").toggle(1500, switcher($("#proceed")));
        }
    });
    $("#topbar").on({
        "click": function () {
            $("#panel").slideToggle(1000);
        }
    })
    $("#div1").on({
        "click": function () {
        }
    });
    $("button#stop").on({
        "click": function() {
            $("*").stop();
        }
    });
    $("button#drag").on({
    })
});

function switcher(target) {
    console.log("switcher called");
    target.animate({height: "+=400px"}, 1000);
    target.animate({width: "+=400px"}, 1000);
    target.animate({height: "-=400px"}, 1000);
    target.animate({width: "-=400px"}, 1000);
}