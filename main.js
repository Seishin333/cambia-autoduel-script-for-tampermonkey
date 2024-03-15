// ==UserScript==
// @name         cambria
// @namespace    http://tampermonkey.net/
// @version      2024-03-14
// @description  try to take over the world!
// @author       You
// @match        https://play.cambria.gg/
// @icon         https://play.cambria.gg/
// @grant        none
// ==/UserScript==

window.onload = function() {
  (function() {
    'use strict';
      const CloseObserver = new MutationObserver((mutationsList, observer) => {
          // Check if the button has been added to the DOM
          const Closebutton = document.querySelector("#main-layout-main > div > div > div.modal-content.font-\\[\\'Open_Sans\\'\\].text-lg.flex-1 > div.post-duel-menu.relative.bg-\\[\\#322e28\\] > div.footer > div > div.flex.justify-center.items-center.bg-\\[\\#221e1b\\].p-2 > button")
          if (Closebutton) {
              // The button has been found, so log it and stop observing
              console.log(Closebutton);
              Closebutton.click();
              CloseObserver.disconnect();
              AcceptObserver.observe(document.body, config);
          }
          else{
              console.log("WAITING FOR CLOSING DUEL...");
          }
      });

      const ReadyObserver = new MutationObserver((mutationsList, observer) => {
          // Check if the button has been added to the DOM
          const Readybutton = document.querySelector("#main-layout-main > div > div > div.modal-content.font-\\[\\'Open_Sans\\'\\].text-lg.flex-1 > div > div > div:nth-child(1) > div.grid.flex-1.grid-cols-\\[30\\%\\,40\\%\\,30\\%\\].w-full > div.px-3.py-2.flex.flex-col.max-h-\\[467px\\] > div.mt-auto > div > button.text-\\[\\#fff2c0\\].select-none.font-heading.transition-all.flex.items-center.justify-center.disabled\\:opacity-50.disabled\\:pointer-events-none.bg-warning-300.hover\\:bg-warning-300\\/90.rounded.text-\\[22px\\].px-4.py-1.w-full.block.border-2.border-solid.border-black.shadow-button.active\\:shadow-button-active.svelte-4vi3w2")
          if (Readybutton) {
              // The button has been found, so log it and stop observing
              console.log(Readybutton);
              Readybutton.click();
              ReadyObserver.disconnect();
              CloseObserver.observe(document.body, config);
          }
          else{
              console.log("ACCEPTING...");
          }
      });
      // Create a new MutationObserver
      const AcceptObserver = new MutationObserver((mutationsList, observer) => {
          // Check if the button has been added to the DOM
          const Acceptbutton = document.querySelector("#main-layout-bottom > aside > div.chat-container.flex.flex-col.p-2.pr-0.svelte-1nmup7z > section.messages-list.h-full.overflow-y-auto.p-2 > div.chat-message.py-1.-ml-2.mb-1.pl-2.px-1.rounded.border-2.border-solid.border-\\[\\#1e1d19\\].bg-\\[\\#23221f\\]\\/90.svelte-14phiac > div > button.rounded-md.transition.pt-1.pb-1\\.5.border-none.text-white.cursor-pointer.active\\:shadow-none.active\\:\\[transform\\:translateY\\(2px\\)\\].px-3.bg-\\[\\#f9ad20\\].\\[font-family\\:Germania_One\\].\\[box-shadow\\:inset_0_-4px_0_-1px_\\#dc7117\\].hover\\:bg-\\[\\#f9ad20\\]\\/80.svelte-14phiac")
          if (Acceptbutton) {
              // The button has been found, so log it and stop observing
              console.log(Acceptbutton);
              Acceptbutton.click();
              AcceptObserver.disconnect();
              ReadyObserver.observe(document.body, config);
          }
          else{
              console.log("WAITING FOR DUEL REQUEST...");
          }
      });

      // Configure the observer to watch for new nodes being added
      const config = { childList: true, subtree: true };

      // Start observing the parent element
      AcceptObserver.observe(document.body, config);
  }());
};
