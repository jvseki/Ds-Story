(function () {
  var page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll('[data-nav="' + page + '"]').forEach(function (el) {
    if (el.classList.contains('nav-link')) {
      el.classList.add('nav-link--active');
    }
    if (el.classList.contains('mobile-tabs__item')) {
      el.classList.add('mobile-tabs__item--active');
    }
  });
})();
