$(document).ready(function(){
/*Login*/
    var ifLogged = false
    var clicked = 0;
    let profIcon = $('#profile');
    if (!ifLogged) showSubmenu();

    function showSubmenu() {
        function stopDefAction(evt) {
            evt.preventDefault();
        }
        profIcon.on('click', stopDefAction, false);

        profIcon.on('click',function () {
            if (clicked == 0) {
                $('#sub_menu').slideDown(500);
                clicked = 1;

            } else {
                $('#sub_menu').slideUp(500);
                clicked = 0;
            }
         });

    }
    // 18+ pop up
    // delete localStorage.popped;
    if (!localStorage.getItem('popped', 'yes')) {
        console.log('zzzz')
        $('#popup18').css('display', 'flex')
        $('#yes').on('click', function () {
            $('#popup18').fadeOut(300);
            localStorage.setItem('popped', 'yes')
        });
    }


});