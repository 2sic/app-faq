export class App {
    constructor() {
        this.main();
    }

    main = () => {
        // attach click to all accordions when loading
        $('.co-accordion-title').click(function (e) {
            e.preventDefault();
            var _this = $(this);

            $(this).toggleClass('active').next('.co-accordion-content').slideToggle('normal', function () {
                $(window).resize();
            });

            $('html, body').animate({
                scrollTop: _this.offset().top - ($('.role-admin').length > 0 ? 200 : 200)
            }, 500);
        });

        // set hash on click
        $('.co-accordion-title').click(function (e) {
            var hash = $(this).attr('id');
            location.hash = hash;
        });

        // get hash from url and open specific item 
        if (window.location.hash) {
            var hash = window.location.hash;
            if ($(hash).length > 0) {
                $(hash).click();

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - ($('.role-admin').length > 0 ? 200 : 200)
                }, 800);
            }
        }

        // real logic starts here
        var wrapperParent = $('.question-wrapper-outer');
        var wrapper = $('.question-wrapper');
        var questionItems = wrapper.find('.co-accordion-item');
        var filter = '';

        $('.co-category-element').click(function () {
            // Check for active states
            $('.co-category-element').each(function () {
                $(this).removeClass('co-active');
            });

            $(this).addClass('co-active');

            // logic to do filtering
            var newFilter = $(this).data('filter');

            if (newFilter === filter) return;

            filter = newFilter;

            wrapperParent.css('min-height', wrapperParent.height() + 'px');
            wrapper.css('opacity', 0);

            setTimeout(function () {
                questionItems.each(function () {
                    var filterElems = $(this).data('filterelem');
                    $(this).css('display', (filter === 'nofilter' || filterElems
                        .find(function (elem: string) {
                            return elem === filter;
                        })) ? 'block' : 'none');
                });
                wrapperParent.css('min-height', wrapper.height() + 'px');
                setTimeout(function () {
                    wrapper.css('opacity', 1);
                }, 400)
            }, 400);
        });
    }
}
