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

var loadFunctions = function() {
  highlightImagesOnHover();
};

$(document).ready(function() {
  loadFunctions();
});
