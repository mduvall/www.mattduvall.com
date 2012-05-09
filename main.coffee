highlightImagesOnHover = ->
  $("img").bind {
    "mouseover": ->
      $(@).animate { opacity: 1.0 }, 250, ->
    "mouseout": ->
      $(@).animate { opacity: 0.6 }, 250, ->

loadFunctions = -> highlightImagesOnHover()

$(document).ready ->
  loadFunctions()
