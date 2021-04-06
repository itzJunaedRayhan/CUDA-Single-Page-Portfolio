$(document).ready(function(){
    //  STICKY Navigation
    $('.js--services-section').waypoint(function(direction){
        if(direction == 'down'){
            $("nav").addClass("sticky");
        }else{
            $('nav').removeClass("sticky")
        }
    });


    // Mixitup (Portfolio Section)
    var mixer = mixitup('.portfolio-wrapper');



    /**
* Smooth Scroll For IE / EDGE / SAFARI
**/
    $('a').on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top}, 800,function(){
                window.location.hash = hash;
            });
        }
    })
})




function openNav(){
    document.getElementById('myNav').style.width = "100%";
}
function closeNav(){
    document.getElementById('myNav').style.width = "0%";
}