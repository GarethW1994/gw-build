webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"https://www.investec.com/en_za.html\">Investec</a>\n          </div>\n\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"#\">Admin Dashboard <span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"#\"></a></li>\n            </ul>\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"https://github.com/GarethW1994/Investec-Business-Case\">Github</a></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n\n<h3 id=\"heading\">\n  {{ component }}\n  <small class=\"text-muted\"> ( Investec Business Case )</small>\n</h3>\n\n<app-entity></app-entity>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.classname = "";
        this.component = "Admin Dashboard";
    }
    AppComponent.prototype.onBranches = function (event) {
        this.component = event.target.innerText;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_entity_component__ = __webpack_require__("../../../../../src/app/entities/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_entities_services__ = __webpack_require__("../../../../../src/app/entities/entities.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__entities_entity_component__["a" /* EntityComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__entities_entities_services__["a" /* EntitiesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/entities/entities.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var EntitiesService = (function () {
    function EntitiesService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
        this.ngOnInit();
    }
    EntitiesService.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.BASE_URL + "/api/entity")
            .subscribe(function (data) {
            console.log(data);
            _this.entities = data['data'];
        });
    };
    EntitiesService.prototype.findLimit = function (entityId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.BASE_URL + "/api/entity_limit/" + entityId)
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.limit = data["data"];
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntitiesService.prototype.findChildEntity = function (parentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.BASE_URL + "/api/child_entity/" + parentId)
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.child = data['data'];
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, status];
                }
            });
        });
    };
    EntitiesService.prototype.getEntities = function () {
        return this.entities;
    };
    EntitiesService.prototype.getChildEntity = function () {
        return this.child;
    };
    EntitiesService.prototype.getLimit = function () {
        return this.limit;
    };
    EntitiesService.prototype.handleError = function (error) {
        return error.statusText;
    };
    return EntitiesService;
}());
EntitiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], EntitiesService);

var _a;
//# sourceMappingURL=entities.services.js.map

/***/ }),

/***/ "../../../../../src/app/entities/entity.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"alertContainer\">\n  <div class=\"container\">\n    <div class=\"system\">\n      Current System Status:\n    </div>\n    <div class=\"container\" *ngIf=\"status === 'Got Limit'\">\n      <span class=\"success\"><strong>Success! </strong><b> {{status}}.</b></span>\n    </div>\n\n\n    <div class=\"container\" *ngIf=\"status === 'Init'\">\n      <span class=\"info\"><strong>Hey!</strong><b> Try Double Clicking On The Parent Entities Below.</b></span>\n    </div>\n\n\n    <div class=\"container\" *ngIf=\"status === 'Getting Limit'\">\n      <div id=\"loading\"></div>\n    </div>\n\n    <div class=\"container\" *ngIf=\"status === 'No Limit'\">\n      <span class=\"danger\"><strong>Oops!</strong><b> No Limit Found.</b></span>\n    </div>\n  </div>\n</div>\n<br>\n\n\n<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\" *ngFor=\"let parent of parentEntities\" (dblclick)=\"currentActiveTab(parent)\" (dblclick)=\"findChild(parent)\">\n    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#{{ currentActive }}\" (dblclick)=\"findLimit(parent)\"> {{ parent.entityName }}</a>\n  </li>\n</ul>\n\n\n<div id=\"myTabContent\" class=\"tab-content\">\n  <div class=\"tab-pane fade in active show\" id=\"{{ currentActive }}\">\n    <ul id=\"childList\">\n      <li *ngFor=\"let child of childEntities\" (click)=\"findLimit(child)\" (click)=\"currentActiveTab(child)\">\n        <a href=\"#\" class=\"list-group-item list-group-item-action\" id=\"childItem\">{{ child.entityName }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<div id=\"table-data\" *ngIf=\"limitData !== undefined\">\n  <div class=\"container\" *ngIf=\"limitData.length > 0\">\n    <div class=\"container\">\n      <h2>Limit </h2> currently viewing limit for entity: <b>{{currentViewingLimt}}</b>\n    </div>\n  </div>\n  <div class=\"container\">\n    <table class=\"table table-striped table-hover\" *ngIf=\"limitData.length > 0\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Risk Taker Group Name</th>\n          <th>Risk Taker Name</th>\n          <th>Product</th>\n          <th>Risk Type</th>\n          <th>Currency</th>\n          <th>Exposure Amount</th>\n          <th>Total Current Limit</th>\n          <th>Total Approved Limit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let limit of limitData\">\n          <td>{{ limit.limitID }}</td>\n          <td>{{ limit.RiskTaker_Group_Name }}</td>\n          <td>{{ limit.Risk_Taker_Name }}</td>\n          <td>{{ limit.Product }}</td>\n          <td>{{ limit.Risk_Type }}</td>\n          <td>{{ limit.Currency }}</td>\n          <td>{{ limit.Exposure_Amount }}</td>\n          <td>{{ limit.Total_Current_Limit }}</td>\n          <td>{{ limit.Total_Approved_Limit }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entities/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_services__ = __webpack_require__("../../../../../src/app/entities/entities.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var EntityComponent = (function () {
    function EntityComponent(entities) {
        var _this = this;
        this.entities = entities;
        this.status = "Init";
        this.parentEntities = [];
        this.currentActive = 0;
        this.currentViewingLimt = "";
        setTimeout(function () {
            _this.ngOnInit();
        }, 500);
    }
    EntityComponent.prototype.ngOnInit = function () {
        this.entitiesData = this.entities.getEntities();
        this.findParent();
    };
    EntityComponent.prototype.findLimit = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.status = "Getting Limit";
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.entities.findLimit(entity.entityId)];
                            case 1:
                                _a.sent();
                                this.limitData = this.entities.getLimit();
                                this.checkStatus();
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/];
            });
        });
    };
    EntityComponent.prototype.findParent = function () {
        for (var i in this.entitiesData) {
            // console.log(this.entitiesData[i].ParentRelationship.length)
            if (this.entitiesData[i].ParentRelationship.length > 0) {
                this.parentEntities.push(this.entitiesData[i]);
            }
        }
    };
    EntityComponent.prototype.findChild = function (currentParent) {
        return __awaiter(this, void 0, void 0, function () {
            var status, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.entities.findChildEntity(currentParent.entityId)];
                    case 1:
                        status = _b.sent();
                        if (!(status.closed !== true)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.entities.getChildEntity()];
                    case 2:
                        _a.childEntities = _b.sent();
                        _b.label = 3;
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    EntityComponent.prototype.currentActiveTab = function (entity) {
        this.currentActive = entity.id;
        this.currentViewingLimt = entity.entityName;
    };
    EntityComponent.prototype.checkStatus = function () {
        if (this.limitData.length > 0) {
            this.status = "Got Limit";
        }
        else if (this.limitData.length === 0) {
            this.status = "No Limit";
        }
        return this.status;
    };
    return EntityComponent;
}());
EntityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-entity",
        template: __webpack_require__("../../../../../src/app/entities/entity.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_services__["a" /* EntitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_services__["a" /* EntitiesService */]) === "function" && _a || Object])
], EntityComponent);

var _a;
//# sourceMappingURL=entity.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    url: "http://45.55.202.220:5000"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map