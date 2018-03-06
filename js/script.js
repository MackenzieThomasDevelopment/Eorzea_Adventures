$(function(){
// open the modal
$('.launch-modal').on('click', function(e){
e.preventDefault();
$( '#' + $(this).data('modal-id') ).modal();
    
}); // reload the modal contents when it is closed
$("#modal-video").on("hidden.bs.modal", function () {
var url = $('#video-frame').attr('src');
$('#video-frame').attr('src', '');
$('#video-frame').attr('src', url);
});
});