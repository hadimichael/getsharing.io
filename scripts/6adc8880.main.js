window.GETSHARING=window.GETSHARING||{},GETSHARING.IS_DEBUG=!1,"undefined"==typeof console&&(window.console={},console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=function(){}),GETSHARING.IS_DEBUG||(console.log=function(){}),function(a){"use strict";a.init=function(){try{Parse.initialize("MKJGcu3DFdCIFr8vz7CTEyTiynIJDqnfr9vI70AH","GyBawjtKWHkDa1UuyqA2elU8sgU3rezdWz4TJtkf")}catch(b){console.error("Parse didn't initialise")}a.utils.init(),a.subscribe.init()}}(GETSHARING),$(document).ready(function(){"use strict";$("html").removeClass("no-js"),$(".alert").removeClass("alert-warning"),GETSHARING.init()}),function(a){"use strict";var b=["x120.148.231.137"],c=function(a){return a.length?($("html,body").animate({scrollTop:a.offset().top},500),!1):void 0},d=function(){$("a[href*=#]:not([href=#])").on("click.scroll",function(a){if(a.preventDefault(),location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var b=$(this.hash);b=b.length?b:$("[name="+this.hash.slice(1)+"]"),c(b)}})},e=function(){var a="http://www.telize.com/jsonip?callback=?",c=$(".hero .load-app");c.button("loading"),$.getJSON(a,function(a){$.inArray(a.ip,b)>=0?(c.off("click.scroll"),c.on("click.launch",function(a){a.preventDefault(),window.location.replace("http://app.getsharing.io")})):c.on("click.launch",function(a){a.preventDefault(),$("#request-beta input[name=email]").focus()}),c.button("reset")})};a.utils={init:function(){d(),e()}}}(GETSHARING),function(a){"use strict";var b=function(a){var b=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return b.test(a)};a.subscribe={init:function(){$(".form-request-beta").submit(function(a){a.preventDefault();var c=$("input[name=email]",this),d=$("button[type=submit]",this),e=$("#request-beta .alert"),f=c.val();if(f.length>0&&b(f)){d.button("loading"),c.attr("disabled","disabled");try{var g=Parse.Object.extend("subscriber"),h=new g;h.set("email",f),h.set("beta_request",!0),h.save().then(function(){e.addClass("alert-success"),e.find(".message").html("<strong>Requested!</strong> Thanks for you interest. I'll be in touch soon.")},function(a){e.addClass("alert-danger"),e.find(".message").html("<strong>Error!</strong> "+a.description+".")}).then(function(){e.fadeIn(),d.button("reset"),c.removeAttr("disabled"),c.val("")})}catch(i){e.addClass("alert-warning"),e.find(".message").html("<strong>Uh oh!</strong> "+i+". Try refreshing the page."),e.fadeIn()}}else e.addClass("alert-warning"),e.find(".message").html("<strong>Uh oh!</strong> Please enter a valid email address."),e.fadeIn()})}}}(GETSHARING);