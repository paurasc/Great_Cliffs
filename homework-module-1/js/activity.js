$(document).ready(function() {
    $('td').click(function() {
        if (!$(this).hasClass('not-available') && !$(this).hasClass('header')) {
            var activityName = $(this).text();
            var activityIndex = $(this).index();
            var siteName = $('th').eq(activityIndex).text();

            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $('#activityList li:contains(' + activityName + ')').remove();
            } else {
                $(this).addClass('selected');
                $('#activityList').append('<li>' + activityName + ' - ' + siteName + '</li>');
            }

            if ($('#activityList li').length > 0) {
                $('#activityDisplayBox').show();
            } else {
                $('#activityDisplayBox').hide();
            }
        }
    });

    $('td').hover(function() {
        if (!$(this).hasClass('not-available') && !$(this).hasClass('header')) {
            $(this).css('cursor', 'pointer');
        }
    });
});
