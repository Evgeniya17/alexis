function anchor(){
    window.location.href="/#portfolio";
}
function linkClick(){
  window.location.href="index.html";
}
function menuDrop(){
  $(".nav-link").toggle();  
}
$(document).ready(function(){
  $("#video").click(function(){
  $(".video-title").toggle();
  $(".play-btn").toggle();
  $(".btn-title").toggle();
  });
});
$(document).ready(function(){
    $(".project").hover(function(){
        $(this).css("filter", "brightness(70%)");
        $(this).css("box-shadow", "0 10px 10px rgba(0,0,0,0.22)");
        $(this).find(".project-title").show();
        $(this).find(".project-link-btn").show();
      }, function(){
        $(this).css("filter", "brightness(100%)");
        $(this).css("box-shadow", "0 0 0 #fff");
        $(".project-title").hide();
        $(".project-link-btn").hide();
    });
  });
$(document).ready(function(){
  $("#member-1").click(function(){
  $(".about-member-1").show();
  $(".about-member-2").hide();
  $(".about-member-3").hide();
  $(".about-member-4").hide();
  });
});
$(document).ready(function(){
  $("#member-2").click(function(){
    if($(window).width() < 828) {
      $(".about-member-2").css("display", "block");
    } else {
      $(".about-member-2").css("display", "inline-flex");
    }
  $(".about-member-2").show();
  $(".about-member-1").hide();
  $(".about-member-3").hide();
  $(".about-member-4").hide();
  });
});
$(document).ready(function(){
  $("#member-3").click(function(){
    if($(window).width() < 480) {
      $(".about-member-3").css("display", "block");
    }else {
      $(".about-member-3").css("display", "inline-flex");
    }
  $(".about-member-3").show();
  $(".about-member-1").hide();
  $(".about-member-2").hide();
  $(".about-member-4").hide();
  });
});
$(document).ready(function(){
  $("#member-4").click(function(){
    if($(window).width() < 828) {
      $(".about-member-4").css("display", "block");
    } else {
      $(".about-member-4").css("display", "inline-flex");
    }
  $(".about-member-4").show();
  $(".about-member-1").hide();
  $(".about-member-2").hide();
  $(".about-member-3").hide();
  });
});
$(document).ready(function(){
  $(".article-2").click(function(){
  $(".article-img-2").show();
  $(".article-link-2").css("color","black");
  $(".article-img-1").hide();
  $(".article-link-1").css("color","#FC5F45");
  $(".article-img-3").hide();
  $(".article-link-3").css("color","#B27CF5");
  $(".article-img-4").hide();
  $(".article-link-4").css("color","#FEB960");
    if($(window).width() > 828) {
      $(".article-1").insertBefore(".article-2") ;
      $(".article-3").insertBefore(".article-2") ;
      $(".article-4").insertBefore(".article-2") ;
  }});
});
$(document).ready(function(){
  $(".article-3").click(function(){
  $(".article-img-3").show();
  $(".article-link-3").css("color","black");
  $(".article-img-1").hide();
  $(".article-link-1").css("color","#FC5F45");
  $(".article-img-2").hide();
  $(".article-link-2").css("color","#38C695");
  $(".article-img-4").hide();
  $(".article-link-4").css("color","#FEB960");
    if($(window).width() > 828) {
       $(".article-2").insertBefore(".article-1") ;
       $(".article-4").insertBefore(".article-2") ;
  }});
});
$(document).ready(function(){
  $(".article-4").click(function(){
  $(".article-img-4").show();
  $(".article-link-4").css("color","black");
  $(".article-img-1").hide();
  $(".article-link-1").css("color","#FC5F45");
  $(".article-img-2").hide();
  $(".article-link-2").css("color","#38C695");
  $(".article-img-3").hide();
  $(".article-link-3").css("color","##B27CF5");
    if($(window).width() > 828) {
      $(".article-1").insertBefore(".article-4") ;
      $(".article-2").insertBefore(".article-4") ;
      $(".article-3").insertBefore(".article-4") ;
  }});
});
$(document).ready(function(){
  $(".article-1").click(function(){
  $(".article-img-1").show();
  $(".article-link-1").css("color","black");
  $(".article-img-2").hide();
  $(".article-link-2").css("color","#38C695");
  $(".article-img-3").hide();
  $(".article-link-3").css("color","#B27CF5");
  $(".article-img-4").hide();
  $(".article-link-4").css("color","#FEB960");
     if($(window).width() > 828) {
      $(".article-3").insertBefore(".article-2") ;
      $(".article-4").insertBefore(".article-3") ;
  }});
});
function slideOne(){
  $(".slide-2").hide();
  $(".slide-3").hide();
  $(".slide-4").hide();
  $(".slide-5").hide();
  $(".slide-6").hide();
  $(".slide-1").show();
  $(".slide-content").css("border-bottom", "3px solid #FC5F45");
  $(".user-job").css("color", "#FC5F45");
};
function slideTwo(){
  $(".slide-1").hide();
  $(".slide-3").hide();
  $(".slide-4").hide();
  $(".slide-5").hide();
  $(".slide-6").hide();
  $(".slide-2").show();
  $(".slide-content").css("border-bottom", "3px solid #38C695");
  $(".user-job").css("color", "#38C695")
};
function slideThree(){
  $(".slide-1").hide();
  $(".slide-2").hide();
  $(".slide-4").hide();
  $(".slide-5").hide();
  $(".slide-6").hide();
  $(".slide-3").show();
  $(".slide-content").css("border-bottom", "3px solid #B27CF5");
  $(".user-job").css("color", "#B27CF5")
};
function slideFour(){
  $(".slide-1").hide();
  $(".slide-2").hide();
  $(".slide-3").hide();
  $(".slide-5").hide();
  $(".slide-6").hide();
  $(".slide-4").show();
  $(".slide-content").css("border-bottom", "3px solid #FEB960");
  $(".user-job").css("color", "#FEB960");
};
function slideFive(){
  $(".slide-1").hide();
  $(".slide-2").hide();
  $(".slide-3").hide();
  $(".slide-4").hide();
  $(".slide-6").hide();
  $(".slide-5").show();
  $(".slide-content").css("border-bottom", "3px solid #38C695");
  $(".user-job").css("color", "#38C695");
};
function slideSix(){
  $(".slide-1").hide();
  $(".slide-2").hide();
  $(".slide-3").hide();
  $(".slide-4").hide();
  $(".slide-5").hide();
  $(".slide-6").show();
  $(".slide-content").css("border-bottom", "3px solid #B27CF5");
  $(".user-job").css("color", "#B27CF5");
};