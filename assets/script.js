(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-primary-nav]');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
})();
