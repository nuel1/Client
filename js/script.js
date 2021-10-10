!function () {
  "use strict";
  let f, p;
  f = (function () {
    return function (a) {
      console.log(a);
      if (a[0].isIntersecting) {
        document.documentElement.style.setProperty("--b-blur", "0");
      }
    };
  })();

  p = function() {
    return {
      root: null,
      threshold: 0.5,
      rootMargin: '-200px'
    }
  }();
  const observer = new IntersectionObserver(f, p);
  const screen = document.querySelector('.screen--cover')
  observer.observe(screen);

}();
