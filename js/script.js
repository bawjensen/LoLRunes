$(function() {
    $('.collapsible').siblings(':has(h1)').find('h1').click(function() {
        $(this).parent().siblings('.collapsible').slideToggle();
    });
});