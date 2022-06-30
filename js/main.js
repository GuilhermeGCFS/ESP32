/*!
 * Theme: ThePRO
 * Description: Personal Portfolio Wordpress Theme
 * Author: ThemeREC
 * Author URI: https://www.templatemonster.com/authors/themerec/
 * Version: v1.0.0
 * License: TemplateMonster Website Templates Licenses: https://www.templatemonster.com/licenses
 */ !(function (e) {
  "use strict";
  e(function () {
    function t(t, i) {
      e(t).length && i();
    }
    e(window).on("scroll load", function () {
      if (e(".navbar").offset().top > 20) {
        e(".fixed-top").addClass("navbar-scrolled");
        e(".navbar-nav").addClass("navbar-nav-scrolled");
      } else {
        e(".fixed-top").removeClass("navbar-scrolled");
        e(".navbar-nav").removeClass("navbar-nav-scrolled");
      }
    }),
      e(window).on("click", function () {
        if (!e(this).parent().hasClass("dropdown"))
          e(".navbar-collapse").collapse("hide");
      }),
      e(window).on("scroll load", function () {
        if (e(window).scrollTop() > 300) {
          e(".scroll-up").addClass("show");
        } else {
          e(".scroll-up").removeClass("show");
        }
      }),
      e("a.scroll-up").on("click", function () {
        e("html, body").animate({ scrollTop: 0 }, 300);
      }),
      e(document).on(
        "click",
        "[data-lightbox]",
        lity.options(
          "template",
          '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>'
        )
      ),
      t("#about .testimonials-section", function () {
        tns({
          container: "#about .testimonials-section .my-slider",
          items: 2,
          gutter: 30,
          responsive: {
            0: { items: 1, gutter: 0 },
            768: { items: 2, gutter: 30 },
          },
          preventScrollOnTouch: "auto",
          slideBy: "page",
          mouseDrag: !0,
          swipeAngle: !1,
          speed: 400,
          controls: !1,
          autoHeight: !0,
          navPosition: "bottom",
        });
      }),
      t("#portfolio .portfolio-section", function () {
        var t = e("#portfolio .portfolio-section .portfolio-grid"),
          i = e("#portfolio .portfolio-section .filter-control li");
        t.imagesLoaded(function () {
          t.isotope({
            itemSelector: "#portfolio .portfolio-section .single-item",
            masonry: { horizontalOrder: !0 },
          }),
            i.on("click", function () {
              i.removeClass("tab-active"), e(this).addClass("tab-active");
              var a = e(this).data("filter");
              t.isotope({ filter: a, transitionDuration: ".25s" });
            });
        });
      }),
      e(".portfolio-item").magnificPopup({
        mainClass: "mfp-scale-portfolio mfp-portfolio",
        type: "inline",
        removalDelay: 120,
        overflowY: "scroll",
        preloader: !1,
        fixedContentPos: !0,
      });
  }),
    e(window).on("load", function () {
      e(".loader-bar").fadeOut(400), e(".preloader").delay(500).slideUp(700);
    });
})(jQuery);
