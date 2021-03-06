(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen/resumen.component */ "./src/app/resumen/resumen.component.ts");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "./src/app/portafolio/portafolio.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");






class AppComponent {
    constructor() {
        this.title = 'silvatarikCV';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 69, vars: 0, consts: [[1, "preloader"], [1, "anim", "pulse"], [1, "ion-ios-bolt-outline"], [1, "preloader-left"], [1, "inline-menu-container"], [1, "status"], [1, "inline-menu"], [1, "about", "menu-item"], [1, "portfolio", "menu-item"], [1, "blog", "menu-item"], [1, "contact", "menu-item"], ["id", "close", 1, "menu-item"], [1, "ion-ios-close-empty"], [1, "home"], [1, "bgScroll"], [1, "overlay", "opacity7"], [1, "container"], [1, "name-block"], [1, "name-block-container"], ["target", "_blank", "href", "https://drive.google.com/file/d/1jJdrITDjgI7MEsGUubs8Yklm76QZzCyD/view?usp=sharing", 1, "btn", "btn-download"], [1, "social"], ["href", "https://www.linkedin.com/in/silvatarik/", "target_", "_blank"], [1, "ion-social-linkedin"], ["href", "https://github.com/silvatarik?tab=repositories"], ["target_", "_blank", 1, "ion-social-github"], [1, "menu-blocks"], [1, "about-block", "menu-block"], [1, "about-block-container"], [1, "portfolio-block", "menu-block"], [1, "portfolio-block-container"], [1, "blog-block", "menu-block"], [1, "blog-block-container"], [1, "contact-block", "menu-block"], [1, "contact-block-container"], [1, "content-blocks", "about"], [1, "content-blocks", "portfolio"], [1, "content-blocks", "blog"], [1, "content-blocks", "contact"], [1, "content-blocks", "pop"], ["id", "close-pop", 1, "close-pop"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Estoy disponible como Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Resumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Hola, Soy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Tarik Silva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Administrador de Sistemas & Programador BackEnd/FrontEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Descargar CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Resumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-resumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "app-portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "section", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_1__["ResumenComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__["PortafolioComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__["ContactoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resumen/resumen.component */ "./src/app/resumen/resumen.component.ts");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "./src/app/portafolio/portafolio.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");









class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__["ResumenComponent"],
        _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
        _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__["ResumenComponent"],
                    _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                    _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"],
                ],
                exports: [],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cvsilvatarik.service */ "./src/app/services/cvsilvatarik.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function BlogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "iframe", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Ver Mas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const blox_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.getVideoIframe(blox_r1.src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blox_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blox_r1.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blox_r1.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blox_r1.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", blox_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class BlogComponent {
    constructor(cv, sanitizer) {
        this.cv = cv;
        this.sanitizer = sanitizer;
    }
    ngOnInit() { }
    getVideoIframe(url) {
        let video;
        let results;
        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video = results === null ? url : results[1];
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
BlogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 7, vars: 1, consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "row"], [1, "col-md-10", "mx-auto"], [4, "ngFor", "ngForOf"], [1, "post"], [1, "post-thumbnail"], [1, "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "post-title"], ["href", "#"], [1, "post-info"], [1, "post-author"], [1, "slash"], [1, "post-date"], [1, "post-catetory"], [1, "post-body"], ["target", "_blank", 1, "btn", 3, "href"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Mi Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, BlogComponent_div_6_Template, 21, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cv.blog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css'],
            }]
    }], function () { return [{ type: _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactoComponent.??fac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 41, vars: 0, consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "row"], [1, "col-md-6"], ["action", "https://formspree.io/f/myylowag", "method", "post", "id", "contact_form", 1, "contact-form"], [1, "form-control-wrap"], [1, "form-group", "mar-top-40"], ["type", "email", "id", "email", "placeholder", "Correo Electronico*", "name", "_replyto", 1, "form-control"], [1, "form-group", "mar-top-60"], ["rows", "10", "name", "message", "id", "comment", "placeholder", "Su Mensaje", 1, "form-control"], ["type", "submit", 1, "btn", "v7"], [1, "col-md-5", "offset-md-1"], [1, "contact-content"], [1, "contact-icon"], [1, "ion-ios-location-outline"], [1, "contact-details"], [1, "ion-ios-telephone-outline"], ["href", "tel:+51959747175"], [1, "ion-ios-email-outline"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Enviar Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Espa\u00F1a, Las Palmas de Gran Canaria, Teror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "+34 - 647 632 171");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "silvatarikt@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portafolio/portafolio.component.ts":
/*!****************************************************!*\
  !*** ./src/app/portafolio/portafolio.component.ts ***!
  \****************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cvsilvatarik.service */ "./src/app/services/cvsilvatarik.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function PortafolioComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ver mas detalles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "col-md-4 col-sm-6 col-xs-12 portfolio-item " + proyecto_r1.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", i_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](proyecto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", proyecto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class PortafolioComponent {
    constructor(cv) {
        this.cv = cv;
    }
    ngOnInit() { }
    calculateClasses(categoria) {
        console.log(categoria);
        return {
            'col-md-4': true, 'col-sm-6': true, 'col-xs-12': true, 'portfolio-item': true, categoria: true
            // col-md-4 col-sm-6 col-xs-12 portfolio-item {{proyecto.categoria}}
        };
    }
}
PortafolioComponent.??fac = function PortafolioComponent_Factory(t) { return new (t || PortafolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"])); };
PortafolioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PortafolioComponent, selectors: [["app-portafolio"]], decls: 30, vars: 1, consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "row"], [1, "col-md-12"], [1, "filters"], ["id", "filters"], ["data-filter", "*", 1, "active"], ["data-filter", ".php"], ["data-filter", ".c"], ["data-filter", ".java"], ["data-filter", ".bdo"], ["data-filter", ".linux"], ["data-filter", ".erp"], ["id", "portfolio-container", 1, "portfolio-container", "row", "isotope"], [4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "col-md-12", "btn-email"], [1, "btn", "lowercase"], ["id", "port", 3, "ngClass"], [1, "open-project", 3, "href"], [1, "portfolio-column"], [1, "portfolio-hover"], [1, "portfolio-content"], [1, "portfolio-overlay"], ["alt", "", 3, "src"]], template: function PortafolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Filtros :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "BDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "ERP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, PortafolioComponent_div_25_Template, 13, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "silvatarikt@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cv.proyectos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhZm9saW8vcG9ydGFmb2xpby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PortafolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portafolio',
                templateUrl: './portafolio.component.html',
                styleUrls: ['./portafolio.component.css'],
            }]
    }], function () { return [{ type: _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/resumen/resumen.component.ts":
/*!**********************************************!*\
  !*** ./src/app/resumen/resumen.component.ts ***!
  \**********************************************/
/*! exports provided: ResumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenComponent", function() { return ResumenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cvsilvatarik.service */ "./src/app/services/cvsilvatarik.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function ResumenComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const profex_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](profex_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", profex_r3.porcentaje, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-valuenow", profex_r3.porcentaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", profex_r3.porcentaje, "%");
} }
function ResumenComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const expex_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](expex_r4.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" - ", expex_r4.cargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](expex_r4.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](expex_r4.descripcion);
} }
function ResumenComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Ver Certificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const edux_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", edux_r5.centro, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", edux_r5.URL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](edux_r5.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](edux_r5.descripcion);
} }
class ResumenComponent {
    constructor(cv) {
        this.cv = cv;
        this.skills = [];
    }
    ngOnInit() { }
}
ResumenComponent.??fac = function ResumenComponent_Factory(t) { return new (t || ResumenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"])); };
ResumenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ResumenComponent, selectors: [["app-resumen"]], decls: 69, vars: 3, consts: [["id", "about", 1, "content"], [1, "block-content"], [1, "block-title"], [1, "subheading"], [1, "text-justify"], [1, "info-list", "row"], [1, "col-sm-6"], [4, "ngFor", "ngForOf"], [1, "timeline", "experience"], [1, "row"], [1, "col-md-12"], [1, "exp-holder"], [1, "timeline", "education"], [1, "d-flex", "flex-md-row", "flex-wrap"], [1, "px-1"], ["target", "_blank", "href", "https://drive.google.com/file/d/1h8nJSz6YbuUY7j0tRy6QcHvPcfJRE74t/view?usp=sharing", 1, "btn", "btn-download"], ["target", "_blank", "href", "https://drive.google.com/file/d/1up8OlXywL4VmBjwQU8j6-l3NCl4KLmJ2/view?usp=sharing", 1, "btn", "btn-download"], [1, "row", "text-center"], [1, "col-md-12", "btn-email"], [1, "btn", "lowercase"], [1, "progress-bar-label"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], [1, "exp"], [1, "hgroup"], ["target", "_blank", 3, "href"]], template: function ResumenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " \u00A1Hola! soy Tarik Silva Pe\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Administrador de Sistemas & Programador BackEnd/FrontEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Reci\u00E9n he terminado mis estudios y me encantar\u00EDa poder entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos. Gracias a mi formaci\u00F3n especializada, considero que puedo aportar valor y seguir desarollandome en una compa\u00F1ia que coincida con mis valores y espectativas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Nombre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Tarik Silva Pe\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Fecha de Nacimiento : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Marzo 29, 1997 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Direcci\u00F3n : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " ESPA\u00D1A, Las Palmas de Gran Canaria, Teror. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " silvatarikt@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Telefono : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " + 34 647 632 171");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Interes : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Administrador de Sistemas || Programador BackEnd/FrontEnd || Freelance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Profesional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ResumenComponent_div_38_Template, 7, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, ResumenComponent_div_46_Template, 11, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ResumenComponent_div_54_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Certificados Complementarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "IT ESSENTIALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Cisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "silvatarikt@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cv.profesional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cv.experiencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cv.educacion);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lbi9yZXN1bWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRyIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZW4vcmVzdW1lbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1kb25lIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2YyNzA5YywgI2ZmOTQ3Mik7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IC01cHggI2YyNzA5YywgMCAycHggNXB4ICNmMjcwOWM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZSAwLjNzO1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResumenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resumen',
                templateUrl: './resumen.component.html',
                styleUrls: ['./resumen.component.css'],
            }]
    }], function () { return [{ type: _services_cvsilvatarik_service__WEBPACK_IMPORTED_MODULE_1__["CvsilvatariktService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/cvsilvatarik.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/cvsilvatarik.service.ts ***!
  \**************************************************/
/*! exports provided: CvsilvatariktService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvsilvatariktService", function() { return CvsilvatariktService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class CvsilvatariktService {
    constructor(http) {
        this.http = http;
        this.profesional = [];
        this.educacion = [];
        this.experiencia = [];
        this.proyectos = [];
        this.blog = [];
        this.URL = "sas";
        this.CargarProfesional();
        this.CargarEducacion();
        this.CargarExperiencia();
        this.CargarProyectos();
        // this.CargarBlog();
    }
    getQuery(query) {
        const url = `https://portfolio-57e5b-default-rtdb.firebaseio.com/${query}`;
        return this.http.get(url);
    }
    CargarProfesional() {
        this.getQuery('skills.json').subscribe((resp) => {
            this.profesional = resp;
        });
    }
    CargarEducacion() {
        this.getQuery('educacion.json').subscribe((resp) => {
            this.educacion = resp;
        });
    }
    CargarExperiencia() {
        this.getQuery('experiencia.json').subscribe((resp) => {
            this.experiencia = resp;
        });
    }
    CargarBlog() {
        this.getQuery('blog.json').subscribe((resp) => {
            this.blog = resp;
        });
    }
    CargarProyectos() {
        this.getQuery('proyectos.json').subscribe((resp) => {
            this.proyectos = resp;
            console.log(resp);
        });
    }
}
CvsilvatariktService.??fac = function CvsilvatariktService_Factory(t) { return new (t || CvsilvatariktService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CvsilvatariktService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CvsilvatariktService, factory: CvsilvatariktService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CvsilvatariktService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Proyectos\Portfolio\portfoliov2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map