webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: 'SBB-Bold';\n  src: url(" + __webpack_require__(176) + ") format('woff'), \n  url(" + __webpack_require__(175) + ") format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */\n}\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-height: 100%;\n}\n\n.row {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.button {\n  -webkit-box-flex: inherit;\n      -ms-flex: inherit;\n          flex: inherit;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  background-color: #eb0000;\n  border-color: white;\n  color: #fff;\n  cursor: inherit;\n  border:none;\n}\n\n/*.button:hover{\n  background-color: black;\n}*/\n\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #eb0000;\n  z-index: 2;\n  cursor: none;\n}\n\n.overlay-text{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  white-space: nowrap;\n  font-family: SBB-Bold,Arial,sans-serif;\n  font-size: 50px;\n  color: white;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <button class=\"button\" type=\"button\" (click)=\"onDisplayConnection('Luzern')\">Luzern</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n        <button class=\"button\" type=\"button\" (click)=\"onDisplayConnection('Basel')\">Basel</button>\n    </div>\n    <div class=\"column\">\n      <button class=\"button\" type=\"button\" (click)=\"onDisplayConnection('Bern')\">Bern</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n      <button class=\"button\" type=\"button\" (click)=\"onDisplayConnection('Zürich')\">Zürich</button>\n    </div>\n    <div class=\"column\">\n      <button class=\"button\" type=\"button\" (click)=\"onDisplayConnection('Winterthur')\">Winterthur</button>\n    </div>\n  </div>\n</div>\n<div class=\"overlay\" *ngIf=\"showOverlay\">\n  <div class=\"overlay-text\">Din Zug fahrt in {{connection.calculateTime()}} Minute uf Gleis {{connection.platform}}</div>\n</div>\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SBBWeb-Bold.5bf962303d4d97054b9f.ttf";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SBBWeb-Bold.66700cb1466af569ce29.woff";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Connection_connection__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
var ConnectionService = (function () {
    function ConnectionService(http) {
        this.http = http;
    }
    ConnectionService.prototype.getConnections = function (to) {
        var timeStamp = new Date().getTime();
        var from = 'Rotkreuz';
        var query = API_URL + 'from=' + from + '&to=' + to + '&limit=1 + ?tsp=' + timeStamp;
        return this.http
            .get(query)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConnectionService.prototype.handleError = function (error) {
        console.error('ConnectionService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    ConnectionService.prototype.extractData = function (response) {
        this.connection = new __WEBPACK_IMPORTED_MODULE_4__Connection_connection__["a" /* Connection */]();
        var body = response.json();
        this.connection.departure = new Date(body.connections[0].from.departure);
        this.connection.platform = body.connections[0].from.platform;
        console.log(body);
        console.log(this.connection);
        return this.connection;
    };
    return ConnectionService;
}());
ConnectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConnectionService);

var _a;
//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://transport.opendata.ch/v1/connections?'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 76;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(53);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
var Connection = (function () {
    function Connection() {
    }
    Connection.prototype.calculateTime = function () {
        var currentDate = new Date();
        var timeDifference = Math.round((this.departure.getTime() - currentDate.getTime()) / 1000 / 60);
        if (timeDifference <= 0) {
            return '< 1';
        }
        return timeDifference.toString();
    };
    return Connection;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_connection_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(connectionService) {
        this.connectionService = connectionService;
    }
    AppComponent.prototype.onDisplayConnection = function (to) {
        var _this = this;
        this.connectionService.getConnections(to).subscribe(function (con) {
            _this.connection = con;
            console.log(_this.connection);
            _this.showOverlay = true;
            setTimeout(function () { _this.showOverlay = false; }, 4000);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(140),
        styles: [__webpack_require__(139)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connection_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_connection_service__["a" /* ConnectionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[178]);
//# sourceMappingURL=main.bundle.js.map