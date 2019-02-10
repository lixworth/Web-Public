var RevSlide = function () {

    return {

        //Revolution Slider
        initRevolutionSlider: function () {
            var api;

				 //setTimeout("", 1000);
				 //jQuery('#revolutionul').show();

api =  jQuery('.fullwidthabnner').revolution(
	                {
	                    delay:2000,
	                    startheight:600,
	                    startwidth:1150,

	                    hideThumbs:10,

	                    thumbWidth:100,                         
	                    thumbHeight:50,
	                    thumbAmount:5,

	                    navigationType:"bullet",                
	                    navigationArrows:"solo",               

	                    navigationStyle:"round",               


	                    navigationHAlign:"center",              
	                    navigationVAlign:"bottom",              
	                    navigationHOffset:0,
	                    navigationVOffset:20,

	                    soloArrowLeftHalign:"left",
	                    soloArrowLeftValign:"center",
	                    soloArrowLeftHOffset:20,
	                    soloArrowLeftVOffset:0,

	                    soloArrowRightHalign:"right",
	                    soloArrowRightValign:"center",
	                    soloArrowRightHOffset:20,
	                    soloArrowRightVOffset:0,

	                    touchenabled:"on",                      // Enable Swipe Function : on/off
	                    onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off

	                    stopAtSlide:-1,
	                    stopAfterLoops:-1,

	                    hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
						hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
						hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

	                    shadow:1,                               //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
	                    fullWidth:"on"                          // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
	                });
        }

    };
}();