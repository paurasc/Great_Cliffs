$(document).ready(function() {
    // Make the cells selectable
    $('td').click(function() {
        if (!$(this).hasClass('not-available') && !$(this).hasClass('header')) {
            $(this).toggleClass('selected');
        }
    });

    // Add a cursor pointer to selectable cells
    $('td').hover(function() {
        if (!$(this).hasClass('not-available') && !$(this).hasClass('header')) {
            $(this).css('cursor', 'pointer');
        }
    });
});
