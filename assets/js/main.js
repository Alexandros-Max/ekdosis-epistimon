(function ($) {
    "use strict";

    /*== Loader ==*/
    $(window).on("load", function () {
        $("#mn-overlay").fadeOut("slow");
    });

    /*== Sidebar ==*/
    $('.mn-toggle-sidebar').on("click", function () {
        $('.mn-sidebar-overlay').fadeIn();;
        $('.mn-sidebar').toggleClass("sidebar-hide");
        $('header').toggleClass("sb-hide");
        $('.mn-main-content').toggleClass("sb-hide");
        $('footer').toggleClass("sb-hide");
        $('.mn-toggle-sidebar').toggleClass("active-toggle");

    });
    $(".mn-sidebar-overlay, .side-close").on('click', function (e) {
        $('.mn-sidebar-overlay').fadeOut();
        $('.mn-sidebar').removeClass("sidebar-hide");
        $('header').removeClass("sb-hide");
        $('.mn-main-content').removeClass("sb-hide");
        $('footer').removeClass("sb-hide");
        $('.mn-toggle-sidebar').removeClass("active-toggle");
    });
    $('.mn-drop-toggle').on("click", function () {
        if ($(this).hasClass("active-nav")) {
            $('.mn-drop-toggle').removeClass("active-nav");
            $('.mn-drop-toggle').siblings('.mn-sb-drop').slideUp();
        } else {
            $('.mn-drop-toggle').removeClass("active-nav");
            $('.mn-drop-toggle').siblings('.mn-sb-drop').slideUp();
            $(this).addClass("active-nav");
            $(this).siblings('.mn-sb-drop').slideDown();
        }
    });
    $('.sb-drop-item .btn-back').on("click", function () {
        $(this).parent().siblings('.mn-drop-toggle').removeClass("active-nav");
        $(this).parent().slideUp();
    });

    /*  Mobile menu sidebar JS  */
    $(".mn-toggle-menu").on("click", function () {
        $(".mn-mobile-menu-overlay").fadeIn();
        $(".mn-mobile-menu").addClass("mn-menu-open");
    });

    $(".mn-mobile-menu-overlay, .mn-close-menu").on("click", function () {
        $(".mn-mobile-menu-overlay").fadeOut();
        $(".mn-mobile-menu").removeClass("mn-menu-open");
    });
    function ResponsiveMobilemsMenu() {
        var $msNav = $(".mn-menu-content, .overlay-menu"),
            $msNavSubMenu = $msNav.find(".sub-menu");
        $msNavSubMenu.siblings('a').prepend('<span class="menu-toggle"></span>');

        $msNav.on("click", "li a, .menu-toggle", function (e) {
            var $this = $(this);
            if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
                e.preventDefault();
                if ($this.parent().hasClass("btn-back")) {
                    $this.parent().parent().parent("li").removeClass("active");
                    $this.parent().parent().slideUp();
                } else if ($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this
                        .closest("li")
                        .siblings("li")
                        .removeClass("active")
                        .find("li")
                        .removeClass("active");
                    $this.closest("li").siblings("li").find("ul:visible").slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }

    ResponsiveMobilemsMenu();


    /*== Main Slider ==*/
    $('.mn-hero-slider').owlCarousel({
        margin: 0,
        loop: true,
        dots: true,
        nav: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayHoverPause:true,
        items: 1,
        responsiveClass: true,
    });

    /*== Cart sidebar JS ==*/
    $('.mn-cart-toggle').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-cart-overlay").fadeIn();
        $('.mn-side-cart').addClass("mn-open-cart");
    });
    $('.mn-side-cart-overlay, .mn-cart-close').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-cart-overlay").fadeOut();
        $('.mn-side-cart').removeClass("mn-open-cart");
    });
    $(".cart-remove-item").on("click", function (e) {
        $(this).parents(".cart-sidebar-list").remove();
        var cart_product_count = $(".cart-sidebar-list").length;
        if (cart_product_count == 0) {
            $('.mn-cart-pro-items').html('<p class="mn-cart-msg">Your Cart is empty!</p>');
        }
    });

    /*== Remove Product (Cart page) ==*/
    $('.mn-cart-pro-remove a').on("click", function () {
        $(this).parents(".mn-cart-product").remove();
        var cart_page_count = $(".mn-cart-product").length;
        if (cart_page_count == 0) {
            $('.cart_list').html('<p class="mn-cart-page-msg">Your Cart is empty!</p>');
        }
    });

    /*== Wishlist sidebar JS ==*/
    $('.mn-wishlist-toggle').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-wishlist-overlay").fadeIn();
        $('.mn-side-wishlist').addClass("mn-open-wishlist");
    });
    $('.mn-side-wishlist-overlay, .mn-wishlist-close').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-wishlist-overlay").fadeOut();
        $('.mn-side-wishlist').removeClass("mn-open-wishlist");
    });
    $(".wishlist-remove-item").on("click", function (e) {
        $(this).parents(".wishlist-sidebar-list").remove();
        var wishlist_product_count = $(".wishlist-sidebar-list").length;
        if (wishlist_product_count == 0) {
            $('.mn-wishlist-pro-items').html('<p class="mn-wishlist-msg">Your Wishlist is empty!</p>');
        }
    });

    /*  Wishlist notify js  */
    $('.mn-wishlist').on("click", function () {
        $('.mn-wish-notify').remove();
        $('.mn-compare-notify').remove();
        $('.mn-cart-notify').remove();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $('footer').after('<div class="mn-wish-notify"><p class="wish-note remove">Remove product on <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
        } else {
            $(this).addClass("active");
            $('footer').after('<div class="mn-wish-notify"><p class="wish-note add">Add product in <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
        }

        setTimeout(function () {
            $('.mn-wish-notify').fadeOut();
        }, 2000);
    });

    $('.mn-remove-wish').on("click", function () {
        $(this).parents(".pro-gl-content").remove();

        var wishlist_page_count = $(".pro-gl-content").length;
        if (wishlist_page_count == 0) {
            $('.mn-vendor-card-table').html('<p class="mn-wishlist-msg">Your Wishlist is empty!</p>');
        }
    });

    /*== Add to cart button notify js ==*/
    $('.mn-add-cart').on("click", function () {
        $('.mn-wish-notify').remove();
        $('.mn-compare-notify').remove();
        $('.mn-cart-notify').remove();
        var iscartlist = $(this).hasClass("active");
        if (iscartlist) {
            $(this).removeClass("active");
            $('footer').after('<div class="mn-cart-notify"><p class="compare-note remove">Remove product in <a href="cart.html"> Cart</a> Successfully!</p></div>');
        } else {
            $(this).addClass("active");
            $('footer').after('<div class="mn-cart-notify"><p class="compare-note add">Add product in <a href="cart.html"> Cart</a> Successfully!</p></div>');
        }
        setTimeout(function () {
            $('.mn-cart-notify').fadeOut();
        }, 2000);
    });

    /*== Compare notify js ==*/
    $('.mn-compare').on("click", function () {
        $('.mn-wish-notify').remove();
        $('.mn-compare-notify').remove();
        $('.mn-cart-notify').remove();
        var isCompare = $(this).hasClass("active");
        if (isCompare) {
            $(this).removeClass("active");
            $('footer').after('<div class="mn-compare-notify"><p class="compare-note remove">Remove product on <a href="compare.html"> Compare list</a> Successfully!</p></div>');
        } else {
            $(this).addClass("active");
            $('footer').after('<div class="mn-compare-notify"><p class="compare-note add">Add product in <a href="compare.html"> Compare list</a> Successfully!</p></div>');
        }

        setTimeout(function () {
            $('.mn-compare-notify').fadeOut();
        }, 2000);
    });

    /*== Remove Product (Compare page) ==*/
    $('.remove-compare-product').on("click", function () {
        $(this).parents(".product-col").remove();
        var compare_page_count = $(".product-col").length;
        if (compare_page_count == 0) {
            $(this).parents(".title-col").remove();
            $('.mn-compare-box').html('<p class="mn-compare-page-msg">Your Wishlist is empty!</p>');
        }
    });

    /*== Search sidebar JS ==*/
    $('.mn-search-toggle').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-search-overlay").fadeIn();
        $('.mn-side-search').addClass("mn-open-search");
    });
    $('.mn-side-search-overlay, .mn-search-close').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-search-overlay").fadeOut();
        $('.mn-side-search').removeClass("mn-open-search");
    });
    $(".search-remove-item").on("click", function (e) {
        $(this).parents(".search-sidebar-list").remove();
        var search_product_count = $(".search-sidebar-list").length;
        if (search_product_count == 0) {
            $('.mn-search-pro-items').html('<p class="mn-search-msg">Please try to search other products!</p>');
        }
    });

    
    /*== Account sidebar JS ==*/
    $('.mn-account-toggle').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-account-overlay").fadeIn();
        $('.mn-side-account').addClass("mn-open-account");
    });
    $('.mn-side-account-overlay, .mn-account-close').on("click", function (e) {
        e.preventDefault();
        $(".mn-side-account-overlay").fadeOut();
        $('.mn-side-account').removeClass("mn-open-account");
    });

    

    /*== Filter Icon OnClick Open filter Sidebar on shop page ==*/
    $(".filter-toggle-icon").on("click", function () {
        $(".filter-sidebar-overlay").fadeIn();
        $(".mn-filter-sidebar").addClass("filter-sidebar-open");
    });

    $(".filter-close, .filter-sidebar-overlay").on("click", function () {
        $(".mn-filter-sidebar").removeClass("filter-sidebar-open");
        $(".filter-sidebar-overlay").fadeOut();
    });

    /*== Product Image Zoom ==*/

    
    function isTouchEnabled() { return !!document.createTouch; }
    if ($('.zoom-image-hover').length && (isTouchEnabled) && ($(window).outerWidth() > 1199)) {
        $('.zoom-image-hover').zoom();
    }

    /*== single product Slider ==*/
    $('.single-product-cover').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.single-nav-thumb',
        adaptiveHeight: true
    });

    $('.single-nav-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.single-product-cover',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          }
        ]
    });

    $(window).on('load resize', function () {
        $('.single-product-cover').slick('setPosition');
    });

    /*== Add More Product slider section (Single Product Page) ==*/
    $('.mn-add-more-slider').owlCarousel({
        margin: 24,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 1500,
        autoplay: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });

    /*== Price Range slider ( Shop page ) == */
    const slider = document.getElementById('mn-sliderPrice');
    if (slider) {
        const rangeMin = parseInt(slider.dataset.min);
        const rangeMax = parseInt(slider.dataset.max);
        const step = parseInt(slider.dataset.step);
        const filterInputs = document.querySelectorAll('input.filter__input');

        noUiSlider.create(slider, {
            start: [rangeMin, rangeMax],
            connect: true,
            step: step,
            range: {
                'min': rangeMin,
                'max': rangeMax
            },

            // make numbers whole
            format: {
                to: value => value,
                from: value => value
            }
        });

        // bind inputs with noUiSlider 
        slider.noUiSlider.on('update', (values, handle) => {
            filterInputs[handle].value = values[handle];
        });

        filterInputs.forEach((input, indexInput) => {
            input.addEventListener('change', () => {
                slider.noUiSlider.setHandle(indexInput, input.value);
            })
        });
    }

    /*== Category section ==*/
    $(".mn-cat").owlCarousel({
        margin: 24,
        loop: false,
        dots: false,
        nav: false,
        smartSpeed: 500,
        autoplayTimeout: 3000,
        items: 3,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 12,
            },
            421: {
                items: 1.5,
                margin: 12,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 4,
            },
            1600: {
                items: 5,
            }
        },
    });

    /*== Product section ==*/
    $(".mn-product").owlCarousel({
        margin: 24,
        loop: false,
        dots: true,
        nav: false,
        smartSpeed: 500,
        autoplayTimeout: 3000,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            461: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 4,
            },
            1500: {
                items: 5,
            },
        },
    });

    /*== Product section ==*/
    $(".mn-related").owlCarousel({
        margin: 24,
        loop: false,
        dots: true,
        nav: false,
        smartSpeed: 500,
        autoplayTimeout: 3000,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 12,
            },
            461: {
                items: 1.5,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            },
            1600: {
                items: 5,
            },
        },
    });

    /*== Quick view ==*/
    $(".single-slide-quickview").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: false,
        pagination: false,
        autoplay: true,
        items: 1,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });

    /*== Tooltips ==*/
    $(".mn-modern-banner").owlCarousel({
        loop: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 10000,
        margin: 24,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                scroll: 1,
            },
        },
    });

    /*== Blog section ==*/
    $(".mn-blog-carousel").owlCarousel({
        margin: 24,
        loop: false,
        dots: true,
        nav: false,
        smartSpeed: 500,
        autoplayTimeout: 3000,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            461: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 4,
            },
        },
    });

    /*== Testimonial Slider ==*/
    $('.mn-testimonial-slider').owlCarousel({
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1367: {
                items: 1
            }
        }
    });

    /*== Team (About Page) ==*/
    $('.mn-team').owlCarousel({
        margin: 30,
        loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            461: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1400: {
                items: 5
            }
        }
    });

    /*== Cart page Apply Coupan Toggle ==*/
    $(document).ready(function () {
        $(".mn-cart-coupan").on("click", function () {
            $('.mn-cart-coupan-content').slideToggle('slow');
        });
        $(".mn-checkout-coupan").on("click", function () {
            $('.mn-checkout-coupan-content').slideToggle('slow');
        });
    });

    /*== Cart Page Qty Plus Minus Button ==*/
    var CartQtyPlusMinus = $(".cart-qty-plus-minus");
    CartQtyPlusMinus.append('<div class="mn_cart_qtybtn"><div class="inc mn_qtybtn">+</div><div class="dec mn_qtybtn">-</div></div>');
    $(".cart-qty-plus-minus .mn_cart_qtybtn .mn_qtybtn").on("click", function () {
        var $cartqtybutton = $(this);
        var CartQtyoldValue = $cartqtybutton.parent().parent().find("input").val();
        if ($cartqtybutton.text() === "+") {
            var CartQtynewVal = parseFloat(CartQtyoldValue) + 1;
        } else {

            if (CartQtyoldValue > 1) {
                var CartQtynewVal = parseFloat(CartQtyoldValue) - 1;
            } else {
                CartQtynewVal = 1;
            }
        }
        $cartqtybutton.parent().parent().find("input").val(CartQtynewVal);
    });

    /*== Accordians toggle (faq page) ==*/
    $('.mn-accordion-header').on("click", function () {
        $(this).parent().siblings().children(".mn-accordion-body").slideUp();
        $(this).parent().find(".mn-accordion-body").slideToggle();
    });

    /*== Instagram slider & Category slider & Tooltips ==*/
    $(function () {
        $('.insta-auto, .cat-auto').infiniteslide({
            direction: 'left',
            speed: 50,
            clone: 10
        });

        $('[data-toggle="tooltip"]').tooltip();
    });

    /*== Tooltips ==*/
    $('[data-tooltip]').on('mouseenter', function () {
        const $el = $(this);
        const title = $el.attr('title');

        if (title) {
            // Remove native tooltip temporarily
            $el.data('tooltip-title', title).removeAttr('title');

            // Create tooltip and append
            const $tooltip = $('<span class="custom-tooltip"></span>').text(title);
            $el.append($tooltip);
            $tooltip.fadeIn(200);
        }
    });

    $('[data-tooltip]').on('mouseleave', function () {
        const $el = $(this);
        const title = $el.data('tooltip-title');

        // Restore title attribute
        if (title) $el.attr('title', title);

        // Remove tooltip
        $el.find('.custom-tooltip').remove();
    });
    $('[data-tooltip-bottom]').on('mouseenter', function () {
        const $el = $(this);
        const title = $el.attr('title');

        if (title) {
            // Remove native tooltip temporarily
            $el.data('tooltip-title', title).removeAttr('title');

            // Create tooltip and append
            const $tooltip = $('<span class="custom-tooltip-bottom"></span>').text(title);
            $el.append($tooltip);
            $tooltip.fadeIn(200);
        }
    });

    $('[data-tooltip-bottom]').on('mouseleave', function () {
        const $el = $(this);
        const title = $el.data('tooltip-title');

        // Restore title attribute
        if (title) $el.attr('title', title);

        // Remove tooltip
        $el.find('.custom-tooltip-bottom').remove();
    });

    /*== Color Hover To Image Change ==*/
    var $mnproduct = $('.mn-product-card').find('.mn-opt-swatch');

    function initChangeImg($opt) {
        $opt.each(function () {
            var $this = $(this),
                ecChangeImg = $this.hasClass('mn-change-img');

            $this.on('mouseenter', 'li', function () {
                changeProductImg($(this));
            });

            $this.on('click', 'li', function () {
                changeProductImg($(this));
            });

            function changeProductImg(thisObj) {
                var $this = thisObj;
                var $load = $this.find('a');

                var $proimg = $this.closest('.mn-product-card').find('.mn-product-img');

                if (!$load.hasClass('loaded')) {
                    $proimg.addClass('pro-loading');
                }

                var $loaded = $this.find('a').addClass('loaded');

                $this.addClass('active').siblings().removeClass('active');
                if (ecChangeImg) {
                    hoverAddImg($this);
                }
                setTimeout(function () {
                    $proimg.removeClass("pro-loading");
                }, 1000);
                return false;
            }

        });
    }

    function hoverAddImg($this) {
        var $optData = $this.find('.mn-opt-clr-img'),
            $opImg = $optData.attr('data-src'),
            $opImgHover = $optData.attr('data-src-hover') || false,
            $optImgWrapper = $this.closest('.mn-product-card').find('.mn-product-img'),
            $optImgMain = $optImgWrapper.find('.image img.main-img'),
            $optImgMainHover = $optImgWrapper.find('.image img.hover-img');
        // alert();
        if ($opImg.length) {
            $optImgMain.attr('src', $opImg);
        }
        if ($opImg.length) {
            var checkDisable = $optImgMainHover.closest('img.hover-img');
            $optImgMainHover.attr('src', $opImgHover);
            if (checkDisable.hasClass('disable')) {
                checkDisable.removeClass('disable');
            }
        }
        if ($opImgHover === false) {
            $optImgMainHover.closest('img.hover-img').addClass('disable');
        }
    }
    $(window).on('load', function () {
        initChangeImg($mnproduct);
    });
    $("document").ready(function () {
        initChangeImg($mnproduct);
    });

    /*----------------------------- List Grid View -------------------------------- */
    $('.mn-gl-btn').on('click', 'button', function () {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
    });

    // for 100% width list view
    function listView(e) {
        var $gridCont = $('.shop-pro-inner');
        var $listView = $('.pro-gl-content');
        e.preventDefault();
        $gridCont.addClass('list-view');
        $listView.addClass('width-100');
    }

    function gridView(e) {
        var $gridCont = $('.shop-pro-inner');
        var $gridView = $('.pro-gl-content');
        e.preventDefault();
        $gridCont.removeClass('list-view');
        $gridView.removeClass('width-100');
    }

    $(document).on('click', '.btn-grid', gridView);
    $(document).on('click', '.btn-list', listView);

    // for 50% width list view
    function listView50(e) {
        var $gridCont = $('.shop-pro-inner');
        var $listView = $('.pro-gl-content');
        e.preventDefault();
        $gridCont.addClass('list-view-50');
        $listView.addClass('width-50');
    }

    function gridView50(e) {
        var $gridCont = $('.shop-pro-inner');
        var $gridView = $('.pro-gl-content');
        e.preventDefault();
        $gridCont.removeClass('list-view-50');
        $gridView.removeClass('width-50');
    }

    $(document).on('click', '.btn-grid-50', gridView50);
    $(document).on('click', '.btn-list-50', listView50);

    /*== Product & shop page category Toggle == */
    $(document).ready(function () {
        $(".mn-sidebar-block.drop .mn-sb-block-content ul li ul").addClass("mn-cat-sub-dropdown");

        $(".mn-sidebar-block.drop .mn-sidebar-block-item").on("click", function () {
            var $this = $(this).closest('.mn-sb-block-content').find('.mn-cat-sub-dropdown');
            $this.slideToggle('slow');
            $('.mn-cat-sub-dropdown').not($this).slideUp('slow');
        });
    });

    /*== Remove filter selection == */
    $(".mn-select-cancel").on("click", function () {
        $(this).parent(".mn-select-btn").remove();
    });
    $(".mn-select-btn-clear").on("click", function () {
        $(this).parent(".mn-select-bar").remove();
    });

    /*== Qty Plus Minus Button ==*/
    var QtyPlusMinus = $(".qty-plus-minus");
    QtyPlusMinus.prepend('<div class="dec mn-qtybtn">-</div>');
    QtyPlusMinus.append('<div class="inc mn-qtybtn">+</div>');

    $("body").on("click", ".mn-qtybtn", function () {
        var $qtybutton = $(this);
        var QtyoldValue = $qtybutton.parent().find("input").val();
        if ($qtybutton.text() === "+") {
            var QtynewVal = parseFloat(QtyoldValue) + 1;
        } else {
            if (QtyoldValue > 1) {
                var QtynewVal = parseFloat(QtyoldValue) - 1;
            } else {
                QtynewVal = 1;
            }
        }
        $qtybutton.parent().find("input").val(QtynewVal);
    });

    /*  Product Weight & Size select JS  */
    $(".mn-pro-variation-inner.mn-pro-variation-size ul li").on("click", function (e) {
        $(".mn-pro-variation-inner.mn-pro-variation-size ul li").removeClass("active");
        // $(".mn-pro-variation ul li").removeClass("active");
        $(this).addClass("active");
    });
    $(".mn-pro-variation-inner.mn-pro-variation-color ul li").on("click", function (e) {
        $(".mn-pro-variation-inner.mn-pro-variation-color ul li").removeClass("active");
        $(this).addClass("active");
    });

    /* Quick view size select */
    $(".mn-pro-variations ul li").on("click", function (e) {
        $(".mn-pro-variations ul li").removeClass("active");
        // $(".mn-pro-variation ul li").removeClass("active");
        $(this).addClass("active");
    });

    

    /*== Password toggle ==*/
    $(".show-pass").on("click", function () {
        $(this).toggleClass('active');
        var input = $(this).siblings('input');
        input.attr("type", function(index, attr) {
            return attr === "password" ? "text" : "password";
          });
          
    });


    if ($('.user-type-selector').length){
        $('.user-type-selector').change(function(){
            if ($("#user_company").is(':checked')){
                $('.company-info').removeClass('d-none');
            } else {
                $('.company-info').addClass('d-none');
            }
    
        });
    }

    // Header Sticky
    $(window).bind('scroll', function () {
        if (($('body').outerHeight()) > ($(window).outerHeight() + 150)){
            if ($(window).scrollTop() > 130) {
                $('header').addClass('is-sticky');
            } else {
                $('header').removeClass('is-sticky');
            }
        } else {
            $('header').removeClass('is-sticky');
        }
    });

    /*== Footer ==*/
    if ($("#copyright_year").length) {
        var date = new Date().getFullYear();
        document.getElementById("copyright_year").innerHTML = date;
    }

})(jQuery);