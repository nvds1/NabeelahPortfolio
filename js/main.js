var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); 
}

// page scroll

$("#showreel").click(function() {
    $('html, body').animate({
        scrollTop: $("#goshowreel").offset().top
    }, 500);
    $(".navbar").find("a").removeClass("active");
    $(this).addClass("active");

}); 



$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#goabout").offset().top
    }, 300);

    $(".navbar").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#grid").offset().top
    }, 500);

    $(".navbar").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#gocontact").offset().top
    }, 500);

    $(".navbar").find("a").removeClass("active");
    $(this).addClass("active");


});



// back to top button

jQuery(document).ready(function() {
                var offset = 220;
                var duration = 500;
                jQuery(window).scroll(function() {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.back-to-top').fadeIn(duration);
                    } else {
                        jQuery('.back-to-top').fadeOut(duration);
                    }
                });
                
                jQuery('.back-to-top').click(function(event) {
                    event.preventDefault();
                    jQuery('html, body').animate({scrollTop: 0}, duration);
                    return false;
                })
            });