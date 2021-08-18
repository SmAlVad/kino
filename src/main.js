import { createUserStatus } from "./components/user-status";
import { createNavMenu } from "./components/nav-menu";
import { createSort } from "./components/sort";
import { createFilmsBlock } from "./components/films-block";
import { createFilmsList } from "./components/films-list";
import { createFilmsContainer } from "./components/films-container";
import { createFilmCard } from "./components/films-card";
import { createBtmShowMore } from "./components/btn-show-more";
import { renderExtraFilmsBlock } from "./components/extra-films";
import { createExtraFilms } from "./components/extra-films";


const SHOW_FILMS_CARD = 5;

const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
};


const siteHeader = document.querySelector(`.header`);
const siteMainContent = document.querySelector(`.main`);

render(siteHeader, createUserStatus());
render(siteMainContent, createNavMenu())
render(siteMainContent, createSort())
render(siteMainContent, createFilmsBlock())

const filmsRow = siteMainContent.querySelector(`.films`);

render(filmsRow, createFilmsList());

const filmsList = filmsRow.querySelector(`.films-list`);

render(filmsList, createFilmsContainer());

const filmsContainer = filmsList.querySelector(`.films-list__container`)

for (let i = 0; i < SHOW_FILMS_CARD; i++) {
    render(filmsContainer, createFilmCard());
}

render(filmsList, createBtmShowMore());
debugger
render(filmsRow, renderExtraFilmsBlock());


