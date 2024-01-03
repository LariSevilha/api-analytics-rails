//= require rails_admin/custom/ckeditor.js
//= require rails_admin/custom/classic_editor.js
//= require rails_admin/custom/masks.js


// Access link icons
$(document).on('rails_admin.dom_ready', function () {
  var selectedIcon = $('#access_icon:checked').val();
  $('.preview-icon').html(selectedIcon);
  $('.custom-select').on('change', function () {
    var selectedOption = $(this).find('option:selected');
    window.selectedOption = selectedOption
    var iconHTML = selectedOption[0].dataset.icon;
    $('.preview-icon').html(iconHTML);
  });
});

var selectedIcon = $('#access_icon:checked').val();