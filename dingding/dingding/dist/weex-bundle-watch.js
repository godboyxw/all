// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\dingding\\dingding\\src\\pages\\home\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b55b6ca2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new Vue(Vue.util.extend({
  el: '#root'
}, _index2.default));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function android_exec(e,n){var i=n.body,r=n.onSuccess,t=n.onFail,o=n.context;e&&"function"==typeof e?e(i,function(e){if(void 0!==e&&e.__status__){var n=e.__status__,i=e.__message__;STATUS_OK===n?r&&r.call(o,i):STATUS_ERROR===n&&t&&t.call(o,i)}else t&&t.call("-1","")}):t&&t.call("-1","")}function ios_exec(e,n){var i=n.body,r=n.onSuccess,t=n.onFail,o=n.context;e&&"function"==typeof e?e(i,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(o,e.result):t&&t.call(o,e.result):t&&t.call("-1","")}):t&&t.call("-1","")}function parse(e,n,i){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;n=n||"&",i=i||"=";for(var t=e.split(n),o=0,a=t.length;o<a;o++){var l=t[o].split(i),u=l[0].trim(),s="";l.length>=3?function(){l.splice(0,1);var e=l.length-1;l.forEach(function(n,r){n=n.trim(),s+=r===e?n:n+i})}():s=l[1].trim();var c=r[u];if(c)if(Array.isArray(c))c.push(decodeURIComponent(s));else{var d=c;r[u]=new Array,r[u].push(d),r[u].push(decodeURIComponent(s))}else r[u]=decodeURIComponent(s)}return r}function stringify(e,n,i){if(n=n||"&",i=i||"=",null!==e&&"object"===(void 0===e?"undefined":_typeof(e))){for(var r=Object.keys(e),t=r.length,o=t-1,a="",l=0;l<t;l++){var u=r[l],s=e[u],c=u+i;if(Array.isArray(s)){for(var d=s.length,f=d-1,p=0;p<d;++p)a+=c+decodeURIComponent(s[p]),p<f&&(a+=n);d&&l<o&&(a+=n)}else a+=c+decodeURIComponent(s),l<o&&(a+=n)}return a}return""}function format(e,n){return e+"?"+querystring$1.stringify(n)}function parse$1(e,n){var i={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var t=e.indexOf("#");t>-1?(i.hash=e.slice(t),i.search=e.slice(r,t)):i.search=e.slice(r);var o=i.search.slice(1),a=querystring$1.parse(o);return"string"==typeof n&&n.length>0?a[n]:a}function getEnv(){var e={};if("undefined"!=typeof weex){var n=weex.config,i=n.env;if(e.platform=i.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:n.bundleUrl,originalUrl:n.originalUrl},e.appVersion=i.appVersion,e.appName=i.appName;else{var r=location.href,t=url$1.parse(r,"dd_wx_tpl"),o=url$1.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:t||(o||""),originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,l=url$1.parse(a,"dd_wx_tpl"),u=url$1.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:l||(u||""),originalUrl:a}}e.bundleFrameworkType="Rax"}return e}function dingtalkContainer(){return isWeex$3?"DingTalk"===env$1.appName||"com.alibaba.android.rimet"===env$1.appName:UA&&UA.indexOf("dingtalk")>-1}function webAndroid(){return isWeb$1?UA&&UA.indexOf("android")>-1:null}function webiOS(){return isWeb$1?UA&&/iphone|ipad|ipod|ios/.test(UA):null}function fetchVersion(){if(isWeb$1){var e=UA.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);null===e&&(e=UA.match(/dingtalk\/([a-zA-Z0-9.-]+)/));return e&&e[1]}return env$1.appVersion}function toPlatform(){var e=void 0;return isDingtalk$1?isWebAndroid?e="web.android":isWebiOS?e="web.ios":isWeexAndroid$1?e="weex.android":isWeexiOS$1&&(e="weex.ios"):e="not.dingtalk",e}function requireModule$1(e){if(isWeex$4){if("Vue"===bundleFrameworkType$1)return weex.requireModule(e);var n="@weex-module/"+e;return __weex_require__(n)}if("Vue"===bundleFrameworkType$1)return weex.requireModule(e)}function fillZore(e){var n="00"+e;return n.substring(n.length-2)}function ios_exec$1(e){var n=window._WebViewJavascriptBridge;if(!n)throw"runtime and bridge are not ready";var i=e.body,r=e.onSuccess,t=e.onFail,o=e.context;n.callHandler("exec",i,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(o,e.result):"function"==typeof t&&t.call(o,e.result)),"function"==typeof t&&t.call("-1","")})}function android_exec$1(e){var n=e.body,i=e.onSuccess,r=e.onFail,t=e.context,o=n.plugin,a=n.action,l=n.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,l,i,r,t)}function runAndroid(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function web_exec(e){if(isIOS)window._WebViewJavascriptBridge?ios_exec$1(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){ios_exec$1(e)},!1);else if(isAndroid){var n=window;n.nuva&&(void 0===n.nuva.isReady||n.nuva.isReady)?(bridgeReady||runAndroid(),android_exec$1(e)):document.addEventListener("runtimeready",function(){bridgeReady||runAndroid(),android_exec$1(e)},!1)}}function exec(e){var n=nativeExec||function(){};isWeexiOS?ios_exec(n,e):isWeexAndroid?android_exec(n,e):web_exec(e)}function toArray$1(e,n){for(var i=n||0,r=e.length-i,t=new Array(r);r--;)t[r]=e[r+i];return t}function createApi(e,n){return function(i){i||(i={});var r=i.onSuccess,t=i.onFail;delete i.onSuccess,delete i.onFail,delete i.onCancel,exec({body:{plugin:e,action:n,args:i},onSuccess:r,onFail:t})}}function createFuns(e,n){var i=Object.create(null);return n.forEach(function(n){i[n]=createApi(e,n)}),i}function parseJsApis(e){var n=Object.create(null);for(var i in e)for(var r=i.split("."),t=e[i],o=null,a=0,l=r.length;;)if(o){if(l-1===a){o[r[a]]=createFuns(i,t);break}if(o[r[a]])a++;else if(o[r[a]]={},o=o[r[a]],++a>l)break}else{if(1===l){var u=!1,s=n[r[a]],c=createFuns(i,t);for(var d in s)if(s.hasOwnProperty(d)){u=!0;break}if(u)for(var f in c)s[f]=c[f];else n[r[a]]=createFuns(i,t);break}if(n[r[a]]){o=n[r[a]],a++;continue}n[r[a]]={},o=n[r[a]],a++}return n}function rtFunc(e){return function(n){exec({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof n&&n(e)},onFail:function(){},context:null})}}function initDingtalkRequire(e){rtFunc("getModules")(e)}function permissionJsApis(e,n,i){if(!n)return void ship.ready(function(){e(null)});ship.ready(function(){var r=ship.apis.runtime.permission,t=n||{},o=i||null;t.onSuccess=function(n){e(null,n)},t.onFail=function(n){"function"==typeof o?o(n):e(n,null)},r.requestJsApis(t)})}function performQueue(){dingtalkQueue&&dingtalkQueue.length>0&&(dingtalkQueue.forEach(function(e){e()}),dingtalkQueue.length=0)}function initDingtalkSDK(){var e={apis:{},config:function(e){if(!e)return void log(["config is undefined,you must configure Dingtalk parameters"],LogType.WARNING);dingtalkJsApisConfig=e},init:function(){dingtalkQueue=[],ship.init(),ship.ready(function(){isReady=ship.isReady,e.apis=ship.apis?ship.apis:{},performQueue()})},ready:function(e){if(!e||"function"!=typeof e)return void log(["callback is undefined"],LogType.WARNING);if(isReady)permissionJsApis(e,dingtalkJsApisConfig,dingtalkErrorCb);else{dingtalkQueue&&dingtalkQueue.push(function(e){return function(){permissionJsApis(e,dingtalkJsApisConfig,dingtalkErrorCb)}}(e))}},error:function(e){"function"==typeof e&&(dingtalkErrorCb=e)},EventEmitter:ship.EventEmitter};return e}function installNativeEvent(e){e.on=function(e,n,i){document.addEventListener(e,n,i)},e.off=function(e,n,i){document.removeEventListener(e,n,i)}}function initWebDingtalkSDK(){var e=initDingtalkSDK();return installNativeEvent(e),e}function installNativeEvent$2(e){e.on=ship.on,e.off=ship.off}function initWeexDingtalkSDK(){var e=initDingtalkSDK();return installNativeEvent$2(e),e}var STATUS_OK="1",STATUS_ERROR="2",_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},toConsumableArray=function(e){if(Array.isArray(e)){for(var n=0,i=Array(e.length);n<e.length;n++)i[n]=e[n];return i}return Array.from(e)},querystring$1={stringify:stringify,parse:parse},url$1={format:format,parse:parse$1},env$1=getEnv(),isWeb$1="Web"===env$1.platform,isWeexiOS$1="iOS"===env$1.platform,isWeexAndroid$1="android"===env$1.platform,isWeex$3=isWeexiOS$1||isWeexAndroid$1,dingtalk=env$1.dingtalk,bundleFrameworkType=env$1.bundleFrameworkType,bundleUrl=dingtalk.bundleUrl,originalUrl=dingtalk.originalUrl,UA=void 0;isWeb$1&&(UA=window.navigator.userAgent.toLowerCase());var isDingtalk$1=dingtalkContainer(),isWebiOS=webiOS(),isWebAndroid=webAndroid(),version=fetchVersion(),env$2={isDingtalk:isDingtalk$1,isWeb:isWeb$1,isWebiOS:isWebiOS,isWebAndroid:isWebAndroid,isWeex:isWeex$3,isWeexiOS:isWeexiOS$1,isWeexAndroid:isWeexAndroid$1,bundleFrameworkType:bundleFrameworkType,bundleUrl:bundleUrl,originalUrl:originalUrl,version:version,platform:toPlatform()},bundleFrameworkType$1=env$2.bundleFrameworkType,isWeex$4=env$2.isWeex,timer$1=requireModule$1("timer"),LOG="LOG",INFO="INFO",WARNING="WARNING",ERROR="ERROR",LogType$1={LOG:LOG,INFO:INFO,WARNING:WARNING,ERROR:ERROR},logChannel=function(e){var n,i,r,t,o=fillZore(e.time.getHours())+":"+fillZore(e.time.getMinutes())+":"+fillZore(e.time.getSeconds());switch(e.type){case LogType$1.LOG:(n=console).log.apply(n,["time:"+o+" | log: "].concat(toConsumableArray(e.logArr)));break;case LogType$1.INFO:(i=console).info.apply(i,["time:"+o+" | info: "].concat(toConsumableArray(e.logArr)));break;case LogType$1.ERROR:(r=console).error.apply(r,["time:"+o+" | error: "].concat(toConsumableArray(e.logArr)));break;case LogType$1.WARNING:(t=console).warn.apply(t,["time:"+o+" | warning: "].concat(toConsumableArray(e.logArr)))}},setLog$1=function(e){logChannel=e},log$1=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LogType$1.LOG;logChannel({type:n,logArr:e,time:new Date})},dingLogger$1={log:log$1,setLog:setLog$1,LogType:LogType$1},env=env$2,requireModule=requireModule$1,log=dingLogger$1.log,LogType=dingLogger$1.LogType,isAndroid=null,isIOS=null,bridgeReady=!1,isWeb$2=env.isWeb;if(isWeb$2){var UA$1=window.navigator.userAgent.toLowerCase();isAndroid=UA$1&&UA$1.indexOf("android")>-1,isIOS=UA$1&&/iphone|ipad|ipod|ios/.test(UA$1)}var nativeExec=null,isWeex$2=env.isWeex,isWeexiOS=env.isWeexiOS,isWeexAndroid=env.isWeexAndroid;isWeex$2&&(nativeExec=requireModule("nuvajs-exec").exec);var cat={},EventEmitter={on:function(e,n){var i=cat[e];i?i.push(n):cat[e]=[],i||cat[e].push(n)},off:function(e,n){var i=cat[e];if(!i)return!1;if(!e&&!n)return cat={},!0;if(e&&!n)return cat[e]=null,!0;for(var r=void 0,t=i.length;t--;)if((r=i[t])===n||r.fun===n){i.splice(t,1);break}return!0},once:function(e,n){function i(){EventEmitter.off(e,i),n.apply(this,arguments)}i.fun=n,EventEmitter.on(e,i)},emit:function(e){if("string"==typeof e){var n=cat[e],i=toArray$1(arguments,1);if(n)for(var r=0,t=n.length;r<t;r++){var o=n[r];o.apply(this,i)}}}},globalEvent={},isWeex$1=env.isWeex;isWeex$1&&(globalEvent=requireModule("globalEvent"));var ship={getModules:null,isReady:!1,runtime:{info:rtFunc("info"),_interceptBackButton:rtFunc("interceptBackButton"),_interceptNavTitle:rtFunc("interceptNavTitle"),_recoverNavTitle:rtFunc("recoverNavTitle"),_getModules:rtFunc("getModules")},init:function(){initDingtalkRequire(function(e){e&&(ship.isReady=!0,ship.apis=parseJsApis(e),EventEmitter.emit("__ship_ready__"))})},ready:function(e){ship.isReady?"function"==typeof e&&e():"function"==typeof e&&EventEmitter.once("__ship_ready__",function(){e()})},on:function(e,n){globalEvent.addEventListener(e,function(e){var i={preventDefault:function(){log(["does not support preventDefault"],LogType.WARNING)},detail:e};n.call(this,i)})},off:globalEvent.removeEventListener,EventEmitter:EventEmitter},dingtalkJsApisConfig=null,dingtalkQueue=null,dingtalkErrorCb=null,isReady=!1,initCtrl=!0,dingtalkSDK={},isDingtalk=env.isDingtalk,isWeex=env.isWeex,isWeb=env.isWeb;log(["current environment: "+env.platform]),isDingtalk?initCtrl&&(initCtrl=!1,isWeex?dingtalkSDK=initWeexDingtalkSDK():isWeb&&(dingtalkSDK=initWebDingtalkSDK()),dingtalkSDK.init()):log(["can only open the page be Dingtalk Container"],LogType.WARNING);var dingtalkSDK$1=dingtalkSDK;module.exports=dingtalkSDK$1;
//# sourceMappingURL=dingtalk-javascript-sdk-min.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dingtalkJavascriptSdk = __webpack_require__(2);

var _dingtalkJavascriptSdk2 = _interopRequireDefault(_dingtalkJavascriptSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'home',
  data: function data() {
    return {
      link: ', author: icepy'
    };
  },
  mounted: function mounted() {
    _dingtalkJavascriptSdk2.default.ready(function () {
      var dd = _dingtalkJavascriptSdk2.default.apis;
      // 设置导航
      dd.biz.navigation.setTitle({
        title: 'Dingtalk'
      });
    });
  },
  methods: {
    getClick: function getClick() {}
  }
}; //
//
//
//
//

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "width": 750,
    "alignItems": "center"
  },
  "title": {
    "fontSize": 60,
    "color": "#505050",
    "textAlign": "center"
  },
  "subtitle": {
    "display": "block",
    "fontSize": 30,
    "color": "#AAAAAA",
    "textAlign": "center",
    "marginTop": 20
  },
  "bind-vue-container": {
    "width": 702,
    "height": 88,
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": 6,
    "backgroundColor": "#4fc08d"
  },
  "bind-vue": {
    "fontSize": 34,
    "color": "#ffffff",
    "textAlign": "center"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.getClick
    }
  }, [_vm._v("Hello Dingtalk Micro App " + _vm._s(_vm.link))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);