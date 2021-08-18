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

    $("#change-text").click(function() {
        $(".another").text("This is a replaced text");
    });

    $("#change-html").click(function() {
        $(".another").html("This is a <b>replaced</b> text");
    });

    $("#change-val").click(function() {
        $("input").val("A new value");
    });

    $("#change-attr").click(function() {
        $("#alink").attr("href", "https://www.herrbvomsee.de");
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
    });
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

    // APPEND-SECTION
    $("button#append-text").click(function() {
        console.log("append text");
        $("p.append-para").append("<p> - with more text appended</p>");
    });

    $("button#append-item").click(function() {
        console.log("append item");
        $("ol").append("<li>new item</li>");
    });

    // BEFORE-AFTER-SECTION
    $("button#before-para").click(function() {
        $("p.be-af-para").before("<p>New text before para</p>");
    });

    $("button#after-para").click(function() {
        $("p.be-af-para").after("<p>New text <b>after</b> para</p>");
    });

    // REMOVE-EMPTY-SECTION
    $("button#remove").click(function() {
        $("#remove-box").remove();
    });

    $("button#empty").click(function() {
        $("#remove-box").empty();
    });

    $("button#remove-filter").click(function() {
        $("*").remove("li");
    });

    // CLASS-CHANGES
    $("button#add-class").click(function() {
        $(".class-heading").addClass("big-heading class-para");
    });

    $("button#remove-class").click(function() {
        $(".class-heading").removeClass("big-heading");
        $("#class-para").removeClass("class-para");
    });

    $("button#toggle-class").click(function() {
        $(".class-heading").toggleClass("big-heading");
    });

});

function switcher(target) {
    console.log("switcher called");
    target.animate({height: "+=400px"}, 1000);
    target.animate({width: "+=400px"}, 1000);
    target.animate({height: "-=400px"}, 1000);
    target.animate({width: "-=400px"}, 1000);
}