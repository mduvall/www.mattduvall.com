var highlightImagesOnHover = function() {
  $("img").bind({
    "mouseover": function() { 
      $(this).animate({
        opacity: 1.0
      }, 250, function() { });
    },
    "mouseout": function() { 
      $(this).animate({
        opacity: 0.6
      }, 250, function() { });
    }
  }); 
};

var highlightBlogOnHover = function() {
  $("#blog-link").bind({
    "mouseover": function() {
      $(this).animate({
        opacity: 1.0,
      }, 250, function() {});
      $(this).css("text-decoration", "underline");
    },
    "mouseout": function() {
      $(this).animate({
        opacity: 0.8,
      }, 250, function() {});
      $(this).css("text-decoration", "none");
    }
  });
}

var loadFunctions = function() {
  highlightImagesOnHover();
  highlightBlogOnHover();
};

$(document).ready(function() {
  loadFunctions();
});
