Drupal.behaviors.cleanDD = function (context) {
  $('.ctools-jump-menu-select option', context).each(function () {
    var str = $(this).text();
    $(this).text(str.replace(/\&amp;/gi, "&"));
  });
};

Drupal.behaviors.colorTable = function (context) {
  $('.view-master-list table', context).each(function () {
    var label = $(this).find('caption').text();
    label = label.toLowerCase();
    label = label.replace(/\&/gi, "");
    label = label.replace(/ /gi, "-");
    $(this).addClass(label);
  });
};