/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
$(document).ready(function() {

    window.addEventListener('dfMessengerLoaded', function (event) {
        $r1 = document.querySelector("df-messenger");
        $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
        $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input"); //for other mods

        var sheet = new CSSStyleSheet;
        sheet.replaceSync( `div.chat-wrapper[opened="true"] { height: 500px }`);
        $r2.shadowRoot.adoptedStyleSheets = [ sheet ];
        sheet.replaceSync( `div.chat-icon { width: 50px }`);
        $r1.shadowRoot.adoptedStyleSheets = [ sheet ];

    });
    function changechatbot(){
    document.getElementById('whichpage').getAttribute("href");//adpat to our different filenames
  };
});
