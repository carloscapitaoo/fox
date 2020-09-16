$(function () {
    $(".icon-plus").on('click', function () {
        $('#pills-contact').tab('show');
        $('#pills-contact').addClass('active');
        $('#pills-contact-tab').addClass('active');
        $('#pills-profile-tab').removeClass('active');
        $('#pills-profile').removeClass('active');
    })
    $("#sortable").sortable();
    $("#sortable").disableSelection();

});