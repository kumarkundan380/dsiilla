jQuery(document).ready(function($) {

    $('body').on('click', '.side_menu_opener', function() {
        $('body').addClass('active_sidemenu');
    });

    $('body').on('click', '.side_nav_close_btn', function() {
        $('body').removeClass('active_sidemenu');
    });

    $('.resonance_slider').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        navText: ["<img src='assets/images/navigation-arrow-left.png'>",
            "<img src='assets/images/navigation-arrow-right.png'>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

     $('.featured_blog_sidebar').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        navText: ["<img src='assets/images/navigation-arrow-left.png'>",
            "<img src='assets/images/navigation-arrow-right.png'>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.related_blogs_slider').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        navText: ["<img src='assets/images/navigation-arrow-left.png'>",
            "<img src='assets/images/navigation-arrow-right.png'>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $('.multiple_profile_slider').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        navText: ["<img src='assets/images/navigation-arrow-left.png'>",
            "<img src='assets/images/navigation-arrow-right.png'>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.go_to_top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // if ($('.rotate_title .highlight_texts').length > 0) {
    //     $(".rotate_title .title_text").text($('.rotate_title .highlight_texts:first').text());
    //     let rotate_text_array = [];
    //     $('.rotate_title .highlight_texts').each(function(i, highlight_text) {
    //         rotate_text_array.push($(highlight_text).text());
    //     });
    //     count = 0;
    //     setInterval(function() {
    //         count++;
    //         $(".rotate_title .title_text").fadeOut(500, function() {
    //             $(this).text(rotate_text_array[count % rotate_text_array.length]).fadeIn(500);
    //         });
    //     }, 3000);
    // }


    // for accordion    
    $('.collapse').on('shown.bs.collapse', function() {
        let card = $(this).closest('.card');
        card.addClass('active');
        card.find(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        let card = $(this).closest('.card');
        card.removeClass('active');
        card.find(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

    $(".collapse.show").each(function() {
        let card = $(this).closest('.card');
        card.addClass('active');
        card.find(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

});


$(document).ready(function () {
   
    (function changeBg() {
        var img_array = ["http://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Still_nature_-_Museu_Calouste_Gulbenkian.JPG/1280px-Still_nature_-_Museu_Calouste_Gulbenkian.JPG", 
        "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Snow_covered_hillside_with_small_evergreens.jpg/1280px-Snow_covered_hillside_with_small_evergreens.jpg", 
        "http://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Uvas.jpg/1280px-Uvas.jpg"
        ],
        _nxtIndex = 0,
        _curIndex = 0,
        interval = 1500;
            function nextIndex(){ _nxtIndex =  (  _nxtIndex + 1) % img_array.length; return _nxtIndex;};
            
            function shiftIndexes(){
                _curIndex = _nxtIndex;
                nextIndex();
            }
            
            function assignBackgrounds(){
                for (var i=0; i<img_array.length;i++){
                    
                    $('#background-slide'+i).css('backgroundImage', function () {
                             return 'url(' + img_array[i] + ')';
                         });
                     if(i==0){
                         $('#background-slide'+i).css('opacity', 1);
                     }
                     else{
                         $('#background-slide'+i).css('opacity', 0);
                     }
                }
             }
            
            function startBackgroundOpacityToggle() {
              //console.log("in startBackgroundOpacityToggle. _curIndex = "+_curIndex);
              elem = $('#background-slide'+_curIndex);
              elem.animate({
                         opacity: (elem.css('opacity')==0) ? 1 : 0
                     }, {
                         duration: 3000,
                         start: finishBackgroundOpacityToggle         
                       }); };
                   
            function finishBackgroundOpacityToggle (){
              //console.log("in finishBackgroundOpacity. _nxtIndex = "+_nxtIndex);
                elem = $('#background-slide'+_nxtIndex);
                elem.animate({
                        opacity: (elem.css('opacity')==0) ? 1 : 0
                    },  {
                        duration: 3000,
                        complete: runSlider
                      });
            
            };
            
            function runSlider(){
                shiftIndexes();
                setTimeout(startBackgroundOpacityToggle,interval);
            } 
            
            assignBackgrounds();
            runSlider();
    })(); 
});

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

        $(".categoryul_show").click(function(){
  $("#to_b_shown").toggleClass("show");
});

