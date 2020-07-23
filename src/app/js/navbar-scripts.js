navClear = function (condition) {
  //hide all the bits from any previously hovered elements
  $(".navbar.top-level a").removeClass("active");
  $(".navbar.megamenu-panel.wrapper").removeClass("active").fadeOut(200);
  //Conditionally clears the background behind panels
  //console.log(condition);
  if (condition == "full") {
    $(".megamenu-inner").removeClass("active").fadeOut(200).css({ height: "" });
    $(".navbar-veil").removeClass("active").fadeOut(200);
  }
  //Mobile ones
  $(".navbar-toggle").removeClass("active");
  $(".navbar .desktop-hidden.has-dropdown").removeClass("active");
};

$(document).ready(function () {
  /*
   * DESKTOP
   */

  //Mouseenter events
  $(".navbar.top-level a").mouseenter(function () {
    if ($(this).hasClass("active")) {
      //do nothing
    } else {
      if ($(this).hasClass("has-dropdown")) {
        navClear("partial");
        $(".navbar-veil").addClass("active").fadeIn(200);
      } else {
        navClear("full");
      }
      //add an active class to the menu item
      $(this).addClass("active");
      //show the panel we want
      var drop = $(this).data("to-toggle");
      var toDrop = $(
        '.navbar.megamenu-panel.wrapper[data-toggle="' + drop + '"]'
      );
      var height = $(toDrop).outerHeight();
      $(toDrop).addClass("active").fadeIn(200);
      $(".megamenu-inner")
        .addClass("active")
        .fadeIn(200)
        .css({ height: height });
    }
  });

  //Mouseleave events
  $(".navbar-wrapper").mouseleave(function () {
    navClear("full");
  });

  /*
   * MOBILE
   */

  $(".navbar-toggle").click(function () {
    if ($(this).hasClass("active")) {
      $(this).toggleClass("active");
      navClear("full");
    } else {
      $(this).toggleClass("active");
      // $('.megamenu-inner *').fadeIn(200);
      $(".megamenu-inner").addClass("active").fadeIn(100);
    }
  });

  $(".navbar .desktop-hidden.has-dropdown").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      var drop = $(this).data("to-toggle");
      var toDrop = $(
        '.navbar.megamenu-panel.wrapper[data-toggle="' + drop + '"]'
      );
      $(toDrop).removeClass("active").slideUp(400);
    } else {
      $(".navbar .desktop-hidden.has-dropdown").removeClass("active");
      $(this).addClass("active");
      //roll up anything that's open
      $(".navbar.megamenu-panel.wrapper").slideUp(400);
      //open the one we want
      var drop = $(this).data("to-toggle");
      var toDrop = $(
        '.navbar.megamenu-panel.wrapper[data-toggle="' + drop + '"]'
      );
      $(toDrop).addClass("active").slideDown(400);
    }
  });
});
