function introHeight(){var e=$(window).height();$("#fullscreen-banner .fount-banner").css({height:e}),$(".section-full").css({height:e})}function Animation(){var e=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0});e.init()}function portfolioPopup(){$(".popup").length>0&&$(".popup").magnificPopup({type:"ajax",removalDelay:300,mainClass:"mfp-fade"}),$(".gallery-item").length>0&&$(".gallery-item").magnificPopup({type:"image",gallery:{enabled:!0}})}function portfolioBgColor(){$(".folio-masonry .folio-item").each(function(){var e=$(this).attr("data-color");$(this).find(".folio-overlay").css("background-color",e)})}function GoogleMap(){function e(){var e={zoom:11,scrollwheel:!1,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}]},i=document.getElementById("map"),a=new google.maps.Map(i,e);new google.maps.Marker({position:new google.maps.LatLng(40.6,-73.94),map:a,title:"Megatron",icon:t}),new google.maps.Marker({position:new google.maps.LatLng(40.68,-73.8),map:a,title:"Megatron",icon:t}),new google.maps.Marker({position:new google.maps.LatLng(40.73,-74.128),map:a,title:"Megatron",icon:t})}var t="../images/assets/map-marker.png";$("#map").length>0&&(void 0!=$("#map").attr("data-marker-image")&&(t=$("#map").attr("data-marker-image")),google.maps.event.addDomListener(window,"load",e))}function initializePortfolio(){function e(){v.fadeIn().removeClass("projectError").html(""),h||(h=!0,w.load(d+" div#page-wrapper",function(e,i,a){"success"==i&&(h=!1,c=$("div#page-wrapper"),$("#page-wrapper").waitForImages(function(){t()}),$(".container").fitVids()),"error"==i&&(v.addClass("projectError").append(loadingError),v.find("p").slideDown())}))}function t(){v.fadeOut("fast",function(){i()})}function i(){m=w.children("div#page-wrapper").outerHeight()+"px",w.animate({opacity:1,height:m},function(){$(".container").fitVids(),p=$("html,body").scrollTop(),_.fadeIn()}),f=y.find("div.folio-item.current").index(),u=$("div.folio-item").length-1,f==u?($("#fount-right a").addClass("disabled"),$("#fount-left a").removeClass("disabled")):0==f?($("#fount-left a").addClass("disabled"),$("#fount-right a").removeClass("disabled")):$("#fount-left a,#fount-right a").removeClass("disabled")}function a(e){_.fadeOut(100),w.animate({opacity:0,height:"0px"}),w.empty(),"undefined"!=typeof e&&""!=e&&(location="#!"),y.find("div.folio-item.current").removeClass("current")}var o,n,s,r,l,d,c,f,p,u,m,h=!1,g=!0,b=!1,v=$("div#loader"),y=$("div#portfolio-wrap"),w=$("div#ajax-content-inner"),_=$("#top-bar-wrapper"),k="ajax/inline";$(window).bind("hashchange",function(){l=$(window.location).attr("hash");var t="#!"+k+"/",i=t.length;if(l.substr(0,i)==t){var o=50,n=$("nav").outerHeight()+o;l=$(window.location).attr("hash"),d=l.replace(/[#\!]/g,""),y.find("div.folio-item.current").removeClass("current"),1==g&&l.substr(0,i)==t?$("html,body").stop().animate({scrollTop:w.offset().top-20+"px"},800,"easeOutExpo",function(){e()}):0==g&&l.substr(0,i)==t?$("html,body").stop().animate({scrollTop:w.offset().top-n+"px"},800,"easeOutExpo",function(){0==b?e():w.animate({opacity:0,height:m},function(){e()}),_.fadeOut("100")}):(""==l&&0==g||l.substr(0,i)!=t&&0==g||l.substr(0,i)!=t&&1==g)&&(p=l,$("html,body").stop().animate({scrollTop:p+"px"},1e3,function(){a()})),$(".folio-icons-wrap").length>0?y.find('div.folio-item .folio-icons-wrap a.ajax-inline[href="#!'+d+'"]').parent().parent().parent().addClass("current"):y.find('div.folio-item a.ajax-inline[href="#!'+d+'"]').parent().parent().addClass("current")}}),$("#fount-right").on("click",function(){return o=y.find(".folio-item.current"),n=o.next(".folio-item"),r=$(n).find(".ajax-inline").attr("href"),$(this).find("a").attr("href",r),0===n.length?!1:(o.removeClass("current"),void n.addClass("current"))}),$("#fount-left").on("click",function(){return o=y.find(".folio-item.current"),s=o.prev(".folio-item"),r=$(s).find(".ajax-inline").attr("href"),$(this).find("a").attr("href",r),0===s.length?!1:(o.removeClass("current"),void s.addClass("current"))}),$("#squared-close").on("click",function(){return a($(this).attr("data-href")),v.fadeOut(),!1}),g=!1}function initRotationText(){$("#js-rotating").length>0&&$("#js-rotating").Morphext({animation:"fadeInDown",separator:",",speed:2e3,complete:function(){}}),$("#js-rotating-2").length>0&&$("#js-rotating-2").Morphext({animation:"flipInX",separator:",",speed:2e3,complete:function(){}})}function hasParentClass(e,t){return e===document?!1:classie.has(e,t)?!0:e.parentNode&&hasParentClass(e.parentNode,t)}function init_sidebar(e){$(".hidden-bar-toggle").on("click",function(t){prk_toggle_sidebar(e)}),$(".sidebar_opener a").on("click",function(t){t.preventDefault(),prk_toggle_sidebar(e)})}function prk_toggle_sidebar(e){e===!1?($(".hidden-bar-toggle").removeClass("hover_trigger"),e=!0,$("body").addClass("prk_shifted"),$(".hidden-bar").css({visibility:"visible"}),setTimeout(function(){document.addEventListener("click",function(t){("close_flag"===t||hasParentClass(t.target,"hider_flag"))&&e===!0&&prk_toggle_sidebar(e),t.target.className.includes("onepage")&&e===!0&&prk_toggle_sidebar(e)}),$("#body_hider").addClass("prk_shifted_hider"),$("body").addClass("showing_hidden_sidebar")},300)):(e=!1,$("body").removeClass("prk_shifted"),$("body").removeClass("showing_hidden_sidebar"),$("#body_hider").removeClass("prk_shifted_hider"),setTimeout(function(){document.addEventListener("click",function(t){("close_flag"===t||hasParentClass(t.target,"hider_flag"))&&e===!0&&prk_toggle_sidebar(e),t.target.className.includes("onepage")&&e===!0&&prk_toggle_sidebar(e)}),$(".hidden-bar").css({visibility:"hidden"})},300))}function is_mobile(){var e=!1;return function(t){(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())||/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t.toLowerCase())||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4).toLowerCase()))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}function banner_resize(){$.browser.msie&&8===parseInt($.browser.version,10)?height_fix=$(window).height():height_fix=window.innerHeight?window.innerHeight:$(window).height(),$(".hidden-bar,.hidden-bar_scroller").outerHeight(height_fix)}function fullScreenSlider(e){var t=0;$(".super_height").each(function(){var i=$(this);if($(window).on("debouncedresize",function(e){setTimeout(function(){$("body").hasClass("menu_at_top")?i.find(".owl-wrapper-outer,.owl-item").css({height:height_fix-$(".header-logo").height()}):i.find(".owl-wrapper-outer,.owl-item").css({height:height_fix-parseInt($("#fullscreen-banner").css("padding-top"),10)+2});var e=$(window).width(),t=height_fix-parseInt($("#fullscreen-banner").css("padding-top"),10)+2;i.find(".owl-item img.fount_vsbl").each(function(){var a=$(this),o=parseInt(a.attr("data-or_w"),10),n=parseInt(a.attr("data-or_h"),10),s=t/n;a.css("height",t),a.css("width",o*s),o=a.width(),n=a.height(),e>o&&(s=e/o,a.css("width",e),a.css("height",n*s)),a.css({"margin-left":-(a.width()-e)/2}),$(window).width()<780?a.css("margin-top",0):a.css("margin-top",-(a.height()-i.find(".owl-wrapper-outer").height())/2)}),i.find(".sld-v-center").each(function(){$(this).css({"margin-top":-parseInt($(this).height()/2,10)})})},50)}),i.find(".item").length>1&&"true"===i.attr("data-autoplay")){var a=i.attr("data-delay");e&&"1"!==t&&(a=!1)}else var a=!1;i.fitVids().owlCarousel({autoPlay:a,navigation:"true"===i.attr("data-navigation")?!0:!1,navigationText:['<i class="icon-left-open-big"></i>','<i class="icon-right-open-big"></i>'],pagination:"true"===i.attr("data-pagination")?!0:!1,slideSpeed:300,paginationSpeed:400,items:1,lazyLoad:!1,itemsDesktop:!1,itemsDesktopSmall:!1,itemsTablet:!1,itemsMobile:!1,itemsScaleUp:!0,transitionStyle:"fade",touchDrag:"true"===i.attr("data-touch")?!0:!1,addClassActive:!0,afterInit:function(){setTimeout(function(){setTimeout(function(){i.find(".sld-v-center").each(function(){$(this).css({"margin-top":-parseInt($(this).height()/2,10)})})},10),i.find(".lazyOwl").each(function(){$(this).attr("src",$(this).attr("data-src")),$(this).css({display:"block"})})},750),i.find(".owl-pagination").css({"margin-top":-i.find(".owl-pagination").height()/2}),$(window).trigger("debouncedresize")},afterAction:function(){i.find(".headings-top,.headings-body,.slider_action_button").removeClass("fount_animate_slide");var e="#fount_slide_"+this.owl.currentItem;if(i.hasClass("just_init")){var t=750;i.removeClass("just_init")}else var t=0;setTimeout(function(){"default"!==i.find(e).find(".slider_action_button a").attr("data-color")&&($("#fount_wrapper").hasClass("solid_buttons")?i.find(e).find(".slider_action_button a").css({"background-color":i.find(e).find(".slider_action_button a").attr("data-color")}):i.find(e).find(".slider_action_button a").css({"border-color":i.find(e).find(".slider_action_button a").attr("data-color"),color:i.find(e).find(".slider_action_button a").attr("data-color")})),"default"!==i.find(e).find(".slider-scroll-button a").attr("data-color")&&($("#fount_wrapper").hasClass("solid_buttons")?i.find(e).find(".slider-scroll-button a").css({"background-color":i.find(e).find(".slider-scroll-button a").attr("data-color")}):i.find(e).find(".slider-scroll-button a").css({"border-color":i.find(e).find(".slider-scroll-button a").attr("data-color"),color:i.find(e).find(".slider-scroll-button a").attr("data-color")})),i.find(e).find(".headings-top").addClass("fount_animate_slide"),i.find(e).find(".headings-body").addClass("fount_animate_slide"),i.find(e).find(".slider_action_button").addClass("fount_animate_slide")},t)}})})}function initLogoHeader(){$(".header-logo-holder").imagesLoaded(function(){setTimeout(function(){$("#prk_alt_logo_image").css({"max-height":$("#prk_alt_logo_image").attr("height")+"px"}),$("#prk_logo_image").css({"max-height":$("#prk_logo_image").attr("height")+"px"}),$(".fount_logo_above.fount_forced_menu #centered_block").css({"margin-top":$("#prk_alt_logo_image").attr("height")+"px"});var e=!1;void 0!==$("#content").attr("data-parent")&&(e===!1&&$("#menu-section .sf-menu>li>a").each(function(){$(this).attr("href")===$("#content").attr("data-parent")&&($(this).parent().addClass("active"),e=!0)}),e===!1&&$("#menu-section .sf-menu li a").each(function(){$(this).attr("href")===$("#content").attr("data-parent")&&($(this).parent().parent().parent().addClass("active"),e=!0)})),e===!1&&$("#menu-section .sf-menu li").each(function(){$(this).hasClass("active")&&$(this).parent().hasClass("sub-menu")&&($(this).parent().parent().addClass("active"),e=!0)}),e===!1&&$(".mini-site-header").length&&(window.location.href===$("#menu-section .sf-menu>li:first-child>a").attr("href").split("#")[0]?$("#menu-section .sf-menu>li:first-child").addClass("active"):$("#menu-section .sf-menu>li>a").each(function(){window.location.href===$(this).attr("href")&&($("#menu-section ul li.active").removeClass("active"),$(this).parent().addClass("active"))})),$("#header-nav").addClass("first-anim")},50)})}function OwlCarousel(){var e=is_mobile()===!0?!0:!1;$(".testimonials_slider").each(function(){$(this).owlCarousel({items:1,loop:!0,mouseDrag:!0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1]})}),$(".post-slider").each(function(){$(this).owlCarousel({items:3,loop:!0,mouseDrag:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1]})}),$(".gallery-slider").each(function(){$(this).owlCarousel({items:1,loop:!0,mouseDrag:!0,nav:!1,dots:!1,pagination:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1]})}),$(".member-ul-slider").each(function(){$(this).owlCarousel({items:3,loop:!0,mouseDrag:!0,nav:!1,dots:!1,pagination:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1]})}),$(".products-ul-slider").each(function(){$(this).owlCarousel({items:4,loop:!0,mouseDrag:!0,nav:!1,dots:!1,pagination:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1]})}),$(".twitter-slider").each(function(){var t=$(this);if(e)var i=!1;else var i=!0;t.flexslider({animation:"slide",useCSS:!1,slideshow:i,slideshowSpeed:5e3,animationDuration:300,smoothHeight:!0,directionNav:!0,controlNav:!1,keyboardNav:!1,touchDrag:!1,prevText:'<i class="fa fa-chevron-left prk_less_opacity"></i>',nextText:'<i class="fa fa-chevron-right prk_less_opacity"></i>',start:function(e){e.css({"min-height":0}),$(window).trigger("debouncedresize")}})})}