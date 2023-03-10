import { initAccordion } from './lib-2sxc-accordion';
import { initAccordionBs5 } from './lib-2sxc-bs5-accordion';

var winAny = window as any;
winAny.appFaq4 ??= {};
winAny.appFaq4.init ??= initFaq4;
// TODO::Index File anpassen @ro
winAny.appFaq4.initAccordion ??= initAccordion;
winAny.appFaq4.initAccordionBs5 ??= initAccordionBs5;

function initFaq4({ moduleId } : { moduleId: string }) {
  initFilterButtons(moduleId);
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
      // display all elements
      filterElem.style.display = "none";

      // display element based on filter match
      if(filter === 'nofilter' || JSON.parse(filterElem.getAttribute('data-filterelem')).includes(filter)) {
        filterElem.style.display = "block"
      }
    });
}