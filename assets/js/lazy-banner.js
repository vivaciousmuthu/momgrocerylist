// assets/js/lazy-banner.js
// Lazy load .banner background image

document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.banner');
  if (!banner) return;
  var bgUrl = banner.getAttribute('data-bg');
  if ('IntersectionObserver' in window && bgUrl) {
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          banner.style.background = 'url("' + bgUrl + '") no-repeat center center/cover';
          obs.unobserve(banner);
        }
      });
    });
    observer.observe(banner);
  } else if (bgUrl) {
    // Fallback for browsers without IntersectionObserver
    banner.style.background = 'url("' + bgUrl + '") no-repeat center center/cover';
  }
});
