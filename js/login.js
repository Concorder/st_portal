$(document).ready(function(){

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


})