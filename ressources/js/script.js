$(document).ready(function(){

  $(".thomas").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  })








  /* $("h1").click(function(){
    $(this).css("background-color", "#ff0000");
  })

  $("h2").click(function(){
    $(this).css("border", "1px solid red");
  }) */


});
