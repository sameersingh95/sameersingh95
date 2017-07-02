"use strict";define("wixCodeInit/utils/urlBuilder",[],function(){function e(){for(var e=arguments[0],t=1;t<arguments.length;++t)e=e.replace(/\/$/,"")+"/"+arguments[t].replace(/^\//,"");return e}function t(e){return/^https?:\/\/localhost\/?$/.test(e)}function i(e){return/^https?:\/\/s3.amazonaws.com\/integration-tests-statics\/SNAPSHOT\/santa?$/.test(e)}function n(e){return/^\d+\.\d+\.\d+$/.test(e)}function r(e,t){var i=e.lastIndexOf("/");return n(t)?e.substring(0,i+1)+t:e}function a(e,n){var a=e.serviceTopology,o=t(e.santaBase)||i(e.santaBase)?a.scriptsLocationMap.santa:e.santaBase;return o=r(o,n),/(.*\/services\/)?(.*)/.exec(o)[2]}function o(t,i,n){var r="//"+i.instanceId+".",o=t.serviceTopology.wixCloudBaseDomain,s="node_modules/santa-wix-code/"+(n.useWixCodeFallback?"fallback.html":"index.html");return r+e(o,"_partials",a(t,n.runtimeSource),s)}function s(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function p(e,t,i){var n=o(e,t,i=i||{}),r=!!e.publicModel,a={compId:"wixCode_"+t.appDefinitionId,deviceType:i.isMobileView?"mobile":"desktop",viewMode:r?"site":e.renderFlags.componentViewMode||"preview",locale:e.rendererModel.languageCode,wixCodeBase:e.santaBase+"/node_modules/santa-wix-code"};return i.sdkSource&&(a.sdkSource=i.sdkSource),i.applications&&(a.applications=JSON.stringify(i.applications)),i.ReactSource&&(a.ReactSource=i.ReactSource),n+"?"+s(a)}return{buildUrl:p}}),define("wixCodeInit/utils/messageHolder",[],function(){function e(){var e=[],t=null;return{sendOrHoldMessage:function(i){t?t(i):e.push(i)},setMessageTarget:function(i){for(t=i;e.length>0;)t(e.shift())}}}return{get:e}}),define("wixCodeInit/utils/iFrameUtils",[],function(){function e(e,t){var i=window.document.createElement("iframe");return i.style.cssText="position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; background: transparent;",i.src=e,i.setAttribute("data-app-id",t.applicationId),i.setAttribute("data-app-definition-id",t.appDefinitionId),i}function t(e,t){return t.source===e.contentWindow}return{getIFrameForApp:e,isIFrameEvent:t}}),define("wixCodeInit/utils/appsUtils",["lodash"],function(e){function t(t,i){var n;return e.forEach(i,function(e){var i=t.getDynamicPageData(e);i&&(n=i)}),n}function i(i,n,r){if(i){var a=t(i,r);if(a){var o=a.routerData,s=a.routerDefinition;if(o&&s)if("wix-code"===s.appDefinitionId)e.forEach(r,function(t){e.forEach(n,function(e){e.id===t&&(e.routerData=o)})});else{var p=e.find(n,{id:s.appDefinitionId});p&&(p.routerData=o)}}}}function n(t){var i={displayName:"siteextension"};return e(t).reject(i).map(function(t){return e.assign({type:m.APPLICATION},t)}).value()}function r(t,i,n,r,a){if(e.find(t,i)){var o=r.isPlatformAppOnPage("masterPage","wixCode");e.forEach(n,function(e){var t=r.isPlatformAppOnPage(e,"wixCode"),i=r.getDataByQuery(e).isPopup;t&&a.push({id:e,type:i?m.POPUP:m.PAGE,displayName:r.getPageTitle(e)}),!i&&o&&a.push({id:e,type:m.MASTER_PAGE})})}}function a(t,a,o){t=e.without(t,"masterPage");var s={displayName:"siteextension"},p=n(o);return r(o,s,t,a,p),i(a,p,t),p}function o(){for(var e=arguments[0],t=1;t<arguments.length;++t)e=e.replace(/\/$/,"")+"/"+arguments[t].replace(/^\//,"");return e}function s(e,t,i){var n=o(e.scriptsDomainUrl,"services",t);return i?o(n,i):e.scriptsLocationMap[t]}function p(t,i,n){if(e.get(t,"port")&&e.get(t,"path")&&e.get(t,"id")){n=e.endsWith(n,"/")?n.slice(0,-1):n;var r,a=e.template("<%= santaBase %><%= port %>/<%= path %>");r=a("80"===t.port?{santaBase:n,port:"",path:t.path}:{santaBase:n,port:":"+t.port,path:t.path}),i.push({type:m.APPLICATION,id:t.id,url:r,displayName:t.id})}}function d(t,i,n,r){e.find(t,{type:"siteextension"})&&!e.find(i,{id:"dataBinding"})&&i.push({type:m.APPLICATION,id:"dataBinding",url:o(s(n,"dbsm-viewer-app",r.dataBinding),"/app.js"),displayName:"Data Binding"})}function u(t){return e(t).filter(function(t){return"siteextension"===t.type||e.get(t,"platformApp.viewerUrl")}).map(function(t){var i={id:t.appDefinitionId,displayName:t.type,appInnerId:t.applicationId},n=e.get(t,"platformApp.viewerUrl");return n&&(i.url=n),i}).value()}function c(e){var t=u(e.clientSpecMap),i=g(e.viewerPlatformAppSources);return p(i,t,e.santaBase),d(e.clientSpecMap,t,e.serviceTopology,i),t}function l(t){var i=c(t);return e.filter(n(i),"url")}function f(t,i,n){return a(i,n,c({clientSpecMap:t,viewerPlatformAppSources:e.get(n,["currentUrl","query","viewerPlatformAppSources"]),serviceTopology:n.serviceTopology,santaBase:n.santaBase}))}function g(t){return e(t||"").split(",").invokeMap("split",":").fromPairs().value()}function w(t,i,n){return e.reject(f(t,i,n),{type:m.APPLICATION})}var m={POPUP:"Popup",PAGE:"Page",MASTER_PAGE:"masterPage",APPLICATION:"Application"};return{getApplications:f,getUserCodeDefinitions:w,getAppsBaseInfo:l}}),define("wixCodeInit/utils/widgetsPreLoader",["wixCodeInit/utils/appsUtils"],function(e){function t(e,t,i,n){if(o())return u.push([e,t,i,n]),void requirejs(["utils","widgets","wixCode"],a);var r=n(s);r.currentUrl=s.urlUtils.parseUrl(e);var c=s.wixUrlParser.parseUrl(r,e),l=c&&c.pageId;if(l){var f=t(p,r,l),g=d.wixCodeWidgetService.getWixCodeSpec(r.getClientSpecMap());i(d.messageBuilder.getExtendedMessage(f,r.rendererModel.wixCodeModel||{},g,r))}}function i(i,n,r){t(n,function(t,n,r){var a=e.getApplications(i.rendererModel.clientSpecMap,[r],n),o=i.routers||{configMap:{}};return t.messageBuilder.loadWidgetsMessage(a,o.configMap,[r])},r,function(e){return new e.FullSiteData(i,function(){})})}function n(i,n,r){t(n,function(t,n,r){var a=e.getUserCodeDefinitions(i.rendererModel.clientSpecMap,[r],n);return t.messageBuilder.loadUserCodesMessage(a,[r])},r,function(e){return new e.FullSiteData(i,function(){})})}function r(e,i,n){t(i,function(e,t,i){var n={};return n[i]=e.widgetService.getControllersToInit(t,i),e.messageBuilder.initWidgetsMessage(n)},n,function(){return e})}function a(e,i,n){if(o()){s=e,p=i,d=n;for(var r=0;r<u.length;r++)t.apply(null,u[r]);u.length=0}}function o(){return!s||!p||!d}var s=null,p=null,d=null,u=[];return{asyncGetPreLoadMessage:i,asyncGetPreLoadUserCodeMessage:n,asyncGetPreInitMessage:r,registerDeps:a}}),define("wixCodeInit/utils/specMapUtils",[],function(){function e(e){for(var i in e)if(e.hasOwnProperty(i)&&e[i].type===t)return e[i]}var t="siteextension";return{getAppSpec:e}}),define("wixCodeInit/api/wixCodeAppApi",["wixCodeInit/utils/urlBuilder","wixCodeInit/utils/messageHolder","wixCodeInit/utils/iFrameUtils","wixCodeInit/utils/widgetsPreLoader","wixCodeInit/utils/specMapUtils"],function(e,t,i,n,r){function a(e){return"WIX_CODE"===e.intent&&"wix_code_iframe_loaded"===e.type}function o(e){return"WIX_CODE_SITE_API"===e.intent&&"reportBI"===e.type}function s(e){function t(){var t=window.document.body;t.insertBefore(e,t.firstChild)}"loading"!==window.document.readyState?t():window.document.addEventListener("DOMContentLoaded",function(){t()})}function p(){function p(e,t){if(i.isIFrameEvent(e,t)){if(a(t.data)&&I.setMessageTarget(function(t){e.contentWindow.postMessage(t,"*")}),o(t.data)&&!v.length&&"undefined"!=typeof window){var n=t.data.reportDef,r=t.data.params;n.errorCode?window.wixBiSession.sendError(n,r.p1,r.p2,r.p3,r.p4):window.wixBiSession.sendBI(n.endpoint,n.eventId,n.src,r)}v.forEach(function(e){e(t.data)})}}function d(t,n,a){if(C)console.warn("Wix code is already initiated");else{var o=r.getAppSpec(n);if(o){var d=e.buildUrl(t,o,a),u=i.getIFrameForApp(d,o),c=p.bind(null,u);window.addEventListener("message",c,!1),s(u),C=!0}}}function u(e){v.push(e)}function c(e){M.push(e)}function l(e){var t=e;return M.forEach(function(e){t=e(t)}),t}function f(e){e&&I.sendOrHoldMessage(l(e))}function g(e,t){var i=r.getAppSpec(e.rendererModel.clientSpecMap);!P&&i&&n.asyncGetPreLoadMessage(e,t,function(e){x&&!P&&(P=e,I.sendOrHoldMessage(P))})}function w(e,t){var i=r.getAppSpec(e.rendererModel.clientSpecMap);!y&&i&&n.asyncGetPreLoadUserCodeMessage(e,t,function(e){y||(y=e,I.sendOrHoldMessage(y))})}function m(e,t){var i=r.getAppSpec(e.getClientSpecMap());!A&&i&&n.asyncGetPreInitMessage(e,t,function(e){A||(A=e,I.sendOrHoldMessage(A))})}var v=[],M=[],I=t.get(),C=!1,x=!0,P=null,y=null,A=null;return{init:d,sendMessage:f,registerMessageHandler:u,registerMessageModifier:c,preLoadWidgets:g,preLoadUserCode:w,preInitWidgets:m}}return{getApi:p}}),define("wixCodeInit/api/initMainR",["lodash","wixCodeInit/utils/specMapUtils","wixCodeInit/utils/appsUtils"],function(e,t,i){function n(n,r,a,o,s){function p(e){return t.getAppSpec(e)||u.applications.length}s=s||window.document.location.href;var d=e.trimEnd(r.serviceTopology.scriptsLocationMap["js-wixcode-sdk"],"/")+"/lib/wix.min.js",u={isMobileView:a,sdkSource:o.getParameterByName("sdkSource")||d,runtimeSource:o.getParameterByName("WixCodeRuntimeSource"),ReactSource:o.getParameterByName("ReactSource"),useWixCodeFallback:"true"===o.getParameterByName("useWixCodeFallback")||!window.Worker},c=o.getParameterByName("viewerPlatformAppSources");u.applications=i.getAppsBaseInfo({clientSpecMap:r.rendererModel.clientSpecMap,serviceTopology:r.serviceTopology,viewerPlatformAppSources:c,santaBase:r.santaBase}),function(e){n.init(r,e,u),p(e)&&(n.preLoadUserCode(r,s),!!r.publicModel&&n.preLoadWidgets(r,s))}(r.rendererModel.clientSpecMap)}return n}),define("wixCodeInit",["wixCodeInit/api/wixCodeAppApi","wixCodeInit/api/initMainR","wixCodeInit/utils/specMapUtils","wixCodeInit/utils/appsUtils","wixCodeInit/utils/widgetsPreLoader"],function(e,t,i,n,r){return{getAppApi:e.getApi,initMainR:t,specMapUtils:i,appsUtils:n,registerDeps:r.registerDeps}});
//# sourceMappingURL=wixCodeInit.min.js.map