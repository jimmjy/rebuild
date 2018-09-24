$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        licenseKey: 'F94CB907 - 594945E2 - 88192991 - 94E1148A'
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});