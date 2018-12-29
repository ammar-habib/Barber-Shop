$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});
$("#showLoginFrom").click(function(){
 $('.navbar-from').toggle();
 $('.top-navbar').toggleClass('top-navbar-bg').siblings().removeClass('top-navbar-bg');
});

$("#showSearchDiv").click(function(){
 $('.top-nav-search').toggle();
});

$('.select-checks>.btn').on('click', function () {

    // toggle checkbox
    var $chk = $(this).find('[type=checkbox]');
    $chk.attr('checked',!$chk.attr('checked'));

    // return false;
  });
$("#ShowPaymentDiv").on("show.bs.collapse", function(){
  $("#edit-advert-btn-div,#advert-upload-div,#advert-share-fvrt-ul").hide();
  $("#advert-perview-div,#advert-cost-div").show();
});
$("#ShowPaymentDiv").on("hide.bs.collapse", function(){
  $("#edit-advert-btn-div,#advert-upload-div,#advert-share-fvrt-ul").show();
  $("#advert-perview-div,#advert-cost-div").hide();
});
$("#ShowapplyDiv").on("show.bs.collapse", function(){
  $("[data-target='#ShowapplyDiv']").hide();
});
$("#showAdvertPostSuccessModal").click(function(){
  $("#advertPostSuccessModal").modal("show");
  $("#advertPerviewModal").modal("hide");
});

$("#ShowadvertUpgradeModal").click(function(){
  $("#advertUpgradeModal").modal("show");
  $("#advertPostSuccessModal").modal("hide");
});

var current_step = 1;
var max_number_of_steps = 9;
$('#advert-form-steps').click( function() {  
  var next_step = current_step + 1;
  $('#step'+next_step).slideDown();
  
  current_step++; 
  if (current_step == max_number_of_steps) {
    $('#advert-form-steps').hide();
    $("#advert-perview-btn-div").show();
  }
});

$('#lightgallery').lightGallery();















