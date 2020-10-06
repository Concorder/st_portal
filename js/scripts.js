$(document).ready(function(){
/*Login*/
    var ifLogged = false
    var clicked = 0;
    let profIcon = $('#profile');
    if (!ifLogged) showSubmenu();

    function showSubmenu() {
        function stopDefAction(evt) {
            evt.preventDefault();
        }
        profIcon.on('click', stopDefAction, false);

        profIcon.on('click',function () {
            if (clicked == 0) {
                $('#sub_menu').slideDown(500);
                clicked = 1;

            } else {
                $('#sub_menu').slideUp(500);
                clicked = 0;
            }
         });

    }
    // 18+ pop up
    // delete localStorage.popped;
    if (!localStorage.getItem('popped', 'yes')) {
        console.log('zzzz')
        $('#popup18').css('display', 'flex')
        $('#yes').on('click', function () {
            $('#popup18').fadeOut(300);
            localStorage.setItem('popped', 'yes')
        });
    }



//adding an anchor target
    $('.navbar').attr('id', 'anch_target')
});


/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SweetScroll=e()}(this,function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},e=!("undefined"==typeof window||!window.document||!window.document.createElement),n=!!e&&(window.history&&"pushState"in window.history&&"file:"!==window.location.protocol),o=function(){var t=!1;if(!e)return t;try{var n=window,o=Object.defineProperty({},"passive",{get:function(){t=!0}});n.addEventListener("test",null,o),n.removeEventListener("test",null,o)}catch(t){}return t}(),i=function(t){return"string"==typeof t},r=function(t){return"function"==typeof t},u=function(t){return Array.isArray(t)},a=function(t,e){return t&&t.hasOwnProperty(e)},l=e?window.requestAnimationFrame.bind(window):null,s=e?window.cancelAnimationFrame.bind(window):null,c=Math.cos,f=Math.sin,p=Math.pow,h=Math.sqrt,d=Math.PI,v={linear:function(t){return t},easeInQuad:function(t,e,n,o,i){return o*(e/=i)*e+n},easeOutQuad:function(t,e,n,o,i){return-o*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,o,i){return(e/=i/2)<1?o/2*e*e+n:-o/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,o,i){return o*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,o,i){return o*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,o,i){return(e/=i/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,o,i){return o*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,o,i){return-o*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,o,i){return(e/=i/2)<1?o/2*e*e*e*e+n:-o/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,o,i){return o*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,o,i){return o*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,o,i){return(e/=i/2)<1?o/2*e*e*e*e*e+n:o/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,o,i){return-o*c(e/i*(d/2))+o+n},easeOutSine:function(t,e,n,o,i){return o*f(e/i*(d/2))+n},easeInOutSine:function(t,e,n,o,i){return-o/2*(c(d*e/i)-1)+n},easeInExpo:function(t,e,n,o,i){return 0===e?n:o*p(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,o,i){return e===i?n+o:o*(1-p(2,-10*e/i))+n},easeInOutExpo:function(t,e,n,o,i){return 0===e?n:e===i?n+o:(e/=i/2)<1?o/2*p(2,10*(e-1))+n:o/2*(2-p(2,-10*--e))+n},easeInCirc:function(t,e,n,o,i){return-o*(h(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,o,i){return o*h(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,o,i){return(e/=i/2)<1?-o/2*(h(1-e*e)-1)+n:o/2*(h(1-(e-=2)*e)+1)+n}},g=function(t){return Array.prototype.slice.call(t?document.querySelectorAll(t):[])},w=function(t){return g(t).shift()||null},m=function(t){return t instanceof Element},y=function(t){return t===window},x=function(t){return t===document.documentElement||t===document.body},b=function(t,e){if(m(e))return t===e;for(var n=g(e),o=n.length;--o>=0&&n[o]!==t;);return o>-1},O=function(t){return Math.max(t.scrollHeight,t.clientHeight,t.offsetHeight)},$=function(t){return Math.max(t.scrollWidth,t.clientWidth,t.offsetWidth)},M=function(t){return{width:$(t),height:O(t)}},E={y:"scrollTop",x:"scrollLeft"},I={y:"pageYOffset",x:"pageXOffset"},C=function(t,e){return y(t)?t[I[e]]:t[E[e]]},S=function(t,e,n){if(y(t)){var o="y"===n;t.scrollTo(o?t.pageXOffset:e,o?e:t.pageYOffset)}else t[E[n]]=e},k=function(t,e){var n=t.getBoundingClientRect();if(n.width||n.height){var o={top:0,left:0},i=void 0;if(y(e)||x(e))i=document.documentElement,o.top=window[I.y],o.left=window[I.x];else{var r=(i=e).getBoundingClientRect();o.top=-1*r.top+i[E.y],o.left=-1*r.left+i[E.x]}return{top:n.top+o.top-i.clientTop,left:n.left+o.left-i.clientLeft}}return n},A=e?"onwheel"in document?"wheel":"mousewheel":"wheel",L=function(t,e,n,i,r){n.split(" ").forEach(function(n){t[e](function(t){return"wheel"===t?A:t}(n),i,!!o&&{passive:r})})},P=function(t,e,n,o){return L(t,"addEventListener",e,n,o)},Q=function(t,e,n,o){return L(t,"removeEventListener",e,n,o)},z=/^(\+|-)=(\d+(?:\.\d+)?)$/,W=function(e,n){var o,r={top:0,left:0,relative:!1};if(a(e,"top")||a(e,"left"))r=t({},r,e);else if(u(e))if(e.length>1)r.top=e[0],r.left=e[1];else{if(1!==e.length)return null;r.top=n?e[0]:0,r.left=n?0:e[0]}else if(!u(o=e)&&o-parseFloat(o)+1>=0)n?r.top=e:r.left=e;else{if(!i(e))return null;var l=e.trim().match(z);if(!l)return null;var s=l[1],c=parseInt(l[2],10);"+"===s?(r.top=n?c:0,r.left=n?0:c):(r.top=n?-c:0,r.left=n?0:-c),r.relative=!0}return r},j={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,easing:"easeOutQuint",offset:0,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,before:null,after:null,cancel:null,complete:null,step:null};return function(){function o(n,i){var r=this;this.$el=null,this.ctx={$trigger:null,opts:null,progress:!1,pos:null,startPos:null,easing:null,start:0,id:0,cancel:!1,hash:null},this.loop=function(t){var e=r,n=e.$el,i=e.ctx;if(i.start||(i.start=t),i.progress&&n){var u=i.opts,a=i.pos,l=i.start,s=i.startPos,c=i.easing,f=u.duration,p={top:"y",left:"x"},h=t-l,d=Math.min(1,Math.max(h/f,0));Object.keys(a).forEach(function(t){var e=a[t],o=s[t],i=e-o;if(0!==i){var r=c(d,f*d,0,1,f);S(n,Math.round(o+i*r),p[t])}}),h<=f?(r.hook(u,"step",d),i.id=o.raf(r.loop)):r.stop(!0)}else r.stop()},this.handleClick=function(e){for(var n=r.opts,o=e.target;o&&o!==document;o=o.parentNode)if(b(o,n.trigger)){var i=JSON.parse(o.getAttribute("data-scroll-options")||"{}"),u=o.getAttribute("data-scroll")||o.getAttribute("href"),a=t({},n,i),l=a.preventDefault,s=a.stopPropagation,c=a.vertical,f=a.horizontal;l&&e.preventDefault(),s&&e.stopPropagation(),r.ctx.$trigger=o,f&&c?r.to(u,a):c?r.toTop(u,a):f&&r.toLeft(u,a);break}},this.handleStop=function(t){var e=r.ctx,n=e.opts;n&&n.cancellable?(e.cancel=!0,r.stop()):t.preventDefault()},this.opts=t({},j,n||{});var u=null;e&&(u="string"==typeof i?w(i):null!=i?i:window),this.$el=u,u&&this.bind(!0,!1)}return o.create=function(t,e){return new o(t,e)},o.prototype.to=function(n,o){if(e){var r=this.$el,u=this.ctx,a=this.opts,l=u.$trigger,s=t({},a,o||{}),c=s.offset,f=s.vertical,p=s.horizontal,h=m(s.header)?s.header:w(s.header),d=i(n)&&/^#/.test(n)?n:null;if(u.opts=s,u.cancel=!1,u.hash=d,this.stop(),r){var v=W(c,f),g=W(n,f),b={top:0,left:0};if(g)if(g.relative){var E=C(r,f?"y":"x");b.top=f?E+g.top:g.top,b.left=f?g.left:E+g.left}else b=g;else if(i(n)&&"#"!==n){var I=w(n);if(!I)return;b=k(I,r)}v&&(b.top+=v.top,b.left+=v.left),h&&(b.top=Math.max(0,b.top-M(h).height));var S=function(t){var e=y(t)||x(t);return{viewport:{width:e?Math.min(window.innerWidth,document.documentElement.clientWidth):t.clientWidth,height:e?window.innerHeight:t.clientHeight},size:e?{width:Math.max($(document.body),$(document.documentElement)),height:Math.max(O(document.body),O(document.documentElement))}:M(t)}}(r),A=S.viewport,L=S.size;b.top=f?Math.max(0,Math.min(L.height-A.height,b.top)):C(r,"y"),b.left=p?Math.max(0,Math.min(L.width-A.width,b.left)):C(r,"x"),!1!==this.hook(s,"before",b,l)?(u.pos=b,this.start(s),this.bind(!1,!0)):u.opts=null}}},o.prototype.toTop=function(e,n){this.to(e,t({},n||{},{vertical:!0,horizontal:!1}))},o.prototype.toLeft=function(e,n){this.to(e,t({},n||{},{vertical:!1,horizontal:!0}))},o.prototype.toElement=function(t,n){var o=this.$el;e&&o&&this.to(k(t,o),n||{})},o.prototype.stop=function(t){void 0===t&&(t=!1);var e=this.$el,n=this.ctx,i=n.pos;e&&n.progress&&(o.caf(n.id),n.progress=!1,n.start=0,n.id=0,t&&i&&(S(e,i.left,"x"),S(e,i.top,"y")),this.complete())},o.prototype.update=function(e){if(this.$el){var n=t({},this.opts,e);this.stop(),this.unbind(!0,!0),this.opts=n,this.bind(!0,!1)}},o.prototype.destroy=function(){this.$el&&(this.stop(),this.unbind(!0,!0),this.$el=null)},o.prototype.onBefore=function(t,e){return!0},o.prototype.onStep=function(t){},o.prototype.onAfter=function(t,e){},o.prototype.onCancel=function(){},o.prototype.onComplete=function(t){},o.prototype.start=function(t){var e=this.ctx;e.opts=t,e.progress=!0,e.easing=r(t.easing)?t.easing:v[t.easing];var n=this.$el,i={top:C(n,"y"),left:C(n,"x")};e.startPos=i,e.id=o.raf(this.loop)},o.prototype.complete=function(){var t=this.$el,o=this.ctx,i=o.hash,r=o.cancel,u=o.opts,a=o.pos,l=o.$trigger;if(t&&u){if(null!=i&&i!==window.location.hash){var s=u.updateURL;e&&n&&!1!==s&&window.history["replace"===s?"replaceState":"pushState"](null,"",i)}this.unbind(!1,!0),o.opts=null,o.$trigger=null,r?this.hook(u,"cancel"):this.hook(u,"after",a,l),this.hook(u,"complete",r)}},o.prototype.hook=function(t,e){for(var n,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];var u,a,l=t[e];return r(l)&&(u=l.apply(this,o.concat([this]))),a=(n=this)["on"+(e[0].toUpperCase()+e.slice(1))].apply(n,o),void 0!==u?u:a},o.prototype.bind=function(t,e){var n=this.$el,o=this.ctx.opts;n&&(t&&P(n,"click",this.handleClick,!1),e&&P(n,"wheel touchstart touchmove",this.handleStop,!o||o.cancellable))},o.prototype.unbind=function(t,e){var n=this.$el,o=this.ctx.opts;n&&(t&&Q(n,"click",this.handleClick,!1),e&&Q(n,"wheel touchstart touchmove",this.handleStop,!o||o.cancellable))},o.raf=l,o.caf=s,o}()});
document.addEventListener(
    'DOMContentLoaded',
    () => {
        const scroller = new SweetScroll({
            duration: 1500,
            offset: -33,
        });
    },
    false,
);
