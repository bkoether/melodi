Drupal.behaviors.cleanDD = function (context) {
  $('.ctools-jump-menu-select option', context).each(function () {
    var str = $(this).text();
    $(this).text(str.replace(/\&amp;/gi, "&"));
  });
};