import { show, toggle } from 'slidetoggle';

var winAny = window as any;
winAny.appFaq4 ??= {};
winAny.appFaq4.init ??= initFaq4;

function initFaq4({ moduleId } : { moduleId: string }) {
    initSlideToggle();
    initFilterButtons(moduleId);
}

function initSlideToggle(): void {
    // get navHight for correct scrollposition
    var nav = document.getElementsByTagName('header')[0];
    var navHeight = (nav != null ? nav.offsetHeight : 0);

    // attach click to all accordions when loading
    var faqOpener = document.querySelectorAll('.app-faq4-title');

    faqOpener.forEach((elem: HTMLElement, index) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();

            const currentElem = event.currentTarget as HTMLElement;
            const sibling = currentElem.nextElementSibling as HTMLElement;

            // add hash to url
            location.hash = elem.getAttribute('id').split('-')[1];

            // open / close mechanic for slide
            toggle(sibling, {});
            elem.classList.toggle('active');
            if (!elem.classList.contains('active')) window.location.hash = '';
        })
    });

    // get hash from url and open specific item
    if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        const targetHashElem = document.getElementById(`hash-${hash}`);

        // if target element exists scroll to element and open it
        if (targetHashElem) {
            const elemOffsetY = targetHashElem.getBoundingClientRect().top + window.scrollY - navHeight;
            const sibling = targetHashElem.nextElementSibling as HTMLElement;

            targetHashElem.parentElement.classList.add('active');

            // scroll to element which should open then
            window.scrollTo({
                top: elemOffsetY,
                left: 0,
                behavior: 'smooth'
            });

            // open faq
            show(sibling, {});
        }
    }
}

function initFilterButtons(moduleId: string): void {
    // get all filter buttons and add listener
    document.querySelectorAll(`.${moduleId} [data-filter]`).forEach((filter) => {
        filter.addEventListener('click', () => {
            // if clicked, apply new filter
            displayFilterItems(filter.getAttribute('data-filter'), moduleId);
        });
    });
}

function displayFilterItems(filter: string, moduleId: string): void {
    // get all filter elements
    document.querySelectorAll(`.${moduleId} [data-filterelem]`)
        .forEach((filterElem: HTMLElement) => {
            // display element based on filter match
            if (filter === 'nofilter' || JSON.parse(filterElem.getAttribute('data-filterelem'))[0] === filter) filterElem.style.display = "block"
            else filterElem.style.display = "none"
        });
}