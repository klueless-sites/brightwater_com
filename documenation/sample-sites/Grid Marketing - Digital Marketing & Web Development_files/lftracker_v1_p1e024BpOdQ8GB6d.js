!function(){"use strict";function c(n){var t=r();return t[n]=t[n]||function(n){return{id:n,plugins:{},getPlugins:function(){var n=[];for(var t in this.plugins)n.push(this.plugins[t]);return n},autoTrackingInitialized:!1}}(n),t[n]}function o(n,t){var e=c(n);return e.plugins[t]=e.plugins[t]||{},e.plugins[t]}function r(){var n=nn();return n.r=n.r||{},n.r}tn()&&(window.ldfdr.registerTracker=function(n,t,e,r,i,o,a){var u=c(n);return u.track=t,u.identify=e,u.pageview=r,u.getClientId=i,u.acceptCookie=o,u.rejectCookie=a,u},window.ldfdr.setTrackerOption=function(n,t,e,r){c(n)[t]=void 0!==r?r:e},window.ldfdr.registerPlugin=function(n,t,e){var r=c(n),i=o(n,t);i.init=function(){try{e()}catch(n){console.error("Error during plugin initialization",i,n)}},r.pluginsInitialized&&i.init()},window.ldfdr.registerPluginConfig=function(n,t,e,r){o(n,t).config=void 0!==r?r:e});var n,t,e,i,w="p1e024BpOdQ8GB6d",a="2.50.1",u="_lfa_debug_settings",f=["cookieDomain","enableAutoTracking","trackingCookieDurationDays"];if("undefined"!=typeof window&&void 0!==window.ldfdr){window.ldfdr=window.ldfdr||{},window.ldfdr.cfg=window.ldfdr.cfg||{};var l=function(){var n=bn(u)||"{}";try{return JSON.parse(n)}catch(n){return{}}}();n=window.ldfdr,t=w,e=a,i=l,n.setTrackerOption(t,"lfaCookieEnabled",!0,i.enableCookie),n.setTrackerOption(t,"consentManagementEnabled",!1,i.enableCm),n.setTrackerOption(t,"useSendBeaconApi",!1,i.useBeacon),n.setTrackerOption(t,"autoTrackingMode","on_script_load",i.atMode),n.setTrackerOption(t,"foreignCookieSettings",{"intercom":"^intercom-id-.*","hubspot":"^hubspotutk$"}),n.setTrackerOption(t,"crossDomainLinking",{"enabled":false}),n.setTrackerOption(t,"useDualStackEndpoint",!1,i.useDs),n.setTrackerOption(t,"trackingCookieDurationDays",730),n.setTrackerOption(t,"version",e),n.registerPluginConfig(t,"file-downloads",{filesEnabled:!0,filesToMatch:/(\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.key|\.txt|\.dmg|\.exe)(\?|$)/}),n.registerPluginConfig(t,"form-tracking",{formTrackingMode:"disabled",fields:[],excluded:[]},i.trackForms),n.registerPluginConfig(t,"yt-playback",{ytPlaybackTrackingEnabled:!0},i.trackYt),n.registerPluginConfig(t,"intercom-tracking",{intercomTrackingEnabled:!1},i.trackIntercom),n.registerPluginConfig(t,"discover",{jsConnectorConfigs:[]}),n.registerPluginConfig(t,"spa-tracking",{}),n.registerPluginConfig(t,"ga-connector",{gaConnectorSettings:[]}),function(n,t){n._q=n._q||[];for(var e=0;e<n._q.length;e++){var r=n._q[e];switch(r[0]){case"cfg":if(4!=r.length){console.warn("* [leadfeeder] invalid 'cfg' command",r);break}var i=r[1];if(-1==f.indexOf(i)){console.warn("* [leadfeeder] unsupported 'cfg' command",r);break}r[3]===t&&n.setTrackerOption(t,i,r[2])}}}(window.ldfdr,w)}var d="__discoverLoadEventEmitted",s={get:function(n){return window[n]},set:function(n,t){window[t]=n},clear:function(n){this.set(null,n)}};function g(t,e){if(!t[d])return function(t,n,e){var r=""===n?mt:n;return r=function(n){return n===mt||n[n.length-1]!==mt?n:n.slice(0,-1)}(r),e.some(function(n){return function(n,t,e){var r=function(n){return n.split(/\/(.*)/).filter(function(n){return""!==n})}(e),i=r[0],o=mt+(2<=r.length?r[1]:"");return i===n&&(o===t||function(n,t){if(0<=t.indexOf("*")&&0===n.indexOf(t.replace("/*","").replace("*","")))return!0;return t===mt}(t,o))}(t,r,n)})}(window.location.hostname,window.location.pathname,t.paths)?void B(t.api_key,function(n){!function(n,t){200!==n.meta.status&&404!==n.meta.status||s.set(n,t)}(n,t.js_object_name),function(t){window.dataLayer=window.dataLayer||[],window.dataLayer.some(function(n){return n.event===t})||(window[d]=!0,window.dataLayer.push({event:t}))}(t.event_name),t[d]=!0,e()}):e()}tn()&&nn().registerPlugin(w,"discover",function(){!function(n){n.jsConnectorConfigs&&0!==n.jsConnectorConfigs.length&&bt(n.jsConnectorConfigs.map(function(t){return function(n){g(t,n)}}),0)}(nn().getTracker(w).plugins.discover.config)}),tn()&&nn().registerPlugin(w,"file-downloads",function(){var e=nn().getTracker(w),i=e.plugins["file-downloads"].config;function o(n){function t(){n.removeEventListener("click",t),A(),e.track(function(n){var t=function(n){var t=n.replace(/https?\:\/\//,"").split("/"),e=t[t.length-1].replace(/[\?&].*/,"");return 1!=t.length&&e?e:null}(n.href),e=window.location.href;return{eventType:"file-download",properties:{url:function(n,t){return"/"==n.href.charAt(0)?function(n){return"/"==n.charAt(n.length-1)?n.substr(0,n.length-1):n}(t)+n.href:n.href}(n,e),filename:t},pageUrl:e,pageTitle:t}}(n))}n.addEventListener("click",t)}function n(){for(var n=document.getElementsByTagName("a"),t=0;t<n.length;t++){var e=n[t];if(Et(e.getAttribute("href")).match(i.filesToMatch)){var r="data-lf-fd-inspected-"+w;if(e.getAttribute(r))continue;e.setAttribute(r,"true"),o(e)}}}i.filesEnabled&&(n(),At(n))}),tn()&&nn().registerPlugin(w,"form-tracking",function(){var i=500,c=["button","hidden","image","password","reset","submit"],o=0,a=nn().getTracker(w),f=function(n){var t=(n.fields||[]).map(function(n){return{nameRegex:new RegExp(n.nameRegex,"i"),type:n.type,lfProperty:n.lfProperty}}),e=(n.excluded||[]).map(function(n){return{pageUrl:new RegExp(n.pageUrl,"i")}});return{formTrackingMode:n.formTrackingMode,fields:t,excluded:e}}(a.plugins["form-tracking"].config);function t(n){l(n.target,"submit-event")}function u(n){if(!n)return null;var t=n.type,e=n.tagName.toLowerCase();return"submit"===t?"submit-button":"button"===t||"button"===e?"normal-button":null}function e(n){var t=n.target,e=u(t)||u(t.parentElement);if(e){var r=t.form||t.closest("form");r&&l(r,e)}}function l(n,t){if(!(function(){var t=window.location.href;return f.excluded.some(function(n){return t.match(n.pageUrl)})}()||o+i>=(new Date).getTime())){var e="legacy_email_detection"===f.formTrackingMode?function(n){for(var t=n.querySelectorAll("input"),e=0;e<t.length;e++){var r=t[e],i=r.value;if(void 0,("text"===(o=r.type)||"email"===o||!o)&&Ot(i))return i}var o;return null}(n):null,r=function(n){for(var t={},e=n.elements,r=f.fields?f.fields.filter(function(n){return!!n.lfProperty}):[],i=0;i<e.length;i++){var o=e[i],a=o.name;if(a&&!(0<=c.indexOf(o.type))&&(t[a]={name:a,type:o.type},d(n,o))){t[a].value=o.value;var u=g(o,r);u&&(t[a].lfProperty=u)}}return kt(t)}(n);if(e||r&&0!=r.length){o=(new Date).getTime(),A();try{a.track(function(n,t,e,r){var i={formTrackingMode:f.formTrackingMode,formEventType:t},o=n.getAttribute("id"),a=n.getAttribute("class"),u=n.getAttribute("action");e&&(i.email=e);o&&(i.formId=o);a&&(i.formClass=a);u&&(i.formAction=u);r&&(i.inputFields=r);return{eventType:"form-submit",properties:i}}(n,t,e,r),function(){})}catch(n){}}}}function d(n,t){switch(f.formTrackingMode){case"configured_fields":return f.fields.some(function(n){return s(t,n)});case"all_but_excluded":return!0;default:return!1}}function s(n,t){return(!t.type||t.type===n.type)&&n.name.match(t.nameRegex)}function g(n,t){for(var e=0;e<t.length;e++){var r=t[e];if(s(n,r))return r.lfProperty}return null}function r(n){try{if(!n.contentDocument)return;n.contentDocument.addEventListener("submit",t),n.contentDocument.addEventListener("click",e,!0)}catch(n){}}function n(){for(var n=document.getElementsByTagName("iframe"),t=0;t<n.length;t++)v(n[t])}function v(n){var t="data-lf-form-tracking-inspected-"+w;n.getAttribute(t)||(n.setAttribute(t,"true"),r(n),n.addEventListener("load",function(){r(n)}))}switch(f.formTrackingMode){case"disabled":return;case"metadata":case"legacy_email_detection":case"configured_fields":case"all_but_excluded":return document.addEventListener("submit",t),document.addEventListener("click",e,!0),n(),void At(n);default:return}});var v=null,p="__gaConnectorEventsEmitted",m="LFcompanyData",h="LFvisitorInfo";function k(n){-1===window[p].indexOf(n)&&window[p].push(n)}function T(r,i){!function(n,t){var e=K(window),r=n.toLowerCase();e(function(){if(void 0===e.getAll)return t(null);var n=e.getAll().filter(function(n){return n.get("trackingId").toLowerCase()==r})[0];t(n)})}(r.ga_id,function(e){if(!e)return i();B(r.api_key,function(n){var t=F(n.data,r.mappings);!function(n,t,e){var r=K(window);if(null!==e){var i=n.get("name");r(i+".set",e),r(i+".send",{hitType:"event",eventCategory:h,eventAction:m,nonInteraction:!0}),k(t)}}(e,r.ga_id,t),i()})})}function y(n,t){!function(n,t){var e=document.createElement("script");e.type="text/javascript",e.src=n,e.onload=function(){t&&t()},document.getElementsByTagName("head")[0].appendChild(e)}("https://www.googletagmanager.com/gtag/js?id="+n,function(){window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",n),t()})}function b(e,r){function n(){B(e.api_key,function(n){var t=F(n.data,e.mappings);!function(n,t){var e=z(window);null!==t&&(e("config",n,t),e("event",m,{event_category:h,non_interaction:!0,send_to:n}),k(n))}(e.ga_id,t),r()})}z(window)?n():y(e.ga_id,n)}function I(n){(K(window)||z(window)||q(window))&&(clearInterval(v),bt(n.map(function(t){return function(n){!function(n,t){H(n.ga_id)?b(n,t):K(window)&&T(n,t)}(t,n)}}),0))}window[p]=[],tn()&&nn().registerPlugin(w,"ga-connector",function(){!function(n){n.gaConnectorSettings&&0!==n.gaConnectorSettings.length&&(v=setInterval(function(){I(n.gaConnectorSettings)},300),setTimeout(function(){clearInterval(v)},1e4))}(nn().getTracker(w).plugins["ga-connector"].config)}),tn()&&nn().registerPlugin(w,"intercom-tracking",function(){var n=nn().getTracker(w);n.plugins["intercom-tracking"].config.intercomTrackingEnabled&&function(n,t,e,r){var i;t=t||100,e=e||1.5,r=r||15e3;var o=setTimeout(function(){clearInterval(i)},r),a=function(){clearInterval(i),n()?clearTimeout(o):(t*=e,i=setInterval(a,t))};i=setInterval(a,t)}(function(){return!(void 0===window.Intercom||!window.Intercom.booted)&&(window.Intercom("update",{lfClientId:n.getClientId()}),!0)})});var C=null,_=null;function E(t,e,r){setTimeout(function(){r&&(C=_);var n={pageUrl:_=e};C&&(n.referrer=C),t.pageview(n)},0)}function S(n){window.history&&(function(i,o){var a=o.pushState;o.pushState=function(n,t,e){var r=a.apply(o,arguments);return E(i,window.location.href,!0),r};var u=o.replaceState;o.replaceState=function(n,t,e){var r=u.apply(o,arguments);return E(i,window.location.href,!1),r}}(n,window.history),window.addEventListener("popstate",function(){E(n,window.location.href,!0)}),window.addEventListener("hashchange",function(){E(n,window.location.href,!0)}))}tn()&&nn().registerPlugin(w,"spa-tracking",function(){!function(n){switch(_=window.location.href,n.autoTrackingMode){case"spa":S(n)}}(nn().getTracker(w))}),tn()&&nn().registerPlugin(w,"yt-playback",function(){var o=nn().getTracker(w);if(o.plugins["yt-playback"].config.ytPlaybackTrackingEnabled&&window.postMessage){var a={},t={},u=!1,c=0;n(),At(n)}function n(){var n=document.getElementsByTagName("iframe");if(n.length){!function(){if(u)return;window.addEventListener("message",function(n){-1!==["https://www.youtube.com","https://www.youtube-nocookie.com"].indexOf(n.origin)&&void 0!==n.data&&function(n){var t;try{t=JSON.parse(n.data)}catch(n){return}var e=function(n,t){if(a[n])return a[n];for(var e=document.getElementsByTagName("iframe"),r=0;r<e.length;r++){var i=e[r];if(i.contentWindow===t.source||i.contentDocument&&i.contentDocument.defaultView===t.source)return a[n]=i}return null}(t.id,n);if(null===e)return;switch(t.event){case"initialDelivery":!function(n,t){var e=d(t.src);if(!n.info||!n.info.videoData||e.videoData)return;e.videoData=n.info.videoData}(t,e);break;case"onStateChange":!function(n,t){var e=d(t.src);if(-1!==n.info)return;if(e.tracked)return;e.tracked=!0;var r=function(n){return"https://www.youtube.com/watch?v="+s(n)}(t);o.track({eventType:"video-start",properties:{videoUrl:r,videoTitle:function(n){return n?n.title:void 0}(e.videoData)}})}(t,e)}}(n)}),u=!0}();for(var t=0;t<n.length;t++){var e=n[t],r="data-lf-yt-playback-inspected-"+w;if(!e.getAttribute(r)){e.setAttribute(r,"true");var i=++c+1e3;l(e,i),e.addEventListener("load",f(e,i))}}}}function f(n,t){return function(){l(n,t)}}function l(n,t){if(function(n){return function(n){return Ct(n.src,"https://www.youtube.com/embed/")||Ct(n.src,"https://www.youtube-nocookie.com/embed/")}(n)&&function(n){return!!s(n)}(n)&&!function(n){return-1!==n.src.indexOf("enablejsapi=0")}(n)&&!function(n){return-1!==n.src.indexOf("autoplay=1")}(n)}(n))return function(n){return-1===n.src.indexOf("enablejsapi")}(n)?function(n){var t=-1===n.src.indexOf("?")?"?":"&";t+="enablejsapi=1",t+="&origin="+window.location.origin,n.src=n.src+t}(n):void function(n,t){if("undefined"!=typeof YT&&("function"!=typeof YT.get||!n.id||void 0!==YT.get(n.id)))return;e(a[t]=n,{event:"listening",id:t,channel:"widget"}),e(n,{event:"command",func:"addEventListener",args:["onStateChange"],id:t,channel:"widget"})}(n,t)}function d(n){return t[n]||(t[n]={src:n,tracked:!1,videoData:null}),t[n]}function s(n){return n.src.split("/")[4].split("?")[0]}function e(n,t){var e=JSON.stringify(t);n.contentWindow.postMessage(e,"*")}});var O=250;function A(){!function(n){nn().suppressUnloadUntil=n}((new Date).getTime()+O)}!tn()||"suppressUnloadUntil"in nn()||(nn().suppressUnloadUntil=0,window.addEventListener("beforeunload",function(){var n=new Date,t=nn().suppressUnloadUntil;if(!(t<n.getTime()))for(;t>=n.getTime();0)n=new Date},!1));var D,N="_lfa",L=5;function x(n){n.crossDomainLinking.enabled&&n.lfaCookieEnabled&&(D=window.location.href,document.addEventListener("mousedown",function(n){!function(n){var t=function(n){var t,e=0;do{if(P(n))return n;t=n.parentNode,t=(n=t)?n.parentNode:null,e++}while(null!==t&&e<100);return null}(n);if(!t)return;if(!function(n){var t=n.getAttribute("href");return!!t&&(!!gt(t=String(t))&&function(n,t,e){if(U(n,t))return!1;for(var r=0;r<e.length;r++)if(!U(t,e[r])&&U(n,e[r]))return!0;return!1}(n.hostname,document.location.hostname,Jn().crossDomainLinking.allowedDomains))}(t))return;!function(n){var t=n.getAttribute("href");n.setAttribute("href",function(n){n=dt(n,N);var t=function(){var n=Jn().getClientId(),t=String(M());return n+"-"+t}();return lt(n,N,t)}(t))}(t)}(n.target)}))}function R(){if(Jn().crossDomainLinking.enabled)return function(n){var t=st(n,N);if(!t)return;var e=function(n){if(47!==n.length||!/^LF\d\.\d\.[0-9a-z]{16}\.\d{13}-\d{10}$/.test(n))return;var t=n.split("-"),e=t[0],r=parseInt(t[1]),i=M();if(Math.abs(i-r)>L)return;return e}(t=String(t));return e||void 0}(D)}function M(){return Math.floor((new Date).getTime()/1e3)}function U(n,t){n=n.toLowerCase(),t=t.toLowerCase();for(var e=n.split("."),r=t.split("."),i=1;i<=r.length;i++)if(r[r.length-i]!==e[e.length-i])return!1;return!0}function P(n){if(!n)return!1;var t=String(n.nodeName).toLowerCase();return-1!==["a","area"].indexOf(t)}var j={key:"__lf_discover",softRefresh:18e5,ttl:864e6,storedAt:null,get:function(){if(Dn()){var n=window.localStorage.getItem(this.key);if(null!==n){var t=null;try{t=JSON.parse(n),this.storedAt=t.storedAt,delete t.storedAt}catch(n){if(n instanceof SyntaxError)return;throw n}return t}}},set:function(n){Dn()&&(n.storedAt=Date.now(),window.localStorage.setItem(this.key,JSON.stringify(n)),delete n.storedAt)},clear:function(){Dn()&&(this.storedAt=null,window.localStorage.removeItem(this.key))},isExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.ttl},isSoftExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.softRefresh}};function J(n){200!==n.meta.status&&404!==n.meta.status||j.set(n)}function G(n,t){var e=new XMLHttpRequest;e.open("GET",n,!0),e.onload=function(){if(200===this.status){var n=JSON.parse(this.response);t(n)}},e.send()}function F(r,n){if(!n)return null;if(!function(n,t){return n.map(function(n){return Tt(n,t)})}(n,"attribute").map(function(n){return Tt(r,n)}).some(function(n){return null!=n&&""!==n}))return null;var i={};return n.forEach(function(n){var t=Tt(r,n.attribute),e=n.dimension;i[e]=t||n.fallback_value}),i}function B(n,t){var e="https://cs.lf-discover.com/companies/?api_key="+n,r=st(window.location.href,"_lf_discover_demo");""!==r&&(e=lt(e,"demo",r));var i=j.get();""!==r?G(e,function(n){t(n)}):null==i?G(e,function(n){J(n),t(n)}):j.isExpired()?(j.clear(),G(e,function(n){J(n),t(n)})):j.isSoftExpired()?(t(i),G(e,function(n){J(n)})):t(i)}function z(n){return n.gtag||null}function q(n){return n.google_tag_manager||{}}function K(n,t){return(t=n.GoogleAnalyticsObject||"ga")&&n[t]?n[t]:null}function W(n){return n._gat||null}function Y(n,t){for(var e=function(n){return n?"function"!=typeof n._getTrackers?[]:n._getTrackers():[]}(W(n)),r=0;r<e.length;r++)X(e[r]._getAccount(),t.trackingIds,!0)}function $(n,t){for(var e=function(n){return n?"function"!=typeof n.getAll?[]:n.getAll():[]}(K(n)),r=0;r<e.length;r++)X(e[r].get("clientId"),t.clientIds),X(e[r].get("trackingId"),t.trackingIds)}function X(n,t,e){void 0!==n&&-1===t.indexOf(n)&&(e&&"object"==typeof n&&"string"==typeof n.vtp_trackingId?t.push(n.vtp_trackingId):t.push(n))}function H(n){return/^G-[A-Z0-9]*/.test(n)}function V(){return function(n){return n.dataLayer||[]}(window).filter(function(n){return"config"==n[0]}).map(function(n){return n[1]})}function Z(){var n=0,t=[],e=V(),r=Object.keys(q(window)).filter(function(n){return H(n)});for(n=0;n<e.length;n++)X(e[n],t);for(n=0;n<r.length;n++)X(r[n],t);return t}function Q(){var n={clientIds:[],trackingIds:[],measurementIds:Z()};if(null!==K(window)?$(window,n):Y(window,n),!n.clientIds.length){var t=function(){var n=bn("_ga");if(n){var t=n.split(".");if(!(t.length<2))return t[t.length-2]+"."+t[t.length-1]}}();t&&n.clientIds.push(t)}return n}function nn(){return"undefined"==typeof window?null:window.ldfdr}function tn(){return"undefined"!=typeof window&&void 0!==window.ldfdr}function en(t){var n=kt(r());return ht(t)?n.map(function(n){return t(n)}):n}window.ldfdr.getTracker=function(n,t){var e=r()[n]||null;return ht(t)?t(e):e},window.ldfdr.getAll=en,window.ldfdr.track=function(t){en(function(n){n.track(t)})},window.ldfdr.identify=function(t){en(function(n){n.identify(t)})},window.ldfdr.pageview=function(t){en(function(n){n.pageview(t)})},window.ldfdr.acceptCookie=function(t){return en(function(n){return n.acceptCookie(t)}).some(function(n){return!0===n})},window.ldfdr.rejectCookie=function(t){return en(function(n){return n.rejectCookie(t)}).some(function(n){return!0===n})},window.ldfdr.setDebugSettings=function(n){!function(n){wn(u,JSON.stringify(n),36e5)}(n)};var rn,on="none",an="basic",un="all",cn=[on,an,un],fn="__lfaCmClientId",ln="_lfa",dn="LF1.1",sn="_lfa_consent";function gn(){hn(kn()),hn(ln),vn(ln),hn(sn),vn(sn)}function vn(n){if(bn(n)){var t=window.ldfdr.cfg.cookieDomain;if(t)Sn(n,t);else for(var e=_n().reverse(),r=0;r<e.length;r++)if(Sn(n,t=e[r]),!bn(n))return}}function wn(n,t,e){var r=window.ldfdr.cfg.cookieDomain||rn;if(r)On(n,t,e,"/",r);else for(var i=_n(),o=0;o<i.length;o++)if(On(n,t,e,"/",r=i[o]),pn(r)&&bn(n)===t)return void(rn=r)}function pn(n){var t="_lfa_test_cookie_stored",e=(new Date).getTime().toString()+"-"+Math.random().toString();On(t,e,1e3,"/",n);var r=bn(t)===e;return Sn(t,n),r}function mn(n,t,e){if(wn(n,t,e),Dn()){window.localStorage.setItem(n,t);var r=new Date;r.setTime(r.getTime()+e),window.localStorage.setItem(kn(),r.toISOString())}}function hn(n){Dn()&&window.localStorage.removeItem(n)}function kn(){return ln+"_expiry"}function Tn(){return function(){var n=bn(ln);if(!n)return;if(!Ct(n,dn)){var t=function(n){var t;try{t=function(n){if(!n)return 0;var t=function(n){try{return decodeURIComponent(window.atob(n).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(n){return 0}}(n);return t?JSON.parse(t):0}(n)}catch(n){return 0}return t?kt(t)[0]:0}(n);if(t)return t}return n}()||function(){if(!Dn())return 0;var n=window.localStorage.getItem(ln);if(null==n)return 0;var t=window.localStorage.getItem(kn());null!=t&&(new Date).toISOString()>t&&(n=0);return n}()}function yn(){var n=bn(sn);return!n&&Dn()&&(n=window.localStorage.getItem(sn)),n?"true"===n?un:-1==cn.indexOf(n)?null:n:null}function bn(n){var t=new RegExp("(^|;)[ ]*"+n+"=([^;]*)").exec(document.cookie);return t?window.decodeURIComponent(t[2]):0}function In(n,t){n&&Ct(n,dn)||(n=En(yt()));return mn(ln,n,t),n}function Cn(n,t){return-1==cn.indexOf(n)?yn():(mn(sn,n,t),n)}function _n(n){var t=n||document.location.hostname,e=(t=0===t.indexOf("www.")?t.substring(4):t).split(".");if(4===e.length){var r=e[e.length-1];if(parseInt(r,10)==r)return["none"]}for(var i=[],o=e.length-2;0<=o;o--)i.push(e.slice(o).join("."));return i.push("none"),i}function En(n){return dn+"."+n+"."+(new Date).getTime()}function Sn(n,t){On(n,"",-3600,"/",t)}function On(n,t,e,r,i,o){var a;e&&(a=new Date).setTime(a.getTime()+e),document.cookie=n+"="+window.encodeURIComponent(t)+(e?";expires="+a.toGMTString():"")+";path="+(r||"/")+(i&&"none"!==i?";domain="+i:"")+(o?";secure":"")+";SameSite=Lax"}function An(){return pn(null)}function Dn(){try{return!!window.localStorage}catch(n){return!1}}var Nn,Ln=1e3,xn=/^0_([0-9a-f]+)-([0-9a-f]+)-([0-9]*)$/,Rn=null,Mn=[],Un=null,Pn={success:!1},jn=0;function Jn(){return nn().getTracker(w)}function Gn(){var n=Jn(),t=n.foreignCookieSettings,e=[];if(!t||!tt(n))return e;for(var r=function(){for(var n=document.cookie.split(";"),t={},e=0;e<n.length;e++){var r=n[e].split("=");t[Et(r[0]).trim()]=unescape(r.slice(1).join("="))}return t}(),i=Object.keys(r),o=Object.keys(t),a=0;a<o.length;a++)for(var u=o[a],c=t[u],f=0;f<i.length;f++){var l=i[f];if(l.match(c)){var d=r[l];e.push({type:u,value:d})}}return e}function Fn(){return R()||Tn()}function Bn(n){return null===Rn&&(Rn=yn()),!(!zn(n)||!An())&&(qn(n)?function(n){switch(n){case un:case an:return!0;default:return!1}}(Rn):Rn!==on)}function zn(n){return!0===n.lfaCookieEnabled}function qn(n){return!0===n.consentManagementEnabled}function Kn(){return!0===Jn().useDualStackEndpoint}function Wn(n,t){t=t||{};var e=Q(),r=t.eventType||"tracking-event",i=Jn();return{gaTrackingIds:e.trackingIds,gaMeasurementIds:e.measurementIds,gaClientIds:e.clientIds,context:function(n,t){var e=n.referrer||document.referrer;"form-submit"===t&&(e="");return{library:{name:"lftracker",version:a},pageUrl:function(n){if(tt(Jn()))return n;return null===st(n,"utm_term").match(xn)?n:dt(n,"utm_term")}(Yn(n)),pageTitle:n.pageTitle||document.title,referrer:e}}(t,r),event:r,clientEventId:yt(),scriptId:w,cookiesEnabled:Bn(i),consentLevel:Rn||on,anonymizeIp:!1,lfClientId:n,foreignCookies:Gn(),properties:t.properties||{},autoTrackingEnabled:!1!==i.enableAutoTracking,autoTrackingMode:i.autoTrackingMode}}function Yn(n){return n.pageUrl||window.location.href}function $n(n,t,e){var r=n+"?sid="+encodeURIComponent(t.scriptId),i=It(JSON.stringify(t)),o=navigator.sendBeacon(r,i);return it(e,{success:o}),o}function Xn(n,t,e){var r=n+"?sid="+encodeURIComponent(t.scriptId),i=It(JSON.stringify(t)),o=document.createElement("img");return o.width=1,o.height=1,o.src=r+"&data="+i,o.onload=function(){it(e,{success:!0})},o.onerror=function(){it(e,{success:!1})},o}function Hn(){var n=null,t=Jn().trackingCookieDurationDays;return t&&(n=24*t*60*60*1e3),n}function Vn(){return Bn(Jn())?In(Fn(),Hn()):(Tn()&&setTimeout(Zn,1e3),function(n){return qn(n)&&Rn!==on}(Jn())?function(){if(!window[fn]){var n=En(yt())+".CM";window[fn]=n}return window[fn]}():dn+"."+yt()+".NC")}function Zn(){Tn()&&(!function(){for(var n=0,t=nn().getAll();n<t.length;n++)if(Bn(t[n]))return!1;return!0}()||gn())}function Qn(n){var t=Jn();void 0===t.gaInitRetries&&(t.gaInitRetries=0);var e=1<=t.gaInitRetries;return function(n){var t=K(n);return null!==t&&"function"==typeof t&&"function"==typeof t.getAll||null!==(t=W(n))&&"object"==typeof t&&"function"==typeof t._getTrackers}(window)?n():e?n():(setTimeout(function(){return Qn(n)},100*Math.pow(2,t.gaInitRetries)),void(t.gaInitRetries+=1))}function nt(t,e){!function(n){switch(n){case"form-submit":case"identify":return tt(Jn());default:return!0}}((t=t||{}).eventType)?Mn.push({args:t,doneCallback:e}):Qn(function(){var n=Wn(ot(),t);!0===Jn().useSendBeaconApi&&navigator&&navigator.sendBeacon?($n("https://tr.lfeeder.com",n,e),Kn()&&$n("https://tr2.lfeeder.com",n)):(Xn("https://tr.lfeeder.com",n,e),Kn()&&Xn("https://tr2.lfeeder.com",n))})}function tt(n){return!!Bn(n)&&(!qn(n)||Rn===un)}function et(n,t){var e=(n=n||{}).email;if(Ot(e)){var r=n.firstName,i=n.lastName,o={email:e};r&&"string"==typeof r&&(o.firstName=r),i&&"string"==typeof i&&(o.lastName=i),nt({eventType:"identify",properties:o},t)}}function rt(n,t){var e=function(n){var t={eventType:"tracking-event"};(n=n||{}).pageUrl&&(t.pageUrl=n.pageUrl);n.pageTitle&&(t.pageTitle=n.pageTitle);n.referrer&&(t.referrer=n.referrer);return t}(n),r=Yn(e);!gt(r)&&Ct(r,"/")&&(r=window.location.protocol+"//"+window.location.host+r),r===Un&&jn+Ln>=(new Date).getTime()?it(t,Pn):(Un=r,jn=(new Date).getTime(),Pn={success:!0},nt(e,function(n){it(t,Pn=n)}))}function it(n,t){ht(n)&&n(t)}function ot(){return function(n){return Nn=Nn||n()}(Vn)}function at(n){var t=Jn();return!!ct(t)&&(void 0===n&&(n=un),function(n,t){switch(n){case un:return function(n){ft(un),n.track({eventType:"consent"});for(var t=0;t<Mn.length;t++){var e=Mn[t];nt(e.args,e.doneCallback)}return Mn=[],!0}(t);case an:return function(n){return ft(an),n.track({eventType:"consent"}),Mn=[],!0}(t)}return console.warn("* [leadfeeder] invalid consent level",n),!1}(n,t))}function ut(){var n=Jn();return!!ct(n)&&(Nn=void 0,Un=Rn=null,Pn={success:!(Mn=[])},jn=0,gn(),Rn=Cn(on,Hn()),n.track({eventType:"consent"}),!0)}function ct(n){return!!An()&&!!function(n){return zn(n)&&qn(n)}(n)}function ft(n){var t=Hn();Nn=Rn!==n&&yn()!==n?(_t(Nn,".NC")&&(Nn=void 0),Rn=Cn(n,t),In(ot(),t)):(Rn=yn(),Fn())}function lt(n,t,e){e=e||"";var r=(n=String(n)).indexOf("#"),i=n.length;-1===r&&(r=i);var o=n.substr(0,r),a=n.substr(r,i-r);return-1===o.indexOf("?")?o+="?":_t(o,"?")||(o+="&"),o+window.encodeURIComponent(t)+"="+window.encodeURIComponent(e)+a}function dt(n,t){if(-1===(n=String(n)).indexOf("?"+t)&&-1===n.indexOf("&"+t))return n;var e=n.indexOf("?");if(-1===e)return n;var r=n.substr(e+1),i=n.substr(0,e);if(r){var o="",a=r.indexOf("#");-1!==a&&(o=r.substr(a+1),r=r.substr(0,a));for(var u=r.split("&"),c=u.length-1;0<=c;c--)u[c].split("=")[0]===t&&u.splice(c,1);var f=u.join("&");f&&(i=i+"?"+f),o&&(i+="#"+o)}return i}function st(n,t){var e=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(n);return e?function(t){try{return window.decodeURIComponent(t)}catch(n){return unescape(t)}}(e[1]):""}function gt(n){return Ct(n,"//")||Ct(n,"http://")||Ct(n,"https://")}var vt,wt,pt,mt="/";function ht(n){return"function"==typeof n}function kt(n){if(Object.values)return Object.values(n);var t=[];for(var e in n)"string"==typeof e&&n.propertyIsEnumerable(e)&&t.push(n[e]);return t}function Tt(n,t){for(var e=t.split(".");e.length&&(n=n[e.shift()]););return n}function yt(){return function(n){function t(n,t){return n<<t|n>>>32-t}function e(n){var t,e="";for(t=7;0<=t;t--)e+=(n>>>4*t&15).toString(16);return e}var r,i,o,a,u,c,f,l,d,s,g=[],v=1732584193,w=4023233417,p=2562383102,m=271733878,h=3285377520,k=[];for(n=function(n){return unescape(window.encodeURIComponent(n))}(n),s=n.length,i=0;i<s-3;i+=4)o=n.charCodeAt(i)<<24|n.charCodeAt(i+1)<<16|n.charCodeAt(i+2)<<8|n.charCodeAt(i+3),k.push(o);switch(3&s){case 0:i=2147483648;break;case 1:i=n.charCodeAt(s-1)<<24|8388608;break;case 2:i=n.charCodeAt(s-2)<<24|n.charCodeAt(s-1)<<16|32768;break;case 3:i=n.charCodeAt(s-3)<<24|n.charCodeAt(s-2)<<16|n.charCodeAt(s-1)<<8|128}k.push(i);for(;14!=(15&k.length);)k.push(0);for(k.push(s>>>29),k.push(s<<3&4294967295),r=0;r<k.length;r+=16){for(i=0;i<16;i++)g[i]=k[r+i];for(i=16;i<=79;i++)g[i]=t(g[i-3]^g[i-8]^g[i-14]^g[i-16],1);for(a=v,u=w,c=p,f=m,l=h,i=0;i<=19;i++)d=t(a,5)+(u&c|~u&f)+l+g[i]+1518500249&4294967295,l=f,f=c,c=t(u,30),u=a,a=d;for(i=20;i<=39;i++)d=t(a,5)+(u^c^f)+l+g[i]+1859775393&4294967295,l=f,f=c,c=t(u,30),u=a,a=d;for(i=40;i<=59;i++)d=t(a,5)+(u&c|u&f|c&f)+l+g[i]+2400959708&4294967295,l=f,f=c,c=t(u,30),u=a,a=d;for(i=60;i<=79;i++)d=t(a,5)+(u^c^f)+l+g[i]+3395469782&4294967295,l=f,f=c,c=t(u,30),u=a,a=d;v=v+a&4294967295,w=w+u&4294967295,p=p+c&4294967295,m=m+f&4294967295,h=h+l&4294967295}return(d=e(v)+e(w)+e(p)+e(m)+e(h)).toLowerCase()}(""+(new Date).getTime()+Math.random()).slice(0,16)}function bt(n,t){t!=n.length&&n[t](function(){bt(n,t+1)})}function It(n){return window.btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,function(n,t){return String.fromCharCode("0x"+t)}))}function Ct(n,t){return!!n&&n.substring(0,t.length)===t}function _t(n,t){return-1!==(n=String(n)).indexOf(t,n.length-t.length)}function Et(n){return n+""}function St(e,r,i){var o,a,u,c,f=0;i=i||{};function l(){f=!1===i.leading?0:(new Date).getTime(),o=null,c=e.apply(a,u),o||(a=u=null)}function n(){var n=(new Date).getTime();f||!1!==i.leading||(f=n);var t=r-(n-f);return a=this,u=arguments,t<=0||r<t?(o&&(clearTimeout(o),o=null),f=n,c=e.apply(a,u),o||(a=u=null)):o||!1===i.trailing||(o=setTimeout(l,t)),c}return n.cancel=function(){clearTimeout(o),f=0,o=a=u=null},n}function Ot(n){return"string"==typeof n&&!!n.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/)}function At(n,t){t=t?t++:1,window.MutationObserver&&(10<=t||(document.body?new MutationObserver(St(n,100,{leading:!1})).observe(document.body,{childList:!0,subtree:!0}):setTimeout(At.bind(null,n,t),100)))}if(tn()){location.href;var Dt=(function(n){for(var t=n.getPlugins(),e=0;e<t.length;e++){var r=t[e];r.initialized||r.init(),r.initialized=!0}n.pluginsInitialized=!0}(pt=nn().registerTracker(w,nt,et,rt,ot,at,ut)),x(pt),!0===qn(pt)&&null!==(Rn=yn())&&Cn(Rn,Hn()),vt=pt,(wt=document.createEvent("Event")).tracker=vt,wt.initEvent("ldfdr.trackerReady",!0,!1),void document.dispatchEvent(wt),pt);"disabled"===Dt.autoTrackingMode||"on_script_load"===Dt.autoTrackingMode&&!1===Dt.enableAutoTracking||Dt.pageview({},function(){Dt.autoTrackingInitialized=!0})}}();