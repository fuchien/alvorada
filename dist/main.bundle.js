webpackJsonp([1,4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(517),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(520),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contatos.4e6d90f10296751ad71f.jpg";

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 332;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(457);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(518),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_carousel_carousel_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_carousel_carousel_component__["a" /* CarouselComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
        this.images = IMAGES;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__(519),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
var IMAGES = [
    // { "title": "We are covered", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg" },
    { "title": "Placas Solares", "url": "assets/img/placas.JPG" },
    { "title": "Jardmin", "url": "assets/img/jardim.JPG" },
    { "title": "Pátio Verde", "url": "assets/img/patio_verde.JPG" },
    { "title": "Espaço Vivência", "url": "assets/img/vivencia.JPG" },
    { "title": "Sala de Informática", "url": "assets/img/informatica.jpg" }
];
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(521),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ".contain {\r\n    min-height: 93vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    overflow: hidden;\r\n    width: 99vw;\r\n    max-width: 99vw;\r\n    height: 93vh;\r\n    max-height: 93vh;\r\n    margin: 0 auto;\r\n}\r\n\r\n.slides {\r\n    list-style: none;\r\n    position: relative;\r\n    padding-left: 0;\r\n    width: 500%;\r\n    max-height: 93vh;\r\n    /* Number of panes * 100% */\r\n    overflow: hidden;\r\n    /* Clear floats */\r\n    /* Slide effect Animations*/\r\n    -webkit-animation: carousel 40s infinite;\r\n    animation: carousel 40s infinite;\r\n}\r\n\r\n.slides>li {\r\n    position: relative;\r\n    float: left;\r\n    width: 20%;\r\n}\r\n\r\n.carousel img {\r\n    display: block;\r\n    width: 99vw;\r\n    max-width: 99vw;\r\n    height: 93vh;\r\n    max-height: 93vh;\r\n}\r\n\r\n.carousel h2 {\r\n    font-size: 1em;\r\n    padding: 1.5em 0.5em 1.5em 0.5em;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    color: #50cfa4;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    text-transform: uppercase;\r\n}\r\n\r\n@-webkit-keyframes carousel {\r\n    0% {\r\n        left: -0%;\r\n    }\r\n    11% {\r\n        left: -0%;\r\n    }\r\n    12.5% {\r\n        left: -100%;\r\n    }\r\n    23.5% {\r\n        left: -100%;\r\n    }\r\n    25% {\r\n        left: -200%;\r\n    }\r\n    36% {\r\n        left: -200%;\r\n    }\r\n    37.5% {\r\n        left: -300%;\r\n    }\r\n    48.5% {\r\n        left: -300%;\r\n    }\r\n    50% {\r\n        left: -400%;\r\n    }\r\n    61% {\r\n        left: -400%;\r\n    }\r\n    62.5% {\r\n        left: -300%;\r\n    }\r\n    73.5% {\r\n        left: -300%;\r\n    }\r\n    75% {\r\n        left: -200%;\r\n    }\r\n    86% {\r\n        left: -200%;\r\n    }\r\n    87.5% {\r\n        left: -100%;\r\n    }\r\n    98.5% {\r\n        left: -100%;\r\n    }\r\n    100% {\r\n        left: -0%;\r\n    }\r\n}\r\n\r\n@keyframes carousel {\r\n    0% {\r\n        left: -0%;\r\n    }\r\n    11% {\r\n        left: -0%;\r\n    }\r\n    12.5% {\r\n        left: -100%;\r\n    }\r\n    23.5% {\r\n        left: -100%;\r\n    }\r\n    25% {\r\n        left: -200%;\r\n    }\r\n    36% {\r\n        left: -200%;\r\n    }\r\n    37.5% {\r\n        left: -300%;\r\n    }\r\n    48.5% {\r\n        left: -300%;\r\n    }\r\n    50% {\r\n        left: -400%;\r\n    }\r\n    61% {\r\n        left: -400%;\r\n    }\r\n    62.5% {\r\n        left: -300%;\r\n    }\r\n    73.5% {\r\n        left: -300%;\r\n    }\r\n    75% {\r\n        left: -200%;\r\n    }\r\n    86% {\r\n        left: -200%;\r\n    }\r\n    87.5% {\r\n        left: -100%;\r\n    }\r\n    98.5% {\r\n        left: -100%;\r\n    }\r\n    100% {\r\n        left: -0%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ".contain {\r\n    margin: 4vh auto;\r\n    text-align: center;\r\n}\r\n\r\n.header-img {\r\n    width: 98vw;\r\n    margin: 0 auto;\r\n    max-width: 98vw;\r\n    min-height: 25vh;\r\n}\r\n\r\n@media (min-width: 320px) {\r\n    .contain {\r\n        margin-top: 9vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 375px) {\r\n    .contain {\r\n        margin-top: 7vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 414px) {\r\n    .contain {\r\n        margin-top: 7vh;\r\n    }\r\n\r\n    .header-img {\r\n        min-height: 30vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 568px) {\r\n    .contain {\r\n        margin-top: 9vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 667px) {\r\n    .contain {\r\n        margin-top: 9vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 736px) {\r\n    .contain {\r\n        margin-top: 12vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .contain {\r\n        margin-top: 8vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    .contain {\r\n        margin-top: 7vh;\r\n    }\r\n\r\n    .header-img {\r\n        min-height: 40vh;\r\n    }\r\n}\r\n\r\n.novidades {\r\n    font-size: 2rem;\r\n}\r\n\r\n.novidades ul {\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    padding: 0;\r\n}\r\n\r\n.novidades ul li {\r\n    margin: 2vh auto;\r\n}\r\n\r\n.novidades ul li img {\r\n    max-width: 94%;\r\n    min-height: 40vh;\r\n    margin: 0 auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.novidades ul li p {\r\n    color: #50cfa4;\r\n    margin: 1vh auto;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    .novidades ul {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row;\r\n                flex-flow: row;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .novidades ul li {\r\n        max-width: 30%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .novidades ul li img {\r\n        margin-top: 5vh;\r\n        min-height: 60vh;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n\r\n/*Destaques*/\r\n\r\n.destaques {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    text-align: center;\r\n    color: #50cfa4;\r\n}\r\n\r\n.destaques img {\r\n    margin: 1vh auto;\r\n    max-width: 90vw;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    .destaques {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row;\r\n                flex-flow: row;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }\r\n\r\n    .destaques img {\r\n        width: 56%;\r\n        max-width: 60%;\r\n    }\r\n\r\n    .descricao {\r\n        width: 40%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n}\r\n\r\n/*Contato*/\r\n\r\n.contato {\r\n    max-width: 100vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.contato .cont {\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    font-size: 1.6rem;\r\n    max-width: 98vw;\r\n    width: 96vw;\r\n    min-height: 35vh;\r\n    background-image: url(" + __webpack_require__(331) + ");\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    color: #fff;\r\n    z-index: 2;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.contato .cont a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: all .3s ease;\r\n}\r\n\r\n.contato .cont a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.contato .cont:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.7);\r\n    z-index: -1;\r\n}\r\n\r\n.contato .cont:hover:after {\r\n    background-color: rgba(3, 188, 80, .6);\r\n}\r\n\r\n.contato .cont1:hover:after {\r\n    background-color: rgba(3, 43, 188, .6);\r\n}\r\n\r\n.contato h3 {\r\n    text-align: center;\r\n}\r\n\r\n.contato ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-left: 3vw;\r\n}\r\n\r\n.contato .mapa {\r\n    padding: .8rem 1.5rem;\r\n    margin-left: 2vw;\r\n    z-index: 1;\r\n    position: absolute;\r\n    bottom: 2vh;\r\n    color: #fff;\r\n}\r\n\r\n.contato .mapa:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 1vw;\r\n    background-color: #fff;\r\n    z-index: -1;\r\n    transition: all .3s linear;\r\n}\r\n\r\n.contato .mapa:hover:before {\r\n    background-color: #4080ff;\r\n    width: 100%;\r\n    color: #4080ff;\r\n}\r\n\r\n.contato .cont1 .mapa:hover:before {\r\n    background-color: #50cfa4;\r\n}\r\n\r\n.contato .cont .fa {\r\n    padding-left: 1rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .contato .divisao {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n\r\n    .contato .cont {\r\n        max-width: 50vw;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .contato .mapa {\r\n        position: absolute;\r\n        padding-left: 5%;\r\n        bottom: 2vh;\r\n    }\r\n\r\n    .contato .mapa:before {\r\n        width: .5vw;\r\n    }\r\n}\r\n\r\n\r\n/*Footer*/\r\n\r\nfooter {\r\n    background-image: url(" + __webpack_require__(331) + ");\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #fff;\r\n    z-index: 2;\r\n    min-height: 20vh;\r\n    margin: 0 auto;\r\n}\r\n\r\nfooter:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.7);\r\n    z-index: -1;\r\n}\r\n\r\nfooter:hover:after {\r\n    background-color: rgba(3, 188, 80, .6);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ".contain {\r\n    max-width: 96vw;\r\n}\r\n\r\n.navbar-header img {\r\n    max-height: 7vh;\r\n    padding: 0 2vw;\r\n}\r\n\r\n@media (min-width: 420px) {\r\n    .navbar-header img {\r\n        max-height: 9vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    .navbar-header img {\r\n        max-height: 7vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .navbar-header img {\r\n        min-height: 5vh;\r\n    }\r\n\r\n    .navbar-default .navbar-nav > .active{\r\n        color: #fff;\r\n        background-color: #50cfa4;\r\n    }\r\n    \r\n    .navbar-default .navbar-nav > .active > a, \r\n    .navbar-default .navbar-nav > .active > a:hover, \r\n    .navbar-default .navbar-nav > .active > a:focus {\r\n        color: #fff;\r\n        background-color: #50cfa4;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<h1>\n  about works!\n</h1>\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"contain\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n  <ul class=\"slides\">\n    <li *ngFor=\"let image of images\">\n      <h2>{{image.title}}</h2>\n      <img src=\"{{image.url}}\" alt=\"\">\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\">\n  <app-carousel></app-carousel>\n  <!--<img src=\"assets/img/header.png\" alt=\"\" class=\"header-img\">-->\n  <hr>\n  <div class=\"especialistas\">\n    <h3>Palavras de Especialistas</h3>\n    <p><a>\"Tempo é Vida!\" Por nossa Psicóloga Dra. Elisabete Leardini</a></p>\n  </div>\n  <hr>\n  <div class=\"novidades\">\n    <h3>Novidades</h3>\n    <ul>\n      <li>\n        <img src=\"http://via.placeholder.com/150x150\">\n        <p>Medalhistas da Olimpíada Canguru de Matemática 2017!</p>\n      </li>\n      <li>\n        <img src=\"http://via.placeholder.com/150x150\">\n        <p>Confiram as datas dos principais Vestibulares 2018!</p>\n      </li>\n      <li>\n        <img src=\"http://via.placeholder.com/150x150\">\n        <p>1° colocado no Enem da cidade!</p>\n      </li>\n    </ul>\n  </div>\n  <hr>\n  <div class=\"destaques\">\n    <img src=\"http://via.placeholder.com/550x550\" alt=\"\">\n    <div class=\"descricao\">\n      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem\n        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum \n        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>\n    </div>\n  </div>\n  <div class=\"map\">\n    \n  </div>\n  <div class=\"contato\">\n    <h3>Contato</h3>\n    <div class=\"divisao\">\n      <div class=\"cont\">\n        <ul>\n          <li><strong>Votorantim - SP</strong></li>\n          <li>Rua João Gugoni, 65</li>\n          <li>CEP: 18110-215</li>\n          <li><a>secretaria@colegiobelaalvorada.com.br</a></li>\n        </ul>\n        <a class=\"mapa\" href=\"https://www.google.com.br/maps/place/R.+Jo%C3%A3o+Gugoni,+65+-+Jardim+Icatu,+Votorantim+-+SP,+18110-215/@-23.5430049,-47.4587497,17z/data=!3m1!4b1!4m5!3m4!1s0x94c58a0d1cde5f3d:0xa782c7660903b08b!8m2!3d-23.5430049!4d-47.456561\" target=\"_blank\">VEJA NO MAPA <span class=\"fa fa-map-marker\"></span></a>\n      </div>\n      <div class=\"cont cont1\">\n        <ul>\n          <li><strong>Colégio Bela Alvorada</strong></li>\n          <li>(15) 3243-6667</li>\n          <li>(15) 981123058</li>\n        </ul>\n        <a class=\"mapa\" href=\"https://www.facebook.com/colegiobelaalvorada/\" target=\"_blank\">FACEBOOK <span class=\"fa fa-facebook\"></span></a>\n      </div>\n    </div>\n  </div>\n  <footer>\n    <p>© 2017 Todos os direitos reservados.</p>\n    <p>Equipe Bela Alvorada</p>\n  </footer>\n</div>"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"contain\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a><img src=\"assets/img/logo.png\" alt=\"Colégio Bela Alvorada\" routerLink=\"/home\"></a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a>Action</a></li>\n            <li><a>Another action</a></li>\n            <li><a>Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li class=\"dropdown-header\">Nav header</li>\n            <li><a>Separated link</a></li>\n            <li><a>One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n        <li><a href=\"../navbar-static-top/\">Static top</a></li>\n        <li><a href=\"./\">Fixed top <span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);


/***/ })

},[539]);
//# sourceMappingURL=main.bundle.js.map