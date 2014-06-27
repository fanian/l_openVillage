$(document).ready(function() {
    $('.slider').cycle({
        fx: 'fade',
        timeout: 0,
        height: 'auto',
        pause: '',
       //pager: '.sl1 .main-pager',
       // cleartypeNoBg: true,
        next: '.right',
        prev: '.left'
    });

//
//    $('.sl4 .slider').after('<div class="main-pager"></div>').cycle({
//        fx: 'fade',
//        timeout: 0,
//        height: 'auto',
//        pause: '',
//        pager: '.sl4 .main-pager',
//        cleartypeNoBg: true,
//        next: '.sl4 .right',
//        prev: '.sl4 .left'
//    });
})
