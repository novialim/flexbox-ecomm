 $(document).ready(function() {


     $(".social-link").mouseenter(function() {
         mousehoverslink();
     });

     $('.social-icons').mouseleave(function() {
        mouseleavesicon();
     });



 });

 function mousehoverslink() {

    $('.social-icons').removeClass("hidden");
    $('.social-icons').addClass("show");
    $('.social-link').addClass("hidden");
}

function mouseleavesicon(){
    $('.social-icons').removeClass("show");
    $('.social-icons').addClass("hidden");
    $('.social-link').addClass("show");
    $('.social-link').removeClass("hidden");
}