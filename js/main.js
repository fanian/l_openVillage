$(document).ready(function() {
    $('.slider').cycle({
        fx: 'fade',
        timeout: 0,
        height: 'auto',
        pause: '',
        next: '.right',
        prev: '.left'
    });

});


         $(document).ready(function() {

             // Grab the current date
             var currentDate = new Date();

             // Set some date in the future

             var futureDate = new Date(2014,05,29,00,00,00);

             // Calculate the difference in seconds between the future and current date
             var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

             // Instantiate a coutdown FlipClock
             var clock = $('.clock').FlipClock(diff, {
                 clockFace: 'DailyCounter',
                 language: 'ru',
                 countdown: true
             });
         });

