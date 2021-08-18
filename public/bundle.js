/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/btn-show-more.js":
/*!*****************************************!*\
  !*** ./src/components/btn-show-more.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBtmShowMore": () => /* binding */ createBtmShowMore
/* harmony export */ });
const createBtmShowMore = () => {
    return(
        `<button class="films-list__show-more">Show more</button>`
    )
}

/***/ }),

/***/ "./src/components/extra-films.js":
/*!***************************************!*\
  !*** ./src/components/extra-films.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsListExtra": () => /* binding */ createFilmsListExtra
/* harmony export */ });
const createFilmsListExtra = () => {
    return(
        `<section class="films-list--extra">
        <h2 class="films-list__title">asdasdas</h2>
      </section>`
    )
}

/***/ }),

/***/ "./src/components/films-block.js":
/*!***************************************!*\
  !*** ./src/components/films-block.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsBlock": () => /* binding */ createFilmsBlock
/* harmony export */ });
const createFilmsBlock = () => {
    return(
        `<section class="films"></section>`
    );
};

/***/ }),

/***/ "./src/components/films-card.js":
/*!**************************************!*\
  !*** ./src/components/films-card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmCard": () => /* binding */ createFilmCard
/* harmony export */ });
const createFilmCard = () => {
    return (
        `<article class="film-card">
        <h3 class="film-card__title">The Dance of Life</h3>
        <p class="film-card__rating">8.3</p>
        <p class="film-card__info">
          <span class="film-card__year">1929</span>
          <span class="film-card__duration">1h 55m</span>
          <span class="film-card__genre">Musical</span>
        </p>
        <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
        <a class="film-card__comments">5 comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
    )
};

/***/ }),

/***/ "./src/components/films-container.js":
/*!*******************************************!*\
  !*** ./src/components/films-container.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsContainer": () => /* binding */ createFilmsContainer
/* harmony export */ });
const createFilmsContainer = () => {
    return(
        `<div class="films-list__container"></div>`
    )
};

/***/ }),

/***/ "./src/components/films-list.js":
/*!**************************************!*\
  !*** ./src/components/films-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsList": () => /* binding */ createFilmsList
/* harmony export */ });
const createFilmsList = () => {
    return(
        `<section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      </section>`
    )
}

/***/ }),

/***/ "./src/components/nav-menu.js":
/*!************************************!*\
  !*** ./src/components/nav-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavMenu": () => /* binding */ createNavMenu
/* harmony export */ });
const createNavMenu = () => {
    return(
        `<nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
          <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
          <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
    );
};


/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSort": () => /* binding */ createSort
/* harmony export */ });
const createSort = () => {
    return(
        `<ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>`
    )
}

/***/ }),

/***/ "./src/components/user-status.js":
/*!***************************************!*\
  !*** ./src/components/user-status.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUserStatus": () => /* binding */ createUserStatus
/* harmony export */ });
const createUserStatus = () => {
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    );
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user-status */ "./src/components/user-status.js");
/* harmony import */ var _components_nav_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-menu */ "./src/components/nav-menu.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sort */ "./src/components/sort.js");
/* harmony import */ var _components_films_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/films-block */ "./src/components/films-block.js");
/* harmony import */ var _components_films_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/films-list */ "./src/components/films-list.js");
/* harmony import */ var _components_films_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/films-container */ "./src/components/films-container.js");
/* harmony import */ var _components_films_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/films-card */ "./src/components/films-card.js");
/* harmony import */ var _components_btn_show_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/btn-show-more */ "./src/components/btn-show-more.js");
/* harmony import */ var _components_extra_films__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/extra-films */ "./src/components/extra-films.js");










const SHOW_FILMS_CARD = 5;

const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMainContent = document.querySelector(`.main`);

render(siteHeader, (0,_components_user_status__WEBPACK_IMPORTED_MODULE_0__.createUserStatus)());
render(siteMainContent, (0,_components_nav_menu__WEBPACK_IMPORTED_MODULE_1__.createNavMenu)())
render(siteMainContent, (0,_components_sort__WEBPACK_IMPORTED_MODULE_2__.createSort)())
render(siteMainContent, (0,_components_films_block__WEBPACK_IMPORTED_MODULE_3__.createFilmsBlock)())

const filmsRow = siteMainContent.querySelector(`.films`);

render(filmsRow, (0,_components_films_list__WEBPACK_IMPORTED_MODULE_4__.createFilmsList)());

const filmsList = filmsRow.querySelector(`.films-list`);

render(filmsList, (0,_components_films_container__WEBPACK_IMPORTED_MODULE_5__.createFilmsContainer)());

const filmsContainer = filmsList.querySelector(`.films-list__container`)

for (let i = 0; i < SHOW_FILMS_CARD; i++) {
    render(filmsContainer, (0,_components_films_card__WEBPACK_IMPORTED_MODULE_6__.createFilmCard)());
}

render(filmsList, (0,_components_btn_show_more__WEBPACK_IMPORTED_MODULE_7__.createBtmShowMore)());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map