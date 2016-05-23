(function (a, b, c) {
//
var d = {};

//  var a //  jquery
//  var b //  window
//  var c //  modernizr
//


//  UTILITIES  //
d.requestLink = function( givenLink ) {
  window.location = givenLink;
}


//////////////
//  LAYOUT  //
//////////////


d.lastChildFixes = function() {
	//
	$('.side-navigation .side-navigation-list ul li:last-child').css({ 'border' : 'none' });
	$('#top #top-action #top-location ul li:last-child').css({ 'margin-right' : '0px' });
	$('#top #top-action #top-social div:last-child').css({ 'margin-right' : '0px' });
	$('#top #top-nav ul li:last-child').css({ 'margin-right' : '0px' });
	//.css({'position' : 'absolute', 'right' : '33px' });
	//
}



d.logoFlipInit = function() {
	//
	a('#logo-icon a').click(function(e) {
		e.preventDefault();
		d.logoFlipTrigger();
	});
	a('#logo-icon-dot a').click(function(e) {
		e.preventDefault();
		d.logoFlipTrigger();
	});
	a('#logo-display a').click(function(e) {
		e.preventDefault();
		d.logoFlipTrigger();
	});
	//
}



d.logoFlipTrigger = function() {
	//
	a('#logo-icon-dot').animateRotate(0,180, 1500, 'swing', function() {  //  custom jquery function as include in plugins
		//  on complete, do the following!
		b.location.href = "/";
		//console.log('test');
		//
	})
	//
}



d.sideNavigationScroll = function() {
	//
	var finalHeight = 196;
	var sideNav = a('#side');
	//
	var triggerDesktopScroll = function() {  //  negotiate desktop side location
		//
		if (a('#main-body').length > 0) {
			var mainBody = a('#main-body');
			var centerHeight = mainBody[0].offsetHeight;
			centerHeight = centerHeight - 10;
			var topMax = centerHeight - sideNav.height();
		    //
		    if ( a(b).scrollTop() >= finalHeight ) {
		        //
		        if ( a(b).scrollTop() >= topMax ) {
			        //
					sideNav.stop().animate(
			        {
				        marginTop: topMax
			        }, 'fast');
			        //
		        } else {
			        //
			    	sideNav.stop().animate(
			        {
				        marginTop: ( a(b).scrollTop() )
			        }, 'fast');
			        //
		        }
		        //
		    } else if ( a(b).scrollTop() < finalHeight ) {
		        //
		        sideNav.stop().animate(
		        {
			        marginTop: 0
		        }, 'fast');
		        //
		    }
		}
		//
	}
	//
	var triggerMobilePark = function() {
		//
		sideNav.stop();
		sideNav.css({ 'margin-top' : '0px' })
		//
	}
	//
	var updateSide = function() {
		//
		if ($(window).width() <= 700) {  //  we're in mobile mode
			triggerMobilePark();
		} else {  //  we're in desktop mode, reset procedures menu.
			triggerDesktopScroll();
		}
		//
	}




	var throttledMenu = _.throttle(updateSide, 100);
	a(b).resize(throttledMenu);
	a(b).scroll(throttledMenu);
}



d.sideNavigationListItems = function() {
	//
	$('.side-navigation-list ul > li > ul').hide();
	$('.side-navigation-list ul > li > ul').addClass('inactive');
	$('.side-navigation-list ul > li').find('.status-icon').html('&#43;');  //  add plus
	//

	var greatLocation = window.location.href;
  greatLocation = greatLocation.split("/");
  //
  //
	var bangNav = function(givenValue) {
		//alert(givenValue);
			var theNav = $('.side-navigation-list > ul > li:eq(' +givenValue +')');
			theNav.find('ul').show();
			theNav.find('ul').removeClass('inactive');
			theNav.find('ul').addClass('active');
			theNav.find('.status-icon').html('&#45;');  //  add minus
		// $('.side-navigation-list ul li').first().find('ul').show();
		// $('.side-navigation-list ul li').first().find('ul').removeClass('inactive');
		// $('.side-navigation-list ul li').first().find('ul').addClass('active');
		// $('.side-navigation-list ul li').first().find('.status-icon').html('&#45;');  //  add minus
	}
	// alert(greatLocation[3]);
  if (greatLocation[3] == 'breast-procedures') {
		// alert('bang');
		//alert(greatLocation[3]);
		bangNav(0);
    // $('#nav1 ul li[data-parent="about-us"] a').mouseover();
  } else if (greatLocation[3] == 'body-procedures') {
    bangNav(1);
	} else if (greatLocation[3] == 'face-procedures') {
		bangNav(2);
	} else if (greatLocation[3] == 'skin-procedures') {
		bangNav(0);
	} else if ( greatLocation[3] == 'about' ) {
		bangNav(0);
	} else if ( greatLocation[3] == 'contact' ) {
		bangNav(0);
	} else {
		bangNav(0);
	}

	$('.side-navigation-list > ul > li .side-navigation-item-title a, .side-navigation-list > ul > li .side-navigation-item-title .status-icon').click(function(e) {
		//
		e.preventDefault();
		//
		if ($(this).parents('li').find('ul').hasClass('active')) {
			//  DO NOTHING
			$(this).parents('li').find('ul').removeClass('active');
			$(this).parents('li').find('ul').addClass('inactive');
			$(this).parents('li').find('.status-icon').html('&#43;');  //  add plus
			$(this).parents('li').find('ul').slideUp('slow');

		} else {
			//
			$(this).parents('li').find('ul').removeClass('inactive');
			$(this).parents('li').find('ul').addClass('active');
			$(this).parents('li').find('.status-icon').html('&#45;');  //  add minus
			$(this).parents('li').find('ul').slideDown('slow');
			//
		}
		//
	})
	//
}




//d.quickContactResize = function() { $.fn.colorbox.resize(); }




d.loadQuickContact = function() {

  var quickContactResize = function() {  //  trigger resize functionality with colorbox!!
    $.colorbox.resize();
  }

  var quickContactLoad = function () {
    //  this function is loaded on click;
    //  it established the first step of the spinup process of the colorbox,
    //  init is next, which applies the interactive layer of the form

    //  launch colorbox
    $.colorbox({
      inline: true,
      href: '#side #side-contact',
      onComplete: function() {

      }
    });

  }  //  end of quickContactLoad



  //  SIDEBAR  //  action!!
  var quickContactSidebar = function() {

    var sideContactLink = $('#side-contact-link a');
    sideContactLink.click(function(e) {  //  we're clicking the side contact psyche
      e.preventDefault();
      quickContactLoad();
    });

  }

  //  init
  quickContactSidebar();


}  //  end of quick contact


d.topDisplayDropDownKill = function() {
	//
	$('#top-dd-block-wrap').stop().slideUp('slow', function() {
		//
		$('#top-dd-block').html('');
		$('#top-nav .dd-active').removeClass('dd-active');
		//
	});
	//
}



d.topDisplayDropDown = function() {
	//
	var topddblock = $('#top-dd-block');
	var ddactual = $('#top-nav .dd');
	ddactual.find('a').first().click(function(e) {
	  e.preventDefault();
	});
	ddactual.mouseenter(function() {
		//
		var actualHTML = $(this).parent().find('.ddactual').html();
		$('#top-nav .dd-active').removeClass('dd-active');
		$(this).addClass('dd-active');
		topddblock.html(actualHTML);
		topddblock.data('ddid', $(this).index());
		$('#top-dd-block-wrap').stop().slideDown('slow');
	});
	//
	var topnavli = $('#top-nav > ul > li');
	topnavli.mouseenter(function() {
		if ($(this).hasClass('dd-active')) {
			//  do nothing
		} else {
			d.topDisplayDropDownKill();
		}
	})
	//
	$('#top-nav-spacer-top').mouseenter(function() { d.topDisplayDropDownKill(); });
	$('#logo-display').mouseenter(function() { d.topDisplayDropDownKill(); })
	$('#logo-icon').mouseenter(function() { d.topDisplayDropDownKill(); })
	$('#main-content').mouseenter(function() { d.topDisplayDropDownKill(); })
	$('#top-dd-block').mouseleave(function() { d.topDisplayDropDownKill(); })
	$(':not(#top-dd-block)').click(function() { d.topDisplayDropDownKill(); });
	//
}
//


///////////////
//  WIDGETS  //
///////////////



d.widgetBacktotop = function() {
	//
	$('.widget-backtotop').click(function() {
		//
		var aTag = $("a#thetop")
		//$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		$('html,body').animate({scrollTop: '0px'},'slow');
		//
	})
	//
}



d.widgetBuilderBox = function() {
	//
	$('.widget-builder .element-icon, .widget-builder .element-title').click(function() {
		//
		var widgetelement = $(this).parents('.widget-element');
		//
		widgetelement.toggleClass('element-active');
		//
		if (widgetelement.hasClass('element-active')) {
			//console.log('has class');
			widgetelement.find('.element-body').stop().slideDown('slow');
		} else {
			//console.log('doesnt have class');
			widgetelement.find('.element-body').stop().slideUp('slow');
		}

		//
	})
	//
}


////////////////////////////////////////////////////////////////////////////////
d.widgetBottomSequence = function() {  //  START  //  WIDGET BOTTOM SEQUENCE  //
////////////////////////////////////////////////////////////////////////////////
	//  Basic content is served with php, but we have additional instance
	//  functions via unique contact form, and share pop-up
	//

	var share_button_init = function() {  //  here we have the beloved share button  //  love the pop-up action
		var share_button = widget_lyfe.find('#bottom_sequence_widget_share_button');
		share_button.click(function(e) {
			e.preventDefault();
		})
	}
	// share_button_init();
	//
	var contact_button_init = function() {  //  here we have the contact button  //  probably addition handlers needed.
		var contact_button = widget_lyfe.find('#bottom_sequence_widget_ask_questions a');

		contact_button.click(function(e) {
			e.preventDefault();
			$('#side-contact-link a').click();
		})
	}
	// contact_button_init();
	//
	var social_widget = function() {  //  here we have the contact widget funcitonality  //  whoop whoop'
		/////////////////
		//  VARIABLES  //
		/////////////////
		var social_widget = $("#bottom_sequence_widget_social");
		var social_widget_active = false;
		var social_start = social_widget.position();
		// social_start = social_start.top;
		social_start = -185;
		var social_animate = 35;
		//
		///////////////
		//  METHODS  //
		///////////////
		var toggle_social_off = function() {
			var the_target = social_start;
			var the_start = social_start + social_animate;
			// social_widget.animate({ 'margin-top' : social_start });
			// social_widget.css({ 'margin-top' : the_start });
			social_widget.animate({ 'margin-top' : the_target }, {
				duration: 250, queue: false,
				complete: function() {
					social_widget_active = false;
				}});
			social_widget.fadeOut({
				duration: 250, queue: false,
				complete: function() {
					social_unloadWidget();
				}
			});

		}
		var toggle_social_on = function() {
			var the_top = social_start - social_animate;
			social_widget.animate({ 'margin-top' : the_top }, {
				duraction: 250, queue: false,
				complete: function() {
					social_widget_active = true;

				}});
			social_widget.fadeIn(250);
		}
		//
		//


		///////////////////////
		//  PATCHY HANDLERS  //
		///////////////////////
		$('#bottom_sequence_widget_social_close a').click(function(e) {
			e.preventDefault();
			toggle_social_off();
		})

		$('#bottom_sequence_widget_share_button a').mouseenter(function() {
			toggle_social_on();
			// alert('test');
		})

		$('#bottom_sequence_widget_social').mouseleave(function() {
			if ( social_widget_active == true ) {
				toggle_social_off();
			}  //  else we're waiting for proper instance
		})

		$(':not(#bottom_sequence_widget_social)').click(function() {
			if ( social_widget_active == true ) {
				toggle_social_off();
			}  //  else we're waiting for proper instance
		});

		$('#bottom_sequence_widget_share_button').click(function(e) {
			e.preventDefault();
			if ( social_widget_active == true ) {
				toggle_social_off();
			}
		})
		//
		//

		/////////////////////
		//  SOCIAL WIDGET  //
		/////////////////////
		var social_loadCopy = function(givenCopy) {
			givenCopy = givenCopy.replace('*','</br>');
			$('#bottom_sequence_widget_social_description').html(givenCopy);
		}

		var social_unloadWidget = function() {
			social_loadCopy(social_widget.data('social'));
		}

		var social_icons = function() {
			social_widget.find('.social_icon a').mouseenter(function(e) {
				$this = $(this).parent();
				var displayScheme = $this.data('social');
				social_loadCopy(displayScheme);
			})
		}
		//  I love initializing modules
		//
		//

		var social_icon_facebook = function() {
			$('#bottom_sequence_widget_social_icon_facebook a').click(function(e) {
				e.preventDefault();
				//
				FB.ui({
  				method: 'share',
  				href: window.location.href.split('#')[0]
				}, function(response){
					//  handle error if you got to!
				});
			})
		}

		var social_icon_twitter = function() {
			$('#bottom_sequence_widget_social_icon_twitter a').click(function(e) {
				e.preventDefault();
				//

				//
				var w = "500";
				var h = "500";
				var left = (screen.width/2)-(w/2);
			  var top = (screen.height/2)-(h/2);

				var screenName = 'mpsmn';
				//
				var theText = "Check out this page '"  + $('body').attr("data-theTitle") + "'";

				//var twitterUrl = 'https://twitter.com/intent/tweet?screen_name=' + screenName + '&text=' + theText;
				var twitterUrl = 'https://twitter.com/intent/tweet?screen_name=' + screenName + '&text=' + theText;
				var twitterWindow = 'MPSMN Twitter';
				//
				//window.open(twitterUrl, twitterWindow, "height=500,width=500");
				window.open(twitterUrl, twitterWindow, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
				//
			})
		}

		var social_icon_google = function() {
			$('#bottom_sequence_widget_social_icon_google a').click(function(e) {
				e.preventDefault();
				var w = "500";
				var h = "500";
				var left = (screen.width/2)-(w/2);
				var top = (screen.height/2)-(h/2);
				window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+w+', height='+h+', top='+top+', left='+left);
			});

		}
		//
		//

		var social_icons_init = function() {
			social_icons();
			/////////////////////////////////////
			//  SOCIAL MEDIA SDK AVAILABLE???  //
			/////////////////////////////////////
			//  basics for SDK available buttons,
			//  email needs to live below
			social_icon_facebook();
			social_icon_twitter();
			social_icon_google();
		}
		social_icons_init();  //  drop the atom
		//
		//
		//
	}
	//
	//



	function email_widget() {
		//  our custom email functionality

		var widget_element = $('#bottom_sequence_widget_social_emailWidget');
		var widget_element_acual = $('#bottom_sequence_widget_social_emailWidget_actual');


		var loadPopWidget = function() {  //  VALIDATION SCHEME  //

		  console.log('sequence share widget loaded');

			var formThing = $('#bottom_sequence_widget_social_emailWidget');
			var theForm = $('#emailWidget_form');
			//
			var content_title = $('#bottom_sequence_widget_social_emailWidget input[name="share_title"]');
			var content_prepare = $('#bottom_sequence_widget_social_emailWidget input[name="share_prepare"]');
			var content_actual = $('#bottom_sequence_widget_social_emailWidget textarea[name="share_content"]');
			//
			if ( content_prepare.attr('value') == '0' ) {
				//  we need to do something
				var market_string = "Hey, I wanted to share this page about " + content_title.attr('value') + " with you!";
				content_actual.text(market_string);
				content_prepare.attr('value') == '1';
			}

			theForm.validate({


				submitHandler: function(form){

					var $submitButton = a(form).find('input[type="submit"]');
					$submitButton.val('Sending...')

					var timestamp = new Date().getTime();
					var theUrl = '/wp-content/themes/nse-mpsmn/forms/handlers/forms-emailWidget.php?date=' + timestamp;

					a.post(theUrl, theForm.serialize(), function(response) {

					  console.log(response);

						if (response && response.success === false) {  //  our form has failed
							$submitButton.val('Send');

							var comm = response.message;
							var compound = '';
							$.each( comm, function ( index, value) {
							  compound = value + "\n" + compound;
							});
							alert( compound );

						} else {

							$submitButton.val('Sent').attr('disabled', 'disabled');

							//alert( 'Thank You!\nYour share has been sent!');
							//$.colorbox.close();

              d.requestLink('/form-complete');
							//window.location.href = '/f';


						}
						//
					}, 'json');
					//
					return false;
				}
				, errorLabelContainer: '#emailWidget_form .error-messages'
				, wrapper: 'li'
			});
		}
		//

		a('#bottom_sequence_widget_social_icon_email a').click(function(e) {
			e.preventDefault();
			//console.log('bang');
			// var payload = widget_element_acual.html();
			// payload = '<div id="colorBox_emailWidget"><div id="colorBox_emailWidget_actual">' + payload + '</div></div>';
			// console.log(payload);
			a.colorbox({
				inline:true,
				href:widget_element,
				onComplete:function() {
					loadPopWidget();  //  initialize quick contact form, once is live on the lightbox!
				}
			});
			//
			//d.quickContactFormValidate();
			//
		});
		//
		//
	}

	/////////////////////////////////////  Initialize components individually and encapsulated,
	//  EMAIL INSTANCE INITIALIZATION  //  for best "hoistability"...
	/////////////////////////////////////

	var widget_lyfe = $('#bottom_sequence_widget');

	if ( widget_lyfe.length ) {  //  we have the widget, launch init
		share_button_init();
		contact_button_init();
		social_widget();
		email_widget();
		//
		//
	}
	//
	//
	//

}
///////////////////////////////////////
//  END  //  WIDGET BOTTOM SEQUENCE  //
///////////////////////////////////////
d.commonButton = function() {

	$('.common-button span').css({'position' : 'absolute', 'left' : '33px' });
	//
	$('.common-button').append('<img src="/wp-content/themes/nse-mpsmn/images/common-button-arrow.png" alt="" />');
	$('.common-button img').hide();
	$('.common-button img').css({'position' : 'absolute', 'right' : '33px' });
	//
	$(".common-button").mouseenter(function(){
		$("span", this).animate({ 'left' : '20px' }, { duration: 250, queue: false });
		$("img", this).animate({ 'right' : '20px' }, { duration: 250, queue: false });
		$("img", this).fadeIn(250);
	});
	$(".common-button").mouseleave(function(){
		$("span", this).animate({ 'left' : '33px' }, { duration: 250, queue: false });
		$("img", this).animate({ 'right' : '33px' }, { duration: 250, queue: false });
		$("img", this).fadeOut(250);
	});
	//
}
//
//
////////////////////
//  SINGLE-PAGES  //
////////////////////
//
d.homeSlider = function() {
	//
	$('#home-slider .bxslider').bxSlider({
		auto: 'true',
		mode: 'fade',
		speed: 800,
		pause: 6000,
		responsive: 'false'
	});
	//

  var winWd = $(window).width();
  console.log(winWd);
  if (winWd <= 700) {  //  we're in mobile mode
    //  min mobile width 320 = 505 slider height
    //  max mobile width 700 = 330 slider height
    var sliderHeight = parseInt(((700 - winWd) * ((505-330)/(700 - 320))) + 330);
    console.log(sliderHeight);
  	$('#home-slider .bx-wrapper .bx-viewport').css("max-height", sliderHeight);
  }
}
//
d.homeModelNav = function() {
	//
	a('#front-page-model-nav .model .toggle-button a').click(function(e) {
		//
		e.preventDefault();
		var modelE = a(this).parents('.model');
		//
		if (modelE.hasClass('off')) {
			modelE.find('.ul-block').stop().slideDown('slow', function() {
				modelE.toggleClass('off');
				modelE.toggleClass('on');
			});
		} else {
			modelE.find('.ul-block').stop().slideUp('slow', function() {
				modelE.toggleClass('off');
				modelE.toggleClass('on');
			});
		}
		//




		//
	})
	//
}

//  MOBILE  //
d.mobileMenu = function() {
	//
	/////////////////////////////////////////
	//  animate mobile menu functionality  //
	/////////////////////////////////////////
	//
	var theMenu = $('#mobile-header-menu');
	var theHeader = $('#mobile-header');
	//
	var theMenuButton = $('#mobile-header-button-menu');
	var theContactButton = $('#mobile-header-button-contact');
	//
	var proceduresMenu = $('#mobile-header-menu-procedures');
	var contactMenu = $('#mobile-header-menu-contact');

	//
	var closeMobileMenu = function(givenMenu) {
		//
		if ($(givenMenu).hasClass('menu-on')) {  //  item is open, do close cycle
			//
			$(givenMenu).stop().slideUp('slow');
			$(givenMenu).toggleClass('menu-off');
			$(givenMenu).toggleClass('menu-on');
			//
		}
		//
	}
	//
	var openMobileMenu = function(givenMenu) {
		//
		if ($(givenMenu).hasClass('menu-off')) {  //  item is closed, do open cycle
			//
			$(givenMenu).stop().slideDown('slow');
			$(givenMenu).toggleClass('menu-off');
			$(givenMenu).toggleClass('menu-on');
			//
		}
		//
	}
	//
	var closeMobileTop = function() {  //  global function / this action is automated house keeping.
		//
		closeMobileMenu(proceduresMenu);
		closeMobileMenu(contactMenu);
		caretKiller();
		//
	}
	//
	var toggleCaret = function (givenMenu) {
		//
		//console.log(givenMenu);
		$(givenMenu).toggleClass('active');
		//
	}
	var caretKiller = function() {
		//
		$(theHeader).find('.mobile-header-button').removeClass('active');
		//
	}

	theMenuButton.on('click', theMenuButton.find('a'), function(e) {  //  mobile menu button
		//
		e.preventDefault();
		var $this = $(e);
		//
		if ($(proceduresMenu).hasClass('menu-on')) {  //  procuedres menu is already open,
			//  just need to close it and be done
			closeMobileTop();
		} else {
			closeMobileTop();
			toggleCaret($this);
			openMobileMenu(proceduresMenu);
		}
		//
	})
	theContactButton.on('click', theContactButton.find('a'), function(e) {  //  contact menu button
		//
		e.preventDefault();
		var $this = $(e);
		//
		if ($(contactMenu).hasClass('menu-on')) {  //  contact menu is already open,
			//  just need to close it and be done
			closeMobileTop();
		} else {
			closeMobileTop();
			toggleCaret($this);
			openMobileMenu(contactMenu);
		}
		//
	})
	//
	var updateMenu = function() {
		//
		if ($(window).width() <= 700) {  //  we're in mobile mode
			//
			//  do mobile things...
			//
		} else {  //  we're in desktop mode, reset the mobile menu if it's open.
			//
			closeMobileTop();
			//
		}
		//
	}
	//  ON MENU RESIZE, throttle update menu, so we can trigger mobile menu reset if needed
	var throttledMenu = _.throttle(updateMenu, 100);
	$(window).resize(throttledMenu);
	//
}
d.mobileHeaderMenu = function() {
	//
	//
	var proceduresMenu = $('#mobile-header-procedures-yield');
	var triggerProceduresMenuToggle = function() {
		//
		if (proceduresMenu.hasClass('menu-off')) {
			//  parent menu is currently closed, open it up
			proceduresMenu.stop().slideDown('slow');
		} else {
			//  parrent menu is currently open, close it up
			proceduresMenu.stop().slideUp('slow');
		}
		//  toggle notification classes
		proceduresMenu.toggleClass('menu-off');
		proceduresMenu.toggleClass('menu-on');

		//
	}
	var killProceduresMenu = function() {
		//
		$('#mobile-header-procedures-parent > li').each(function() {
			//
			$(this).removeClass('menu-on');
			$(this).removeClass('menu-off');
			$(this).find('ul').stop().slideUp('slow');
			$(this).addClass('menu-off');
			//
		});
		//
		proceduresMenu.removeClass('menu-off');
		proceduresMenu.removeClass('menu-on');
		proceduresMenu.stop().slideUp('slow');
		proceduresMenu.addClass('menu-off');
		//
		//
	}
	var updateProceduresMenu = function() {
		//
		if ($(window).width() <= 700) {  //  we're in mobile mode
			//
		} else {  //  we're in desktop mode, reset procedures menu.
			//
			killProceduresMenu();
		}
	}
	//
	var loadChildMenus = function() {
		//
		$('#mobile-header-procedures-parent > li .parentcat a').click(function(e) {
			e.preventDefault();
			//
			var theParent = $(this).parents('li');
			//
			if (theParent.hasClass('menu-off')) {  //  menu is currently close, open sesame
				theParent.find('ul.childcats').stop().slideDown('slow');
			} else {  //  menu is currently closed, letting flys out
				theParent.find('ul.childcats').stop().slideUp('slow');
			}
			theParent.toggleClass('menu-off');
			theParent.toggleClass('menu-on');

			//
		})
		//
	}
	loadChildMenus();
	//
	$('#mobile-header-procedures-header-procedures-left').click(function(e) {
		//  top header element has been clicked, trigger procedures menu toggle
		//  toggle trigger
		triggerProceduresMenuToggle();
	});
	$('#mobile-header-procedures-header-close-right').click(function(e) {
		//  kill trigger
		killProceduresMenu();
	})
	$('#mobile-header-procedures-close-right').click(function(e) {
		//  kill trigger
		killProceduresMenu();
	})
	//
	var throttledMenu = _.throttle(updateProceduresMenu, 100);
	$(window).resize(throttledMenu);
}
//
d.mobileHeaderActiveCaret = function() {
	//
	//  PRE-REQS
	var mobileHeader = a('#mobile-header');
	//
	//  enable caret placement, dynamically (obvi)
	var addCaretState = function(givenJunk) {  //  add active state cabilities to this yunk
		//
		//alert('test');
		//console.log(givenJunk);
		givenJunk = $(givenJunk);
		//
		givenJunk.prepend('<div class="active-caret"></div>');
		//
	}
	//
	addCaretState(mobileHeader.find('#mobile-header-button-contact'));
	addCaretState(mobileHeader.find('#mobile-header-button-menu'));
	//

	//
}
//
//
//
//////////////////////
//  FACEBOOK FIXES  //
//////////////////////
d.facebookCommentResponsiveness = function() {
	//
	//////////////////////////////////////////
	//  REISZE FACEBOOK COMMENTS ON RESIZE  //
	//////////////////////////////////////////
	//
	var facebookSize = '';

	function facebookResize(){
		//
		var fbcomments = a('.fb-comments');
		fbcomments.each(function() {
			//
			var src = $(this).find('iframe').attr('src').split('width=');
			var width = $(this).parent().innerWidth();
			//
			//alert(width);
	  	  // var src   = $('.fb-comments iframe').attr('src').split('width='),
 // 	  	      width = $('#container').width();
			 $(this).find('iframe').attr('src', src[0] + 'width=' + width);
	  	 	 // $('.fb-comments iframe').attr('src', src[0] + 'data-width=' + width);
			//
		})
	}
	//
	function facebookCheck() {
		//
		var FBCHECK = function() {
			if ($(window).width() <= 685) {  //  we're in mobile mode
				return 'mobile';
			} else {
				return 'desktop';
			}
		}
		//
		var theStatus = FBCHECK();
		//
		if (facebookSize == '') {
			facebookSize = FBCHECK();
			facebookResize();
		} else {
			//
			if (theStatus == 'mobile') {
				facebookSize = FBCHECK();
				facebookResize();
			} else {
				//
				if (facebookSize == 'desktop') {
					//  do nothing, because we don't need to refresh
				} else {
					//  we need to refresh, because there is inconsistency in available variables.
					facebookSize = FBCHECK();
					facebookResize();
				}
				//
			}
			//
		}
		//
	}
	//
	$(function() {  //  if document ready, do it up
		//
		if ( a('.fb-comments').length > 0 ) {
			var throttledFacebookResize = _.throttle(facebookCheck, 100);  //  throttled facebook checker, to optimize
			//
			$(window).resize(throttledFacebookResize);  //  window banger
			//
			setTimeout(function(){  //  on load banger
				throttledFacebookResize();
			}, 1000);
		}
		//
	})

	//
}



/////////////////
//  LOAD FIRE  //
/////////////////
$(document).ready(function() {

  //  STYLE THINGS
	d.lastChildFixes();
	d.logoFlipInit();


	d.topDisplayDropDown();
	// d.sideNavigationScroll();
	d.sideNavigationListItems();


	//  QUICK CONTACT  //
	d.loadQuickContact();


	//  WIDGETS  //
	d.widgetBacktotop();
	if ( $('.widget-builder').length ) { d.widgetBuilderBox(); };
	if ( $('#bottom_sequence_widget').length ) { d.widgetBottomSequence(); };
	d.commonButton();


	//  SINGLE-PAGES  //
	if ( $('#home-slider').length ) { d.homeSlider(); };
	d.homeModelNav();

	//  MOBILE  //
	d.mobileMenu();
	d.mobileHeaderMenu();
	d.mobileHeaderActiveCaret();


	//  FACEBOOK FIXES  //
	d.facebookCommentResponsiveness();


})



})(jQuery, window, Modernizr);
