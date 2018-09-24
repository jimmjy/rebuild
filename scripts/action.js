$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(index == 1) {
                $('.page-one-title-animate').addClass('animate-page-title');
                $('.page-one-body-animate').addClass('animate-two');
            } else if(index == 2) {
                $('.page-two-title-animate').addClass('animate-two-down');
                $('.page-two-body-animate').addClass('animate-two');
            } else if(index == 3) {
                $('.page-three-title-animation').addClass('animate-page-title-no-delay');
                $('.page-three-title-body-animate').addClass('animate-two-delay');
                $('.page-three-title-footer-animate').addClass('animate-fadein-delay');
            } else if(index == 4) {
                $('.page-four-title-animate').addClass('animate-two-down');
                $('.page-four-title-body-animation').addClass('animate-two');
                $('.page-four-up-animation').addClass('animate-up');
            }

        },
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);

            if(index == 1) {
                $('.page-one-title-animate').removeClass('animate-page-title');
                $('.page-one-body-animate').removeClass('animate-two');
            } else if(index == 2) {
                $('.page-two-title-animate').removeClass('animate-two-down');
                $('.page-two-body-animate').removeClass('animate-two');
            } else if(index == 3) {
                $('.page-three-title-animation').removeClass('animate-page-title-no-delay');
                $('.page-three-title-body-animate').removeClass('animate-two-delay');
                $('.page-three-title-footer-animate').removeClass('animate-fadein-delay');
            } else if(index == 4) {
                $('.page-four-title-animate').removeClass('animate-two-down');
                $('.page-four-title-body-animation').removeClass('animate-two');
                $('.page-four-up-animation').removeClass('animate-up');
            }
            
        }
    });

    $('#down--arrow').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

});


screen.orientation.lock("natural");
    







