webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>About Dev Day (Baybay)!</h2>\n\n<h3>Quick intro</h3>\n<p>This is how we do.</p>\n\n<div>\n  <p>SOME COOL CHART, WHATEVER</p>\n</div>"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__("./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__("./src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/api/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* unused harmony export List */
/* unused harmony export Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardService = /** @class */ (function () {
    function CardService(ajaxThing) {
        this.ajaxThing = ajaxThing;
    }
    // GET list of Lists for one Project
    CardService.prototype.getLists = function (projectId) {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/project/" + projectId + "/lists")
            .toPromise();
    };
    // GET Cards LIST for one List of one Project
    CardService.prototype.getCards = function (projectId, listId) {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/project/" + projectId + "/" + listId + "/cards")
            .toPromise();
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CardService);
    return CardService;
}());

var List = /** @class */ (function () {
    function List() {
        this.projectId = [];
    }
    return List;
}());

var Card = /** @class */ (function () {
    function Card() {
        this.listId = [];
        this.contributors = [];
        this.taskDuration = [];
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/api/github-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubApiService; });
/* unused harmony export githubEventsApiRes */
/* unused harmony export githubIssuesApiRes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubApiService = /** @class */ (function () {
    function GithubApiService(ajaxs) {
        this.ajaxs = ajaxs;
    }
    GithubApiService.prototype.githubEventsFeed = function (repoOwner, repoName) {
        return this.ajaxs
            .get("https://api.github.com/networks/" + repoOwner + "/" + repoName + "/events")
            .toPromise();
    };
    GithubApiService.prototype.githubIssuesFeed = function (repoOwner, repoName) {
        return this.ajaxs
            .get("https://api.github.com/repos/" + repoOwner + "/" + repoName + "/issues?state=open&sort=created&direction=desc")
            .toPromise();
    };
    GithubApiService.prototype.filterGithubEventsFeed = function (apiResponseJSON) {
        var filteredArr = apiResponseJSON.filter(function (elem) {
            return elem.type === "PushEvent";
        });
        return filteredArr;
    };
    GithubApiService.prototype.filterGithubIssuesFeed = function (apiResponseJSON) {
        var filteredArr = [];
        var issueNumInArr = [];
        apiResponseJSON.forEach(function (elem) {
            if (issueNumInArr.indexOf(elem.number) < 0) {
                filteredArr.push(elem);
                issueNumInArr.push(elem.number);
            }
        });
        return filteredArr;
    };
    GithubApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GithubApiService);
    return GithubApiService;
}());

var githubEventsApiRes = /** @class */ (function () {
    function githubEventsApiRes() {
    }
    return githubEventsApiRes;
}());

var githubIssuesApiRes = /** @class */ (function () {
    function githubIssuesApiRes() {
    }
    return githubIssuesApiRes;
}());



/***/ }),

/***/ "./src/app/api/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* unused harmony export Project */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return newProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addUserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(
        // ajaxTruc is what has acces to the http requests, the get, post, etc.
        ajaxThing) {
        this.ajaxThing = ajaxThing;
    }
    // GET /api/projects
    ProjectService.prototype.getProjects = function () {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/projects")
            .toPromise();
    };
    // POST /api/projects
    ProjectService.prototype.postProject = function (info) {
        return this.ajaxThing
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/projects", info)
            .toPromise();
    };
    // GET /api/project/:projectId
    ProjectService.prototype.getProject = function (projectId) {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/project/" + projectId)
            .toPromise();
    };
    ProjectService.prototype.getUser = function (username) {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/search-user/" + username)
            .toPromise();
    };
    ProjectService.prototype.postUser = function (info) {
        return this.ajaxThing
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/add-contributor", info)
            .toPromise();
    };
    ProjectService.prototype.getUsers = function () {
        return this.ajaxThing
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/all-users")
            .toPromise();
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());

var Project = /** @class */ (function () {
    function Project() {
        this.contributors = [];
    }
    return Project;
}());

var newProjectInfo = /** @class */ (function () {
    function newProjectInfo() {
        this.contributors = []; // Specify that the creating user becomes the first member
    }
    return newProjectInfo;
}());

var addUserInfo = /** @class */ (function () {
    function addUserInfo() {
    }
    return addUserInfo;
}());



/***/ }),

/***/ "./src/app/api/route-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(userThing, resThing) {
        this.userThing = userThing;
        this.resThing = resThing;
    }
    RouteGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.userThing.check()
            .then(function (result) {
            var isGood = Boolean(result.userInfo);
            if (!isGood) {
                _this.redirect();
            }
            return isGood;
        })
            .catch(function (err) {
            console.log("canActivate ERROR");
            console.log(err);
            _this.redirect();
            return false;
        });
    };
    RouteGuardService.prototype.redirect = function () {
        this.resThing.navigateByUrl("/");
    };
    RouteGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/api/trello.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrelloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrelloService = /** @class */ (function () {
    function TrelloService() {
    }
    TrelloService.prototype.authUser = function () {
        return new Promise(function (success, error) {
            Trello.authorize({
                type: 'popup',
                name: 'Getting Started Application',
                scope: {
                    read: 'true',
                    write: 'true'
                },
                expiration: 'never',
                success: success,
                error: error
            });
        });
    };
    TrelloService.prototype.getBoards = function () {
        return new Promise(function (success, error) {
            Trello.get('/member/me/boards', success, error);
        });
    };
    TrelloService.prototype.getBoard = function (boardId) {
        return new Promise(function (success, error) {
            Trello.get("/boards/" + boardId, success, error);
        });
    };
    TrelloService.prototype.getMembers = function (boardId) {
        return new Promise(function (success, error) {
            Trello.get("/boards/" + boardId + "/members", success, error);
        });
    };
    TrelloService.prototype.getLists = function (boardShortLink) {
        return new Promise(function (success, error) {
            Trello.get("boards/" + boardShortLink + "/lists?cards=open&card_fields=name&filter=open&fields=name", success, error);
        });
    };
    TrelloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TrelloService);
    return TrelloService;
}());



/***/ }),

/***/ "./src/app/api/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserService; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupCredentials; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(ajaxInstance) {
        this.ajaxInstance = ajaxInstance;
    }
    UserService.prototype.check = function () {
        var _this = this;
        return this.ajaxInstance // 'withCredentials: true' means send the cookies
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/checklogin", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            // set our logged in user state
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    UserService.prototype.postSignup = function (creds) {
        var _this = this;
        return (this.ajaxInstance
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/signup", creds, { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        }));
    };
    UserService.prototype.postLogin = function (creds) {
        var _this = this;
        return this.ajaxInstance
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/login", creds, { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return this.ajaxInstance
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/logout", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var SignupCredentials = /** @class */ (function () {
    function SignupCredentials() {
    }
    return SignupCredentials;
}());



/***/ }),

/***/ "./src/app/app-materialize.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterializeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_materialize__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var mat_modules = [
    __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["MzNavbarModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["MzButtonModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["MzCollectionModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["MzCollapsibleModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["MzInputModule"]
];
var MaterializeModule = /** @class */ (function () {
    function MaterializeModule() {
    }
    MaterializeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                mat_modules
            ],
            exports: mat_modules
        })
    ], MaterializeModule);
    return MaterializeModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_page_projects_page_component__ = __webpack_require__("./src/app/projects-page/projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__one_project_one_project_component__ = __webpack_require__("./src/app/one-project/one-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_page_about_page_component__ = __webpack_require__("./src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_page_contact_page_component__ = __webpack_require__("./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bot_form_bot_form_component__ = __webpack_require__("./src/app/bot-form/bot-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_route_guard_service__ = __webpack_require__("./src/app/api/route-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__one_board_one_board_component__ = __webpack_require__("./src/app/one-board/one-board.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_8__about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_9__contact_page_contact_page_component__["a" /* ContactPageComponent */] },
    {
        path: "",
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__api_route_guard_service__["a" /* RouteGuardService */]],
        children: [
            { path: "projects", component: __WEBPACK_IMPORTED_MODULE_6__projects_page_projects_page_component__["a" /* ProjectsPageComponent */] },
            { path: "project/:projectId", component: __WEBPACK_IMPORTED_MODULE_7__one_project_one_project_component__["a" /* OneProjectComponent */] },
            { path: "board/:boardId/bot", component: __WEBPACK_IMPORTED_MODULE_10__bot_form_bot_form_component__["a" /* BotFormComponent */] },
            { path: "board/:boardId", component: __WEBPACK_IMPORTED_MODULE_12__one_board_one_board_component__["a" /* OneBoardComponent */] }
        ]
    },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <mz-navbar>\n    <a routerLink=\"/projects\" class=\"brand-logo\"><img [src]=\"brandLogo\"></a>\n    <mz-navbar-item-container [align]=\"'right'\">\n      <span *ngIf=\"!userInstance.currentUser\">\n        <mz-navbar-item>\n          <a routerLink=\"/\">Home</a>\n        </mz-navbar-item>\n        <mz-navbar-item>\n          <a routerLink=\"/login\">Log In</a>\n        </mz-navbar-item>\n        <mz-navbar-item>\n          <a routerLink=\"/signup\">Sign Up</a>\n        </mz-navbar-item>\n      </span>\n\n\n      <span *ngIf=\"userInstance.currentUser\">\n        <mz-navbar-item>\n          <a routerLink=\"/projects\">Home</a>\n        </mz-navbar-item>\n        <mz-navbar-item>\n          <b>{{userInstance.currentUser.username}}</b>\n        </mz-navbar-item>\n\n        <mz-navbar-item>\n          <a class=\"waves-effect waves-light btn-large\" (click)=\"logoutClick()\">Log Out</a>\n        </mz-navbar-item>\n      </span>\n      <mz-navbar-item>\n        <a routerLink=\"/\">Contact US</a>\n      </mz-navbar-item>\n      <mz-navbar-item>\n        <a routerLink=\"/\">About Us</a>\n      </mz-navbar-item>\n\n\n    </mz-navbar-item-container>\n  </mz-navbar>\n</header>\n\n<hr>\n\n<router-outlet></router-outlet>\n\n<hr>\n\n<footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Footer Content</h5>\n          <h6 class=\"grey-text text-lighten-4\">Dev Day by Leo Punsola, Lucas Montenoise and Rodrigo Ley as their third project at Ironhack</h6>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" routerLink=\"/\">Contact Us</a></li>\n            <li><a class=\"grey-text text-lighten-3\" routerLink=\"/\">About Us</a></li>\n            <li><a target=\"_blank\" class=\"grey-text text-lighten-3\" href=\"https://github.com/LPsola/Project03-frontend\">Github #1</a></li>\n            <li><a target=\"_blank\" class=\"grey-text text-lighten-3\" href=\"https://github.com/LPsola/Project03-backend\">Github #2</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userInstance, resThing) {
        this.userInstance = userInstance;
        this.resThing = resThing;
        this.title = "app";
        this.brandLogo = 'assets/images/favicon.png';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInstance.check()
            .then(function () {
            _this.resThing.navigateByUrl("/projects");
        })
            .catch(function (err) {
            console.log("App login check error");
            console.log(err);
        });
    };
    AppComponent.prototype.logoutClick = function () {
        var _this = this;
        this.userInstance.logout()
            .then(function () {
            _this.resThing.navigateByUrl("/");
        })
            .catch(function (err) {
            console.log("App logout error");
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_page_projects_page_component__ = __webpack_require__("./src/app/projects-page/projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__one_project_one_project_component__ = __webpack_require__("./src/app/one-project/one-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_project_service__ = __webpack_require__("./src/app/api/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_page_about_page_component__ = __webpack_require__("./src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_page_contact_page_component__ = __webpack_require__("./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_materialize_module__ = __webpack_require__("./src/app/app-materialize.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bot_form_bot_form_component__ = __webpack_require__("./src/app/bot-form/bot-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__api_github_api_service__ = __webpack_require__("./src/app/api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__api_route_guard_service__ = __webpack_require__("./src/app/api/route-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_folder_is_contributor_pipe__ = __webpack_require__("./src/app/pipes-folder/is-contributor.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__api_trello_service__ = __webpack_require__("./src/app/api/trello.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_card_service__ = __webpack_require__("./src/app/api/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__one_board_one_board_component__ = __webpack_require__("./src/app/one-board/one-board.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projects_page_projects_page_component__["a" /* ProjectsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__one_project_one_project_component__["a" /* OneProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bot_form_bot_form_component__["a" /* BotFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_folder_is_contributor_pipe__["a" /* IsContributorPipe */],
                __WEBPACK_IMPORTED_MODULE_23__one_board_one_board_component__["a" /* OneBoardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_16__app_materialize_module__["a" /* MaterializeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__api_user_service__["c" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__api_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_19__api_route_guard_service__["a" /* RouteGuardService */],
                __WEBPACK_IMPORTED_MODULE_18__api_github_api_service__["a" /* GithubApiService */],
                __WEBPACK_IMPORTED_MODULE_22__api_card_service__["a" /* CardService */],
                __WEBPACK_IMPORTED_MODULE_21__api_trello_service__["a" /* TrelloService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bot-form/bot-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bot-form/bot-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bot\">\n  <form id=\"my-form-element\" class=\"bot-form\">\n\n    <fieldset>\n      <label for=\"name\">What's your name?</label>\n      <input required cf-questions=\"Hi there! What's your name? 😊\" type=\"text\" class=\"form-control\" name=\"name\" id=\"name\">\n    </fieldset>\n    <fieldset>\n      <label for=\"opinion\">Will conversational interfaces be everywhere?</label>\n      <select cf-questions=\"Good morning! What project will you be working on today?\" name=\"opinion\" id=\"opinion\" class=\"form-control\">\n        <option *ngFor=\"let oneCard of cards\">\n          <p>{{oneCard.name}}</p>\n        </option>\n      </select>\n    </fieldset>\n    <fieldset>\n      <label for=\"opinion\">Will conversational interfaces be everywhere?</label>\n      <select cf-questions=\"Good morning! {previous-answer} What project will you be working on today?\" name=\"opinion\" id=\"opinion\"\n        class=\"form-control\">\n        <option *ngFor=\"let oneData of formDataCard\">\n          <p>{{oneData}}</p>\n        </option>\n      </select>\n    </fieldset>\n\n  </form>\n\n\n</div>"

/***/ }),

/***/ "./src/app/bot-form/bot-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_project_service__ = __webpack_require__("./src/app/api/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_card_service__ = __webpack_require__("./src/app/api/card.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotFormComponent = /** @class */ (function () {
    function BotFormComponent(reqThing, resThing, apiProjects, apiUsers, apiCards) {
        this.reqThing = reqThing;
        this.resThing = resThing;
        this.apiProjects = apiProjects;
        this.apiUsers = apiUsers;
        this.apiCards = apiCards;
        this.lists = [];
        this.cards = [];
        this.formDataCard = [];
    }
    BotFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqThing.paramMap.subscribe(function (myParams) {
            _this.projectId = myParams.get("projectId");
            _this.fetchProjectData();
            _this.fetchUserData();
        });
        // test with projects
        // this.reqThing.paramMap.subscribe(myParams => {
        //   this.projectId = myParams.get("projectId");
        //   console.log(this.projectId);
        //   this.apiProjects
        //     .getProjects()
        //     .then((projectsList: Project[]) => {
        //       this.projects = projectsList;
        //       console.log(projectsList[0].name);
        //       this.fetchUserData();
        //       setTimeout(() => this.botSetup(), 0);
        //     })
        //     .catch(err => {
        //       console.log("getProjects ERROR");
        //       console.log(err);
        //     });
        // });
    };
    BotFormComponent.prototype.botSetup = function () {
        var _this = this;
        // CONFIGURING VOICE OUTPUT AND INPUT;
        var finalTranscript;
        var dispatcher = new cf.EventDispatcher(), synth = null, recognition = null, msg = null, SpeechSynthesisUtterance = null, SpeechRecognition = null;
        try {
            SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        }
        catch (e) {
            console.log("Example support range: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility");
        }
        try {
            SpeechSynthesisUtterance =
                window.webkitSpeechSynthesisUtterance ||
                    window.mozSpeechSynthesisUtterance ||
                    window.msSpeechSynthesisUtterance ||
                    window.oSpeechSynthesisUtterance ||
                    window.SpeechSynthesisUtterance;
        }
        catch (e) {
            console.log("Example support range: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance#Browser_compatibility");
        }
        // Input Creation
        if (SpeechSynthesisUtterance && SpeechRecognition) {
            var microphoneInput = {
                init: function () {
                    // loading voices
                    synth = window.speechSynthesis;
                    msg = new SpeechSynthesisUtterance();
                    window.speechSynthesis.onvoiceschanged = function (e) {
                        var voices = synth.getVoices();
                        msg.voice = voices[0]; // <-- Alex
                        msg.lang = msg.voice.lang;
                    };
                    synth.getVoices();
                    // here we want to control the Voice input availability, so we don't end up with speech overlapping voice-input
                    msg.onstart = function (event) {
                        // on message end, so deactivate input
                        console.log("voice: deactivate 1");
                        botForm.userInput.deactivate();
                    };
                    msg.onend = function (event) {
                        // on message end, so reactivate input
                        botForm.userInput.reactivate();
                    };
                    // setup events to speak robot response
                    dispatcher.addEventListener(cf.ChatListEvents.CHATLIST_UPDATED, function (event) {
                        if (event.detail.currentResponse.isRobotResponse) {
                            // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
                            // msg.text = event.detail.currentResponse.response
                            msg.text = event.detail.currentResponse.strippedSesponse; //<-- no html tags
                            window.speechSynthesis.speak(msg);
                        }
                    }, false);
                },
                // set awaiting callback, as we will await the speak in this example
                awaitingCallback: true,
                cancelInput: function () {
                    console.log("voice: CANCEL");
                    finalTranscript = null;
                    if (recognition) {
                        recognition.onend = null;
                        recognition.onerror = null;
                        recognition.stop();
                    }
                },
                input: function (resolve, reject, mediaStream) {
                    console.log("voice: INPUT");
                    if (recognition)
                        recognition.stop();
                    (recognition = new SpeechRecognition()), (finalTranscript = "");
                    recognition.continuous = false;
                    recognition.interimResults = false;
                    recognition.onresult = function (event) {
                        for (var i = event.resultIndex; i < event.results.length; ++i) {
                            if (event.results[i].isFinal) {
                                finalTranscript += event.results[i][0].transcript;
                            }
                        }
                    };
                    recognition.onerror = function (event) {
                        reject(event.error);
                    };
                    recognition.onend = function (event) {
                        if (finalTranscript && finalTranscript !== "") {
                            resolve(finalTranscript);
                        }
                    };
                    recognition.start();
                }
            };
        }
        var flowCallback = function (dto, success, error) {
            var liveAnswer = botForm.getFormData(true);
            var liveAnswerKey = Object.keys(liveAnswer).toString();
            var liveAnswerKeySplit = liveAnswerKey.split(",");
            var liveAnswerProperty = liveAnswerKey[liveAnswerKey];
            console.log("key: " + liveAnswerKey);
            console.log("property: " +
                liveAnswer[liveAnswerKeySplit[liveAnswerKeySplit.length - 1]]);
            _this.formDataCard.push =
                liveAnswer[liveAnswerKeySplit[liveAnswerKeySplit.length - 1]];
            console.log(_this.formDataCard);
            console.log("dto....", dto.text, success, error, botForm.getFormData(true));
            success();
        };
        // INITIALIZE CONVERSATIONAL FORM
        var botForm = new cf.ConversationalForm.startTheConversation({
            formEl: document.querySelector("#my-form-element"),
            context: document.querySelector(".bot"),
            loadExternalStyleSheet: false,
            //
            eventDispatcher: dispatcher,
            // add the custom input (microphone)
            microphoneInput: microphoneInput,
            flowStepCallback: flowCallback,
            submitCallback: function () {
                var formData = botForm.getFormData();
                var formDataSerialized = botForm.getFormData(true);
                //
                if (!SpeechRecognition) {
                    botForm.addRobotChatResponse("SpeechRecognition not supported, so <strong>no</strong> Microphone here.");
                }
                if (!SpeechSynthesisUtterance) {
                    botForm.addRobotChatResponse("SpeechSynthesisUtterance not supported, so <strong>no</strong> Microphone here.");
                }
                //
                console.log("Formdata:", formData);
                console.log("Formdata, serialized:", formDataSerialized.opinion[0]);
                _this.formDataList = formDataSerialized.opinion[0];
                _this.resThing.navigateByUrl("/project/" + _this.projectId);
            }
        });
    };
    BotFormComponent.prototype.fetchProjectData = function () {
        var _this = this;
        var backlogId;
        this.apiProjects
            .getProject(this.projectId)
            .then(function (currentProject) {
            _this.project = currentProject;
            console.log("project name: " + _this.project.name);
            // fetch list data
            _this.apiCards.getLists(_this.projectId).then(function (projectLists) {
                _this.lists = projectLists;
                projectLists.forEach(function (oneList) {
                    if (oneList.name.toLowerCase() === "backlog") {
                        backlogId = oneList._id;
                    }
                    else {
                        alert("Looks like you don't have a backlog list in Trello yet. Your PM mustn't be doing his job properly... Please have him create one and come back when you're ready \uD83D\uDE01");
                        _this.resThing.navigateByUrl("/project/" + _this.projectId);
                    }
                });
                console.log(typeof backlogId);
                // fetch cards data
                _this.apiCards
                    .getCards(_this.projectId, backlogId)
                    .then(function (cardsList) {
                    _this.cards = cardsList;
                    setTimeout(function () { return _this.botSetup(); }, 0);
                    console.log("blahblah" + _this.formDataCard);
                });
            });
        })
            .catch(function (err) {
            console.log("fetchProjectData ERROR");
            console.log(err);
        });
    };
    // fetchProjectData() {
    //   let backlogId;
    //   this.apiProjects
    //     .getProject(this.projectId)
    //     .then((currentProject: Project) => {
    //       this.project = currentProject;
    //       console.log("project name: " + this.project.name);
    //       // fetch list data
    //       this.apiCards.getLists(this.projectId).then((projectLists: List[]) => {
    //         this.lists = projectLists;
    //         projectLists.forEach(oneList => {
    //           if (oneList.name.toLowerCase() === "backlog") {
    //             backlogId = oneList._id;
    //           } else {
    //             alert(
    //               `Looks like you don't have a backlog list in Trello yet. Your PM mustn't be doing his job properly... Please have him create one and come back when you're ready 😁`
    //             );
    //             this.resThing.navigateByUrl(`/project/${this.projectId}`);
    //           }
    //         });
    //         console.log(this.lists);
    //         console.log(backlogId);
    //         setTimeout(() => this.botSetup(), 0);
    //       });
    //     })
    //     .catch(err => {
    //       console.log("fetchProjectData ERROR");
    //       console.log(err);
    //     });
    // }
    BotFormComponent.prototype.fetchUserData = function () {
        var _this = this;
        // Get the info of the connected user
        this.apiUsers.check().then(function (result) {
            _this.currentUserId = result.userInfo._id;
            console.log("userData success");
        });
    };
    BotFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-bot-form",
            template: __webpack_require__("./src/app/bot-form/bot-form.component.html"),
            styles: [__webpack_require__("./src/app/bot-form/bot-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__api_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__api_card_service__["a" /* CardService */]])
    ], BotFormComponent);
    return BotFormComponent;
}());

// to get elements create an object like we did in class and in ng oninit fill up that object, then feed database upon submit.
// // In case we want to remove spoken voice and keep mic input
// var dispatcher = new cf.EventDispatcher(),
//   synth = null,
//   recognition = null,
//   msg = null,
//   SpeechRecognition = null;
// try {
//   SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// } catch (e) {
//   console.log(
//     "Example support range: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility"
//   );
// }
// // here we use https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
// // you can use what ever API you want, ex.: Google Cloud Speech API -> https://cloud.google.com/speech/
// if (SpeechRecognition) {
//   // here we create our input
//   var microphoneInput = {
//     // behaviors needs to follow the cf.IUserInput interface, they will be checked
//     init: function() {
//       console.log("voice: init method called from mic integration");
//     },
//     // set awaiting callback to false, as we will NOT await the speak in this example
//     awaitingCallback: false,
//     cancelInput: function() {
//       console.log("voice: CANCEL");
//       finalTranscript = null;
//       if (recognition) {
//         recognition.onend = null;
//         recognition.onerror = null;
//         recognition.stop();
//       }
//     },
//     input: function(resolve, reject, mediaStream) {
//       console.log("voice: INPUT");
//       // input is called when user is interacting with the CF input button (UserVoiceInput)
//       // connect to Speech API (ex. Google Cloud Speech), Watson (https://github.com/watson-developer-cloud/speech-javascript-sdk) or use Web Speech API (like below), resolve with the text returned..
//       // using Promise pattern -> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
//       // if API fails use reject(result.toString())
//       // if API succedes use resolve(result.toString())
//       if (recognition) recognition.stop();
//       (recognition = new SpeechRecognition()), (finalTranscript = "");
//       recognition.continuous = false; // react only on single input
//       recognition.interimResults = false; // we don't care about interim, only final.
//       // recognition.onstart = function() {}
//       recognition.onresult = function(event) {
//         // var interimTranscript = "";
//         for (var i = event.resultIndex; i < event.results.length; ++i) {
//           if (event.results[i].isFinal) {
//             finalTranscript += event.results[i][0].transcript;
//           }
//         }
//       };
//       recognition.onerror = function(event) {
//         reject(event.error);
//       };
//       recognition.onend = function(event) {
//         if (finalTranscript && finalTranscript !== "") {
//           resolve(finalTranscript);
//         }
//       };
//       recognition.start();
//     }
//   };
// }
// //


/***/ }),

/***/ "./src/app/contact-page/contact-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contact (hire) Us!</h2>\n\n<form action=\"/send-contact-mail\" method=\"POST\">\n\n  <label>Your email:</label>\n  <input type=\"text\" name=\"email\">\n\n  <label>Message:</label>\n  <textarea type=\"text\" name=\"message\"></textarea>\n\n  <button>Send!</button>\n\n</form>\n\n<div>\n  <p>SOME OF OUR CONTACT INFO HERE</p>\n</div>"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__("./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("./src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = "/* Dark green: #00b421 */\n/* Light green: #7ecd88*/\n.home-body{\n    height: 800px;\n    background-color: rgb(245, 245, 245);\n    margin: auto 10px;\n}\n.login-container{\n    margin: 0 auto;\n    max-width: 300px;\n}\n.brand-container {\n    text-align: center;\n    margin: auto 105px;\n}\n.brand-container h2{\n    color: #00b421;\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-body\">\n    <div class=\"brand-container\">\n        <img [src]=\"logo\">\n        <h2>Because every day is D-Day</h2>\n    </div>\n    \n    <div class=\"login-container\">\n        <app-login></app-login>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.logo = 'assets/images/verticalLogoLight.png';
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-home-page",
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-container{\n    margin: 0 auto;\n    max-width: 300px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-container\">\n<!-- <form (ngSubmit)=\"loginSubmit()\">\n  <label>\n    Username:\n    <input type=\"text\" [(ngModel)]=\"formCreds.username\" placeholder=\"blah\" name=\"username\">\n  </label>\n  <br>\n  <label>\n    Password:\n    <input type=\"password\" [(ngModel)]=\"formCreds.password\" placeholder=\"****\" name=\"password\">\n  </label>\n  <br>\n\n  <button mz-button>Log In</button>\n  <a mz-button routerLink=\"/signup\" align=\"right\" flat=\"true\">Sign Up</a>\n</form> -->\n\n<a [href]=\"githubUrl\">Log In with GitHub</a>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userInstance, resInstance) {
        this.userInstance = userInstance;
        this.resInstance = resInstance;
        this.formCreds = new __WEBPACK_IMPORTED_MODULE_1__api_user_service__["a" /* LoginCredentials */]();
        this.logo = 'assets/images/verticalLogoLight.png';
        this.githubUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/github/login";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.userInstance
            .postLogin(this.formCreds)
            .then(function (result) {
            _this.resInstance.navigateByUrl("/projects");
        })
            .catch(function (err) {
            console.log("login error");
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>404 Not Found</h2>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/one-board/one-board.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/one-board/one-board.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Welcome to \"{{board?.name}}\"</h2>\n\n\n\n<!-- \n  BOT REDIRECT\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<div class=\"bot-redirect\">\n  <button (click)=\"goToBot( board?.id )\">GET YOUR DAY STARTED</button>\n</div>\n\n\n\n<!-- \n  DISPLAY BOARD MEMBERS\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<ul>\n  <li *ngFor=\"let oneMember of members\">\n    <h4>{{oneMember.fullName}}</h4>\n  </li>\n</ul>\n\n\n\n<!-- \n  DISPLAY BOARD LISTS\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n <ul>\n    <li *ngFor=\"let oneList of lists\">\n      <h4>{{oneList}}</h4>\n    </li>\n  </ul>\n\n<!-- \n  INVITATION FORM\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<div *ngIf=\"isOwner\">  \n      \n      <div class=\"section\">\n        \n        <h5 class=\"light\">Username Search</h5>\n        \n        <div class=\"row m-valign-wrapper\">\n          <form (ngSubmit)=\"searchUser()\" >\n            <mz-input-container class=\"col s12 m6\">\n              <input mz-input\n              [label]=\"'User Name'\"\n              [autocomplete]=\"autocomplete\"\n              id=\"autocomplete-input\"\n              type=\"text\"\n              name=\"username\" [(ngModel)]=\"username\">\n            </mz-input-container>\n            <button>Search</button>\n          </form>\n          \n        </div>\n      </div>\n      \n    </div>\n      \n      <div *ngIf=\"foundUser\">\n        {{foundUser.username}}\n        {{foundUser.email}}\n        <button (click)=\"addUser()\">Add</button>\n      </div>\n\n    <hr>\n\n\n\n<!-- \n  CURRENT TASKS AT HAND\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n    <h3>CURRENTS TASKS AT HAND</h3>\n\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n    \n    <hr>\n\n\n\n<!-- \n  STATS ABOUT THE PROJECT\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n    <h3>STATS ABOUT THE PROJECT</h3>\n    <!-- Make it a separate component? -->\n\n\n\n<!-- \n  GITHUB FEEDS\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n\n<div class=\"git-commit-container\">\n  <mz-collection>\n    <mz-collection-header>\n      <h4>Github Repo Push Events</h4>\n    </mz-collection-header>\n    <mz-collection-item *ngFor=\"let oneEvent of eventsJSON\" [avatar]=\"true\">\n      <img mz-avatar [src]=\"oneEvent.actor.avatar_url\">\n      <div class=\"title\">\"{{oneEvent.payload.commits[0].message}}\"</div>\n      <div>\n        <b>Pushed By:</b> {{oneEvent.actor.login}} on {{oneEvent.created_at | date :'short'}}</div>\n    </mz-collection-item>\n  </mz-collection>\n</div>\n<div class=\"git-commit-container\">\n  <mz-collection>\n    <mz-collection-header>\n      <h4>Latest Open Github Repo Issues</h4>\n    </mz-collection-header>\n    <mz-collection-item *ngFor=\"let oneIssue of issuesJSON\" [avatar]=\"true\">\n      <img mz-avatar [src]=\"oneIssue.user.avatar_url\">\n      <div class=\"title\">\"{{oneIssue.title}}\"</div>\n      \n      <mz-collapsible\n      [mode]=\"'expandable'\"\n      [onClose]=\"closeFunctionCallback\"\n      [onOpen]=\"openFunctionCallback\"\n      [popout]=\"true\">\n      <mz-collapsible-item [active]=\"false\">\n        <mz-collapsible-item-header>\n          <b>Click Here for toggle issue details</b>\n        </mz-collapsible-item-header>\n        <mz-collapsible-item-body>\n          {{oneIssue.body}}\n          <br>\n          <b>Total Comments: </b><a [href]=\"oneIssue.comments_url\" target=\"_blank\">{{oneIssue.comments}}</a>\n          \n        </mz-collapsible-item-body>\n      </mz-collapsible-item>\n    </mz-collapsible>\n    \n    \n    \n    <div><b>Created By:</b> {{oneIssue.user.login}} on {{oneIssue.created_at | date :'short'}}.\n      <b>Last Updated:</b> {{oneIssue.updated_at | date :'short'}}\n    </div>\n  </mz-collection-item>\n</mz-collection>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/one-board/one-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_github_api_service__ = __webpack_require__("./src/app/api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_trello_service__ = __webpack_require__("./src/app/api/trello.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OneBoardComponent = /** @class */ (function () {
    function OneBoardComponent(reqThing, gitAPI, resThing, userThing, trelloThing) {
        this.reqThing = reqThing;
        this.gitAPI = gitAPI;
        this.resThing = resThing;
        this.userThing = userThing;
        this.trelloThing = trelloThing;
        this.eventsJSON = [];
        this.issuesJSON = [];
        this.users = [];
    }
    OneBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the URL parameters for this route
        this.reqThing.paramMap.subscribe(function (myParams) {
            _this.boardId = myParams.get("boardId");
            _this.fetchBoardData();
            _this.fetchUserData();
        });
        this.getRepoEventsFeed();
        this.getRepoIssuesFeed();
    };
    OneBoardComponent.prototype.fetchBoardData = function () {
        var _this = this;
        this.trelloThing.getBoard(this.boardId)
            .then(function (board) {
            _this.board = board;
            console.log("BOARD CONSOLE LOG", _this.board);
            return _this.trelloThing.getMembers(_this.boardId);
        })
            .then(function (members) {
            _this.members = members;
            console.log("MEMBERS HERE");
            console.log(_this.members);
            return _this.trelloThing.getLists(_this.boardId);
        })
            .then(function (lists) {
            _this.lists = lists;
            console.log(_this.lists);
        })
            .catch(function (error) {
            console.log("fetchBoardData ERROR");
            console.log(error);
        });
    };
    OneBoardComponent.prototype.getRepoEventsFeed = function () {
        var _this = this;
        this.gitAPI
            .githubEventsFeed("LPsola", "Project03-frontend")
            .then(function (result) {
            _this.eventsJSON = _this.gitAPI.filterGithubEventsFeed(result);
        })
            .catch(function (err) {
            console.log("Error getting github feed: " + err);
        });
    };
    OneBoardComponent.prototype.getRepoIssuesFeed = function () {
        var _this = this;
        this.gitAPI
            .githubIssuesFeed("jaredhanson", "passport")
            .then(function (result) {
            _this.issuesJSON = _this.gitAPI.filterGithubIssuesFeed(result);
            // console.log(`githubIssuesFeed results: this.apiInfo`,result)
        })
            .catch(function (err) {
            console.log("Error getting github feed: " + err);
        });
    };
    OneBoardComponent.prototype.fetchUserData = function () {
        var _this = this;
        // Get the info of the connected user
        this.userThing.check().then(function (result) {
            console.log(result);
            _this.currentUserId = result.userInfo._id;
        });
    };
    OneBoardComponent.prototype.setAutocomplete = function (userList) {
        this.autocomplete = {
            data: userList
        };
    };
    OneBoardComponent.prototype.goToBot = function (boardId) {
        var _this = this;
        this.trelloThing.getBoard(boardId)
            .then(function (board) {
            _this.resThing.navigateByUrl("/board/" + boardId + "/bot");
        })
            .catch(function (err) {
            console.log("goToProject ERROR");
            console.log(err);
        });
    };
    OneBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-one-board',
            template: __webpack_require__("./src/app/one-board/one-board.component.html"),
            styles: [__webpack_require__("./src/app/one-board/one-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__api_github_api_service__["a" /* GithubApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__api_trello_service__["a" /* TrelloService */]])
    ], OneBoardComponent);
    return OneBoardComponent;
}());



/***/ }),

/***/ "./src/app/one-project/one-project.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    width: 40vw;\n}\n.git-commit-container{\n    width: 50%;\n    float: left;\n}"

/***/ }),

/***/ "./src/app/one-project/one-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Welcome to \"{{board?.name}}\"</h2>\n\n\n\n<!-- \n  BOT REDIRECT\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<div class=\"bot-redirect\">\n  <button (click)=\"goToBot( project._id )\">GET YOUR DAY STARTED</button>\n</div>\n\n\n\n<!-- \n  DISPLAY BOARD MEMBERS\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<ul>\n  <li *ngFor=\"let oneMember of members\">\n    <h4>{{oneMember.id}}</h4>\n  </li>\n</ul>\n\n<!-- \n  INVITATION FORM\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n<div *ngIf=\"isOwner\">  \n      \n      <div class=\"section\">\n        \n        <h5 class=\"light\">Username Search</h5>\n        \n        <div class=\"row m-valign-wrapper\">\n          <form (ngSubmit)=\"searchUser()\" >\n            <mz-input-container class=\"col s12 m6\">\n              <input mz-input\n              [label]=\"'User Name'\"\n              [autocomplete]=\"autocomplete\"\n              id=\"autocomplete-input\"\n              type=\"text\"\n              name=\"username\" [(ngModel)]=\"username\">\n            </mz-input-container>\n            <button>Search</button>\n          </form>\n          \n        </div>\n      </div>\n      \n    </div>\n      \n      <div *ngIf=\"foundUser\">\n        {{foundUser.username}}\n        {{foundUser.email}}\n        <button (click)=\"addUser()\">Add</button>\n      </div>\n\n    <hr>\n\n\n\n<!-- \n  CURRENT TASKS AT HAND\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n    <h3>CURRENTS TASKS AT HAND</h3>\n\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n    \n    <hr>\n\n\n\n<!-- \n  STATS ABOUT THE PROJECT\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n    <h3>STATS ABOUT THE PROJECT</h3>\n    <!-- Make it a separate component? -->\n\n\n\n<!-- \n  GITHUB FEEDS\n  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n -->\n\n<div class=\"git-commit-container\">\n  <mz-collection>\n    <mz-collection-header>\n      <h4>Github Repo Push Events</h4>\n    </mz-collection-header>\n    <mz-collection-item *ngFor=\"let oneEvent of eventsJSON\" [avatar]=\"true\">\n      <img mz-avatar [src]=\"oneEvent.actor.avatar_url\">\n      <div class=\"title\">\"{{oneEvent.payload.commits[0].message}}\"</div>\n      <div>\n        <b>Pushed By:</b> {{oneEvent.actor.login}} on {{oneEvent.created_at | date :'short'}}</div>\n    </mz-collection-item>\n  </mz-collection>\n</div>\n<div class=\"git-commit-container\">\n  <mz-collection>\n    <mz-collection-header>\n      <h4>Latest Open Github Repo Issues</h4>\n    </mz-collection-header>\n    <mz-collection-item *ngFor=\"let oneIssue of issuesJSON\" [avatar]=\"true\">\n      <img mz-avatar [src]=\"oneIssue.user.avatar_url\">\n      <div class=\"title\">\"{{oneIssue.title}}\"</div>\n      \n      <mz-collapsible\n      [mode]=\"'expandable'\"\n      [onClose]=\"closeFunctionCallback\"\n      [onOpen]=\"openFunctionCallback\"\n      [popout]=\"true\">\n      <mz-collapsible-item [active]=\"false\">\n        <mz-collapsible-item-header>\n          <b>Click Here for toggle issue details</b>\n        </mz-collapsible-item-header>\n        <mz-collapsible-item-body>\n          {{oneIssue.body}}\n          <br>\n          <b>Total Comments: </b><a [href]=\"oneIssue.comments_url\" target=\"_blank\">{{oneIssue.comments}}</a>\n          \n        </mz-collapsible-item-body>\n      </mz-collapsible-item>\n    </mz-collapsible>\n    \n    \n    \n    <div><b>Created By:</b> {{oneIssue.user.login}} on {{oneIssue.created_at | date :'short'}}.\n      <b>Last Updated:</b> {{oneIssue.updated_at | date :'short'}}\n    </div>\n  </mz-collection-item>\n</mz-collection>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/one-project/one-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_project_service__ = __webpack_require__("./src/app/api/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_github_api_service__ = __webpack_require__("./src/app/api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_trello_service__ = __webpack_require__("./src/app/api/trello.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OneProjectComponent = /** @class */ (function () {
    function OneProjectComponent(reqThing, apiThing, gitAPI, resThing, userThing, trelloThing) {
        this.reqThing = reqThing;
        this.apiThing = apiThing;
        this.gitAPI = gitAPI;
        this.resThing = resThing;
        this.userThing = userThing;
        this.trelloThing = trelloThing;
        this.eventsJSON = [];
        this.issuesJSON = [];
        this.addUserInfo = new __WEBPACK_IMPORTED_MODULE_1__api_project_service__["b" /* addUserInfo */]();
        this.users = [];
    }
    OneProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the URL parameters for this route
        this.reqThing.paramMap.subscribe(function (myParams) {
            _this.projectId = myParams.get("projectId");
            _this.fetchProjectData();
            _this.fetchUserData();
        });
        this.getRepoEventsFeed();
        this.getRepoIssuesFeed();
    };
    OneProjectComponent.prototype.fetchProjectData = function () {
        var _this = this;
        this.apiThing.getProject(this.projectId)
            .then(function (result) {
            _this.project = result;
        })
            .catch(function (err) {
            console.log("fetchProjectData ERROR");
            console.log(err);
        });
        this.apiThing.getUsers()
            .then(function (usersList) {
            _this.users = usersList;
        })
            .then(function () {
            _this.setAutocomplete(_this.users);
        })
            .catch(function (err) {
            console.log("getProjects ERROR");
            console.log(err);
        });
    };
    OneProjectComponent.prototype.getRepoEventsFeed = function () {
        var _this = this;
        this.gitAPI
            .githubEventsFeed("LPsola", "Project03-frontend")
            .then(function (result) {
            _this.eventsJSON = _this.gitAPI.filterGithubEventsFeed(result);
        })
            .catch(function (err) {
            console.log("Error getting github feed: " + err);
        });
    };
    OneProjectComponent.prototype.getRepoIssuesFeed = function () {
        var _this = this;
        this.gitAPI
            .githubIssuesFeed("jaredhanson", "passport")
            .then(function (result) {
            _this.issuesJSON = _this.gitAPI.filterGithubIssuesFeed(result);
            // console.log(`githubIssuesFeed results: this.apiInfo`,result)
        })
            .catch(function (err) {
            console.log("Error getting github feed: " + err);
        });
    };
    OneProjectComponent.prototype.fetchUserData = function () {
        var _this = this;
        // Get the info of the connected user
        this.userThing.check().then(function (result) {
            _this.currentUserId = result.userInfo._id;
            // Commented because we do not have a project ID anymore
            // this.isOwner = this.currentUserId === this.project.owner;
        });
    };
    OneProjectComponent.prototype.searchUser = function () {
        var _this = this;
        this.apiThing
            .getUser(this.username)
            .then(function (result) {
            _this.foundUser = result;
        })
            .catch(function (err) {
            console.log("searchUser ERROR");
            console.log(err);
        });
    };
    OneProjectComponent.prototype.addUser = function () {
        var _this = this;
        console.log("Trying to add " + this.foundUser.username + " to " + this.project.name + "!");
        this.addUserInfo.projectId = this.projectId;
        this.addUserInfo.userId = this.foundUser._id;
        this.apiThing
            .postUser(this.addUserInfo)
            .then(function () {
            _this.resThing.navigateByUrl("/project/" + _this.projectId);
        })
            .catch(function (err) {
            console.log("addUser ERROR");
            console.log(err);
        });
    };
    OneProjectComponent.prototype.setAutocomplete = function (userList) {
        this.autocomplete = {
            data: userList
        };
    };
    OneProjectComponent.prototype.goToBot = function (projectId) {
        var _this = this;
        this.apiThing.getProject(projectId)
            .then(function (project) {
            _this.resThing.navigateByUrl("/project/" + project._id + "/bot");
        })
            .catch(function (err) {
            console.log("goToProject ERROR");
            console.log(err);
        });
    };
    OneProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-one-project",
            template: __webpack_require__("./src/app/one-project/one-project.component.html"),
            styles: [__webpack_require__("./src/app/one-project/one-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__api_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__api_github_api_service__["a" /* GithubApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__api_trello_service__["a" /* TrelloService */]])
    ], OneProjectComponent);
    return OneProjectComponent;
}());



/***/ }),

/***/ "./src/app/pipes-folder/is-contributor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsContributorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsContributorPipe = /** @class */ (function () {
    function IsContributorPipe() {
    }
    IsContributorPipe.prototype.transform = function (value, currentUserId) {
        if (!value) {
            return [];
        }
        var filteredProjects = [];
        value.forEach(function (oneProject) {
            if (oneProject.contributors.includes(currentUserId)) {
                filteredProjects.push(oneProject);
            }
        });
        // PRO WAY
        // return value.filter( oneProject => {
        //  oneProject.contributors.includes( currentUserId )
        // })
        return filteredProjects;
    };
    IsContributorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isContributor'
        })
    ], IsContributorPipe);
    return IsContributorPipe;
}());



/***/ }),

/***/ "./src/app/projects-page/projects-page.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    width: 20vw;\n}\n"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Projects Page</h2>\n\n\n<button (click)=\"authUser()\">AUTHORIZE TRELLO</button>\n\n<h3>BELOW THE PROJECTS LIST</h3>\n<ul>\n  <li *ngFor=\"let oneBoard of boards\">\n  <!-- (projects | isContributor: currentUserId ) -->\n    <h3>{{oneBoard?.name}}</h3>\n    <img [src]=\"oneBoard.prefs.backgroundImageScaled[2].url\"><br>\n    <button (click)=\"goToBoard( oneBoard?.id )\">Enter the project</button>\n  </li>\n</ul>\n\n<div>\n\n  <div class=\"section\">\n\n\n    <h5 class=\"light\">Project Search</h5>\n\n    <div class=\"row m-valign-wrapper\">\n\n      <mz-input-container class=\"col s12 m6\">\n        <input mz-input [label]=\"'Project Name'\" [autocomplete]=\"autocomplete\" id=\"autocomplete-input\" type=\"text\">\n      </mz-input-container>\n\n    </div>\n  </div>\n\n  <hr>\n\n<div>\n  <h3>BELOW THE FORM TO CREATE A NEW PROJECT</h3>\n  <form (ngSubmit)=\"createProject()\">\n\n    <label>Name:</label>\n    <br>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newProjectInfo.name\">\n    <br>\n    <br>\n\n    <label>Image URL:</label>\n    <br>\n    <input type=\"text\" name=\"imageUrl\" [(ngModel)]=\"newProjectInfo.imageUrl\">\n    <br>\n    <br>\n\n    <label>GitHub URL</label>\n    <br>\n    <input type=\"text\" name=\"githubRepoUrl\" [(ngModel)]=\"newProjectInfo.githubRepoUrl\">\n    <br>\n    <br>\n\n    <label>Trello Board ID</label>\n    <br>\n    <input type=\"text\" name=\"trelloBoardId\" [(ngModel)]=\"newProjectInfo.trelloBoardId\">\n    <br>\n    <br>\n\n    <label>Slack ID</label>\n    <br>\n    <input type=\"text\" name=\"slackWorkSpaceDirectory\" [(ngModel)]=\"newProjectInfo.slackWorkSpaceDirectory\">\n    <br>\n    <br>\n\n    <button>Create</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_project_service__ = __webpack_require__("./src/app/api/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_trello_service__ = __webpack_require__("./src/app/api/trello.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent(userThing, apiThing, resThing, trelloService) {
        this.userThing = userThing;
        this.apiThing = apiThing;
        this.resThing = resThing;
        this.trelloService = trelloService;
        this.boards = [];
        this.newProjectInfo = new __WEBPACK_IMPORTED_MODULE_1__api_project_service__["c" /* newProjectInfo */]();
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
        this.fetchUserData();
        this.authUser();
    };
    ProjectsPageComponent.prototype.authUser = function () {
        var _this = this;
        this.trelloService.authUser()
            .then(function (success) {
            console.log("authUser SUCCESS");
            console.log(success);
            return _this.trelloService.getBoards();
        })
            .then(function (boards) {
            _this.boards = boards;
            _this.setAutocomplete(_this.boards);
        })
            .catch(function (error) {
            console.log("TRELLO ERROR");
            console.log(error);
        });
    };
    ProjectsPageComponent.prototype.fetchUserData = function () {
        var _this = this;
        // Get the info of the connected user
        return this.userThing.check().then(function (result) {
            _this.currentUserId = result.userInfo._id;
        });
    };
    ProjectsPageComponent.prototype.createProject = function () {
        var _this = this;
        this.newProjectInfo.owner = this.currentUserId;
        this.newProjectInfo.contributors.push(this.currentUserId);
        this.apiThing
            .postProject(this.newProjectInfo)
            .then(function () {
            console.log(_this.newProjectInfo);
            _this.resThing.navigateByUrl("/projects");
        })
            .catch(function (err) {
            console.log("createProject ERROR");
            console.log(err);
        });
    };
    ProjectsPageComponent.prototype.goToBoard = function (boardId) {
        var _this = this;
        this.trelloService.getBoard(boardId)
            .then(function (success) {
            console.log("getBoard SUCCESS");
            // console.log( success );
            _this.resThing.navigateByUrl("/board/" + boardId);
        })
            .catch(function (error) {
            console.log("getBoard ERROR");
            console.log(error);
        });
    };
    ProjectsPageComponent.prototype.goToProject = function (projectId) {
        var _this = this;
        this.apiThing.getProject(projectId)
            .then(function (project) {
            _this.resThing.navigateByUrl("/project/" + project._id);
        })
            .catch(function (err) {
            console.log("goToProject ERROR");
            console.log(err);
        });
    };
    ProjectsPageComponent.prototype.setAutocomplete = function (projectList) {
        var autoCompleteData = {};
        projectList.forEach(function (elem) {
            autoCompleteData[elem.name] = null;
        });
        this.autocomplete = {
            data: autoCompleteData
        };
    };
    ProjectsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-projects-page",
            template: __webpack_require__("./src/app/projects-page/projects-page.component.html"),
            styles: [__webpack_require__("./src/app/projects-page/projects-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__api_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__api_trello_service__["a" /* TrelloService */]])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signup-container{\n    margin: 0 auto;\n    max-width: 300px;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sign Up</h2>\n\n<div class=\"login-container\">\n<!-- <form (ngSubmit)=\"signupSubmit()\">\n  <label>\n    Username:\n    <input type=\"text\" [(ngModel)]=\"formCreds.username\" placeholder=\"blah\" name=\"username\">\n  </label>\n  <br>\n  <label>\n    Password:\n    <input type=\"password\" [(ngModel)]=\"formCreds.password\" placeholder=\"****\" name=\"password\">\n  </label>\n  <br>\n\n  <button mz-button>Submit</button>\n  <a mz-button routerLink=\"/login\" align=\"right\" flat=\"true\">Log In</a>\n</form> -->\n\n<a [href]=\"githubUrl\">Sign Up with GitHub</a>\n<!-- `${environment.backUrl}/api/signup` -->\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userInstance, resInstance) {
        this.userInstance = userInstance;
        this.resInstance = resInstance;
        this.formCreds = new __WEBPACK_IMPORTED_MODULE_1__api_user_service__["b" /* SignupCredentials */]();
        this.environment = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        this.githubUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/github/login";
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signupSubmit = function () {
        var _this = this;
        this.userInstance
            .postSignup(this.formCreds)
            .then(function (result) {
            _this.resInstance.navigateByUrl("/projects");
        })
            .catch(function (err) {
            console.log("signup error");
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-signup",
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    backUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map