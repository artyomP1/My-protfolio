"use strict";

function initPage() {
    renderProtfolio();
}

function renderProtfolio() {
    var projs = projects();
    var protfolioHTML = '';
    protfolioHTML = projs.map(function(proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a onclick="onModalProj('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">>${proj.title}</p>
            </div>
        </div>`;
    });

    var elProtfolio = document.querySelector('.portfolio-container');
    elProtfolio.innerHTML = protfolioHTML.join('');

}


function sendEmail() {
    var elSubject = document.querySelector('.Subject').value;
    var elBody = document.querySelector('.Message').value;
    var sendEmail = `//mail.google.com/mail/?view=cm&fs=1&to=pogosov1@gmail.com&su=${elSubject}&body=${elBody}`;
    window.open(sendEmail);
}

function onModalProj(indexId) {
    var proj = findProj(indexId);
    console.log(proj);

    renderModal(proj);
}


function renderModal(proj) {
    var modalHTML = `<div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">❌</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>${proj.name}</h2>
                                <p class="item-intro "> ${proj.title}</p>
                                <a href="${proj.url}" target="_blank"><img class="img-fluid d-block mx-auto modal-img" src="img/portfolio/${proj.name}.png" alt=""></a>
                                <p>${proj.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: ${proj.publishedAt}</li>
                                    <li>Client: ${proj.name}</li>
                                    <li>Category: ${proj.name}</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    var elModal = document.querySelector('.portfolio-modal');
    elModal.innerHTML = modalHTML
}

//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict