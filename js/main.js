$(document).ready(function(){

  //set intro height
  var w = $(window).width();
  if ( w >= 550 ){
    var h = w/7*3
  }
  else{
    var h = w/7*4.5
  }

  if ( w >= 768 ){
    var h2 = w/7*2.3
  }
  else if ( w >= 550 ){
    var h2 = w/7*3.5
  }
  else{
    var h2 = w/7*4.5
  }

    $("#intro").css("height", h);
  $(".intro-img-con").css("height", h);

  $("#about-intro").css("height", h2);
  $("#about-intro-img-con").css("height", h2);

  //menubtn functions
  $("#menubtn").on('click', function(e){
    e.preventDefault();
    $("#menublack").fadeIn("fast");

  });
  $("#menublack").on('click', function(e){
    e.preventDefault();
    $("#menublack").fadeOut("fast");

  });


  $.each([ 1, 2, 3, 4, 5, 6, 7], function( index, i ){	
    var name = "#list" + i;
    var name2 = "#list"+i+">.list_box_content";
    var name3 = "#list"+i+">.list_box_img";

    $( name  ).hover(function(){
      $( name2 ).css("opacity",  1);
      $( name3 ).addClass("vfilter");
      $( name3).removeClass("list_box_img_w");
      $( name3 ).addClass("list_box_img_n");
    }, function(){
      $( name2 ).css("opacity",  0);
      $( name3 ).removeClass("vfilter");
      $( name3 ).addClass("list_box_img_w");
      $( name3 ).removeClass("list_box_img_n");
    });

  });


});


$(window).resize(function(){
  var w = $(window).width();
  if ( w >= 550 ){
    var h = w/7*3
  }
  else{
    var h = w/7*4.5
  }

  if ( w >= 768 ){
    var h2 = w/7*2.3
  }
  else if ( w >= 550 ){
    var h2 = w/7*3.5
  }
  else{
    var h2 = w/7*4.5
  }

    $("#intro").css("height", h);
  $(".intro-img-con").css("height", h);
  $("#about-intro").css("height", h2);
  $("#about-intro-img-con").css("height", h2);
});