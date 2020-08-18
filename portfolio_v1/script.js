$(document).ready(function() {
  $('nav > a[href^="#"]').bind("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        800,
        function() {
          location.hash = target;
        }
      );
    return false;
  });
});

$(window)
  .scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $("section").each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a")
          .eq(i)
          .addClass("active");
      }
    });
  })
  .scroll();

$("#html-css").on("click", function() {
  $(".projects-button").css("background-color", "var(--color-primary-text)");
  $(this).css("background-color", "var(--color-accent)");
  $(".html-css").fadeIn();
});

$("#jquery").on("click", function() {
  $(".projects-button").css("background-color", "var(--color-primary-text)");
  $(this).css("background-color", "var(--color-accent)");
  $(".html-css, .javascript, .react").fadeOut();
  $(".jquery").fadeIn();
});

$("#javascript").on("click", function() {
  $(".projects-button").css("background-color", "var(--color-primary-text)");
  $(this).css("background-color", "var(--color-accent)");
  $(".html-css").fadeOut();
  $(".jquery, .react, .javascript").fadeIn();
});

$("#react").on("click", function() {
  $(".projects-button").css("background-color", "var(--color-primary-text)");
  $(this).css("background-color", "var(--color-accent)");
  $(".html-css, .jquery, .javascript").fadeOut();
  $(".react").fadeIn();
});
