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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" class=\"app-fullsize\" fxFlex=\"100\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <div class=\"subtitle\">Contact</div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n    <div class=\"contact-info\">\n      <mat-icon class=\"icon\" fxFlex>email</mat-icon>\n      <span>{{ contactInfo.email }}</span>\n    </div>\n    <div class=\"contact-info\">\n      <mat-icon class=\"icon\" fxFlex>phone</mat-icon>\n      <span>{{ contactInfo.phone }}</span>\n    </div>\n    <div class=\"contact-info\">\n      <mat-icon class=\"icon\" fxFlex>home</mat-icon>\n      <span>{{ contactInfo.address }}</span>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"full-screen\" fxFlex=\"100\" fxLayoutAlign=\"center\">\n  <div class=\"home-page\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"language.flag\" class=\"language\" fxLayoutAlign=\"space-between center\">\n  <span fxFlex>{{ language.country }}</span>\n  <span fxFlex>{{ language.level }}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"profile\" id=\"resume\" fxLayout=\"column\">\n  <div fxFlex>\n    <div class=\"left-column\" fxFlex=\"40\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n      <div>\n        <img class=\"profile-picture\" [src]=\"profile.picture\" alt=\"Profile face\" height=\"180\" width=\"180\" />\n      </div>\n      <span class=\"title\">{{ profile.name }}</span>\n      <!-- Description -->\n      <div *ngIf=\"profile.description\" class=\"profile-description\">{{ profile.description }}</div>\n      <!-- Contact -->\n      <app-contact *ngIf=\"profile.contact\" [contactInfo]=\"profile.contact\"></app-contact>\n      <!-- Skills -->\n      <div *ngIf=\"profile.skills\" class=\"skills\">\n        <div class=\"subtitle\">Skills</div>\n        <app-skill *ngFor=\"let skill of profile.skills\" [skill]=\"skill\"></app-skill>\n      </div>\n      <!-- Languages -->\n      <div *ngIf=\"profile.languages\" class=\"languages\">\n        <div class=\"subtitle\">Languages</div>\n        <app-language *ngFor=\"let language of profile.languages\" [language]=\"language\"></app-language>\n      </div>\n    </div>\n    <div class=\"right-column\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n      <div>\n        <span class=\"title category\">Work experience</span>\n        <div class=\"work-experiences\">\n          <app-work-experience *ngFor=\"let experience of profile.workExperiences\" [experience]=\"experience\"></app-work-experience>\n        </div>\n      </div>\n      <div>\n        <span class=\"title category\">Education</span>\n        <div class=\"studies\">\n          <app-study *ngFor=\"let study of profile.studies\" [study]=\"study\"></app-study>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div *ngIf=\"profile.extras\" class=\"extra\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <!-- <div class=\"subtitle\">Realisations</div> -->\n      <div class=\"github-link\" fxLayout=\"\" fxLayoutAlign=\"start center\">\n        <img [src]=\"profile.extras.github.logo\" alt=\"Github logo\" height=\"20\" width=\"20\" />\n        <span>{{ profile.extras.github.link }}</span>\n      </div>\n      <div class=\"linkedin-link\" fxLayoutAlign=\"start center\">\n        <img [src]=\"profile.extras.linkedin.logo\" alt=\"Linkedin logo\" height=\"20\" width=\"20\" />\n        <span>{{ profile.extras.linkedin.link }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"skill\" fxLayoutAlign=\"start center\">\n  <span fxFlex>{{ skill.title }}</span>\n  <div>\n    <mat-icon *ngFor=\"let star of stars\">star</mat-icon>\n    <mat-icon *ngFor=\"let star of starsMissing\">star_border</mat-icon>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/study/study.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/study/study.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"study\">\n  <div class=\"study-title\" fxLayout=\"row\">\n    <div>\n      <span class=\"subtitle\">{{ study.date }} - </span><span class=\"subtitle-small\">{{ study.title }}</span>\n    </div>\n    <div *ngIf=\"study.logo.url\" class=\"\" fxLayoutAlign=\"center center\">\n      <img [src]=\"study.logo.url\" alt=\"company logo\" [ngClass]=\"study.logo.class\" width=\"90px\" heigh=\"90px\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-experience/work-experience.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work-experience/work-experience.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"work-experience\">\n  <div class=\"work-experience-title\">\n    <span class=\"subtitle\">{{ experience.date }} - </span><span class=\"subtitle-small\">{{ experience.title }}</span>\n  </div>\n  <div class=\"work-experience-content\">\n    <div fxLayout=\"row\">\n      <div *ngIf=\"experience.description\" class=\"work-experience-description\">{{ experience.description }}</div>\n      <div *ngIf=\"experience.logo.url\" class=\"work-experience-logo\" fxLayoutAlign=\"center center\">\n        <img [src]=\"experience.logo.url\" alt=\"company logo\" [ngClass]=\"experience.logo.class\" width=\"90px\" heigh=\"90px\" />\n      </div>\n    </div>\n    <div *ngIf=\"experience.skills.length > 0\">\n      <span class=\"work-experience-skills-header\">Skills gained:</span>\n      <li class=\"work-experience-skills-item\" *ngFor=\"let skill of experience.skills\">{{ skill }}</li>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./language/language.component */ "./src/app/language/language.component.ts");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _study_study_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./study/study.component */ "./src/app/study/study.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
            _skill_skill_component__WEBPACK_IMPORTED_MODULE_13__["SkillComponent"],
            _language_language_component__WEBPACK_IMPORTED_MODULE_14__["LanguageComponent"],
            _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_15__["WorkExperienceComponent"],
            _study_study_component__WEBPACK_IMPORTED_MODULE_16__["StudyComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                children: [{ path: '', redirectTo: 'resume', pathMatch: 'full' }, { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] }]
            }
        ]
    },
    { path: '**', redirectTo: '/resume' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact .contact-info {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gIC5jb250YWN0LWluZm8ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cbn1cbiIsIi5jb250YWN0IC5jb250YWN0LWluZm8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactComponent.prototype, "contactInfo", void 0);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-page {\n  width: 595px;\n  height: 842px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuLmhvbWUtcGFnZSB7XG4gIHdpZHRoOiA1OTVweDtcbiAgaGVpZ2h0OiA4NDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iLCIuaG9tZS1wYWdlIHtcbiAgd2lkdGg6IDU5NXB4O1xuICBoZWlnaHQ6IDg0MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/language/language.component.scss":
/*!**************************************************!*\
  !*** ./src/app/language/language.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language span {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuLmxhbmd1YWdlIHtcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbn1cbiIsIi5sYW5ndWFnZSBzcGFuIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/language/language.component.ts":
/*!************************************************!*\
  !*** ./src/app/language/language.component.ts ***!
  \************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LanguageComponent = class LanguageComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LanguageComponent.prototype, "language", void 0);
LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language.component.scss */ "./src/app/language/language.component.scss")).default]
    })
], LanguageComponent);



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



/**
 * Service to fetch and update profile data.
 */
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfile(name) {
        return this.http.get(`./assets/${name}.json`);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#resume {\n  height: 100%;\n}\n\n.left-column {\n  background-color: #245d5e;\n  color: white;\n  padding: 0 10px 10px;\n  text-align: center;\n}\n\n.right-column {\n  background-color: white;\n  color: black;\n  padding: 10px;\n}\n\n.right-column .category {\n  padding: 5px 10px;\n  position: relative;\n  left: -20px;\n  top: 10px;\n  background-color: #cdcdcd;\n  color: black;\n}\n\n.right-column .work-experiences,\n.right-column .studies {\n  margin-top: 20px;\n}\n\n.profile-picture {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n\n.profile-description {\n  padding: 10px 0;\n  border-top: solid 2px white;\n  border-bottom: solid 2px white;\n}\n\n.extra img {\n  margin-right: 5px;\n}\n\n.footer {\n  padding: 10px;\n  background-color: #cdcdcd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BpZXJyZS9jdi1idWlsZGVyL3Jlc3VtZS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSx5QkVDTTtFRkFOLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkVsQkc7RUZtQkgsWUFBQTtBQ0FKOztBREdFOztFQUVFLGdCQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBRE1FO0VBQ0UsaUJBQUE7QUNISjs7QURPQTtFQUNFLGFBQUE7RUFDQSx5QkVoREs7QUQ0Q1AiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4jcmVzdW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodC1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC5jYXRlZ29yeSB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAud29yay1leHBlcmllbmNlcyxcbiAgLnN0dWRpZXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucHJvZmlsZS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XG59XG5cbi5leHRyYSB7XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xufVxuIiwiI3Jlc3VtZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxlZnQtY29sdW1uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NWQ1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQtY29sdW1uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5yaWdodC1jb2x1bW4gLmNhdGVnb3J5IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTIwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnJpZ2h0LWNvbHVtbiAud29yay1leHBlcmllbmNlcyxcbi5yaWdodC1jb2x1bW4gLnN0dWRpZXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5wcm9maWxlLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxuLmV4dHJhIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDtcbn0iLCIvLyBUaGVtZSBjb2xvclxuXG4kcHVycGxlOiAjNGI0NTY5O1xuJHN0cm9uZy1ncmV5OiAjOTE5MTkxO1xuJGdyZXk6ICNjZGNkY2Q7XG4kbGlnaHQtZ3JleTogI2U3ZTdlNztcbiRtYWl6ZTogI2ZmYzA1MjtcbiR0dXJxdW9pc2U6ICM2MGRiY2I7XG4kZ3JlZW46ICMyNDVkNWU7XG5cbiRib2xkOiA2MDA7XG5cbiRlbmdsaXNoLWZsYWc6ICdcXDAxRjFFQyBcXDAxRjFFNyc7XG4kZnJlbmNoLWZsYWc6ICdcXDAxRjFFQiBcXDAxRjFGNyc7XG4kc3BhbmlzaC1mbGFnOiAnXFwwMUYxRUEgXFwwMUYxRjgnO1xuIl19 */");

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/profile/profile.service */ "./src/app/profile/profile.service.ts");



let ResumeComponent = class ResumeComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileService.getProfile('profile').subscribe(profile => {
            this.profile = profile;
        });
    }
};
ResumeComponent.ctorParameters = () => [
    { type: src_app_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }
];
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")).default]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/app/skill/skill.component.scss":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skill .mat-icon {\n  color: #ffc052;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNDRUk7RURESixlQUFBO0FFRkoiLCJmaWxlIjoic3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuLnNraWxsIHtcbiAgLm1hdC1pY29uIHtcbiAgICBjb2xvcjogJG1haXplO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuIiwiLy8gVGhlbWUgY29sb3JcblxuJHB1cnBsZTogIzRiNDU2OTtcbiRzdHJvbmctZ3JleTogIzkxOTE5MTtcbiRncmV5OiAjY2RjZGNkO1xuJGxpZ2h0LWdyZXk6ICNlN2U3ZTc7XG4kbWFpemU6ICNmZmMwNTI7XG4kdHVycXVvaXNlOiAjNjBkYmNiO1xuJGdyZWVuOiAjMjQ1ZDVlO1xuXG4kYm9sZDogNjAwO1xuXG4kZW5nbGlzaC1mbGFnOiAnXFwwMUYxRUMgXFwwMUYxRTcnO1xuJGZyZW5jaC1mbGFnOiAnXFwwMUYxRUIgXFwwMUYxRjcnO1xuJHNwYW5pc2gtZmxhZzogJ1xcMDFGMUVBIFxcMDFGMUY4JztcbiIsIi5za2lsbCAubWF0LWljb24ge1xuICBjb2xvcjogI2ZmYzA1MjtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillComponent = class SkillComponent {
    constructor() { }
    ngOnInit() {
        this.stars = Array(this.skill.level);
        this.starsMissing = Array(this.skill.levelMax - this.skill.level);
        // TODO: Improve by taking decimal number into account (star_half icon)
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillComponent.prototype, "skill", void 0);
SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skill.component.scss */ "./src/app/skill/skill.component.scss")).default]
    })
], SkillComponent);



/***/ }),

/***/ "./src/app/study/study.component.scss":
/*!********************************************!*\
  !*** ./src/app/study/study.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".study {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC9zdHVkeS9zdHVkeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1ZHkvc3R1ZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZHkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIiwiLnN0dWR5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/study/study.component.ts":
/*!******************************************!*\
  !*** ./src/app/study/study.component.ts ***!
  \******************************************/
/*! exports provided: StudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudyComponent = class StudyComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudyComponent.prototype, "study", void 0);
StudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-study',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./study.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/study/study.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./study.component.scss */ "./src/app/study/study.component.scss")).default]
    })
], StudyComponent);



/***/ }),

/***/ "./src/app/work-experience/work-experience.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".work-experience {\n  margin-bottom: 5px;\n}\n.work-experience .work-experience-title {\n  margin-bottom: 5px;\n}\n.work-experience .work-experience-content {\n  margin-left: 15px;\n}\n.work-experience .work-experience-description {\n  color: #919191;\n  text-align: justify;\n  margin-bottom: 3px;\n}\n.work-experience .work-experience-skills-header {\n  color: #919191;\n  font-weight: 600;\n  font-size: 16px;\n}\n.work-experience .work-experience-skills-item {\n  color: #919191;\n  font-size: 12px;\n  margin-left: 10px;\n}\n.work-experience .work-experience-logo {\n  padding-left: 8px;\n  position: relative;\n  top: -10px;\n}\n.work-experience .work-experience-logo img.small {\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmUvY3YtYnVpbGRlci9yZXN1bWUvc3JjL2FwcC93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BpZXJyZS9jdi1idWlsZGVyL3Jlc3VtZS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtBQ0ZKO0FES0U7RUFDRSxjRVhVO0VGWVYsbUJBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUU7RUFDRSxjRWpCVTtFRmtCVixnQkVYRztFRllILGVBQUE7QUNKSjtBRE1FO0VBQ0UsY0V0QlU7RUZ1QlYsZUFBQTtFQUNBLGlCQUFBO0FDSko7QURPRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTEo7QURPSTtFQUNFLFdBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi53b3JrLWV4cGVyaWVuY2Uge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgLndvcmstZXhwZXJpZW5jZS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLndvcmstZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC53b3JrLWV4cGVyaWVuY2UtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAkc3Ryb25nLWdyZXk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cblxuICAud29yay1leHBlcmllbmNlLXNraWxscy1oZWFkZXIge1xuICAgIGNvbG9yOiAkc3Ryb25nLWdyZXk7XG4gICAgZm9udC13ZWlnaHQ6ICRib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAud29yay1leHBlcmllbmNlLXNraWxscy1pdGVtIHtcbiAgICBjb2xvcjogJHN0cm9uZy1ncmV5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC53b3JrLWV4cGVyaWVuY2UtbG9nbyB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwcHg7XG5cbiAgICBpbWcuc21hbGwge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICB9XG59XG4iLCIud29yay1leHBlcmllbmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLndvcmstZXhwZXJpZW5jZSAud29yay1leHBlcmllbmNlLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLndvcmstZXhwZXJpZW5jZSAud29yay1leHBlcmllbmNlLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi53b3JrLWV4cGVyaWVuY2UgLndvcmstZXhwZXJpZW5jZS1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ud29yay1leHBlcmllbmNlIC53b3JrLWV4cGVyaWVuY2Utc2tpbGxzLWhlYWRlciB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ud29yay1leHBlcmllbmNlIC53b3JrLWV4cGVyaWVuY2Utc2tpbGxzLWl0ZW0ge1xuICBjb2xvcjogIzkxOTE5MTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi53b3JrLWV4cGVyaWVuY2UgLndvcmstZXhwZXJpZW5jZS1sb2dvIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cbi53b3JrLWV4cGVyaWVuY2UgLndvcmstZXhwZXJpZW5jZS1sb2dvIGltZy5zbWFsbCB7XG4gIHdpZHRoOiA2MHB4O1xufSIsIi8vIFRoZW1lIGNvbG9yXG5cbiRwdXJwbGU6ICM0YjQ1Njk7XG4kc3Ryb25nLWdyZXk6ICM5MTkxOTE7XG4kZ3JleTogI2NkY2RjZDtcbiRsaWdodC1ncmV5OiAjZTdlN2U3O1xuJG1haXplOiAjZmZjMDUyO1xuJHR1cnF1b2lzZTogIzYwZGJjYjtcbiRncmVlbjogIzI0NWQ1ZTtcblxuJGJvbGQ6IDYwMDtcblxuJGVuZ2xpc2gtZmxhZzogJ1xcMDFGMUVDIFxcMDFGMUU3JztcbiRmcmVuY2gtZmxhZzogJ1xcMDFGMUVCIFxcMDFGMUY3JztcbiRzcGFuaXNoLWZsYWc6ICdcXDAxRjFFQSBcXDAxRjFGOCc7XG4iXX0= */");

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkExperienceComponent = class WorkExperienceComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WorkExperienceComponent.prototype, "experience", void 0);
WorkExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-experience/work-experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-experience.component.scss */ "./src/app/work-experience/work-experience.component.scss")).default]
    })
], WorkExperienceComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pierre/cv-builder/resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map